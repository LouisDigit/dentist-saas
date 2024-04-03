/*
  Warnings:

  - Made the column `billingId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_billingId_fkey`;

-- AlterTable
ALTER TABLE `User` MODIFY `billingId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_billingId_fkey` FOREIGN KEY (`billingId`) REFERENCES `Billing`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
