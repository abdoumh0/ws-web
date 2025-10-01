import { getChatsType } from '@/lib/actions'
import { useMessage } from '@/lib/MessageContext'
import { ChatBox as ChatBoxType} from '@/lib/MessageContext'
import { useSession } from '@/lib/SessionContext'
import { useWebSocket } from '@/lib/WSContext'
import { Maximize2, Minimize2, Send, X } from 'lucide-react'
import React, { use, useEffect } from 'react'

type Props = {
    chat: getChatsType[number]
    chatBoxDispatch: React.ActionDispatch<[action: {
       type: "TOGGLE" | "OPEN" | "CLOSE";
        chatID?: string;
        newChat?: getChatsType[number];
    }]>
    isOpen: boolean;
}

export type WS_Notification =  {
  type: string;
  receiver_id: string;
  content: string;
  message: {
    message_id: string;
    chat_id: string;
    sender_username: string;
    created_at: string; 
    contents: {
      message_content_id: number;
      message_id: string;
      index: number;
      text?: string;
      filename?: string;
      mime_type?: string;
      data?: Uint8Array;
    }[];
  };
  timestamp: string;
};


export default function ChatBox({chat, chatBoxDispatch, isOpen}: Props) {
    const {ChatStore, ChatStoreDispatch} = useMessage()
    const {ChatID, Name, Members} = chat
    const {session} = useSession()
    const {socket, status} = useWebSocket()

    const handleMessageSend = (chatID: string, text: string) :boolean => { //for now only text messages 
        if (!session) return false;
        if (!socket) {
            console.error("WebSocket is not connected.");
            return false;
        }
        const msg = {
            chat_id: chatID,
            content: text,
        }
        socket.send(JSON.stringify(msg));
        return true;
    }
    
    const ChatBoxC = (
        <div className='flex flex-col w-64 border border-indigo-500 rounded-t-xl shadow-lg bg-background'>
            <div className='flex justify-between items-center px-3 py-1 h-fit bg-indigo-600 '>
            <h4 className='text-white font-semibold text-sm'>{chat.Type == "DM" ? chat.Members.filter(member => member.Username != session?.Username).map(member => member.Username).join(", ") : Name}</h4>
            <div className='flex gap-2 text-white'>
                <button onClick={() => chatBoxDispatch({type: "TOGGLE", chatID: ChatID})}>{isOpen?<Minimize2 size={14}/>:<Maximize2 size={14}/>}</button>
                <button onClick={() => chatBoxDispatch({type: "CLOSE", chatID: ChatID})}><X size={16}/></button>
            </div>
            </div>
         <div className={`${isOpen ? '' : 'hidden'}`}>
            <div onClick={() => {console.log(chat.Messages)}} className=' justify-between bg-background h-64 overflow-scroll py-2 px-3 message-content-div' >
            {chat.Messages.toReversed().map(message => {
                return (
                    //TODO: make proper chat bubbles
                    <div className={`${message.SenderUsername == session?.Username ? 'ml-auto bg-indigo-600 text-white' : ' bg-gray-100'} w-fit px-3 py-2.5 rounded-4xl my-1 text-sm text-center`} key={message.MessageID}>{message.MessageContent.at(0)?.Text}</div>
                )
            })}
            </div>
        <div className='flex justify-between border-border border-t-2 py-1 px-2 gap-x-4'>
            <textarea onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    if (e.currentTarget.value.trim() === "") return;
                    const sent = handleMessageSend(ChatID, e.currentTarget.value)
                    if (sent) e.currentTarget.value = ""
                    //TODO: check message status on the backend 
                    //should recieve an echo
                }
            }} rows={1}  name="" id="" className='outline-none resize-none border border-border rounded-2xl bg-indigo-50 p-2 text-sm'/>
            <button className='text-center rounded-full bg-indigo-500 flex justify-center items-center text-white w-[40px] h-[40px] hover:brightness-105 active:brightness-95'><Send size={20}/></button>
        </div>
        </div>
        </div>
    )
  return (
    ChatBoxC
  )
}