"use client"
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { useWebSocket } from "@/lib/WSContext";
import { getOrCreateClientId } from "@/lib/utils";
import { Input } from "@/components/ui/input";
// import Controls from "@/components/Controls";

export default function Test() {
  const { socket, status } = useWebSocket();
  const inputRef = useRef<HTMLInputElement>(null)
  const uuid = crypto.randomUUID()
  
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
    <Input type="text" ref={inputRef} />
    <Button onClick={() => {
      if (inputRef.current) {
        socket?.send(JSON.stringify({
          chat_id: uuid,
          content: inputRef.current.value,
        }))
      }
    }}>send</Button>
  </div>
//   <Controls />;
}