"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { InboxIcon, BellIcon, MenuIcon } from "lucide-react";
import { getChatsType, logoutUser } from "@/lib/actions";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSession } from "@/lib/SessionContext";
import { useMessage } from "@/lib/MessageContext";
import { uniqBy } from "lodash";



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
  const modalRef = useRef<HTMLDivElement>(null);
  const { session, refreshSession } = useSession();
  const {ChatStore, ChatStoreDispatch} = useMessage()

    useEffect(() => {
        console.log('fetched data')
        const fetchData = async () => {
            try {
                const res = await fetch('/api/chats/get?skip=0')
                const data = await res.json() as {ok: boolean, data: getChatsType}
                if (data.ok) {
                  uniqBy(data.data, 'ChatID').toReversed().forEach(chat => {
                    ChatStoreDispatch({type:"ADD", chat:{...chat, ChatBox:'CLOSED'} })
                   })
                }
            } catch (error) {
                console.error('Error fetching data:', error);    
            }
        }
        fetchData()

      return () => {
        
      }
    }, [])

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleLogout = async () => {
    await logoutUser();
    await refreshSession();
  };

  let content: React.ReactNode = null;
  if (open === "messages") {
    content = (
      <div className="w-fit h-fit bg-white border border-gray-200 rounded-lg flex flex-col gap-2 [&>*]:odd:bg-gray-100 [&>*]:even:bg-white p-1 min-w-[220px]">
      {ChatStore.map((chat, i) => {
        const name = `@${chat.Members.find(c => c.Username != session?.Username)?.Username}`
        const lastMessage = chat.Messages.at(0)
        return (
          <div key={chat.ChatID} className="cursor-pointer hover:brightness-105 p-2 active:brightness-95"
          onClick={() => ChatStoreDispatch({type: "SET_CHATBOX", chat, ChatBox:'OPEN'})}
          >
            <h2 className="font-bold mb-1">{chat.Type == "DM" ? name ?? chat.Name : chat.Name }</h2>
            <span className="flex">
            <p className="font-semibold italic">{lastMessage?.SenderUsername == session?.Username ? `You:`: `${lastMessage?.SenderUsername}:`}</p>
            &nbsp;&nbsp;
            <p className="text-ellipsis">{lastMessage?.MessageContent.at(0)?.Text}</p>
            </span>
          </div>
        )
      })}
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
        <div className="absolute right-0 top-full mt-2 z-10" ref={modalRef}>
          {content}
        </div>
      )}
    </div>
  );
}