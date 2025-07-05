"use client";
import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { InboxIcon, BellIcon, MenuIcon } from "lucide-react";
import { logoutUser } from "@/lib/actions";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSession } from "@/lib/SessionContext";

const messages = [
  {
    id: 1,
    sender: "user1",
    content: "Hello, how are you?",
    timestamp: "2024-05-06T10:00:00Z",
  },
  {
    id: 2,
    sender: "assistant",
    content: "you need some milk?",
    timestamp: "2024-05-06T10:01:00Z",
  },
  {
    id: 3,
    sender: "user2",
    content: "yes, please",
    timestamp: "2024-05-06T10:02:00Z",
  },
];

const notifications = [
  { id: 1, text: "Order #1234 has shipped.", timestamp: "2024-05-06T09:30:00Z" },
  { id: 2, text: "New user registered.", timestamp: "2024-05-06T09:45:00Z" },
];

const menuItems = [
  { id: 1, label: "Profile", href: "/profile" },
  { id: 2, label: "Settings", href: "/settings" },
  // Logout will be handled separately
];

function getInitials(name: string) {
  return name
    .split(/\s|\d+/)
    .filter(Boolean)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

function formatTimestamp(ts: string) {
  const date = new Date(ts);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function ControlButton({ className,icon, onClick }: React.ComponentProps<"button"> &
    {
    asChild?: boolean
    icon: React.ReactNode, onClick: () => void }) {
  return (
    <div className="relative">
      <Button variant="outline" className={cn("rounded-full w-10 h-10 hover:bg-gray-100 hover:text-indigo-500 cursor-pointer", className)} onClick={onClick}>
        {icon}
      </Button>
    </div>
  );
}

export default function Controls() {
  const [open, setOpen] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { refreshSession } = useSession();

  const handleLogout = async () => {
    await logoutUser(); // Then delete cookie and redirect
    await refreshSession(); // Clear the session context first
  };

  let content: React.ReactNode = null;
  if (open === "messages") {
    content = (
      <div className="w-fit h-fit bg-white border border-gray-200 rounded-lg flex flex-col gap-2 [&>*]:odd:bg-gray-100 [&>*]:even:bg-white p-2 min-w-[220px] px-2">
        {messages.map((message) => (
          <div className="flex items-center gap-3 border-b border-gray-200 pb-2" key={message.id}>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-sm">
              {getInitials(message.sender)}
            </div>
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{message.sender}</p>
                <span className="text-xs text-gray-400">{formatTimestamp(message.timestamp)}</span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (open === "notifications") {
    content = (
      <div className="w-fit h-fit bg-white border border-gray-200 rounded-lg flex flex-col gap-2 p-2 min-w-[220px] px-2">
        {notifications.length === 0 ? (
          <div className="text-sm text-gray-500">No notifications</div>
        ) : (
          notifications.map((n) => (
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2 last:border-b-0 last:pb-0" key={n.id}>
              <span className="text-xs text-gray-400">{formatTimestamp(n.timestamp)}</span>
              <span className="text-sm">{n.text}</span>
            </div>
          ))
        )}
      </div>
    );
  } else if (open === "menu") {
    content = (
      <div className="w-fit h-fit bg-white border border-gray-200 rounded-lg flex flex-col gap-1 p-2 min-w-[140px] px-2">
          <Link href="/profile" className="text-sm px-2 py-1 rounded hover:bg-gray-100 transition-colors">
            Profile
          </Link>
          <Link href="/store" className="text-sm px-2 py-1 rounded hover:bg-gray-100 transition-colors">
            My Store
          </Link>
          <Link href="/settings" className="text-sm px-2 py-1 rounded hover:bg-gray-100 transition-colors">
            Settings
          </Link>
        <button 
          onClick={handleLogout}
          className="text-sm px-2 py-1 rounded hover:bg-gray-100 transition-colors w-full text-left text-red-600 font-medium"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center relative" ref={containerRef}>
      <div className="flex items-center gap-2">
        <ControlButton
          icon={<InboxIcon className="w-4 h-4" />}
          className={open === "messages" ? "bg-blue-100 text-indigo-500" : ""}
          onClick={() => setOpen(open === "messages" ? null : "messages")}
        />
        <ControlButton
          icon={<BellIcon className="w-4 h-4" />}
          className={open === "notifications" ? "bg-blue-100 text-indigo-500" : ""}
          onClick={() => setOpen(open === "notifications" ? null : "notifications")}
        />
        <ControlButton
          icon={<MenuIcon className="w-4 h-4" />}
          className={open === "menu" ? "bg-blue-100 text-indigo-500" : ""}
          onClick={() => setOpen(open === "menu" ? null : "menu")}
        />
      </div>
      {open && content && (
        <div className="absolute right-0 top-full mt-2 z-10">
          {content}
        </div>
      )}
    </div>
  );
}