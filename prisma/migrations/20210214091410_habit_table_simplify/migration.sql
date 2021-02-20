/*
  Warnings:

  - You are about to drop the column `january` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `february` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `march` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `april` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `may` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `june` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `july` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `august` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `september` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `october` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `november` on the `habits` table. All the data in the column will be lost.
  - You are about to drop the column `december` on the `habits` table. All the data in the column will be lost.
  - Added the required column `month` to the `habits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `habits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `habits` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Month" AS ENUM ('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');

-- AlterTable
ALTER TABLE "habits" DROP COLUMN "january",
DROP COLUMN "february",
DROP COLUMN "march",
DROP COLUMN "april",
DROP COLUMN "may",
DROP COLUMN "june",
DROP COLUMN "july",
DROP COLUMN "august",
DROP COLUMN "september",
DROP COLUMN "october",
DROP COLUMN "november",
DROP COLUMN "december",
ADD COLUMN     "month" "Month" NOT NULL,
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "note" TEXT NOT NULL;
