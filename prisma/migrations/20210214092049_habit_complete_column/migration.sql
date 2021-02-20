/*
  Warnings:

  - Added the required column `complete` to the `habits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "habits" ADD COLUMN     "complete" BOOLEAN NOT NULL;
