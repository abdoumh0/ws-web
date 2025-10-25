/*
  Warnings:

  - Added the required column `accountId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_itemId_fkey";

-- DropIndex
DROP INDEX "OrderItem_orderId_idx";

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "accountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "Status" TEXT NOT NULL DEFAULT 'PENDING';

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_accountId_itemId_fkey" FOREIGN KEY ("accountId", "itemId") REFERENCES "Account_Items"("AccountID", "ItemID") ON DELETE RESTRICT ON UPDATE CASCADE;
