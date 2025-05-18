import ItemForm from "@/components/ItemForm";
import ItemTable from "@/components/ItemTable";
import { getSession } from "@/lib/actions";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

export default async function StorePage() {
  const session = await getSession();
  if (!session) {
    redirect("/auth?tab=login");
  }

  const items = await prisma.account_Items.findMany({
    where: { AccountID: session.user.AccountID },
    include: {
      Items: true,
    },
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto pb-10">
        <div className="px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Your Store
              </h1>
              <p className="text-gray-600">Manage and browse your inventory</p>
            </div>
            <ItemForm variant="button" />
          </div>

          <ItemTable
            total={items.length}
            filteredCount={items.length}
            initialItems={items}
          />
        </div>
      </div>
    </main>
  );
}
