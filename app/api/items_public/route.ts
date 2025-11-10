import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { corsHeaders } from "../app/auth/register/route";
import { getSession } from "@/lib/actions";

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json(
      { error: "unauthorized" },
      { status: 401, headers: corsHeaders }
    );
  }
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || undefined;
    const sortBy = searchParams.get("sortBy") || "Name";
    const sortOrder = searchParams.get("sortOrder") || "asc";
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    const items = await prisma.account_Items.findMany({
      take: 40,
      skip: 0,
      omit: { PurchasePrice: true },
      include: {
        Items: true,
        Accounts: { omit: { Password: true } },
      },
    });

    return NextResponse.json({ items }, { headers: corsHeaders });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500, headers: corsHeaders }
    );
  }
}
