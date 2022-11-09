/*
  Warnings:

  - You are about to alter the column `price` on the `productModel` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_productModel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "inventory" REAL NOT NULL,
    "price" INTEGER NOT NULL
);
INSERT INTO "new_productModel" ("description", "id", "inventory", "name", "price", "slug") SELECT "description", "id", "inventory", "name", "price", "slug" FROM "productModel";
DROP TABLE "productModel";
ALTER TABLE "new_productModel" RENAME TO "productModel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
