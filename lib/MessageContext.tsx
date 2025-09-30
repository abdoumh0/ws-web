"use client"
import React, {useState, createContext, useContext} from 'react'
import { getChatsType } from './actions'

type ChatType = getChatsType[number]

type Props = {
    children: React.ReactNode
}

type ChatBox = {
    Chat: ChatType
    isOpen: boolean
}

type MessageContextType = {
    ChatStore: ChatType[],
    setChatStore: React.Dispatch<React.SetStateAction<ChatType[]>>,
    NotificationStore: ChatType[],
    setNotificationStore: React.Dispatch<React.SetStateAction<ChatType[]>>
    ChatBoxeStore: ChatBox[];
    ChatBoxDispatch: React.Dispatch<{type: 'toggle' | 'open' | 'close', chatID?: string, newChat?: ChatType}>
}

const MessageContext = createContext<MessageContextType | undefined>(undefined)

function chatboxReducer(state: ChatBox[], action: {type: 'toggle' | 'open' | 'close', chatID?: string, newChat?: ChatType}) {
   switch (action.type) {
     case 'toggle':
       return state.map(chat =>
         chat.Chat.ChatID === action.chatID ? { ...chat, isOpen: !chat.isOpen } : chat
       )
     case 'open':
      if (!action.newChat) {
        return state
      }
       return [...state, {Chat: action.newChat, isOpen: true}]
     case 'close':
        return state.filter(chat => chat.Chat.ChatID !== action.chatID)
     default:
       return state
   }
 }


export default function MessageProvider({children}: Props) {
    const [ChatStore, setChatStore] = useState<ChatType[]>([])
    const [NotificationStore, setNotificationStore] = useState<ChatType[]>([])
    const [ChatBoxeStore, ChatBoxDispatch] = React.useReducer(chatboxReducer, [])


  return (
    <MessageContext.Provider value={{ChatStore, setChatStore, NotificationStore, setNotificationStore, ChatBoxeStore, ChatBoxDispatch}}>
    {children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) throw new Error("useMessage must be used within a MessageProvider");
  return context;
}; 