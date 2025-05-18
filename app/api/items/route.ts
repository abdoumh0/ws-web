import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// CORS headers configuration
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Allow all origins
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400", // 24 hours
};

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category");
    const brand = searchParams.get("brand");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const sortBy = searchParams.get("sortBy") || "newest";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "24");
    const username = searchParams.get("username");

    // Validate pagination parameters
    if (page < 1 || limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: "Invalid pagination parameters" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Build the where clause
    const where: any = {};

    if (username) {
      where.Accounts = {
        Username: username,
      };
    }

    if (search) {
      where.Items = {
        Name: {
          contains: search,
          mode: "insensitive",
        },
      };
    }

    if (category) {
      where.Items = {
        ...where.Items,
        CategoryID: Number(category),
      };
    }

    if (brand) {
      where.Items = {
        ...where.Items,
        Brand: brand,
      };
    }

    if (minPrice || maxPrice) {
      where.Price = {};
      if (minPrice) {
        where.Price.gte = Number(minPrice) * 100; // Convert to cents
      }
      if (maxPrice) {
        where.Price.lte = Number(maxPrice) * 100; // Convert to cents
      }
    }

    // Build the orderBy clause
    let orderBy: any = {};
    switch (sortBy) {
      case "oldest":
        orderBy = { ItemID: "asc" };
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
        orderBy = { ItemID: "desc" };
    }

    // Get total count for pagination
    const totalCount = await prisma.account_Items.count({ where });

    // Get paginated items with user information
    const items = await prisma.account_Items.findMany({
      where,
      orderBy,
      skip,
      take: limit,
      include: {
        Items: true,
        Accounts: {
          select: {
            Username: true,
            FirstName: true,
            LastName: true,
          },
        },
      },
    });

    // Format the response
    const formattedItems = items.map((item) => ({
      id: item.ItemID.toString(),
      name: item.Items.Name,
      price: Number(item.Price) / 100, // Convert from cents
      purchasePrice: Number(item.PurchasePrice) / 100,
      quantity: Number(item.Qty),
      brand: item.Items.Brand || "Unknown",
      category: item.Items.CategoryID.toString(),
      imageUrl: item.ImageLink,
      user: {
        username: item.Accounts.Username,
        firstName: item.Accounts.FirstName,
        lastName: item.Accounts.LastName,
      },
    }));

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / limit);

    // Build pagination URLs
    const baseUrl = request.nextUrl.origin + request.nextUrl.pathname;
    const params = new URLSearchParams(searchParams);

    const prevPage =
      page > 1
        ? `${baseUrl}?${params
            .toString()
            .replace(/page=\d+/, `page=${page - 1}`)}`
        : null;

    const nextPage =
      page < totalPages
        ? `${baseUrl}?${params
            .toString()
            .replace(/page=\d+/, `page=${page + 1}`)}`
        : null;

    return NextResponse.json(
      {
        items: formattedItems,
        pagination: {
          total: totalCount,
          page,
          limit,
          totalPages,
          prevPage,
          nextPage,
        },
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
