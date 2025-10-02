"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "@/lib/SessionContext";
import Controls from "@/components/Controls";
import { useMessage } from "@/lib/MessageContext";
import ChatBox from "./ChatBox";

type Props = {
  children: React.ReactNode
}

export default function Navbar({children}: Props) {
  const { session } = useSession();
  const { ChatStore } = useMessage()

useEffect(() => {

    const chatboxContainer = document.querySelector('.messagebox-container')
    if (!chatboxContainer) return;

    const observer = new MutationObserver((list, observer) => {
      for (const mutation of list) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.', mutation.attributeName);
          mutation.addedNodes.forEach(node => {
            console.log(node)
            if (node instanceof HTMLDivElement) {
             node.querySelector('.message-content-div')?.scrollTo({top: node.querySelector('.message-content-div')?.scrollHeight, behavior: 'instant'})
            }
            const p = node.parentElement
            console.log(p)
            if (p?.classList.contains("message-content-div")) {
              p.scrollTo({top:p.scrollHeight, behavior:"instant"})
            }
          })
        }
      }
    })

    observer.observe(chatboxContainer, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class'],
    })
  
    return () => {
      observer.disconnect();
    }
  }, [])

  return (
    <div className="h-full">
    <nav className="sticky top-0 left-0 bg-white border-b border-gray-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center justify-center h-8 w-8 mr-2">
                  <Image
                    src="/ww-logo.svg"
                    alt="WareWise Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl text-blue-700">
                  WareWise
                </span>
              </Link>
            </div>
            
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            {session && <Controls />}
          </div>
          <div className="flex items-center sm:hidden">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    {children}
    <div className='fixed bottom-0 right-0 flex justify-end gap-x-3 px-3 items-end messagebox-container w-screen pointer-events-none [&>*]:pointer-events-auto' >
      {ChatStore.map((chat) => {
        if (chat.ChatBox != "CLOSED")
        return  <ChatBox key={chat.ChatID} chat={chat} />
})}
    </div>
                  </div>
  );
}
