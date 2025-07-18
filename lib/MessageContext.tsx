"use client"
import React, {useState, createContext, useContext} from 'react'
import { ChatType } from './actions'

type Props = {
    children: React.ReactNode
}

type ChatBox = {
    chatID: string
    Chat: ChatType
    isOpen: boolean
}

type MessageContextType = {
    ChatStore: ChatType,
    setChatStore: React.Dispatch<React.SetStateAction<ChatType>>,
    NotificationStore: ChatType[],
    setNotificationStore: React.Dispatch<React.SetStateAction<ChatType[]>>
    ChatBoxes: ChatBox[];
    setChatBoxes: React.Dispatch<React.SetStateAction<ChatBox[]>>
}

const MessageContext = createContext<MessageContextType | undefined>(undefined)

export default function MessageProvider({children}: Props) {
    const [ChatStore, setChatStore] = useState<ChatType>([])
    const [NotificationStore, setNotificationStore] = useState<ChatType[]>([])
    const [ChatBoxes, setChatBoxes] = useState<ChatBox[]>([])
  return (
    <MessageContext.Provider value={{ChatStore, setChatStore, NotificationStore, setNotificationStore, ChatBoxes, setChatBoxes}}>
    {children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) throw new Error("useMessage must be used within a MessageProvider");
  return context;
}; 