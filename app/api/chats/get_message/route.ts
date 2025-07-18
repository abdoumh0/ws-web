import { NextRequest, NextResponse } from "next/server";
import { getMessages, getSession } from "@/lib/actions";

export async function GET(req:NextRequest) {
    try {
        const session = await getSession()
        const url = new URL(req.url);
        const chatID = url.searchParams.get("chatID")
        
        if (!chatID || chatID == "") {
            return NextResponse.json({ok: false, data: []}, {status:401})
        }

        const skip = parseInt(url.searchParams.get("skip") ?? "0", 10)
        // await verify(session)
        if (!session || !session.AccountID) {
            return NextResponse.json({ok: false, data: []}, {status:401})
        }
        const data = await getMessages(chatID, skip)
        return NextResponse.json({ok:true, data}, {status:200})
    } catch (err) {
        console.log(err)
        return NextResponse.json({ok:false, data: []}, {status:500})
    }
}