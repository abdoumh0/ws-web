import React, { createContext, useContext, useState } from 'react'

type Props = {
    children?: React.ReactNode
}

type StoreContextType = {
    messageStore: Message[]
    setMessageStore: (messages: Message[]) => void
    notificationStore: Notification[]
    setNotificationStore: (notifications: Notification[]) => void
}

type Chat = {
    id: string
    name?: string
    members: string[]
    read: boolean
}

type MessageContent = {
    text?: string
    file?: File[]
}

type Message = {
    sender: string
    content: MessageContent
    timestamp: Date
    chat: Chat
}

type Notification = {
    id: string
    content: string
    read: boolean
    timestamp: Date
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export default function StoreProvider({children}: Props) {

    const [messageStore, setMessageStore] = useState<Message[]>([])
    const [notificationStore, setNotificationStore] = useState<Notification[]>([])
  return (
    <StoreContext.Provider value={{ messageStore, setMessageStore, notificationStore, setNotificationStore }}>
        {children}
    </StoreContext.Provider>
  )
}
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
}; 