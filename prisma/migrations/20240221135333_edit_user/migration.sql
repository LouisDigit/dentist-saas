/*
  Warnings:

  - You are about to drop the column `stripeCistomerId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `stripeCistomerId`,
    ADD COLUMN `stripeCustomerId` VARCHAR(191) NULL;
