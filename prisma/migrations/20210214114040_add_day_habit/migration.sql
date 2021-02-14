/*
  Warnings:

  - Added the required column `day` to the `habits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "habits" ADD COLUMN     "day" INTEGER NOT NULL;
