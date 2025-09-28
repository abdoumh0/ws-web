"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Account_Items, Items } from "@/lib/generated/prisma";
import { Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteItem } from "@/lib/actions";
import EditItem from "./EditItem";

type Props = Account_Items & Items & { Category: string; Brand: string };

export default function Item({
  ItemID,
  Name,
  ImageLink,
  Price,
  PurchasePrice,
  Qty,
  Brand,
  Category,
  AccountID,
  CategoryID,
}: Props) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const formattedPrice = new Intl.NumberFormat("fr-DZ", {
    style: "currency",
    currency: "DZD",
    minimumFractionDigits: 0,
  }).format(Number(Price));

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (
      confirm(`Are you sure you want to remove "${Name}" from your inventory?`)
    ) {
      try {
        setIsDeleting(true);

        const result = await deleteItem(ItemID.toString(), AccountID);

        if (result.success) {
          toast.success("Item has been removed from your inventory", {
            description: "Item Removed",
          });
          // Refresh the page to show updated inventory
          window.location.reload();
        } else {
          throw new Error(result.message || "Failed to remove item");
        }
      } catch (error) {
        console.error("Error removing item:", error);
        toast.error(error instanceof Error ? error.message : "Failed to remove item", {
          description: "Error",
        });
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    // Store the item data in localStorage for the edit form to use
    localStorage.setItem(
      "editItem",
      JSON.stringify({
        ItemID: ItemID.toString(),
        Name,
        Price: Price.toString(),
        PurchasePrice: PurchasePrice.toString(),
        Qty: Qty.toString(),
        Brand,
        CategoryID: CategoryID.toString(),
        Type: "Default", // Add a default value if not available
        ImageLink,
      })
    );

    // Open edit modal
    setShowEditModal(true);
  };

  const handleItemUpdated = () => {
    // Refresh the page when an item is updated
    window.location.reload();
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    setIsImageLoading(false);
    setImageError(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 w-full max-w-[240px] group relative">
        {/* Action buttons */}
        <div className="absolute top-1.5 right-1.5 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={handleEdit}
            className="p-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full transition-colors"
            title="Edit item"
          >
            <Edit size={14} />
          </button>
          <button
            onClick={handleDelete}
            className="p-1 bg-red-100 hover:bg-red-200 text-red-700 rounded-full transition-colors"
            title="Remove item"
            disabled={isDeleting}
          >
            <Trash2 size={14} />
          </button>
        </div>

        {/* Overlay when deleting */}
        {isDeleting && (
          <div className="absolute inset-0 bg-white/75 flex items-center justify-center z-20">
            <div className="animate-pulse text-sm text-gray-500">
              Removing...
            </div>
          </div>
        )}

        <div className="w-full h-48 relative rounded-t-lg overflow-hidden">
          {/* Skeleton loading */}
          {isImageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse">
              <div className="h-full w-full flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-3 border-gray-300 border-t-gray-400 animate-spin"></div>
              </div>
            </div>
          )}

          {/* Error fallback */}
          {imageError && (
            <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-center p-3">
              <div className="text-red-500 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </div>
              <p className="text-xs text-gray-600">Failed to load image</p>
            </div>
          )}

          <Image
            src={ImageLink}
            alt={Name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between items-start gap-1.5 mb-1.5">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
              {Name}
            </h3>
            <div className="text-sm text-blue-600 font-semibold whitespace-nowrap">
              {formattedPrice}
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <span className="font-medium">{Brand}</span>
            </div>
            <div>
              {Qty > 0 ? (
                <span className="text-green-600">In Stock ({Qty})</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <EditItem
        open={showEditModal}
        onOpenChange={setShowEditModal}
        onItemUpdated={handleItemUpdated}
      />
    </>
  );
}
