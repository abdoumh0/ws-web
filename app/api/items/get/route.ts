import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/actions";

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: new Error("Not authenticated") },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const skip = url.searchParams.get("skip");

    const items = await prisma.account_Items.findMany({
      where: {
        AccountID: session.AccountID,
      },
      include: {
        Items: true,
      },
      take: 20,
      skip: parseInt(skip ?? "0"),
    });

    console.log("3");

    const serialized = JSON.parse(
      JSON.stringify({ success: true, items }, (k, v) =>
        typeof v === "bigint" ? v.toString() : v
      )
    );

    return NextResponse.json(serialized, { status: 200 });
  } catch (error) {
    console.log("4");
    console.log(error);
    return NextResponse.json(
      { success: false, error: new Error("something went wrong") },
      { status: 500 }
    );
  }
}
