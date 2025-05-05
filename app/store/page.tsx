import AddItem from "@/components/AddItem";
import { getSession } from "@/lib/actions";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  const items = await prisma.account_Items.findMany({
    where: { AccountID: session.user.AccountID },
    include: {
      Items: true,
    },
  });

  return (
    <>
      {items.length == 0 && (
        <>
          <div>No items</div>
          <div>some add item component</div>
          <AddItem />
        </>
      )}
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-full"
          >
            <h1 className="text-2xl font-bold text-center">
              {item.Items.Name}
            </h1>
            <p className="text-center text-gray-500">{item.Items.Code}</p>
            <p className="text-center text-gray-500">{item.Price}</p>
          </div>
        );
      })}
    </>
  );
}
