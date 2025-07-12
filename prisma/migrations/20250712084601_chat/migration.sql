-- CreateTable
CREATE TABLE "Chat" (
    "ChatID" TEXT NOT NULL,
    "Name" TEXT,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("ChatID")
);

-- CreateTable
CREATE TABLE "ChatMember" (
    "ChatID" TEXT NOT NULL,
    "Username" TEXT NOT NULL,

    CONSTRAINT "ChatMember_pkey" PRIMARY KEY ("ChatID","Username")
);

-- CreateTable
CREATE TABLE "Message" (
    "MessageID" TEXT NOT NULL,
    "ChatID" TEXT NOT NULL,
    "SenderUsername" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("MessageID")
);

-- CreateTable
CREATE TABLE "MessageContent" (
    "MessageContentID" SERIAL NOT NULL,
    "MessageID" TEXT NOT NULL,
    "Index" INTEGER NOT NULL,
    "Text" TEXT,
    "Filename" TEXT,
    "MimeType" TEXT,
    "Data" BYTEA,

    CONSTRAINT "MessageContent_pkey" PRIMARY KEY ("MessageContentID")
);

-- AddForeignKey
ALTER TABLE "ChatMember" ADD CONSTRAINT "ChatMember_ChatID_fkey" FOREIGN KEY ("ChatID") REFERENCES "Chat"("ChatID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMember" ADD CONSTRAINT "ChatMember_Username_fkey" FOREIGN KEY ("Username") REFERENCES "Accounts"("Username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_ChatID_fkey" FOREIGN KEY ("ChatID") REFERENCES "Chat"("ChatID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_SenderUsername_fkey" FOREIGN KEY ("SenderUsername") REFERENCES "Accounts"("Username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageContent" ADD CONSTRAINT "MessageContent_MessageID_fkey" FOREIGN KEY ("MessageID") REFERENCES "Message"("MessageID") ON DELETE CASCADE ON UPDATE CASCADE;
