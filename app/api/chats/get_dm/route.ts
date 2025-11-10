import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/actions";
import prisma from "@/lib/prisma";
import { corsHeaders } from "../../app/auth/register/route";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { ok: false },
        { status: 401, headers: corsHeaders }
      );
    }
    const url = new URL(req.url);
    const target = url.searchParams.get("target");

    if (!target || target == "") {
      return NextResponse.json(
        { ok: false },
        { status: 400, headers: corsHeaders }
      );
    }
    //TODO: use a better query
    const DMS = await prisma.chat.findMany({
      where: {
        Members: {
          some: {
            Username: session.Username!,
          },
        },
        Type: "DM",
      },
      include: {
        Messages: {
          take: 20,
          orderBy: { CreatedAt: "desc" },
          include: {
            MessageContent: {
              orderBy: { Index: "asc" },
            },
          },
        },
        Members: true,
      },
    });

    const DM = DMS.filter((c) => c.Members.length == 2).find((c) => {
      const usernames = c.Members.map((m) => m.Username);
      return (
        usernames.includes(target) && usernames.includes(session.Username!)
      );
    });

    return NextResponse.json(
      { ok: true, data: DM },
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false },
      { status: 500, headers: corsHeaders }
    );
  }
}
