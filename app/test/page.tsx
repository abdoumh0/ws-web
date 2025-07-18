import { getChats, getSession } from "@/lib/actions";
import ChatBox from "./ChatBox";
import { redirect } from "next/navigation";

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

export default async function Test() {
  const session = await getSession()
  if (!session?.Username) {
    redirect("/auth")
  }
  const chats = await getChats(session.Username, 0)
  const chat = chats.at(0)
  if (!chat) {
    return <div className="flex items-center justify-center h-screen text-gray-500 text-lg">No chats found.</div>
  }
  type PrismaChat = typeof chat.Messages
  function mapMessages(prismaMessages: PrismaChat ): ChatMessage[] {
    return prismaMessages.map((m) => ({
      messageId: m.MessageID,
      chatId: m.ChatID,
      senderUsername: m.SenderUsername,
      content: (m.MessageContent || []).map((c: any): MessageContent => ({
        messageContentId: c.MessageContentID,
        messageId: c.MessageID,
        index: c.Index,
        text: c.Text ?? undefined,
        filename: c.Filename ?? undefined,
        mimeType: c.MimeType ?? undefined,
        data: c.Data ?? undefined,
      })),
      createdAt: new Date(m.CreatedAt),
    }));
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl flex flex-col gap-6 border border-blue-100">
        <h1 className="text-2xl font-bold text-blue-700 mb-2">Chat Demo</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
          <span className="font-semibold text-gray-700">Members:</span>
          <div className="flex flex-wrap gap-2">
            {chat.Members.map((v, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                {v.Username}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <span className="block text-sm text-gray-500 mb-1">Chat Name:</span>
          <span className="font-medium text-lg text-gray-800">{chat.Name ?? "Unnamed Chat"}</span>
        </div>
        <ChatBox
          ChatID={chat.ChatID}
          ChatName={chat.Name ?? ""}
          ChatMembers={chat.Members.map(v => v.Username)}
          ChatHistory={mapMessages(chat.Messages)}
        />
      </div>
    </div>
  );
}