/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToDrink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToDrink" DROP CONSTRAINT "_CategoryToDrink_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToDrink" DROP CONSTRAINT "_CategoryToDrink_B_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "_CategoryToDrink";
