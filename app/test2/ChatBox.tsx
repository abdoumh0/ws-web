import { ChatBox as ChatBoxType } from '@/lib/StoreContext'
import { Maximize2, Minimize2, Send, X } from 'lucide-react'
import React from 'react'

type Props = {
    box: ChatBoxType,
    red: React.ActionDispatch<[action: {
    type: "toggle" | "open" | "close";
    chatID: string;
}]>
}

export default function ChatBox({box,red}: Props) {
    const {Chat, isOpen} = box
    const {id, name, members} = Chat
    
    const ChatBoxC = (
        <div className='flex flex-col w-64 border border-indigo-500 rounded-t-xl shadow-lg bg-background'>
            <div className='flex justify-between items-center px-3 py-1 h-fit bg-indigo-600 '>
            <h4 className='text-white font-semibold text-sm'>{name}</h4>
            <div className='flex gap-2 text-white'>
                <button onClick={() => red({type: "toggle", chatID: id})}>{isOpen?<Minimize2 size={14}/>:<Maximize2 size={14}/>}</button>
                <button onClick={() => red({type: "close", chatID: id})}><X size={16}/></button>
            </div>
            </div>
        { isOpen && <>
            <div className='flex justify-between bg-background h-64' >
            history goes here
            </div>
        <div className='flex justify-between border-border border-t-2 py-1 px-2 gap-x-4'>
            <textarea rows={1}  name="" id="" className='outline-none resize-none border border-border rounded-2xl bg-indigo-50 p-2 text-sm'/>
            <button className='text-center rounded-full bg-indigo-500 flex justify-center items-center text-white w-[40px] h-[40px] hover:brightness-105 active:brightness-95'><Send size={20}/></button>
        </div>
        </>
        }
        </div>
    )
  return (
    ChatBoxC
  )
}