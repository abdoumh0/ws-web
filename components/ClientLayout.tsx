"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "@/components/ui/toast";
import NProgressProvider from "@/components/NProgressProvider";
import { WebSocketProvider } from "@/lib/WSContext";
import { useSession } from "@/lib/SessionContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = useSession(); // Get token from context

  return (
    <WebSocketProvider session={session}>
      <Navbar />
      <ToastContainer>
        <NProgressProvider />
        {children}
      </ToastContainer>
    </WebSocketProvider>
  );
} 