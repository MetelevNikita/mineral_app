/*
  Warnings:

  - You are about to drop the column `image` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `updateAе` on the `MineralPassed` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Collection" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "public"."MineralPassed" DROP COLUMN "updateAе",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "public"."CollectionMineral" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CollectionMineral_pkey" PRIMARY KEY ("id")
);
