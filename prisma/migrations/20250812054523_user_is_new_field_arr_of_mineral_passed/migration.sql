-- CreateTable
CREATE TABLE "public"."MineralPassed" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isPassed" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAе" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "MineralPassed_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."MineralPassed" ADD CONSTRAINT "MineralPassed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
