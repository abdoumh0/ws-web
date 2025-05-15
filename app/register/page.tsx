"use client";
import { registerUser } from "@/lib/actions";
import React, { startTransition, useState } from "react";
import { useToast } from "@/components/ui/toast";
import { LoaderCircle } from "lucide-react";

export default function RegisterPage() {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      const { ok, message } = await registerUser(formData);
      if (!ok) {
        showToast({
          variant: "error",
          title: "Registration Failed",
          description:
            message || "Could not create your account. Please try again.",
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
    >
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="border border-gray-300 p-2 rounded"
        />
      </div>
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
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
            Creating Account...
          </>
        ) : (
          "Register"
        )}
      </button>
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
