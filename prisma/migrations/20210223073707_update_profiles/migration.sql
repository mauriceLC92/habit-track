/*
  Warnings:

  - The migration will change the primary key for the `habits` table. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `habits` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The migration will add a unique constraint covering the columns `[user_id]` on the table `profiles`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "habits" DROP CONSTRAINT "habits_pkey",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "profiles_user_id_unique" ON "profiles"("user_id");
