-- CreateTable
CREATE TABLE "Orders" (
    "OrderID" TEXT NOT NULL,
    "SenderID" UUID NOT NULL,
    "ReceiverID" UUID NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("OrderID")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" SERIAL NOT NULL,
    "orderId" TEXT NOT NULL,
    "itemId" BIGINT NOT NULL,
    "quantity" BIGINT NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderHistory" (
    "OrderHistoryID" TEXT NOT NULL,
    "OrderID" TEXT NOT NULL,
    "Record" JSONB NOT NULL,

    CONSTRAINT "OrderHistory_pkey" PRIMARY KEY ("OrderHistoryID")
);

-- CreateIndex
CREATE INDEX "OrderItem_orderId_idx" ON "OrderItem"("orderId");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_SenderID_fkey" FOREIGN KEY ("SenderID") REFERENCES "Accounts"("AccountID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_ReceiverID_fkey" FOREIGN KEY ("ReceiverID") REFERENCES "Accounts"("AccountID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("OrderID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("ItemID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderHistory" ADD CONSTRAINT "OrderHistory_OrderID_fkey" FOREIGN KEY ("OrderID") REFERENCES "Orders"("OrderID") ON DELETE CASCADE ON UPDATE CASCADE;
