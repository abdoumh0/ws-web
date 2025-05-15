"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 mr-2 relative">
                <Image
                  src="/ww-logo.svg"
                  alt="WareWise Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">WareWise</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              The complete inventory management system for wholesale
              distributors.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Solutions
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/features"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Order Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} WareWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
