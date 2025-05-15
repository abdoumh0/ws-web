"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { useToast } from "./ui/toast";
import { debounce } from "lodash";
import { searchItems } from "@/lib/actions";
import Item from "./Item";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

type Props = {
  children?: React.ReactNode;
  total?: number;
  filteredCount?: number;
  initialItems?: any[];
};

export default function ItemTable({
  children,
  total = 0,
  filteredCount = 0,
  initialItems = [],
}: Props) {
  const { showToast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get initial filter values from URL params if they exist
  const initialQuery = searchParams.get("query") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialBrand = searchParams.get("brand") || "";
  const initialMinPrice = searchParams.get("min_price") || "";
  const initialMaxPrice = searchParams.get("max_price") || "";
  const initialSortBy = searchParams.get("sort") || "newest";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);
  const [priceRange, setPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(initialItems.length);

  // Track if search query has changed
  const [hasSearchChanged, setHasSearchChanged] = useState(false);

  // Track if filters have changed
  const [haveFiltersChanged, setHaveFiltersChanged] = useState(false);

  // Track if initial search has been performed
  const [initialSearchPerformed, setInitialSearchPerformed] = useState(false);

  // Add CSS to hide number input arrows
  useEffect(() => {
    // Add a style tag to hide number input spinners
    const style = document.createElement("style");
    style.textContent = `
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Create a debounced search function
  // This will only trigger the search after the user has stopped typing for 1 second
  const debouncedSearch = useCallback(
    debounce(async () => {
      setLoading(true);
      try {
        // Add debugging logs
        console.log("[Client Debug] Sending search request:", {
          searchQuery,
          category,
          brand,
          priceRange,
          sortBy,
        });

        // Build price range string from min and max values if they exist
        let priceRangeToSend = priceRange;
        if (minPrice || maxPrice) {
          if (minPrice && maxPrice) {
            priceRangeToSend = `${minPrice}-${maxPrice}`;
          } else if (minPrice) {
            priceRangeToSend = minPrice;
          }
        }

        // Ensure search query isn't empty if user actually typed something
        const queryToSend = searchQuery?.trim() || "";

        const result = await searchItems(
          queryToSend,
          category,
          brand,
          priceRangeToSend,
          sortBy
        );

        console.log("[Client Debug] Search results:", {
          success: result.success,
          count: result.count,
          firstItem:
            result.items && result.items.length > 0
              ? (result.items[0] as any)?.Items?.Name || "none"
              : "none",
        });

        if (result.success) {
          setItems(result.items);
          setCount(result.count);
        } else {
          throw new Error(result.message || "Failed to search items");
        }
      } catch (error) {
        console.error("Search error:", error);
        showToast({
          variant: "error",
          title: "Search Error",
          description:
            error instanceof Error ? error.message : "Failed to search items",
        });
      } finally {
        setLoading(false);
      }
    }, 1000),
    [searchQuery, category, brand, minPrice, maxPrice, sortBy, showToast]
  );

  // Handle number input validation
  const handleNumberInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;
    // Only allow digits and empty string
    if (value === "" || /^\d+$/.test(value)) {
      setter(value);
      setHaveFiltersChanged(true);
    }
  };

  // Prevent non-numeric key presses in number fields
  const handleNumberKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter, arrows
    if (
      [
        "Backspace",
        "Delete",
        "Tab",
        "Escape",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
      ].includes(e.key)
    ) {
      return;
    }

    // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
    if (
      (e.ctrlKey && ["a", "c", "v", "x"].includes(e.key.toLowerCase())) ||
      e.metaKey // Allow all command/meta key combinations for Mac
    ) {
      return;
    }

    // Prevent typing if not a digit
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Function to update URL with current filters
  const updateUrlWithFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    // Update or remove search query parameter
    if (searchQuery) {
      params.set("query", searchQuery);
    } else {
      params.delete("query");
    }

    // Update or remove category parameter
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    // Update or remove brand parameter
    if (brand) {
      params.set("brand", brand);
    } else {
      params.delete("brand");
    }

    // Update or remove price parameters
    if (minPrice) {
      params.set("min_price", minPrice);
    } else {
      params.delete("min_price");
    }

    if (maxPrice) {
      params.set("max_price", maxPrice);
    } else {
      params.delete("max_price");
    }

    // Update sort parameter (only if not default)
    if (sortBy && sortBy !== "newest") {
      params.set("sort", sortBy);
    } else {
      params.delete("sort");
    }

    // Build the new URL and update browser history
    const newUrl = `${pathname}${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    router.push(newUrl, { scroll: false });
  }, [
    searchQuery,
    category,
    brand,
    minPrice,
    maxPrice,
    sortBy,
    router,
    pathname,
    searchParams,
  ]);

  // Handle search query change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("[Client Debug] Search input changed:", value);
    setSearchQuery(value);
    setHasSearchChanged(true);
  };

  // Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setHaveFiltersChanged(true);
  };

  // Handle brand change
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(e.target.value);
    setHaveFiltersChanged(true);
  };

  // Handle min price change
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleNumberInput(e, setMinPrice);
  };

  // Handle max price change
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleNumberInput(e, setMaxPrice);
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    setHaveFiltersChanged(true);
  };

  // Prevent pasting non-numeric values
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text");
    if (!/^\d*$/.test(pastedText)) {
      e.preventDefault();
    }
  };

  // Check if any filters are already set on initial load
  useEffect(() => {
    if (!initialSearchPerformed) {
      const hasInitialFilters =
        initialQuery ||
        initialCategory ||
        initialBrand ||
        initialMinPrice ||
        initialMaxPrice ||
        (initialSortBy && initialSortBy !== "newest");

      // If we have initialItems but also have URL parameters,
      // perform a search to ensure we have the correct filtered results
      if (hasInitialFilters) {
        console.log(
          "[Client Debug] Initial filters detected, performing search"
        );
        debouncedSearch();
        setInitialSearchPerformed(true);
      }
    }
  }, [
    initialQuery,
    initialCategory,
    initialBrand,
    initialMinPrice,
    initialMaxPrice,
    initialSortBy,
    initialSearchPerformed,
    debouncedSearch,
  ]);

  // Search when search term or filters change
  useEffect(() => {
    // Only search if user has explicitly changed search or filters
    if (hasSearchChanged || haveFiltersChanged) {
      debouncedSearch();
    }

    // Cleanup debounce on unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [
    searchQuery,
    category,
    brand,
    minPrice,
    maxPrice,
    sortBy,
    debouncedSearch,
    hasSearchChanged,
    haveFiltersChanged,
  ]);

  // Update URL when filters change and search completes
  useEffect(() => {
    if (!loading && (hasSearchChanged || haveFiltersChanged)) {
      updateUrlWithFilters();
    }
  }, [loading, hasSearchChanged, haveFiltersChanged, updateUrlWithFilters]);

  const renderItems = () => {
    if (items.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-lg shadow-sm">
          <div className="bg-gray-100 rounded-full p-5 mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No items found
          </h3>
          <p className="text-sm text-gray-600 mb-4 max-w-md">
            Try adjusting your search or filter options
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          const { CategoryID, Brand, ...rest } = item.Items;
          return (
            <Item
              CategoryID={CategoryID}
              key={item.ItemID.toString()}
              Category={"somecat"}
              Brand={Brand || "Unknown"}
              {...rest}
              {...item}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <SlidersHorizontal size={18} />
          <span className="font-medium">Filters</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label
              htmlFor="category-filter"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category-filter"
              className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              <option value="1">Electronics</option>
              <option value="2">Clothing</option>
              <option value="3">Home & Kitchen</option>
              <option value="4">Beauty</option>
              <option value="5">Other</option>
            </select>
          </div>
          <div className="relative">
            <label
              htmlFor="brand-filter"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Brand
            </label>
            <select
              id="brand-filter"
              className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              value={brand}
              onChange={handleBrandChange}
            >
              <option value="">All Brands</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
            </select>
          </div>
          <div className="relative">
            <label
              htmlFor="min-price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Min Price (DZD)
            </label>
            <input
              id="min-price"
              type="text"
              inputMode="numeric"
              name="min_price"
              value={minPrice}
              onChange={(e) => handleMinPriceChange(e)}
              onKeyDown={handleNumberKeyDown}
              onPaste={handlePaste}
              placeholder="0"
              className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="max-price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Max Price (DZD)
            </label>
            <input
              id="max-price"
              type="text"
              inputMode="numeric"
              name="max_price"
              value={maxPrice}
              onChange={(e) => handleMaxPriceChange(e)}
              onKeyDown={handleNumberKeyDown}
              onPaste={handlePaste}
              placeholder="No limit"
              className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="text-sm text-gray-600">
          {loading ? (
            <span>Searching...</span>
          ) : (
            <>
              Showing <span className="font-medium">{count}</span> items
              {total > count && <span> (out of {total})</span>}
            </>
          )}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              name="item_search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search items..."
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2"
            />
          </div>

          <div className="relative">
            <select
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 pr-8"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="py-8 text-center text-gray-500">
          <div className="animate-pulse">Searching items...</div>
        </div>
      ) : (
        children || renderItems()
      )}
    </div>
  );
}
