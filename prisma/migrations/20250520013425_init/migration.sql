-- CreateTable
CREATE TABLE
    "User" (
        "id" UUID NOT NULL,
        "username" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "password" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "User_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Book" (
        "id" UUID NOT NULL,
        "userId" UUID NOT NULL,
        "name" TEXT NOT NULL,
        "description" TEXT,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Currency" (
        "code" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "symbol" TEXT NOT NULL,
        "exchangeRate" DECIMAL(65, 30) NOT NULL,
        CONSTRAINT "Currency_pkey" PRIMARY KEY ("code")
    );

-- CreateTable
CREATE TABLE
    "Account" (
        "id" UUID NOT NULL,
        "bookId" UUID NOT NULL,
        "name" TEXT NOT NULL,
        "type" TEXT NOT NULL,
        "currencyCode" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Category" (
        "id" UUID NOT NULL,
        "bookId" UUID NOT NULL,
        "name" TEXT NOT NULL,
        "type" TEXT NOT NULL,
        CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Transaction" (
        "id" UUID NOT NULL,
        "accountId" UUID NOT NULL,
        "categoryId" UUID NOT NULL,
        "amount" DECIMAL(65, 30) NOT NULL,
        "transactionAt" TIMESTAMP(3) NOT NULL,
        "description" TEXT,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Member" (
        "id" UUID NOT NULL,
        "bookId" UUID NOT NULL,
        "name" TEXT NOT NULL,
        "role" TEXT NOT NULL,
        CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Budget" (
        "id" UUID NOT NULL,
        "bookId" UUID NOT NULL,
        "categoryId" UUID NOT NULL,
        "amount" DECIMAL(65, 30) NOT NULL,
        "period" TEXT NOT NULL,
        "startDate" TIMESTAMP(3) NOT NULL,
        "endDate" TIMESTAMP(3),
        CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Setting" (
        "id" UUID NOT NULL,
        "userId" UUID NOT NULL,
        "theme" TEXT NOT NULL DEFAULT 'light',
        "currencyCode" TEXT,
        "locale" TEXT,
        "notificationEnabled" BOOLEAN NOT NULL DEFAULT true,
        CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Attachment" (
        "id" UUID NOT NULL,
        "transactionId" UUID NOT NULL,
        "filePath" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "ExchangeRate" (
        "id" UUID NOT NULL,
        "currencyCode" TEXT NOT NULL,
        "rateToBase" DECIMAL(18, 8) NOT NULL,
        "validFrom" TIMESTAMP(3) NOT NULL,
        "validTo" TIMESTAMP(3),
        "source" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "ExchangeRate_pkey" PRIMARY KEY ("id")
    );

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User" ("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User" ("email");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_currencyCode_fkey" FOREIGN KEY ("currencyCode") REFERENCES "Currency" ("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setting" ADD CONSTRAINT "Setting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setting" ADD CONSTRAINT "Setting_currencyCode_fkey" FOREIGN KEY ("currencyCode") REFERENCES "Currency" ("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExchangeRate" ADD CONSTRAINT "ExchangeRate_currencyCode_fkey" FOREIGN KEY ("currencyCode") REFERENCES "Currency" ("code") ON DELETE RESTRICT ON UPDATE CASCADE;