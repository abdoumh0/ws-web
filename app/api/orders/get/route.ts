import { getOrders, getSession } from "@/lib/actions";
import { NextRequest, NextResponse } from "next/server";
import { corsHeaders } from "../../app/auth/register/route";

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { orders: [] },
        { status: 401, headers: corsHeaders }
      );
    }

    const { searchParams } = request.nextUrl;
    const take = parseInt(searchParams.get("take") || "20");
    const skip = parseInt(searchParams.get("skip") || "0");

    const orders = await getOrders(take, skip);

    return NextResponse.json({ orders }, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { orders: [] },
      { status: 500, headers: corsHeaders }
    );
  }
}
