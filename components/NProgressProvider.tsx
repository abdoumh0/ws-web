"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

// Styles
import "nprogress/nprogress.css";

// Custom styles to override default nprogress styles
const customStyles = `
  #nprogress .bar {
    background: #1d4ed8 !important;
    height: 3px;
  }
  
  #nprogress .peg {
    box-shadow: 0 0 10px #1d4ed8, 0 0 5px #1d4ed8;
  }
  
  #nprogress .spinner {
    display: none;
  }
`;

export default function NProgressProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [prevPathname, setPrevPathname] = useState("");
  const [prevSearchParams, setPrevSearchParams] =
    useState<URLSearchParams | null>(null);

  useEffect(() => {
    // Add custom styles to the document
    const styleElement = document.createElement("style");
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);

    // Configure NProgress
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 100,
      minimum: 0.2,
    });

    // Clean up
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    // Only trigger for real navigation, not on initial load
    if (
      prevPathname !== "" &&
      (prevPathname !== pathname ||
        prevSearchParams?.toString() !== searchParams?.toString())
    ) {
      // Route change started
      NProgress.start();

      // Simulate route change completion after a brief delay
      // This helps make the progress bar visible even for fast navigation
      const timer = setTimeout(() => {
        NProgress.done();
      }, 250);

      return () => {
        clearTimeout(timer);
      };
    }

    // Store the current pathname and search params for comparison on next change
    setPrevPathname(pathname);
    setPrevSearchParams(searchParams);
  }, [pathname, searchParams, prevPathname, prevSearchParams]);

  return null;
}
