-- CreateTable
CREATE TABLE "Account_Items" (
    "AccountID" UUID NOT NULL,
    "ItemID" BIGINT NOT NULL,
    "Price" BIGINT NOT NULL,
    "PurchasePrice" BIGINT NOT NULL,
    "Qty" BIGINT NOT NULL,
    "ImageLink" TEXT NOT NULL,

    CONSTRAINT "Account_Items_pkey" PRIMARY KEY ("AccountID","ItemID")
);

-- CreateTable
CREATE TABLE "Accounts" (
    "AccountID" UUID NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "FirstName" VARCHAR(64) NOT NULL,
    "LastName" VARCHAR(64) NOT NULL,
    "Password" BYTEA NOT NULL,
    "Username" VARCHAR(255),
    "FacebookID" VARCHAR(255),
    "GoogleID" VARCHAR(255),

    CONSTRAINT "Accounts_pkey" PRIMARY KEY ("AccountID")
);

-- CreateTable
CREATE TABLE "Items" (
    "ItemID" BIGINT NOT NULL,
    "Name" VARCHAR(64) NOT NULL,
    "Code" BIGINT NOT NULL,
    "CategoryID" BIGINT NOT NULL,
    "Brand" VARCHAR(64) NOT NULL,
    "Type" VARCHAR(32) NOT NULL,
    "DefaultImageLink" TEXT NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("ItemID")
);

-- CreateIndex
CREATE INDEX "account_items_accountid_itemid_index" ON "Account_Items"("AccountID", "ItemID");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_unique" ON "Accounts"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_username_unique" ON "Accounts"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_facebookid_unique" ON "Accounts"("FacebookID");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_googleid_unique" ON "Accounts"("GoogleID");

-- CreateIndex
CREATE INDEX "items_code_index" ON "Items"("Code");

-- AddForeignKey
ALTER TABLE "Account_Items" ADD CONSTRAINT "account_items_accountid_foreign" FOREIGN KEY ("AccountID") REFERENCES "Accounts"("AccountID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Account_Items" ADD CONSTRAINT "account_items_itemid_foreign" FOREIGN KEY ("ItemID") REFERENCES "Items"("ItemID") ON DELETE NO ACTION ON UPDATE NO ACTION;
