"use client";

import { logoutUser } from "@/lib/actions";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <form action={logoutUser}>
      <button className="flex items-center bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium ml-2">
        <LogOut className="h-4 w-4 mr-1" /> Logout
      </button>
    </form>
  );
}
