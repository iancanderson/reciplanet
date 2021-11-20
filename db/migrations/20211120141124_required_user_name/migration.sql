/*
  Warnings:

  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
UPDATE `User` SET `name` = 'John Doe' WHERE `name` IS NULL;
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NOT NULL;
