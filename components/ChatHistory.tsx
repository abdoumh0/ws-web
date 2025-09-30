"use client"
import { getChatsType } from '@/lib/actions'
import React, { useEffect, useState } from 'react'

type Props = {}


export default function ChatHistory({}: Props) {
    const [chats, setChats] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const res = await fetch('/api/chats/get?skip=0')
                const data = await res.json() as {ok: boolean, data: getChatsType}
                if (data.ok) {
                    setChats(data.data)
                    console.log(data.data.at(0)?.Members);
                }
            } catch (error) {
                console.error('Error fetching data:', error);    
            }
        }
        fetchData()

      return () => {
        
      }
    }, [])
    
  return (
    <div>ChatHistory</div>
  )
}