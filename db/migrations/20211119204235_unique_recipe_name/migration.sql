/*
  Warnings:

  - A unique constraint covering the columns `[userId,name]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Recipe_userId_name_key` ON `Recipe`(`userId`, `name`);
