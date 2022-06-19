/*
  Warnings:

  - Added the required column `imagen` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productos` ADD COLUMN `imagen` VARCHAR(191) NOT NULL;
