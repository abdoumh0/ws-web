import { getSession, logoutUser } from "@/lib/actions";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const session = (await getSession()) as { user: { Email: string } } | null;
  return (
    <div>
      page
      {session && (
        <>
          <div>
            <h1 className="text-2xl font-bold text-center">
              Welcome {session.user.Email}
            </h1>
            <p className="text-center text-gray-500">
              <a href="/profile" className="text-blue-500 underline">
                Profile
              </a>
            </p>
          </div>
          <form action={logoutUser}>
            <button className="bg-blue-500 text-white p-2 rounded">
              logout
            </button>
          </form>
        </>
      )}
    </div>
  );
}
