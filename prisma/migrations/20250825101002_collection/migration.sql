/*
  Warnings:

  - You are about to drop the column `get` on the `CollectionMineral` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."CollectionMineral" DROP COLUMN "get",
ADD COLUMN     "received" BOOLEAN NOT NULL DEFAULT false;
