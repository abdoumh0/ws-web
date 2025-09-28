import React from 'react';
import type { ChatMessage } from '../ChatBox';
import MessageBubble from './MessageBubble';
import LoadMoreButton from './LoadMoreButton';

type MessagesContainerProps = {
  messages: ChatMessage[];
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  currentUsername: string | null;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
};

export default function MessagesContainer({
  messages,
  isLoading,
  hasMore,
  onLoadMore,
  currentUsername,
  messagesEndRef,
}: MessagesContainerProps) {
  if (isLoading && messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="text-center text-gray-400">Loading messages...</div>
      </div>
    );
  }
  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="text-center text-gray-400">No messages yet</div>
      </div>
    );
  }
  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gradient-to-b from-blue-50/50 to-white">
      <LoadMoreButton onLoadMore={onLoadMore} isLoading={isLoading} hasMore={hasMore && messages.length > 0} />
      {messages.map((message) => {
        const isMe = currentUsername &&
          String(currentUsername).trim().toLowerCase() ===
          String(message.senderUsername).trim().toLowerCase();
        return (
          <MessageBubble key={message.messageId} message={message} isMe={!!isMe} />
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
