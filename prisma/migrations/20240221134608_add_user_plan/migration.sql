-- AlterTable
ALTER TABLE `User` ADD COLUMN `plan` ENUM('FREE', 'STARTER', 'PREMIUM') NOT NULL DEFAULT 'FREE';