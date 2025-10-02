"use client"
import { getChatsType } from '@/lib/actions'
import { useMessage } from '@/lib/MessageContext'
import { uniqBy } from 'lodash'
import React, { useEffect, useState } from 'react'

type Props = {}


export default function ChatHistory({}: Props) {
    const {ChatStore, ChatStoreDispatch} = useMessage()

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