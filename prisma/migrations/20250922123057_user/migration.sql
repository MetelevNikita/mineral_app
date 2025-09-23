/*
  Warnings:

  - You are about to drop the column `status` on the `Status` table. All the data in the column will be lost.
  - Added the required column `title` to the `Status` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Status" DROP COLUMN "status",
ADD COLUMN     "title" TEXT NOT NULL;
