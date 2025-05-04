"use server";

import { hash, compare } from "bcrypt";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { randomUUID } from "crypto";
import prisma from "./prisma";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

  // Create the session
  const expires = new Date(Date.now() + 60 * 1000 * 60 * 24); // 1 day
  const session = await encrypt({ user: userData, expires });

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
  return await decrypt(session);
}
