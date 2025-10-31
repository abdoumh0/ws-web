/*
  Warnings:

  - The primary key for the `Account_Items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ItemID` on the `Account_Items` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `Price` on the `Account_Items` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `PurchasePrice` on the `Account_Items` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `Qty` on the `Account_Items` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ItemID` on the `Items` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `Code` on the `Items` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `CategoryID` on the `Items` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `itemId` on the `OrderItem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `quantity` on the `OrderItem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to drop the `OrderHistory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `OrderHistory` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account_Items" DROP CONSTRAINT "account_items_itemid_foreign";

-- DropForeignKey
ALTER TABLE "OrderHistory" DROP CONSTRAINT "OrderHistory_OrderID_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_accountId_itemId_fkey";

-- AlterTable
ALTER TABLE "Account_Items" DROP CONSTRAINT "Account_Items_pkey",
ALTER COLUMN "ItemID" SET DATA TYPE INTEGER,
ALTER COLUMN "Price" SET DATA TYPE INTEGER,
ALTER COLUMN "PurchasePrice" SET DATA TYPE INTEGER,
ALTER COLUMN "Qty" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Account_Items_pkey" PRIMARY KEY ("AccountID", "ItemID");

-- AlterTable
ALTER TABLE "Items" DROP CONSTRAINT "Items_pkey",
-- SERIAL is not a valid data type for SET DATA TYPE; use INTEGER and (optionally) set up a sequence/identity separately
ALTER COLUMN "ItemID" SET DATA TYPE INTEGER USING ("ItemID"::integer),
ALTER COLUMN "Code" SET DATA TYPE INTEGER,
ALTER COLUMN "CategoryID" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Items_pkey" PRIMARY KEY ("ItemID");

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "itemId" SET DATA TYPE INTEGER,
ALTER COLUMN "quantity" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "OrderHistory" JSONB NOT NULL;

-- DropTable
DROP TABLE "OrderHistory";

-- AddForeignKey
ALTER TABLE "Account_Items" ADD CONSTRAINT "account_items_itemid_foreign" FOREIGN KEY ("ItemID") REFERENCES "Items"("ItemID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_accountId_itemId_fkey" FOREIGN KEY ("accountId", "itemId") REFERENCES "Account_Items"("AccountID", "ItemID") ON DELETE RESTRICT ON UPDATE CASCADE;
