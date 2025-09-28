"use client";

import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { searchItems } from "@/lib/actions";
import Item from "./Item";

type Props = {
  total?: number;
  initialItems?: any[];
};

const ITEMS_PER_PAGE = 24;

export default function ItemTable({ total = 0, initialItems = [] }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(initialItems.length);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(total / ITEMS_PER_PAGE)
  );

  // Function to perform search
  const performSearch = async (query: string, page: number = 1) => {
    setLoading(true);
    try {
      // Build price range string from min and max values if they exist
      let priceRangeToSend = "";
      if (minPrice || maxPrice) {
        if (minPrice && maxPrice) {
          priceRangeToSend = `${minPrice}-${maxPrice}`;
        } else if (minPrice) {
          priceRangeToSend = minPrice;
        }
      }

      const result = await searchItems(
        query.trim(),
        category,
        brand,
        priceRangeToSend,
        sortBy,
        page,
        ITEMS_PER_PAGE
      );
      if (result.success) {
        setItems(result.items ?? []);
        setCount(result.count ?? 0);
        setTotalPages(Math.ceil((result.count ?? 0) / ITEMS_PER_PAGE));
      } else {
        throw new Error(result.message || "Failed to search items");
      }
    } catch (error) {
      console.error("Search error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to search items", {
        description: "Search Error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setCurrentPage(1); // Reset to first page on new search
    performSearch(value, 1);
  };

  // Handle category changes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    setCurrentPage(1);
    performSearch(searchQuery, 1);
  };

  // Handle brand changes
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setBrand(value);
    setCurrentPage(1);
    performSearch(searchQuery, 1);
  };

  // Handle min price changes
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setMinPrice(value);
      setCurrentPage(1);
      performSearch(searchQuery, 1);
    }
  };

  // Handle max price changes
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setMaxPrice(value);
      setCurrentPage(1);
      performSearch(searchQuery, 1);
    }
  };

  // Handle sort changes
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    setCurrentPage(1);
    performSearch(searchQuery, 1);
  };

  // Handle page changes
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      performSearch(searchQuery, newPage);
    }
  };

  // Handle paste events in number inputs
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    if (/^\d+$/.test(pastedText)) {
      const input = e.target as HTMLInputElement;
      const start = input.selectionStart || 0;
      const end = input.selectionEnd || 0;
      const value = input.value;
      const newValue =
        value.substring(0, start) + pastedText + value.substring(end);
      if (input.name === "min_price") {
        setMinPrice(newValue);
        setCurrentPage(1);
        performSearch(searchQuery, 1);
      } else if (input.name === "max_price") {
        setMaxPrice(newValue);
        setCurrentPage(1);
        performSearch(searchQuery, 1);
      }
    }
  };

  // Prevent non-numeric key presses in number fields
  const handleNumberKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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

    if (
      (e.ctrlKey && ["a", "c", "v", "x"].includes(e.key.toLowerCase())) ||
      e.metaKey
    ) {
      return;
    }

    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Render items
  const renderItems = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
        </div>
      );
    }

    if (items.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">No items found</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item: any) => {
          const { CategoryID, Brand, ...rest } = item.Items;
          return (
            <Item
              key={item.ItemID}
              ItemID={item.ItemID}
              Name={item.Items.Name}
              ImageLink={item.ImageLink}
              Price={item.Price}
              PurchasePrice={item.PurchasePrice}
              Qty={item.Qty}
              Brand={Brand || "Unknown"}
              Category={"Default"}
              AccountID={item.AccountID}
              CategoryID={CategoryID}
              {...rest}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search items..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={category}
            onChange={handleCategoryChange}
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">All Categories</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
          </select>
          <select
            value={brand}
            onChange={handleBrandChange}
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">All Brands</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
          </select>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="min_price"
            value={minPrice}
            onChange={handleMinPriceChange}
            onKeyDown={handleNumberKeyDown}
            onPaste={handlePaste}
            placeholder="Min Price"
            className="block w-24 pl-3 pr-3 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            name="max_price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            onKeyDown={handleNumberKeyDown}
            onPaste={handlePaste}
            placeholder="Max Price"
            className="block w-24 pl-3 pr-3 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="text-sm text-gray-500">
          Showing {count} of {total} items
        </div>
      </div>

      {renderItems()}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
