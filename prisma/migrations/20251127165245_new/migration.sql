-- CreateTable
CREATE TABLE "public"."Contacts" (
    "id" SERIAL NOT NULL,
    "adress" TEXT NOT NULL,
    "events" TEXT NOT NULL,
    "laboratory" TEXT NOT NULL,
    "news" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "way" TEXT NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);
