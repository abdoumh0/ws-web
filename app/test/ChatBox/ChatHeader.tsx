import React from 'react';

type ChatHeaderProps = {
  chatName?: string;
  chatMembers?: string[];
  chatID: string;
};

export default function ChatHeader({ chatName, chatMembers, chatID }: ChatHeaderProps) {
  return (
    <div className="flex flex-col gap-1 border-b px-4 py-3 bg-blue-50 rounded-t-xl">
      <div className="font-semibold text-blue-700 text-lg">
        {chatName || `Chat ${chatID}`}
      </div>
      {chatMembers && chatMembers.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs text-blue-700">
          {chatMembers.map((member, i) => (
            <span key={i} className="bg-blue-100 px-2 py-0.5 rounded-full">
              {member}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
