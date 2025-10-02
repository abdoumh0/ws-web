"use client"
import React, {useEffect, useReducer, useState} from 'react'
import ChatHistory from '@/components/ChatHistory'
import { useMessage } from '@/lib/MessageContext'

type Props = {}

export default function page({}: Props) {

  const { ChatStore } = useMessage()

  
  return (
    <>
    <ChatHistory />
      </>
  )
}