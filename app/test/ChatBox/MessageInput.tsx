import React from 'react';

type MessageInputProps = {
  input: string;
  setInput: (value: string) => void;
  onSend: (e: React.FormEvent) => void;
  isConnected: boolean;
};

export default function MessageInput({ input, setInput, onSend, isConnected }: MessageInputProps) {
  return (
    <form onSubmit={onSend} className="p-3 border-t flex gap-2 bg-white rounded-b-xl">
      <input
        className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
        disabled={!isConnected}
      />
      <button
        className="bg-blue-600 text-white px-5 py-2 rounded font-medium text-sm hover:bg-blue-700 transition disabled:opacity-50"
        type="submit"
        disabled={!isConnected || input.trim() === ""}
      >
        Send
      </button>
    </form>
  );
}
