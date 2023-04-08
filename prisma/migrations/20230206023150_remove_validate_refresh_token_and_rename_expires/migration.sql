/*
  Warnings:

  - You are about to drop the column `expires` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `validate` on the `RefreshToken` table. All the data in the column will be lost.
  - Added the required column `expiresIn` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "expires",
DROP COLUMN "validate",
ADD COLUMN     "expiresIn" TIMESTAMP(3) NOT NULL;
