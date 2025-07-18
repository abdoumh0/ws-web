import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/actions";

export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

    // Get query parameters
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("query") || "";
    const categoryId = url.searchParams.get("category");
    const brandFilter = url.searchParams.get("brand");
    const minPrice = url.searchParams.get("min_price");
    const maxPrice = url.searchParams.get("max_price");
    const sortBy = url.searchParams.get("sort") || "newest";

    // Build price range string from min and max values
    let priceRange: string | null = null;
    if (minPrice || maxPrice) {
      if (minPrice && maxPrice) {
        priceRange = `${minPrice}-${maxPrice}`;
      } else if (minPrice) {
        priceRange = minPrice;
      }
    }

    console.log("[API Search] Query params:", {
      query: searchQuery,
      category: categoryId,
      brand: brandFilter,
      min_price: minPrice,
      max_price: maxPrice,
      price_range: priceRange,
      sort: sortBy,
    });

    // Build the main query using Prisma's query API
    let query: any = {
      where: {
        AccountID: session.AccountID,
      },
      include: {
        Items: true,
      },
    };

    // Add name search - this is the most important part
    const normalizedSearchQuery = searchQuery.trim();
    if (normalizedSearchQuery !== "") {
      console.log(
        "[API Search] Adding name search filter:",
        normalizedSearchQuery
      );
      query.where = {
        AND: [
          { AccountID: session.AccountID },
          {
            Items: {
              Name: {
                contains: normalizedSearchQuery,
                mode: "insensitive", // Case-insensitive search
              },
            },
          },
        ],
      };
    }

    // Add category filter
    if (categoryId && categoryId.trim() !== "") {
      if (query.where.AND) {
        // If we already have AND conditions from the search query
        query.where.AND.push({
          Items: {
            CategoryID: Number(categoryId),
          },
        });
      } else {
        // Otherwise, just add the category filter directly
        query.where.Items = {
          ...(query.where.Items || {}),
          CategoryID: Number(categoryId),
        };
      }
    }

    // Add brand filter
    if (brandFilter && brandFilter.trim() !== "") {
      if (query.where.AND) {
        // If we already have AND conditions
        query.where.AND.push({
          Items: {
            Brand: {
              equals: brandFilter,
              mode: "insensitive",
            },
          },
        });
      } else {
        // Otherwise, just add the brand filter directly
        query.where.Items = {
          ...(query.where.Items || {}),
          Brand: {
            equals: brandFilter,
            mode: "insensitive",
          },
        };
      }
    }

    // Add price range filter
    if (priceRange !== null) {
      // Handle both formats: "min-max" or just "min"
      const [minPriceValue, maxPriceValue] = priceRange.includes("-")
        ? priceRange.split("-").map(Number)
        : [Number(priceRange), null];

      let priceFilter: any = {};

      if (
        !isNaN(minPriceValue) &&
        maxPriceValue !== null &&
        !isNaN(maxPriceValue)
      ) {
        // Both min and max are specified
        priceFilter = {
          Price: {
            gte: minPriceValue * 100, // Convert to cents
            lte: maxPriceValue * 100,
          },
        };
      } else if (!isNaN(minPriceValue)) {
        // Only min price is specified
        priceFilter = {
          Price: {
            gte: minPriceValue * 100,
          },
        };
      }

      if (Object.keys(priceFilter).length > 0) {
        if (query.where.AND) {
          query.where.AND.push(priceFilter);
        } else {
          Object.assign(query.where, priceFilter);
        }
      }
    }

    // Add sorting
    let orderBy: any = {};
    switch (sortBy) {
      case "price-asc":
        orderBy = { Price: "asc" };
        break;
      case "price-desc":
        orderBy = { Price: "desc" };
        break;
      case "name":
        orderBy = { Items: { Name: "asc" } };
        break;
      case "oldest":
        orderBy = { ItemID: "asc" };
        break;
      case "newest":
      default:
        orderBy = { ItemID: "desc" };
        break;
    }

    query.orderBy = orderBy;

    console.log("[API Search] Final query:", JSON.stringify(query, null, 2));

    // Execute the query
    const items = await prisma.account_Items.findMany(query);

    console.log("[API Search] Found", items.length, "items");
    if (items.length > 0) {
      console.log(
        "[API Search] First item name:",
        (items[0] as any).Items?.Name || "unknown"
      );
    }

    return NextResponse.json({
      success: true,
      items,
      count: items.length,
    });
  } catch (error) {
    console.error("Error searching items:", error);
    return NextResponse.json(
      { success: false, message: "Failed to search items" },
      { status: 500 }
    );
  }
}
