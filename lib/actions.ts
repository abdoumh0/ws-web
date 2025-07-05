"use server";

import { hash, compare } from "bcrypt";
import { JWTPayload, SignJWT, jwtVerify, importPKCS8, importSPKI } from "jose";
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

// Debug Cloudinary configuration
console.log("[DEBUG] Cloudinary Environment Variables:", {
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
    ? "Set (length: " + process.env.CLOUDINARY_CLOUD_NAME.length + ")"
    : "Not set",
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY
    ? "Set (length: " + process.env.CLOUDINARY_API_KEY.length + ")"
    : "Not set",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
    ? "Set (length: " + process.env.CLOUDINARY_API_SECRET.length + ")"
    : "Not set",
});

export async function uploadToCloudinary(formData: FormData) {
  try {
    console.log("[Upload Debug] Starting upload to Cloudinary");
    const file = formData.get("image") as File;

    if (!file) {
      console.log("[Upload Debug] No file provided in formData");
      throw new Error("No file provided");
    }

    console.log("[Upload Debug] File object:", {
      name: file.name,
      type: file.type,
      size: file.size,
    });

    // Check if Cloudinary config is valid
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      console.error("[Upload Debug] Missing Cloudinary environment variables");
      throw new Error(
        "Cloudinary configuration is incomplete. Please check your environment variables."
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    console.log("[Upload Debug] Buffer created, size:", buffer.length);

    console.log("[Upload Debug] Cloudinary config:", {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? "Set" : "Not set",
      api_key: process.env.CLOUDINARY_API_KEY ? "Set" : "Not set",
      api_secret: process.env.CLOUDINARY_API_SECRET ? "Set" : "Not set",
    });

    // Set a timeout to detect hanging uploads
    const uploadPromise = () =>
      new Promise<string>((resolve, reject) => {
        console.log("[Upload Debug] Creating upload stream");
        let isResolved = false;

        // Set timeout for upload (30 seconds)
        const timeout = setTimeout(() => {
          if (!isResolved) {
            console.error("[Upload Debug] Upload timed out after 30 seconds");
            reject(
              new Error(
                "Upload timed out. Please try again with a smaller image."
              )
            );
          }
        }, 30000);

        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "ws-web",
            resource_type: "image",
            timeout: 60000, // 60 second timeout on Cloudinary's end
          },
          (error, result) => {
            clearTimeout(timeout);
            isResolved = true;

            if (error || !result) {
              console.log("[Upload Debug] Upload error:", error);
              return reject(error || new Error("Unknown upload error"));
            }
            console.log(
              "[Upload Debug] Upload successful, URL:",
              result.secure_url
            );
            resolve(result.secure_url);
          }
        );

        try {
          streamifier.createReadStream(buffer).pipe(stream);
        } catch (pipeError) {
          clearTimeout(timeout);
          console.error("[Upload Debug] Error in pipe operation:", pipeError);
          reject(pipeError);
        }
      });

    const url = await uploadPromise();
    console.log("[Upload Debug] Final URL returned:", url);
    return url;
  } catch (error) {
    console.error("[Upload Debug] Exception in uploadToCloudinary:", error);
    throw error;
  }
}

