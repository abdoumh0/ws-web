import { registerUser } from "@/lib/actions";
import { NextRequest, NextResponse } from "next/server";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5123",
  "Access-Control-Allow-Methods": "POST, GET",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const { ok, message, session } = await registerUser(formData, "RETAILER");
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
