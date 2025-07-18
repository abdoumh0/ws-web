import { getSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function Settings() {
 const session = await getSession();
  if (!session) {
    redirect("/auth");
  }
  
  return <div>Settings</div>;
}