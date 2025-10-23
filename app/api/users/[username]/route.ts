import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { corsHeaders } from "../../app/auth/register/route";

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const { username } = await params;
  try {
    const user = await prisma.accounts.findUnique({
      where: {
        Username: username,
        Type: "WHOLESALER",
      },
    });
    if (!user) {
      return NextResponse.json(
        { user: null },
        { status: 404, headers: corsHeaders }
      );
    }
    return NextResponse.json({ user }, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { user: null },
      { status: 500, headers: corsHeaders }
    );
  }
}
