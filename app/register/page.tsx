"use client";
import { registerUser } from "@/lib/actions";
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
          const { ok, message } = await registerUser(formData);
          if (!ok) {
            alert(message || "Registration failed");
          }
        });
      }}
    >
      <h1 className="text-2xl font-bold text-center">Register</h1>
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="border border-gray-300 p-2 rounded"
      />
      <button className="bg-blue-500 text-white p-2 rounded">Register</button>
      <p className="text-center text-gray-500">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 underline">
          Login
        </a>
      </p>
      <p className="text-center text-gray-500">
        Forgot your password?{" "}
        <a href="/forgot-password" className="text-blue-500 underline">
          Reset it
        </a>
      </p>
    </form>
  );
}
