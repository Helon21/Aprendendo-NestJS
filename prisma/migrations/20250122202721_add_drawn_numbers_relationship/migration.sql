/*
  Warnings:

  - You are about to drop the column `function` on the `People` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `People` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `People` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `People` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `People` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "People" DROP COLUMN "function",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "DrawnNumbers" (
    "id" TEXT NOT NULL,
    "numbers" INTEGER[],
    "personId" TEXT NOT NULL,

    CONSTRAINT "DrawnNumbers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "People_email_key" ON "People"("email");

-- AddForeignKey
ALTER TABLE "DrawnNumbers" ADD CONSTRAINT "DrawnNumbers_personId_fkey" FOREIGN KEY ("personId") REFERENCES "People"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
