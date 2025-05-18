import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// CORS headers configuration
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const username = searchParams.get("username");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "24");

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
      // Exact username match
      where.Username = username;
    } else {
      // Name search
      if (firstName || lastName) {
        where.AND = [];
        if (firstName) {
          where.AND.push({
            FirstName: { contains: firstName, mode: "insensitive" },
          });
        }
        if (lastName) {
          where.AND.push({
            LastName: { contains: lastName, mode: "insensitive" },
          });
        }
      }
    }

    // Get total count for pagination
    const totalCount = await prisma.accounts.count({ where });

    // Get paginated users
    const users = await prisma.accounts.findMany({
      where,
      skip,
      take: limit,
      select: {
        Username: true,
        FirstName: true,
        LastName: true,
        _count: {
          select: {
            Account_Items: true,
          },
        },
      },
    });

    // Format the response
    const formattedUsers = users.map((user) => ({
      username: user.Username,
      firstName: user.FirstName,
      lastName: user.LastName,
      itemCount: user._count.Account_Items,
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
        users: formattedUsers,
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
