-- CreateEnum
CREATE TYPE "Languages" AS ENUM ('EN_US', 'PT_BR');

-- CreateEnum
CREATE TYPE "CharacterTypes" AS ENUM ('MAIN', 'BOMB', 'MAKER', 'NEWCOMER');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "key" UUID NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT,
    "description" TEXT DEFAULT '',
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_login_key" ON "users"("login");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
