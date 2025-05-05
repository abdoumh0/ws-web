"use server";

import { hash, compare } from "bcrypt";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { randomUUID } from "crypto";
import prisma from "./prisma";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AccountInfo } from "./types";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(formData: FormData) {
  const file = formData.get("image") as File;

  if (!file) throw new Error("No file provided");

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadPromise = () =>
    new Promise<string>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "ws-web" },
        (error, result) => {
          if (error || !result) return reject(error);
          resolve(result.secure_url);
        }
      );
      streamifier.createReadStream(buffer).pipe(stream);
    });

  const url = await uploadPromise();
  return url;
}

export const handleItemSubmit = async (formData: FormData) => {
  const { name, code, price, image } = {
    name: formData.get("name") as string,
    code: formData.get("code") as string,
    price: formData.get("price") as string,
    image: formData.get("image") as File,
  };
  if (!name || !code || !price || !image) {
    return { ok: false, message: "Please fill in all fields" };
  }
  if (isNaN(Number(price))) {
    return { ok: false, message: "Price must be a number" };
  }
  const session = (await cookies()).get("session")?.value;
  if (!session) return { ok: false, message: "Session expired" };
  const userInfo = (await decrypt(session)) as { user: AccountInfo };
  const { user } = userInfo;
  const { AccountID } = user;
  const imageUrl = await uploadToCloudinary(formData);
  const itemData = await prisma.items.upsert({
    where: { Code: Number(code) },
    update: {},
    create: {
      Name: name,
      Code: Number(code),
      DefaultImageLink: imageUrl,
      CategoryID: 1, // Replace with appropriate CategoryID
      Brand: "DefaultBrand", // Replace with actual brand
      Type: "DefaultType", // Replace with actual type
    },
  });
  if (!itemData) return { ok: false, message: "Failed to find or create item" };
  const accountItemData = await prisma.account_Items.create({
    data: {
      AccountID,
      ItemID: itemData.ItemID,
      Price: Number(price),
      PurchasePrice: Number(price), // Replace with actual purchase price if different
      Qty: 1, // Replace with the actual quantity
      ImageLink: imageUrl, // Replace with the actual image link if different
    },
  });
  if (!accountItemData) return { ok: false, message: "Failed to add item" };
  return { ok: true, message: `Item added successfully: img url ${imageUrl}` };
};

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 day")
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function registerUser(
  formData: FormData
): Promise<{ ok: boolean; message?: string }> {
  const { email, password, confirmPassword } = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };
  if (!email || !password || !confirmPassword)
    return { ok: false, message: "Please fill in the required fields" };

  if (password !== confirmPassword) {
    return { ok: false, message: "Passwords do not match" };
  }

  const user = await prisma.accounts.findFirst({
    where: { Email: email },
  });

  if (user) return { ok: false, message: "Account already exists" };

  const hashedPassword = await hash(password, 10);

  let userData = await prisma.accounts.create({
    data: {
      Email: email,
      Password: Buffer.from(hashedPassword),
      AccountID: randomUUID(),
      FirstName: "DefaultFirstName", // Replace with actual first name
      LastName: "DefaultLastName", // Replace with actual last name
    },
  });

  if (!userData) return { ok: false, message: "Failed to create account" };

  const { Password, FacebookID, GoogleID, ...userWithoutPassword } = userData;

  const session = await encrypt({ user: userWithoutPassword });

  const cookieStore = await cookies();
  const expires = new Date(Date.now() + 60 * 1000 * 60 * 24); // 1 day
  cookieStore.set("session", session, { httpOnly: true, expires });
  redirect("/");
}

export async function loginUser(
  formData: FormData
): Promise<{ ok: boolean; message?: string }> {
  const { email, password } = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  if (!email || !password)
    return { ok: false, message: "Email and password are required" };

  const userData = await prisma.accounts.findFirst({
    where: { Email: email },
  });

  if (!userData) return { ok: false, message: "Account not found" };

  const match = await compare(
    password,
    Buffer.from(userData.Password).toString()
  );
  if (!match) return { ok: false, message: "Invalid credentials" };

  const AccountInfo: AccountInfo = {
    AccountID: userData.AccountID,
    Email: userData.Email,
    FirstName: userData.FirstName,
    LastName: userData.LastName,
    Username: userData.Username,
    FacebookID: userData.FacebookID,
    GoogleID: userData.GoogleID,
  };
  console.log(AccountInfo);

  // Create the session
  const expires = new Date(Date.now() + 60 * 1000 * 60 * 24); // 1 day
  const session = await encrypt({ user: AccountInfo, expires });

  // Save the session in a cookie
  const cookieStore = await cookies();
  cookieStore.set("session", session, { expires, httpOnly: true });

  redirect("/");
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
  redirect("/");
}

export async function getSession() {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;
  const userInfo = (await decrypt(session)) as { user: AccountInfo };
  return userInfo;
}
