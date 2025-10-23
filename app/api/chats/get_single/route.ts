import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/actions";
import { corsHeaders } from "../../app/auth/register/route";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    const url = new URL(req.url);
    const chat_id = url.searchParams.get("chat_id");

    if (!chat_id) {
      return NextResponse.json(
        { ok: false, data: null },
        { status: 400, headers: corsHeaders }
      );
    }

    // await verify(session)
    if (!session || !session.Username) {
      return NextResponse.json(
        { ok: false, data: null },
        { status: 401, headers: corsHeaders }
      );
    }
    const data = await prisma.chat.findUnique({
      where: {
        ChatID: chat_id,
      },
      include: {
        Members: true,
        Messages: {
          take: 20,
          orderBy: {
            CreatedAt: "desc",
          },
          include: {
            MessageContent: {
              orderBy: { Index: "asc" },
            },
          },
        },
      },
    });

    return NextResponse.json(
      { ok: true, data },
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { ok: false, data: null },
      { status: 500, headers: corsHeaders }
    );
  }
}
