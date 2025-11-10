import { getSession } from "@/lib/actions";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { corsHeaders } from "../../app/auth/register/route";

export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { order: null },
        { status: 401, headers: corsHeaders }
      );
    }
    // status: "PENDING" | "ACCEPTED" | "DELIVERED" | "DECLINED";
    const { orderId, status } = (await request.json()) as {
      orderId: string;
      status: string;
    };

    const order = await prisma.orders.update({
      where: {
        OrderID: orderId,
        OR: [
          { ReceiverID: session.AccountID },
          { SenderID: session.AccountID },
        ],
      },
      data: {
        Status: status,
      },
    });

    return NextResponse.json({ order }, { status: 200, headers: corsHeaders });
  } catch (error) {
    return NextResponse.json(
      { order: null },
      { status: 500, headers: corsHeaders }
    );
  }
}
