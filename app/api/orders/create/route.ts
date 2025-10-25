import { NextRequest, NextResponse } from "next/server";
import { corsHeaders } from "../../app/auth/register/route";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/actions";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401, headers: corsHeaders }
    );
  }
  const body = (await req.json()) as {
    owner: string;
    items: { id: string; qty: number }[];
  };
  const owner = await prisma.accounts.findUnique({
    where: { Username: body.owner },
  });
  if (!owner) {
    return NextResponse.json(
      { success: false, message: "Owner not found" },
      { status: 400, headers: corsHeaders }
    );
  }
  const items = (
    await prisma.account_Items.findMany({
      where: { ItemID: { in: body.items.map((i) => BigInt(i.id)) } },
      include: { Items: true },
    })
  ).map((item) => {
    return {
      ...item,
      qty: body.items.find((i) => BigInt(i.id) === item.ItemID)?.qty || 0,
    };
  });

  if (items.length !== body.items.length) {
    return NextResponse.json(
      { success: false, message: "One or more items not found" },
      { status: 400, headers: corsHeaders }
    );
  }

  const order = await prisma.orders.create({
    data: {
      SenderID: session.AccountID,
      ReceiverID: owner.AccountID,
      Items: {
        createMany: {
          data: items.map((item) => ({
            itemId: item.ItemID,
            quantity: BigInt(item.qty),
            accountId: item.AccountID,
          })),
        },
      },
    },
  });

  return NextResponse.json(
    { success: true },
    { status: 200, headers: corsHeaders }
  );
}
