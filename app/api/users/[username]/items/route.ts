import { corsHeaders } from "@/app/api/app/auth/register/route";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

function serializeBigInt(obj: any): any {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "bigint") return obj.toString();
  if (Array.isArray(obj)) return obj.map(serializeBigInt);
  if (typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, serializeBigInt(value)])
    );
  }
  return obj;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const { username } = await params;

  const take = parseInt(req.nextUrl.searchParams.get("take") || "20");
  const skip = parseInt(req.nextUrl.searchParams.get("skip") || "0");
  const category = req.nextUrl.searchParams.get("category");
  const name = req.nextUrl.searchParams.get("name");
  const brand = req.nextUrl.searchParams.get("brand");
  const minPriceParam = req.nextUrl.searchParams.get("min_price");
  const maxPriceParam = req.nextUrl.searchParams.get("max_price");

  const minPrice = minPriceParam ? parseInt(minPriceParam) : undefined;
  const maxPrice = maxPriceParam ? parseInt(maxPriceParam) : undefined;

  try {
    const items = await prisma.account_Items.findMany({
      where: {
        Accounts: {
          Username: username,
        },
        ...(category ? { Items: { CategoryID: parseInt(category) } } : {}),
        ...(name
          ? {
              Items: {
                OR: [
                  { Name: { contains: name, mode: "insensitive" } },
                  { Brand: { contains: name, mode: "insensitive" } },
                ],
              },
            }
          : {}),
        ...(brand
          ? {
              Items: {
                Brand: { contains: brand, mode: "insensitive" },
              },
            }
          : {}),
        ...(minPrice || maxPrice
          ? {
              Price: {
                ...(minPrice ? { gte: minPrice } : {}),
                ...(maxPrice ? { lte: maxPrice } : {}),
              },
            }
          : {}),
      },
      omit: { PurchasePrice: true },
      include: {
        Items: { omit: { Code: true } },
      },
      take,
      skip,
    });

    const serialized = serializeBigInt(items);

    return NextResponse.json(
      { items: serialized },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json(
      { items: [] },
      { status: 500, headers: corsHeaders }
    );
  }
}
