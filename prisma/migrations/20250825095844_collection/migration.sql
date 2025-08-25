/*
  Warnings:

  - You are about to drop the column `get` on the `Statuses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."CollectionMineral" ADD COLUMN     "get" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."Statuses" DROP COLUMN "get";
