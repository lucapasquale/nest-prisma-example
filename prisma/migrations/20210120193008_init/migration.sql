-- CreateTable
CREATE TABLE "users" (
"id" SERIAL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "test_field" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- AddForeignKey
ALTER TABLE "posts" ADD FOREIGN KEY("authorId")REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
