"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import NProgressProvider from "@/components/NProgressProvider";
import { WebSocketProvider } from "@/lib/WSContext";
import { useSession } from "@/lib/SessionContext";
import MessageProvider from "@/lib/MessageContext";
import OrderProvider from "@/lib/OrderStore";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = useSession();

  return (
    <MessageProvider>
      <OrderProvider>
        <WebSocketProvider session={session}>
          <Toaster />
          <NProgressProvider />
          <Navbar>{children}</Navbar>
        </WebSocketProvider>
      </OrderProvider>
    </MessageProvider>
  );
}
