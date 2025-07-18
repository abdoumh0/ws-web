"use client"
import { useMessage } from '@/lib/MessageContext'
import { useSession } from '@/lib/SessionContext';
import { useWebSocket } from '@/lib/WSContext'
import React, { useEffect, useState, useRef } from 'react'

/**
 * Represents the content of a message
 * Equivalent to db.MessageContent in Go
 */
export type MessageContent = {
    messageContentId: number;
    messageId: string;
    index: number;
    text?: string;
    filename?: string;
    mimeType?: string;
    data?: Uint8Array; // Equivalent to *[]byte in Go
  };
  
  /**
   * Represents a chat message
   * Equivalent to types.ChatMessage in Go
   */
  export type ChatMessage = {
    messageId: string;
    chatId: string;
    senderUsername: string;
    content: MessageContent[];
    createdAt: Date; // Equivalent to time.Time in Go
  }

type Props = {
    ChatID: string,
    ChatName: string,
    ChatMembers : string[],
    ChatHistory : ChatMessage[]
}

export default function ChatBox({ChatID, ChatName, ChatMembers, ChatHistory: initialChatHistory}: Props) {
    const {session} = useSession()
    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState("")
    const {socket, status} = useWebSocket()
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>(initialChatHistory)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [chatHistory])

    // Listen for incoming messages from the websocket
    useEffect(() => {
        if (!socket) return;
        const handleMessage = (event: MessageEvent) => {
            try {
                const data = JSON.parse(event.data);
                if (
                    data.type === "MESSAGE" &&
                    data.msg_content &&
                    data.msg_content.chat_id === ChatID
                ) {
                    const msg = data.msg_content;
                    const newMsg: ChatMessage = {
                        messageId: msg.message_id,
                        chatId: msg.chat_id,
                        senderUsername: msg.sender_username,
                        content: Array.isArray(msg.content) ? msg.content.map((c: any) => ({
                            messageContentId: c.message_content_id,
                            messageId: c.message_id,
                            index: c.index,
                            text: c.text ?? undefined,
                            filename: c.filename ?? undefined,
                            mimeType: c.mime_type ?? undefined,
                            data: c.data ?? undefined,
                        })) : [],
                        createdAt: msg.created_at ? new Date(msg.created_at) : new Date(),
                    };
                    setChatHistory(prev => [...prev, newMsg]);
                }
            } catch (err) {
                // Ignore invalid messages
            }
        };
        socket.addEventListener("message", handleMessage);
        return () => socket.removeEventListener("message", handleMessage);
    }, [socket, ChatID]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === "") return;
        // Send message through websocket using WSMessage type
        if (socket && status === "connected") {
          const msg = {
            chat_id: ChatID,
            content: input,
            // first_message and members omitted
          };
          socket.send(JSON.stringify(msg));
        }
        setInput("")
    }

    if (!session) {
      return <div className="flex-1 flex items-center justify-center text-gray-400">Loading session...</div>;
    }

    return (
        <div className="flex flex-col h-[420px] w-full max-w-xl border rounded-xl shadow bg-white">
            {/* Header */}
            <div className="flex flex-col gap-1 border-b px-4 py-3 bg-blue-50 rounded-t-xl">
                <div className="font-semibold text-blue-700 text-lg">{ChatName || "Chat"}</div>
                <div className="flex flex-wrap gap-2 text-xs text-blue-700">
                    {ChatMembers.map((m, i) => (
                        <span key={i} className="bg-blue-100 px-2 py-0.5 rounded-full">{m}</span>
                    ))}
                </div>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gradient-to-b from-blue-50/50 to-white">
                {isLoading ? (
                    <div className="text-center text-gray-400">Loading...</div>
                ) : chatHistory.length === 0 ? (
                    <div className="text-center text-gray-400">No messages</div>
                ) : (
                    chatHistory.map((v, i) => {
                        const isMe = session &&
                          String(session.Username).trim().toLowerCase() ===
                          String(v.senderUsername).trim().toLowerCase();
                        return (
                            <div
                                key={v.messageId}
                                className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm text-sm whitespace-pre-line break-words
                                        ${isMe ? 'bg-blue-600 text-white rounded-br-md' : 'bg-gray-100 text-gray-900 rounded-bl-md'}`}
                                >
                                    <div className="mb-1 flex items-center gap-2">
                                        <span className="font-medium text-xs">
                                            {isMe ? 'You' : v.senderUsername}
                                        </span>
                                        <span className="text-[10px] text-gray-300">
                                            {v.createdAt instanceof Date ? v.createdAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ''}
                                        </span>
                                    </div>
                                    {v.content.map((c, j) => (
                                        <div key={j} className="">
                                            {c.text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })
                )}
                <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t flex gap-2 bg-white rounded-b-xl">
                <input
                    className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button
                    className="bg-blue-600 text-white px-5 py-2 rounded font-medium text-sm hover:bg-blue-700 transition"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    )
}