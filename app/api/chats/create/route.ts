import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/actions";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }
    const { members, type } = (await req.json()) as {
      members: string[];
      type: "DM" | "GROUP";
    };
    if (!members || !type) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    //TODO: make chat members a column, not a table
    const newChat = await prisma.chat.create({
      data: {
        Type: type,
        Members: {
          createMany: {
            data: members.map((m) => {
              return { Username: m };
            }),
          },
        },
      },
      include: {
        Members: true,
        Messages: {
          include: {
            MessageContent: true,
          },
        },
      },
    });

    return NextResponse.json({ ok: true, newChat }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
