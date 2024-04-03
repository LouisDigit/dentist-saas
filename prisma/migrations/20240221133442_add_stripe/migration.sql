/*
  Warnings:

  - You are about to drop the column `billingId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Billing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_billingId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `billingId`,
    ADD COLUMN `stripeCistomerId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Billing`;
