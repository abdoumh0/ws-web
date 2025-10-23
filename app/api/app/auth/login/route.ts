import { loginUser } from "@/lib/actions";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5123",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const { ok, message, session } = await loginUser(formData, "RETAILER");
    const res = NextResponse.json(
      { success: ok, message },
      { status: ok ? 200 : 400, headers: corsHeaders }
    );
    if (session) {
      res.cookies.set("session", session);
    }

    return res;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 400, headers: corsHeaders }
    );
  }
}
