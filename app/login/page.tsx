"use client";
import { loginUser } from "@/lib/actions";
import { redirect } from "next/navigation";
import React, { startTransition } from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-10"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        startTransition(async () => {
          const { ok, message } = await loginUser(formData);
          if (!ok) {
            alert(message || "Login failed");
          }
        });
      }}
      method="POST"
    >
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border border-gray-300 p-2 rounded"
      />
      <button className="bg-blue-500 text-white p-2 rounded">Login</button>
      <p className="text-center text-gray-500">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500 underline">
          Register
        </a>
      </p>
    </form>
  );
}
