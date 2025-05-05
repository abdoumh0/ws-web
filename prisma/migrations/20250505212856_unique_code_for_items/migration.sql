/*
  Warnings:

  - A unique constraint covering the columns `[Code]` on the table `Items` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "items_code_unique" ON "Items"("Code");
