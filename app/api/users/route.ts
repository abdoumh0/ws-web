import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { corsHeaders } from "../app/auth/register/route";

export async function GET(req: NextRequest) {
  const area = req.nextUrl.searchParams.getAll("area");
  const username_ = req.nextUrl.searchParams.get("username");
  const name = req.nextUrl.searchParams.get("name");
  const take = parseInt(req.nextUrl.searchParams.get("take") || "10");
  const skip = parseInt(req.nextUrl.searchParams.get("skip") || "0");

  try {
    const workAreas = area
      ?.map((a) => {
        const parsed = parseInt(a);
        return isNaN(parsed) ? -1 : parsed;
      })
      .filter((a) => a !== -1);

    const users = (
      await prisma.accounts.findMany({
        where: {
          Type: "WHOLESALER",
          ...(username_
            ? { Username: { equals: username_, mode: "insensitive" } }
            : {}),
          ...(name
            ? {
                OR: [
                  { FirstName: { contains: name, mode: "insensitive" } },
                  { LastName: { contains: name, mode: "insensitive" } },
                ],
              }
            : {}),
          ...(workAreas?.length ? { WorkAreaIDs: { hasSome: workAreas } } : {}),
        },
        take,
        skip,
      })
    ).map(({ Password, ...rest }) => rest);

    return NextResponse.json({ users }, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json(
      { users: [] },
      { status: 500, headers: corsHeaders }
    );
  }
}
