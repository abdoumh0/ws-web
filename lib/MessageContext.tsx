"use client"
import React, {useState, createContext, useContext, useReducer, useEffect} from 'react'
import { getChatsType } from './actions'


export type ChatType = getChatsType[number]

type Props = {
    children: React.ReactNode
}

export type ChatBox = {
    Chat: ChatType
    isOpen: boolean
}

type MessageContextType = {
    ChatStore: ChatType[],
    ChatStoreDispatch: React.Dispatch<{type: 'ADD' | 'REMOVE' | 'UPDATE' | 'ADD_MESSAGE', chat: ChatType, messages?: any[]}>,
    NotificationStore: ChatType[],
    setNotificationStore: React.Dispatch<React.SetStateAction<ChatType[]>>
    ChatBoxStore: ChatBox[];
    ChatBoxDispatch: React.Dispatch<{type: 'TOGGLE' | 'OPEN' | 'CLOSE' | 'UPDATE', chatID?: string, newChat?: ChatType}>
}

const MessageContext = createContext<MessageContextType | undefined>(undefined)

function chatboxReducer(state: ChatBox[], action: {type: 'TOGGLE' | 'OPEN' | 'CLOSE' | 'UPDATE', chatID?: string, newChat?: ChatType}) {
   switch (action.type) {
     case 'TOGGLE':
       return state.map(chat =>
         chat.Chat.ChatID === action.chatID ? { ...chat, isOpen: !chat.isOpen } : chat
       )
     case 'OPEN':
      if (!action.newChat) {
        return state
      }
      const exists = state.find(chat => chat.Chat.ChatID === action.newChat?.ChatID)
      if (exists) {
        return state.map(chat =>
          chat.Chat.ChatID === exists.Chat.ChatID ? { ...chat, isOpen: true } : chat
        )
      } else {
        return [{isOpen: true, Chat:action.newChat}, ...state]
      }
     case 'UPDATE': 
     if (!action.newChat) {
      return state
     }
      const existing = state.find(Box => Box.Chat.ChatID == action.newChat!.ChatID)
      if (existing) {
        return state.map(box => {
          if (box.Chat.ChatID == action.newChat!.ChatID) {
            return {isOpen: true, Chat:{...box.Chat, Messages:[...action.newChat!.Messages, ...box.Chat.Messages]}}
          }else return box
        })
      } else {
        return chatboxReducer(state, {type:"OPEN", newChat:action.newChat})
      }
     case 'CLOSE':
        return state.filter(chat => chat.Chat.ChatID !== action.chatID)
     default:
       return state
   }
 }

 function chatStoreReducer(state: ChatType[], action: {type: 'ADD' | 'REMOVE' | 'UPDATE' | 'ADD_MESSAGE' , chat: ChatType, messages?: any[]}) {
   switch (action.type) {
     case 'ADD':
       return [...state, action.chat]
     case 'REMOVE':
       return state.filter(chat => chat.ChatID !== action.chat.ChatID)
     case 'UPDATE':
       return state.map(chat => chat.ChatID === action.chat.ChatID ? action.chat : chat)
      case 'ADD_MESSAGE':
        console.log("adding message to store")
        const chat = state.find(c => c.ChatID === action.chat.ChatID)
        if (!chat) return chatStoreReducer(state, {type: 'ADD', chat: action.chat})
        else {
            return state.map(c => c.ChatID === chat.ChatID ? {...c, Messages: [...chat.Messages, ...c.Messages]} : c)
        }
        
     default:
       return state
   }
 }

export default function MessageProvider({children}: Props) {
    const [NotificationStore, setNotificationStore] = useState<ChatType[]>([])
    const [ChatBoxStore, ChatBoxDispatch] = React.useReducer(chatboxReducer, [])
    const [ChatStore, ChatStoreDispatch] = useReducer(chatStoreReducer, [])
    

  return (
    <MessageContext.Provider value={{ NotificationStore, setNotificationStore, ChatBoxStore, ChatBoxDispatch, ChatStoreDispatch, ChatStore}}>
    {children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) throw new Error("useMessage must be used within a MessageProvider");
  return context;
}; 