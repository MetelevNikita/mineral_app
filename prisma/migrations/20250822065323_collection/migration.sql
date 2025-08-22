/*
  Warnings:

  - You are about to drop the column `active` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Collection` table. All the data in the column will be lost.
  - Added the required column `image` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Collection" DROP COLUMN "active",
DROP COLUMN "img",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "received" BOOLEAN NOT NULL DEFAULT false;
