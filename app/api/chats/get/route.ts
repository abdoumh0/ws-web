import { NextRequest, NextResponse } from "next/server";
import { getSession, getChats } from "@/lib/actions";

export async function GET(req:NextRequest) {
    try {
        const session = await getSession()
        const url = new URL(req.url);
        const skip = parseInt(url.searchParams.get("skip") ?? "0")
        // await verify(session)
        if (!session || !session.Username) {
            console.log("sess",session)
            return NextResponse.json({ok: false, data: []}, {status:401})
        }
        const data = await getChats(session.Username, skip)
        return NextResponse.json({ok:true, data}, {status:200})
    } catch (err) {
        console.log(err)
        return NextResponse.json({ok:false, data: []}, {status:500})
    }
}