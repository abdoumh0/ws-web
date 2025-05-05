import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return <div>page</div>;
}
