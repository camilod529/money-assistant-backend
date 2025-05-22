/*
  Warnings:

  - A unique constraint covering the columns `[bookId,userId]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "userId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Member_bookId_userId_key" ON "Member"("bookId", "userId");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
