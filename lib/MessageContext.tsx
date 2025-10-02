"use client"
import React, {useState, createContext, useContext, useReducer, useEffect} from 'react'
import { getChatsType } from './actions'
import {uniqBy} from 'lodash'


export type ChatType = getChatsType[number] & {ChatBox: 'OPEN' | 'MINIMIZED' | 'CLOSED'}

type Props = {
    children: React.ReactNode
}


type MessageContextType = {
    ChatStore: ChatType[],
    ChatStoreDispatch: React.Dispatch<{type: 'ADD' | 'REMOVE' | 'UPDATE' | 'ADD_MESSAGES' | 'SET_CHATBOX', chat: ChatType, ChatBox?: 'OPEN' | 'CLOSED' | 'MINIMIZED'}>,
    NotificationStore: ChatType[],
    setNotificationStore: React.Dispatch<React.SetStateAction<ChatType[]>>
}

const MessageContext = createContext<MessageContextType | undefined>(undefined)

 function chatStoreReducer(state: ChatType[], action: {type: 'ADD' | 'REMOVE' | 'UPDATE' | 'ADD_MESSAGES' | 'SET_CHATBOX' , chat: ChatType, ChatBox?: 'OPEN' | 'MINIMIZED' | 'CLOSED'}) {
   switch (action.type) {

     case 'ADD':
       return uniqBy([...state, {...action.chat, ChatBox: action.ChatBox || 'CLOSED'}], 'ChatID')

     case 'REMOVE':
       return state.filter(chat => chat.ChatID !== action.chat.ChatID)

     case 'UPDATE':
       return state.map(chat => chat.ChatID === action.chat.ChatID ? action.chat : chat)

      case 'ADD_MESSAGES':
        const chat = state.find(c => c.ChatID === action.chat.ChatID)
        if (!chat) return chatStoreReducer(state, {type: 'ADD', chat: action.chat, ChatBox: 'OPEN'})
        else {
          console.log("doing it")
          return state.map(c => c.ChatID === action.chat.ChatID ? {...c, Messages: uniqBy([...action.chat.Messages, ...c.Messages], 'MessageID'), ChatBox: c.ChatBox == 'CLOSED' ? 'OPEN' : c.ChatBox} : c)
        }

        case 'SET_CHATBOX':
          const exi = state.find(c => c.ChatID == action.chat.ChatID)
          if (!exi) {
            console.log("not found")
            return state
          }else return state.map(c => {
            if (c.ChatID == exi.ChatID) {
              return {...c, ChatBox: action.ChatBox || 'CLOSED'}
            } else {
              return c
            }
          })

     default:
       return state
   }
 }

export default function MessageProvider({children}: Props) {
    const [NotificationStore, setNotificationStore] = useState<ChatType[]>([])
    const [ChatStore, ChatStoreDispatch] = useReducer(chatStoreReducer, [])
    

  return (
    <MessageContext.Provider value={{ NotificationStore, setNotificationStore, ChatStoreDispatch, ChatStore}}>
    {children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) throw new Error("useMessage must be used within a MessageProvider");
  return context;
}; 