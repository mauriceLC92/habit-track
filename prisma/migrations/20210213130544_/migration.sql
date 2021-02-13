/*
  Warnings:

  - You are about to drop the `initial` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habit" (
    "id" TEXT NOT NULL,
    "habit" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "january" JSONB[],
    "february" JSONB[],
    "march" JSONB[],
    "april" JSONB[],
    "may" JSONB[],
    "june" JSONB[],
    "july" JSONB[],
    "august" JSONB[],
    "september" JSONB[],
    "october" JSONB[],
    "november" JSONB[],
    "december" JSONB[],
    "user_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "initial";

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Habit.habit_unique" ON "Habit"("habit");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_user_id_unique" ON "Profile"("user_id");

-- AddForeignKey
ALTER TABLE "Habit" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
