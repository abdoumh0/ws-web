"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import NProgressProvider from "@/components/NProgressProvider";
import { WebSocketProvider } from "@/lib/WSContext";
import { useSession } from "@/lib/SessionContext";
import StoreProvider from "@/lib/StoreContext";
import MessageProvider from "@/lib/MessageContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = useSession(); // Get token from context

  return (
    <MessageProvider>
    <WebSocketProvider session={session}>
    <StoreProvider>
      
      <Navbar />
      <Toaster />
      <NProgressProvider />
      {children}
    </StoreProvider>
    </WebSocketProvider>
    </MessageProvider>
  );
} 