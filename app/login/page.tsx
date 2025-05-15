"use client";
import { loginUser } from "@/lib/actions";
import { redirect } from "next/navigation";
import React, { startTransition, useState } from "react";
import { useToast } from "@/components/ui/toast";
import { LoaderCircle } from "lucide-react";

export default function LoginPage() {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      const { ok, message } = await loginUser(formData);
      if (!ok) {
        showToast({
          variant: "error",
          title: "Login Failed",
          description: message || "Invalid credentials. Please try again.",
        });
        setIsLoading(false);
      }
    } catch (error) {
      showToast({
        variant: "error",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-10"
      onSubmit={handleSubmit}
      method="POST"
    >
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-gray-300 p-2 rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border border-gray-300 p-2 rounded"
        required
      />
      <button
        className="bg-blue-500 text-white p-2 rounded flex items-center justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <LoaderCircle className="animate-spin mr-2" size={18} />
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </button>
      <p className="text-center text-gray-500">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-500 underline">
          Register
        </a>
      </p>
    </form>
  );
}
