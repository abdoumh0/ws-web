"use client";

import { loginUser, registerUser } from "@/lib/actions";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSession } from "@/lib/SessionContext";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab =
    searchParams.get("tab") === "register" ? "register" : "login";

  const [activeTab, setActiveTab] = useState(initialTab);

  const [isLoading, setIsLoading] = useState(false);
  const { refreshSession } = useSession();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      const { ok, message, redirect } = await loginUser(formData);
      if (!ok) {
        toast.error(message || "Invalid credentials. Please try again.", {
          description: "Login Failed",
        });
        setIsLoading(false);
      } else {
        await refreshSession();
        if (redirect) {
          router.push(redirect);
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", {
        description: "Error",
      });
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.", {
        description: "Password Mismatch",
      });
      setIsLoading(false);
      return;
    }

    try {
      const { ok, message, redirect } = await registerUser(
        formData,
        "WHOLESALER"
      );
      if (ok) {
        await refreshSession();
        toast.success("Your account has been created!", {
          description: "Registration Successful",
        });
        router.push(redirect ?? "/");
        setIsLoading(false);
      } else {
        toast.error(
          message || "Could not create your account. Please try again.",
          {
            description: "Registration Failed",
          }
        );
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.", {
        description: "Error",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full">
      <Tabs
        defaultValue={initialTab}
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {activeTab === "login" ? "Login" : "Register"}
          </h2>
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="login" className="space-y-4">
          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleLoginSubmit}
            method="POST"
          >
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md font-medium transition-colors mt-2 flex items-center justify-center"
              disabled={isLoading}
              type="submit"
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
            <div className="mt-4 text-center">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Forgot your password?
              </Link>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="register" className="space-y-4">
          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleRegisterSubmit}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="John"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="johndoe"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="register-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="register-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="register-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="register-password"
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md font-medium transition-colors mt-2 flex items-center justify-center"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <LoaderCircle className="animate-spin mr-2" size={18} />
                  Creating account...
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
