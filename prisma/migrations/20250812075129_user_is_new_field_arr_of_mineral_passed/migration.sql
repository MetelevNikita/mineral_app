-- DropForeignKey
ALTER TABLE "public"."MineralPassed" DROP CONSTRAINT "MineralPassed_userId_fkey";

-- AddForeignKey
ALTER TABLE "public"."MineralPassed" ADD CONSTRAINT "MineralPassed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