export const handleItemSubmit = async (formData: FormData) => {
  console.log("[Item Debug] Starting handleItemSubmit");
  try {
    const {
      name,
      code,
      price,
      purchasePrice,
      qty,
      brand,
      type,
      categoryId,
      image,
    } = {
      name: formData.get("name") as string,
      code: formData.get("code") as string,
      price: formData.get("price") as string,
      purchasePrice: formData.get("purchasePrice") as string,
      qty: formData.get("qty") as string,
      brand: formData.get("brand") as string,
      type: formData.get("type") as string,
      categoryId: formData.get("categoryId") as string,
      image: formData.get("image") as File,
    };

    console.log("[Item Debug] Form data extracted:", {
      name,
      code,
      price,
      hasImage: !!image,
      imageType: image ? image.type : null,
      imageSize: image ? image.size : null,
    });

    // Validate required fields
    if (!name || !code || !price || !image || !categoryId) {
      console.log("[Item Debug] Validation failed - missing required fields:", {
        name: !!name,
        code: !!code,
        price: !!price,
        image: !!image,
        categoryId: !!categoryId,
      });
      return { ok: false, message: "Please fill in all required fields" };
    }

    // Validate numeric fields
    if (
      isNaN(Number(price)) ||
      isNaN(Number(purchasePrice)) ||
      isNaN(Number(code)) ||
      isNaN(Number(categoryId)) ||
      isNaN(Number(qty))
    ) {
      console.log("[Item Debug] Validation failed - invalid numeric fields:", {
        price: isNaN(Number(price)),
        purchasePrice: isNaN(Number(purchasePrice)),
        code: isNaN(Number(code)),
        categoryId: isNaN(Number(categoryId)),
        qty: isNaN(Number(qty)),
      });
      return {
        ok: false,
        message: "Numeric fields must contain valid numbers",
      };
    }

    // Get user session
    console.log("[Item Debug] Getting user session");
    const session = (await cookies()).get("session")?.value;
    if (!session) {
      console.log("[Item Debug] No session found");
      return {
        ok: false,
        message: "Your session has expired. Please log in again.",
      };
    }

    const userInfo = (await verify(session)) as { user: AccountInfo };
    const { user } = userInfo;
    const { AccountID } = user;
    console.log("[Item Debug] User authenticated, AccountID:", AccountID);

    // Upload image to Cloudinary
    console.log("[Item Debug] Starting image upload to Cloudinary");
    try {
      const imageUrl = await uploadToCloudinary(formData);
      console.log("[Item Debug] Image uploaded successfully:", imageUrl);

      // Create or update item in database
      console.log("[Item Debug] Creating/updating item in database");
      const itemData = await prisma.items.upsert({
        where: { Code: Number(code) },
        update: {
          Name: name,
          Brand: brand,
          Type: type,
          CategoryID: Number(categoryId),
          DefaultImageLink: imageUrl,
        },
        create: {
          Name: name,
          Code: Number(code),
          DefaultImageLink: imageUrl,
          CategoryID: Number(categoryId),
          Brand: brand,
          Type: type,
        },
      });

      if (!itemData) {
        console.log("[Item Debug] Failed to create/update item");
        return { ok: false, message: "Failed to create or update item" };
      }
      console.log("[Item Debug] Item created/updated:", itemData.ItemID);

      // Link item to user account
      console.log("[Item Debug] Linking item to user account");
      const accountItemData = await prisma.account_Items.create({
        data: {
          AccountID,
          ItemID: itemData.ItemID,
          Price: Number(price),
          PurchasePrice: Number(purchasePrice || price),
          Qty: Number(qty || 1),
          ImageLink: imageUrl,
        },
      });

      if (!accountItemData) {
        console.log("[Item Debug] Failed to link item to account");
        return { ok: false, message: "Failed to add item to your inventory" };
      }
      console.log("[Item Debug] Item linked to account successfully");

      return { ok: true, message: "Item added successfully" };
    } catch (uploadError) {
      console.error(
        "[Item Debug] Error during upload or database operations:",
        uploadError
      );
      if (uploadError instanceof Error) {
        return { ok: false, message: `Error: ${uploadError.message}` };
      }
      return {
        ok: false,
        message: "An error occurred during file upload or database operation",
      };
    }
  } catch (error) {
    console.error("[Item Debug] Unexpected error in handleItemSubmit:", error);
    if (error instanceof Error) {
      return { ok: false, message: `Error: ${error.message}` };
    }
    return { ok: false, message: "An unexpected error occurred" };
  }
};

// RSA Key setup
const getPrivateKey = async () => {
  const privateKeyPem = process.env.JWT_PRIVATE_KEY;
  if (!privateKeyPem) {
    throw new Error('JWT_PRIVATE_KEY environment variable is not set');
  }
  
  // If the key is base64 encoded, decode it
  const key = privateKeyPem.includes('-----BEGIN') 
    ? privateKeyPem 
    : Buffer.from(privateKeyPem, 'base64').toString();
    
  return await importPKCS8(key, 'RS256');
};

const getPublicKey = async () => {
  const publicKeyPem = process.env.JWT_PUBLIC_KEY;
  if (!publicKeyPem) {
    throw new Error('JWT_PUBLIC_KEY environment variable is not set');
  }
  
  // If the key is base64 encoded, decode it
  const key = publicKeyPem.includes('-----BEGIN') 
    ? publicKeyPem 
    : Buffer.from(publicKeyPem, 'base64').toString();
    
  return await importSPKI(key, 'RS256');
};

export async function sign(payload: any) {
  const privateKey = await getPrivateKey();
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt()
    .setExpirationTime("1 day")
    .sign(privateKey);
}

export async function verify(input: string): Promise<JWTPayload> {
  const publicKey = await getPublicKey();
  const { payload } = await jwtVerify(input, publicKey, {
    algorithms: ["RS256"],
  });
  return payload;
}

// Helper function to extract user data without sensitive fields
function extractUserData(userData: any) {
  const { Password, FacebookID, GoogleID, ...userWithoutPassword } = userData;
  return userWithoutPassword;
}

// Helper function to create session and set cookie
async function createUserSession(userData: any, expires?: Date) {
  const userWithoutPassword = extractUserData(userData);
  const sessionExpires = expires || new Date(Date.now() + 60 * 1000 * 60 * 24); // 1 day default
  
  const session = await sign({ user: userWithoutPassword, expires: sessionExpires });
  
  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    expires: sessionExpires,
    domain: "localhost" //TODO: change to env var
  });
  
  return session;
}

