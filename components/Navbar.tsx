import { getSession, logoutUser } from "@/lib/actions";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogOut } from "lucide-react";

type Props = {};

export default async function Navbar({}: Props) {
  const session = await getSession();
  return (
    <nav className="sticky top-0 left-0 bg-white border-b border-gray-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center justify-center h-8 w-8 mr-2">
                  <Image
                    src="/ww-logo.svg"
                    alt="WareWise Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl text-blue-700">
                  WareWise
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:items-center sm:space-x-6">
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/store"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  My Store
                </Link>
                <Link
                  href="/profile"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Profile
                </Link>
                <form action={logoutUser}>
                  <button className="flex items-center bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium ml-2">
                    <LogOut className="h-4 w-4 mr-1" /> Logout
                  </button>
                </form>
                <div className="text-sm text-gray-700 ml-2">
                  {session.user.Email?.split("@")[0]}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
