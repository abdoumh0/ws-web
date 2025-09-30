/*
  Warnings:

  - Made the column `Name` on table `Chat` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "Type" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "Name" SET NOT NULL,
ALTER COLUMN "Name" SET DEFAULT '';
