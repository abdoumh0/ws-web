import { getSession } from "@/lib/actions";
import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BoxIcon,
  LayersIcon,
  Search,
  ShieldCheck,
  TruckIcon,
} from "lucide-react";
import LandingFooter from "@/components/LandingFooter";

export default async function LandingPage() {
  const session = await getSession();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Streamline Your Wholesale Operations
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                The complete inventory management system designed specifically
                for wholesalers and distributors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {session ? (
                  <Link
                    href="/store"
                    className="inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition"
                  >
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/auth"
                      className="inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition"
                    >
                      Log In
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                      href="/auth?tab=register"
                      className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition"
                    >
                      Register Now
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-20 transform rotate-3"></div>
                <div className="relative bg-blue-800 p-8 rounded-lg shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-blue-200 border-b border-blue-700 pb-4">
                      <BoxIcon className="h-8 w-8" />
                      <div>
                        <div className="text-lg font-medium text-white">
                          Stock Management
                        </div>
                        <div>Track inventory levels in real-time</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-blue-200 border-b border-blue-700 pb-4">
                      <TruckIcon className="h-8 w-8" />
                      <div>
                        <div className="text-lg font-medium text-white">
                          Order Processing
                        </div>
                        <div>Streamline order fulfillment</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-blue-200">
                      <BarChart3 className="h-8 w-8" />
                      <div>
                        <div className="text-lg font-medium text-white">
                          Analytics & Reporting
                        </div>
                        <div>Data-driven business decisions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Designed for Wholesale Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform offers everything wholesalers need to manage inventory
            efficiently and grow their business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <LayersIcon className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Inventory Management
            </h3>
            <p className="text-gray-600">
              Monitor stock levels, track product movement, and receive alerts
              for low inventory to avoid stockouts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <Search className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Advanced Search & Filtering
            </h3>
            <p className="text-gray-600">
              Quickly find products by categories, brands, price ranges, and
              more with our powerful search system.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <BarChart3 className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Business Analytics
            </h3>
            <p className="text-gray-600">
              Gain valuable insights with customizable reports on sales trends,
              inventory turnover, and profitability.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <TruckIcon className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Order Management
            </h3>
            <p className="text-gray-600">
              Process orders efficiently, track shipments, and manage all your
              order fulfillment in one place.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <BoxIcon className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Product Management
            </h3>
            <p className="text-gray-600">
              Easily add, edit, and categorize products with comprehensive
              details and price management.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
              <ShieldCheck className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Secure & Reliable
            </h3>
            <p className="text-gray-600">
              Rest easy knowing your business data is protected with
              enterprise-grade security.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Wholesale Business?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Join thousands of wholesalers who've streamlined their operations
            and increased profitability with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {session ? (
              <Link
                href="/store"
                className="inline-flex items-center justify-center bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 transition"
              >
                Go to Your Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            ) : (
              <>
                <Link
                  href="/auth?tab=register"
                  className="inline-flex items-center justify-center bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 transition"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/auth"
                  className="inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition"
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
