/*
  Warnings:

  - Made the column `recommendation` on table `Series` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Series" ALTER COLUMN "recommendation" SET NOT NULL,
ALTER COLUMN "recommendation" SET DEFAULT true;