export async function registerUser(
  formData: FormData
): Promise<{ ok: boolean; message?: string; redirect?: string }> {
  const { email, password, confirmPassword, firstName, lastName, username } = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    username: formData.get("username") as string,
  };

  if (!email || !password || !confirmPassword || !username) {
    return { ok: false, message: "Please fill in the required fields" };
  }

  if (password !== confirmPassword) {
    return { ok: false, message: "Passwords do not match" };
  }

  try {
    const user = await prisma.accounts.findFirst({
      where: { Email: email },
    });

    if (user)
      return {
        ok: false,
        message: "An account with this email already exists",
      };

    // Check if username is already taken
    const existingUsername = await prisma.accounts.findFirst({
      where: { Username: username },
    });

    if (existingUsername)
      return {
        ok: false,
        message: "This username is already taken",
      };

    const hashedPassword = await hash(password, 10);

    let userData = await prisma.accounts.create({
      data: {
        Email: email,
        Password: Buffer.from(hashedPassword),
        AccountID: randomUUID(),
        FirstName: firstName || "User",
        LastName: lastName || "",
        Username: username,
      },
    });

    if (!userData) return { ok: false, message: "Failed to create account" };

    await createUserSession(userData);

    return { ok: true, redirect: "/" };
  } catch (error) {
    if (error instanceof Error) {
      return { ok: false, message: `Error: ${error.message}` };
    }
    return { ok: false, message: "An unexpected error occurred" };
  }
}

export async function loginUser(
  formData: FormData
): Promise<{ ok: boolean; message?: string; redirect?: string }> {
  const { email, password } = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!email || !password) {
    return { ok: false, message: "Email and password are required" };
  }

  try {
    const userData = await prisma.accounts.findFirst({
      where: { Email: email },
    });

    if (!userData) return { ok: false, message: "Account not found" };

    const match = await compare(
      password,
      Buffer.from(userData.Password).toString()
    );

    if (!match) return { ok: false, message: "Invalid password" };

    await createUserSession(userData);

    return { ok: true, redirect: "/" };
  } catch (error) {
    if (error instanceof Error) {
      return { ok: false, message: `Error: ${error.message}` };
    }
    return { ok: false, message: "An unexpected error occurred" };
  }
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
  redirect("/");
}

export async function getSession(): Promise<AccountInfo | null> {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;
  const userInfo = (await verify(session)) as { user: AccountInfo };
  return {
    AccountID: userInfo.user.AccountID,
    Email: userInfo.user.Email,
    FirstName: userInfo.user.FirstName,
    LastName: userInfo.user.LastName,
    Username: userInfo.user.Username,
    FacebookID: userInfo.user.FacebookID,
    GoogleID: userInfo.user.GoogleID,
  };
}

export async function deleteItem(itemId: string, accountId: string) {
  try {
    console.log("[Delete Debug] Starting deleteItem action", {
      itemId,
      accountId,
    });

    // Get user session
    const session = await getSession();
    if (!session) {
      console.log("[Delete Debug] No session found");
      return {
        success: false,
        message: "Your session has expired. Please log in again.",
      };
    }

    // Ensure the user owns this item
    if (session.AccountID !== accountId) {
      console.log("[Delete Debug] Unauthorized - AccountID mismatch", {
        sessionAccountId: session.AccountID,
        requestAccountId: accountId,
      });
      return {
        success: false,
        message: "You don't have permission to delete this item",
      };
    }

    // Delete the item from the account_items table
    await prisma.account_Items.delete({
      where: {
        AccountID_ItemID: {
          AccountID: accountId,
          ItemID: BigInt(itemId),
        },
      },
    });

    console.log("[Delete Debug] Item deleted successfully");
    return { success: true, message: "Item deleted successfully" };
  } catch (error) {
    console.error("[Delete Debug] Error deleting item:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to delete item",
    };
  }
}

