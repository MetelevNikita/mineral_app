/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `MineralPassed` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MineralPassed_userId_title_key" ON "public"."MineralPassed"("userId", "title");
