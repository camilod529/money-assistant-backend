/*
  Warnings:

  - Changed the type of `type` on the `Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE', 'ADJUSTMENT', 'TRANSFER');

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "type",
ADD COLUMN     "type" "TransactionType" NOT NULL;
