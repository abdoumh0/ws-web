-- AlterTable
CREATE SEQUENCE items_itemid_seq;
ALTER TABLE "Items" ALTER COLUMN "ItemID" SET DEFAULT nextval('items_itemid_seq');
ALTER SEQUENCE items_itemid_seq OWNED BY "Items"."ItemID";
