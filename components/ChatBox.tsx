import { getChatsType } from '@/lib/actions'
import { useMessage } from '@/lib/MessageContext'
import { useSession } from '@/lib/SessionContext'
import { useWebSocket } from '@/lib/WSContext'
import { Maximize2, Minimize2, Send, X } from 'lucide-react'
import React from 'react'

type Props = {
    chat: getChatsType[number] & {ChatBox: 'OPEN' | 'CLOSED' | 'MINIMIZED'}
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


export default function ChatBox({chat}: Props) {
    const {ChatStoreDispatch} = useMessage()
    const {ChatID, Name} = chat
    const {session} = useSession()
    const {socket} = useWebSocket()


    const handleMessageSend = (chatID: string, text: string) :boolean => {
        if (!session) return false;
        if (!socket) {
            console.error("WebSocket is not connected.");
            return false;
        }
     
          const  msg = {
                chat_id: chatID,
                content: text,
            }
        socket.send(JSON.stringify(msg));
        return true;
    }
    
    if (chat.Members.length === 0) {
        return (
            <div className='flex flex-col w-64 border border-indigo-500 rounded-t-xl shadow-lg bg-background'>
                <div className='flex justify-between items-center px-3 py-1 h-fit bg-indigo-600 '>
                    <div className='h-4 w-32 bg-indigo-400 rounded animate-pulse'></div>
                    <div className='flex gap-2 text-white'>
                        <button onClick={() => 
                            {
                                let newState: 'OPEN' | 'MINIMIZED'
                                if (chat.ChatBox == 'OPEN') {
                                    newState = 'MINIMIZED'
                                } else newState = 'OPEN'
                                console.log("setting chatbox", newState)
                            ChatStoreDispatch({type: "SET_CHATBOX", chat:{...chat, ChatBox: newState}})
                            }
                        }>{chat.ChatBox=='OPEN'?<Minimize2 size={14}/>:<Maximize2 size={14}/>}</button>
                        <button onClick={() => ChatStoreDispatch({type: "SET_CHATBOX", chat:{...chat, ChatBox: 'CLOSED'}})}><X size={16}/></button>
                    </div>
                </div>
                <div className={`${chat.ChatBox == 'OPEN' ? '' : 'hidden'}`}>
                    <div className='bg-background h-64 py-2 px-3 space-y-2'>
                        <div className='w-3/4 h-10 bg-gray-200 rounded-2xl animate-pulse'></div>
                        <div className='w-2/3 h-10 bg-gray-200 rounded-2xl animate-pulse ml-auto'></div>
                        <div className='w-1/2 h-10 bg-gray-200 rounded-2xl animate-pulse'></div>
                        <div className='w-3/5 h-10 bg-gray-200 rounded-2xl animate-pulse ml-auto'></div>
                    </div>
                    <div className='flex justify-between border-border border-t-2 py-1 px-2 gap-x-4'>
                        <div className='flex-1 h-10 bg-gray-200 rounded-2xl animate-pulse'></div>
                        <div className='w-[40px] h-[40px] bg-gray-200 rounded-full animate-pulse'></div>
                    </div>
                </div>
            </div>
        )
    }

  return (
        <div className='flex flex-col w-64 border border-indigo-500 rounded-t-xl shadow-lg bg-background'>
            <div className='flex justify-between items-center px-3 py-1 h-fit bg-indigo-600 '>
            <h4 className='text-white font-semibold text-sm'>{chat.Type == "DM" ? chat.Members.filter(member => member.Username != session?.Username).map(member => member.Username).join(", ") : Name}</h4>
            <div className='flex gap-2 text-white'>
                <button onClick={() => 
                    {
                        
                        let newState: 'OPEN' | 'MINIMIZED'
                        if (chat.ChatBox == 'OPEN') {
                            newState = 'MINIMIZED'
                        } else newState = 'OPEN'
                        console.log("setting chatbox", newState)
                    ChatStoreDispatch({type: "SET_CHATBOX", chat:{...chat, ChatBox: newState}})
                    }
                }>{chat.ChatBox=='OPEN'?<Minimize2 size={14}/>:<Maximize2 size={14}/>}</button>
                <button onClick={() => ChatStoreDispatch({type: "SET_CHATBOX", chat:{...chat, ChatBox: 'CLOSED'}})}><X size={16}/></button>
            </div>
            </div>
         <div className={`${chat.ChatBox == 'OPEN' ? '' : 'hidden'}`}>
            <div className=' justify-between bg-background h-64 overflow-scroll py-2 px-3 message-content-div' >
            {chat.Messages.length > 0 ? chat.Messages.toReversed().map(message => {
                return (
                    <div className={`${message.SenderUsername == session?.Username ? 'text-right  ml-auto bg-indigo-600 text-white' : ' bg-gray-100'} w-fit px-3 py-2.5 rounded-4xl my-1 text-sm max-w-48 break-words`} key={message.MessageID}>{message.MessageContent.at(0)?.Text}</div>
                )
            }) : <div className='w-full h-full text-sm flex items-center justify-center text-gray-600'>No messages.</div>}
            </div>
        <div className='flex justify-between border-border border-t-2 py-1 px-2 gap-x-4'>
            <textarea onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    if (e.currentTarget.value.trim() === "") return;
                    const sent = handleMessageSend(ChatID, e.currentTarget.value)
                    if (sent) e.currentTarget.value = ""
                }
            }} rows={1}  name="" id="" className='outline-none resize-none border border-border rounded-2xl bg-indigo-50 p-2 text-sm'/>
            <button className='text-center rounded-full bg-indigo-500 flex justify-center items-center text-white w-[40px] h-[40px] hover:brightness-105 active:brightness-95'><Send size={20}/></button>
        </div>
        </div>
        </div>

  )
}