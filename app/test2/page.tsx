"use client"
import React, {useEffect, useReducer, useState} from 'react'
import ChatBox from './ChatBox'
import ChatHistory from '@/components/ChatHistory'
import { useMessage } from '@/lib/MessageContext'

type Props = {}

export default function page({}: Props) {

  const { ChatBoxStore, ChatBoxDispatch } = useMessage()

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
    <>
    <ChatHistory />
    <div className='fixed bottom-0 right-0 flex justify-end gap-x-3 px-3 items-end messagebox-container w-screen pointer-events-none [&>*]:pointer-events-auto' >
      {ChatBoxStore.map((chat) => (
        <ChatBox key={chat.Chat.ChatID} chat={chat.Chat} chatBoxDispatch={ChatBoxDispatch} isOpen={chat.isOpen} />
      ))}
    </div>
      </>
  )
}