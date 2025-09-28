"use client"
import { ChatsArrayType } from '@/lib/actions'
import { useMessage } from '@/lib/MessageContext'
import React, { useEffect } from 'react'

type Props = {}

export default function Chats({ }: Props) {
    const { ChatStore, ChatStoreDispatch } = useMessage()

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const res = await fetch("/api/chats/get");
                if (res.ok) {
                    const data = (await res.json()) as { ok: boolean, data: ChatsArrayType }
                    ChatStoreDispatch({type:"ADD_CHATS", chat_payload:data.data})
                    console.log("Chats data:", data);
                } else {
                    console.error("Failed to fetch chats:", res.status);
                }
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        };

        fetchChats();

        return () => {};
    }, [])


    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Chats</h2>
            {ChatStore.length === 0 ? (
                <p className="text-gray-500">No chats available</p>
            ) : (
                <div className="space-y-4">
                    {ChatStore.map((chat) => (
                        <div key={chat.ChatID} className="border rounded-lg p-4 bg-white shadow">
                            <h3 className="font-semibold text-lg mb-2">
                                {chat.Name || `Chat ${chat.ChatID}`}
                            </h3>
                            <div className="text-sm flex text-gray-600 mb-2">
                                <p className='font-bold'>
                                    {chat.Messages[0].SenderUsername}: 
                                    </p>
                                     <p className='overflow-ellipsis'>
                                        &nbsp;{chat.Messages[0].MessageContent[0].Text}
                                        </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}