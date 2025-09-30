"use client"
import { ChatBox as ChatBoxType } from '@/lib/StoreContext'
import React, {useReducer, useState} from 'react'
import ChatBox from './ChatBox'
import ChatHistory from '@/components/ChatHistory'

type Props = {}

export default function page({}: Props) {

 function chatboxReducer(state: ChatBoxType[], action: {type: 'toggle' | 'open' | 'close', chatID: string}) {
   switch (action.type) {
     case 'toggle':
       return state.map(chat =>
         chat.Chat.id === action.chatID ? { ...chat, isOpen: !chat.isOpen } : chat
       )
     case 'open':
       return state.map(chat =>
         chat.Chat.id === action.chatID ? { ...chat, isOpen: true } : chat
       )
     case 'close':
       return state.filter(chat => chat.Chat.id !== action.chatID)
     default:
       return state
   }
 }

 const [state, dispatch] = useReducer(chatboxReducer, [
  {Chat: {id: '1', name: 'Chat 1', members: ['user1', 'user2']}, isOpen: true},
  {Chat: {id: '2', name: 'Chat 2', members: ['user3', 'user4']}, isOpen: false},
  {Chat: {id: '3', name: 'Chat 3', members: ['user5', 'user6']}, isOpen: true},
 ])

  return (
    <>
    <ChatHistory />
    <div className='fixed bottom-0 right-0 w-screen bg-red-500 flex justify-end gap-x-3 px-3 items-end'>
      {state.map((chat) => (
        <ChatBox key={chat.Chat.id} box={chat} red={dispatch} />
      ))}
    </div>
      </>
  )
}