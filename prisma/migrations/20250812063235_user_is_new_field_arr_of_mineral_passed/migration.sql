/*
  Warnings:

  - Changed the type of `isPassed` on the `MineralPassed` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."MineralPassed" DROP COLUMN "isPassed",
ADD COLUMN     "isPassed" BOOLEAN NOT NULL;
