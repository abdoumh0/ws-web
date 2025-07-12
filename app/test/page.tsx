"use client"
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { useWebSocket } from "@/lib/WSContext";
import { Input } from "@/components/ui/input";
import { useSession } from "@/lib/SessionContext";
// import Controls from "@/components/Controls";

export default function Test() {
  const { socket, status } = useWebSocket();
  const uuid = crypto.randomUUID()
  const msgRef = useRef<HTMLInputElement>(null)
  const targetRef = useRef<HTMLInputElement>(null)

  const {session} = useSession()
  
  useEffect(() => {
    if (!socket) return;
  
    const handleMessage = (event: MessageEvent<any>) => {
      const msg = JSON.parse(event.data);
      // Do something with msg
      console.log(`${uuid} received:`, msg);
    };
  
    socket.addEventListener("message", handleMessage);
  
    return () => {
      socket.removeEventListener("message", handleMessage);
    };
  }, [socket]);

  return <div>
    <h1>Test</h1>
    <Input type="text" placeholder="target username" ref={targetRef} />
    <Input type="text" placeholder="message" ref={msgRef} />
    <Button onClick={() => {
      if (msgRef.current) {
        socket?.send(JSON.stringify({
          first_message: false, //change to true if first message in the chat, otherwise set to false and provide a valid chat uuid (will happen automatically in prod)
          members: [targetRef.current?.value, session?.Username],
          chat_id: "ed16fa5f-7859-44b7-b69f-8e03a0d553f0", //hardcoded for dev purposes
          content: msgRef.current.value,
        }))
      }
    }}>send</Button>
    <Button onClick={()=>console.log(session)}>get session</Button>
  </div>
//   <Controls />;
}