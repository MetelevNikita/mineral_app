/*
  Warnings:

  - A unique constraint covering the columns `[userId,id]` on the table `MineralPassed` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."MineralPassed_userId_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "MineralPassed_userId_id_key" ON "public"."MineralPassed"("userId", "id");
