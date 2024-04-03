/*
  Warnings:

  - The values [STARTER,PREMIUM] on the enum `User_plan` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `plan` ENUM('FREE', 'MASTER') NOT NULL DEFAULT 'FREE';