export async function updateItem(formData: FormData) {
  try {
    console.log("[Update Debug] Starting updateItem action");

    // Get user session
    const session = await getSession();
    if (!session) {
      console.log("[Update Debug] No session found");
      return {
        success: false,
        message: "Your session has expired. Please log in again.",
      };
    }

    // Extract form values
    const itemId = formData.get("itemId") as string;
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const purchasePrice = formData.get("purchasePrice") as string;
    const qty = formData.get("qty") as string;
    const brand = formData.get("brand") as string;
    const type = formData.get("type") as string;
    const categoryId = formData.get("categoryId") as string;
    const imageFile = formData.get("image") as File | null;
    const imageLink = formData.get("imageLink") as string;

    console.log("[Update Debug] Form data extracted", {
      itemId,
      name,
      price,
      qty,
      brand,
      type,
      categoryId,
      hasImageFile: !!imageFile,
      imageLink: imageLink ? "Provided" : "Not provided",
    });

    // Validate required fields
    if (!itemId || !name || !price || !brand || !type || !categoryId || !qty) {
      console.log("[Update Debug] Missing required fields");
      return {
        success: false,
        message: "Please fill in all required fields",
      };
    }

    // Validate numeric fields
    if (
      isNaN(Number(itemId)) ||
      isNaN(Number(price)) ||
      isNaN(Number(purchasePrice)) ||
      isNaN(Number(qty)) ||
      isNaN(Number(categoryId))
    ) {
      console.log("[Update Debug] Invalid numeric values");
      return {
        success: false,
        message: "Invalid numeric values provided",
      };
    }

    // Ensure the user owns this item
    const existingItem = await prisma.account_Items.findUnique({
      where: {
        AccountID_ItemID: {
          AccountID: session.AccountID,
          ItemID: BigInt(itemId),
        },
      },
    });

    if (!existingItem) {
      console.log("[Update Debug] Item not found or permission denied");
      return {
        success: false,
        message: "Item not found or you don't have permission to edit it",
      };
    }

    // Convert price values to cents for storage
    const priceInCents = Math.round(parseFloat(price) * 100);
    const purchasePriceInCents = Math.round(parseFloat(purchasePrice) * 100);

    // Handle image upload if a new image is provided
    let finalImageUrl = imageLink;
    if (imageFile) {
      console.log("[Update Debug] New image provided, uploading to Cloudinary");
      const newFormData = new FormData();
      newFormData.append("image", imageFile);
      finalImageUrl = await uploadToCloudinary(newFormData);
      console.log("[Update Debug] Image uploaded successfully:", finalImageUrl);
    }

    // Update the item in the database
    // First, update the Items table
    await prisma.items.update({
      where: { ItemID: BigInt(itemId) },
      data: {
        Name: name,
        Brand: brand,
        Type: type,
        CategoryID: Number(categoryId),
        DefaultImageLink: finalImageUrl,
      },
    });

    console.log("[Update Debug] Items table updated");

    // Then, update the Account_Items table
    await prisma.account_Items.update({
      where: {
        AccountID_ItemID: {
          AccountID: session.AccountID,
          ItemID: BigInt(itemId),
        },
      },
      data: {
        Price: priceInCents,
        PurchasePrice: purchasePriceInCents,
        Qty: Number(qty),
        ImageLink: finalImageUrl,
      },
    });

    console.log("[Update Debug] Account_Items table updated");
    return { success: true, message: "Item updated successfully" };
  } catch (error) {
    console.error("[Update Debug] Error updating item:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to update item",
    };
  }
}

export async function searchItems(
  searchQuery: string = "",
  categoryId?: string,
  brandFilter?: string,
  priceRange?: string,
  sortBy: string = "newest",
  page: number = 1,
  itemsPerPage: number = 24
) {
  try {
    const session = (await cookies()).get("session")?.value;
    if (!session) {
      return { success: false, message: "Not authenticated" };
    }

    const userInfo = (await verify(session)) as { user: AccountInfo };
    const { user } = userInfo;
    const { AccountID } = user;

    // Calculate skip value for pagination
    const skip = (page - 1) * itemsPerPage;

    // Build the where clause
    const where: any = {
      AccountID,
    };

    if (searchQuery) {
      where.Items = {
        Name: {
          contains: searchQuery,
          mode: "insensitive",
        },
      };
    }

    if (categoryId) {
      where.Items = {
        ...where.Items,
        CategoryID: Number(categoryId),
      };
    }

    if (brandFilter) {
      where.Items = {
        ...where.Items,
        Brand: brandFilter,
      };
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      if (minPrice) {
        where.Price = {
          ...where.Price,
          gte: minPrice * 100, // Convert to cents
        };
      }
      if (maxPrice) {
        where.Price = {
          ...where.Price,
          lte: maxPrice * 100, // Convert to cents
        };
      }
    }

    // Build the orderBy clause
    let orderBy: any = {};
    switch (sortBy) {
      case "oldest":
        orderBy = { CreatedAt: "asc" };
        break;
      case "price-asc":
        orderBy = { Price: "asc" };
        break;
      case "price-desc":
        orderBy = { Price: "desc" };
        break;
      case "name":
        orderBy = { Items: { Name: "asc" } };
        break;
      default: // newest
        orderBy = { CreatedAt: "desc" };
    }

    // Get total count for pagination
    const totalCount = await prisma.account_Items.count({ where });

    // Get paginated items
    const items = await prisma.account_Items.findMany({
      where,
      orderBy,
      skip,
      take: itemsPerPage,
      include: {
        Items: true,
      },
    });

    return {
      success: true,
      items,
      count: totalCount,
    };
  } catch (error) {
    console.error("Search error:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to search items",
    };
  }
}
