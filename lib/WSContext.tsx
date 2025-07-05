// context/WebSocketContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { getOrCreateClientId } from './utils';

type WebSocketContextType = {
  socket: WebSocket | null;
  status: "connected" | "disconnected" | "connecting";
};

const WebSocketContext = createContext<WebSocketContextType>({
  socket: null,
  status: "disconnected",
});

export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider = ({
  session,
  children
}: {
  session: string | null;
  children: React.ReactNode;
}) => {
  const socketRef = useRef<WebSocket | null>(null);
  const [status, setStatus] = useState<"connected" | "disconnected" | "connecting">("disconnected");
  
  useEffect(() => {
    console.log( status);
  }, [status]);

  
  useEffect(() => {
    if (!session) {
        socketRef.current?.close();
        console.log("login to connect to websocket");
        return;
    }

    const clientId = getOrCreateClientId();
    setStatus("connecting");
    const ws = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}?token=${session}&client_id=${clientId}`, "ww-msg-protocol");

    ws.onopen = () => {
      console.log('WS connected');
      setStatus("connected");
    };

    ws.onclose = () => {
      console.log('WS disconnected');
      setStatus("disconnected");
    };

    ws.onerror = (err) => {
      console.error('WS error:', err);
    };

    //TODO: remove this
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log('Received:', msg);
      // You can handle global messages here
    };

    socketRef.current = ws;

    return () => {
      ws.close();
    };
  }, [session]);

  return (
    <WebSocketContext.Provider
      value={{ socket: socketRef.current, status }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};
