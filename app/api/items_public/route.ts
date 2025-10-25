
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || undefined;
    const sortBy = searchParams.get("sortBy") || "Name";
    const sortOrder = searchParams.get("sortOrder") || "asc";
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    const where: any = {};
    if (search) {
      where.OR = [
        { Items: { Name: { contains: search, mode: "insensitive" } } },
        { Items: { Brand: { contains: search, mode: "insensitive" } } },
        { Accounts: { Username: { contains: search, mode: "insensitive" } } },
      ];
    }
    if (minPrice || maxPrice) {
      where.AND = where.AND || [];
      const priceFilter: any = {};
      if (minPrice) priceFilter.gte = BigInt(minPrice);
      if (maxPrice) priceFilter.lte = BigInt(maxPrice);
      where.AND.push({ Price: priceFilter });
    }

    // Build orderBy clause
    let orderBy: any = {};
    if (["Name", "Brand", "Price", "PurchasePrice", "Qty", "Username"].includes(sortBy)) {
      if (["Name", "Brand"].includes(sortBy)) {
        orderBy = { Items: { [sortBy]: sortOrder } };
      } else if (sortBy === "Username") {
        orderBy = { Accounts: { Username: sortOrder } };
      } else {
        orderBy = { [sortBy]: sortOrder };
      }
    } else {
      orderBy = { Items: { Name: "asc" } };
    }

    const accountItems = await prisma.account_Items.findMany({
      where,
      orderBy,
      include: {
        Items: true,
        Accounts: {
          select: {
            AccountID: true,
            Username: true,
            FirstName: true,
            LastName: true,
          },
        },
      },
    });

    // Convert BigInt fields to string if needed
    const safeItems = accountItems.map((ai: any) => ({
      ItemID: ai.ItemID?.toString?.() ?? ai.ItemID,
      Price: ai.Price?.toString?.() ?? ai.Price,
      PurchasePrice: ai.PurchasePrice?.toString?.() ?? ai.PurchasePrice,
      Qty: ai.Qty?.toString?.() ?? ai.Qty,
      ImageLink: ai.ImageLink,
      Item: {
        ...ai.Items,
        ItemID: ai.Items?.ItemID?.toString?.() ?? ai.Items?.ItemID,
        Code: ai.Items?.Code?.toString?.() ?? ai.Items?.Code,
        CategoryID: ai.Items?.CategoryID?.toString?.() ?? ai.Items?.CategoryID,
      },
      Owner: {
        AccountID: ai.Accounts?.AccountID,
        Username: ai.Accounts?.Username,
        FirstName: ai.Accounts?.FirstName,
        LastName: ai.Accounts?.LastName,
      },
    }));

    return NextResponse.json(safeItems);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch items" }, { status: 500 });
  }
}
