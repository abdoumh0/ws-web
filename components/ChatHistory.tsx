"use client"
import { getChatsType } from '@/lib/actions'
import { useMessage } from '@/lib/MessageContext'
import React, { useEffect, useState } from 'react'

type Props = {}


export default function ChatHistory({}: Props) {
    const {ChatStore, ChatStoreDispatch} = useMessage()

    useEffect(() => {
        console.log('fetched data')
        const fetchData = async () => {
            try {
                const res = await fetch('/api/chats/get?skip=0')
                const data = await res.json() as {ok: boolean, data: getChatsType}
                if (data.ok) {
                   data.data.toReversed().forEach(chat => {
                    ChatStoreDispatch({type:"ADD", chat:{...chat, ChatBox:'CLOSED'} })
                   })
                }
            } catch (error) {
                console.error('Error fetching data:', error);    
            }
        }
        fetchData()

      return () => {
        
      }
    }, [])


    useEffect(() => {
      console.log('changed')
    
      return () => {
        
      }
    }, [ChatStore])
    
    
  return (
    <div>
      {ChatStore.map(chat => {
          return (
              <div key={chat.ChatID} className='border border-black p-2 m-2 cursor-pointer' onClick={() => ChatStoreDispatch({type: "SET_CHATBOX", chat, ChatBox:'OPEN'})}>
                  <h3 className='font-bold'>{chat.Name}</h3>
                  <p>Members: {chat.Members.map(member => `@${member.Username}`).join(", ")}</p>
                  <div>
                    first: {chat.Messages.at(-1)?.MessageContent.at(0)?.Text} <br />
                    last: {chat.Messages.at(0)?.MessageContent.at(0)?.Text}
                  </div>
                  
            </div>
            )
        })
        }
    </div>
  )
}