import React from 'react';
import type { ChatMessage } from '../ChatBox';

type MessageBubbleProps = {
  message: ChatMessage;
  isMe: boolean;
};

export default function MessageBubble({ message, isMe }: MessageBubbleProps) {
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm text-sm whitespace-pre-line break-words
          ${isMe ? 'bg-blue-600 text-white rounded-br-md' : 'bg-gray-100 text-gray-900 rounded-bl-md'}`}
      >
        <div className="mb-1 flex items-center gap-2">
          <span className="font-medium text-xs">
            {isMe ? 'You' : message.senderUsername}
          </span>
          <span className="text-[10px] text-gray-300">
            {message.createdAt instanceof Date ?
              message.createdAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) :
              ''
            }
          </span>
        </div>
        {message.content.map((content, j) => (
          <div key={j}>
            {content.text}
          </div>
        ))}
      </div>
    </div>
  );
}
