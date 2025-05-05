import { getSession, logoutUser } from "@/lib/actions";
import React from "react";

type Props = {};

export default async function Navbar({}: Props) {
  const session = await getSession();
  return (
    <div className="sticky top-0 left-0 flex items-center justify-between py-2 px-4 bg-background text-foreground border-b border-border shadow-md z-10">
      <div>Logo</div>
      <menu className="flex items-center space-x-4">
        <li className="list-none hover:text-blue-500 transition-colors duration-200">
          <a href="/">Home</a>
        </li>
        <li className="list-none hover:text-blue-500 transition-colors duration-200">
          <a href="/about">About Us</a>
        </li>
        {session ? (
          <>
            <li className="list-none hover:text-blue-500 transition-colors duration-200">
              <a href="/profile">Profile</a>
            </li>
            <li className="list-none hover:text-blue-500 transition-colors duration-200">
              <a href="/store">My Store</a>
            </li>

            <li className="list-none hover:text-blue-500 transition-colors duration-200">
              <form action={logoutUser}>
                <button className="bg-blue-500 text-white p-2 rounded">
                  Logout
                </button>
              </form>
            </li>
          </>
        ) : (
          <li className="list-none hover:text-blue-500 transition-colors duration-200">
            <a href="/login">Login</a>
          </li>
        )}
      </menu>
    </div>
  );
}
