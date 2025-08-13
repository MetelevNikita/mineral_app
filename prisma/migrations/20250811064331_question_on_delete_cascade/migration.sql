-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_mineralId_fkey";

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_mineralId_fkey" FOREIGN KEY ("mineralId") REFERENCES "Mineral"("id") ON DELETE CASCADE ON UPDATE CASCADE;
