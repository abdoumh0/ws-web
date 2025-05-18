import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication - WareWise",
  description: "Login or register for WareWise",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side with branding and background */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-700 flex-col justify-center items-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-white mb-6">
            Streamline Your Wholesale Operations
          </h1>
          <p className="text-xl text-blue-100">
            The complete inventory management system designed specifically for
            wholesalers and distributors.
          </p>
        </div>
      </div>

      {/* Right side with auth form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">{children}</div>
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
