import { getSession, logoutUser } from "@/lib/actions";
import { AccountInfo } from "@/lib/types";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  const session = await getSession();
  return (
    <div className="h-full">
      page
      {session && (
        <>
          <div>
            <h1 className="text-2xl font-bold text-center">
              Welcome {session.user.Email} {session.user.AccountID}
            </h1>
            <p className="text-center text-gray-500">
              <a href="/profile" className="text-blue-500 underline">
                Profile
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
