"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { Plus, Upload, LoaderCircle, RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { handleItemSubmit } from "@/lib/actions";
import { useToast } from "./ui/toast";
import { Button } from "./ui/button";

type ItemFormProps = {
  trigger?: ReactNode;
  variant?: "button" | "emptyState";
  onItemAdded?: () => void;
};

type FormState = {
  name: string;
  code: string;
  price: string;
  purchasePrice: string;
  qty: string;
  brand: string;
  type: string;
  categoryId: string;
};

export default function ItemForm({
  trigger,
  variant = "button",
  onItemAdded,
}: ItemFormProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;
  const { showToast } = useToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    code: "",
    price: "",
    purchasePrice: "",
    qty: "1",
    brand: "",
    type: "",
    categoryId: "1",
  });

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

  // Retry image loading when retry count changes
  useEffect(() => {
    if (
      imageLoadError &&
      retryCount > 0 &&
      retryCount <= maxRetries &&
      imagePreview
    ) {
      const timer = setTimeout(() => {
        // Force reload the image by recreating the preview URL
        setImagePreview((prev) => {
          if (prev) {
            // Add a cache busting parameter
            return `${prev}${
              prev.includes("?") ? "&" : "?"
            }retry=${retryCount}`;
          }
          return prev;
        });
        setImageLoadError(false);
      }, 1000); // 1 second delay between retries

      return () => clearTimeout(timer);
    }
  }, [retryCount, imageLoadError, imagePreview]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Special handling for number fields
    if (
      name === "code" ||
      name === "price" ||
      name === "purchasePrice" ||
      name === "qty"
    ) {
      // Only allow digits and empty string
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        setFormState((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Prevent non-numeric key presses in number fields
  const handleNumberKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter, arrows, period (for decimals)
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
        ".",
      ].includes(e.key)
    ) {
      // Only allow one decimal point
      if (e.key === "." && e.currentTarget.value.includes(".")) {
        e.preventDefault();
      }
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

  // Prevent pasting non-numeric values
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text");
    // Allow digits and at most one decimal point
    if (!/^\d*\.?\d*$/.test(pastedText)) {
      e.preventDefault();
    }
  };

  const validateImageFile = (
    file: File | null
  ): { valid: boolean; message?: string } => {
    if (!file) {
      return { valid: false, message: "Please select an image file" };
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      return { valid: false, message: "Selected file is not an image" };
    }

    // Check file size (5MB max)
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_SIZE) {
      return { valid: false, message: "Image file is too large (max 5MB)" };
    }

    return { valid: true };
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageLoadError(false);
      setRetryCount(0);
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      setImageIsLoading(true);
    }
  };

  const handleImageError = () => {
    setImageIsLoading(false);
    setImageLoadError(true);

    if (retryCount < maxRetries) {
      setRetryCount((prev) => prev + 1);
    } else {
      showToast({
        variant: "error",
        title: "Image Error",
        description:
          "Failed to load image after several attempts. Please try a different image.",
      });
    }
  };

  const handleImageLoad = () => {
    setImageIsLoading(false);
  };

  const handleRetryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (retryCount < maxRetries) {
      setRetryCount((prev) => prev + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const imageFile = formData.get("image") as File;

    // Validate image file
    const imageValidation = validateImageFile(imageFile);
    if (!imageValidation.valid) {
      setIsLoading(false);
      showToast({
        variant: "error",
        title: "Invalid Image",
        description: imageValidation.message,
      });
      return;
    }

    try {
      const result = await handleItemSubmit(formData);

      if (result.ok) {
        setIsLoading(false);
        setOpen(false);
        showToast({
          variant: "success",
          title: "Success",
          description: "Item added successfully",
        });

        // Reset form
        setFormState({
          name: "",
          code: "",
          price: "",
          purchasePrice: "",
          qty: "1",
          brand: "",
          type: "",
          categoryId: "1",
        });
        setImagePreview(null);
        setImageLoadError(false);
        setRetryCount(0);

        // Refresh the page or call the callback
        if (onItemAdded) {
          onItemAdded();
        } else {
          window.location.reload();
        }
      } else {
        setIsLoading(false);
        showToast({
          variant: "error",
          title: "Error",
          description: result.message || "Failed to add item",
        });
      }
    } catch (error) {
      setIsLoading(false);
      showToast({
        variant: "error",
        title: "Error",
        description: "An unexpected error occurred",
      });
    }
  };

  // Clear form and preview when dialog closes
  const handleDialogChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setFormState({
        name: "",
        code: "",
        price: "",
        purchasePrice: "",
        qty: "1",
        brand: "",
        type: "",
        categoryId: "1",
      });
      setImagePreview(null);
      setImageLoadError(false);
      setRetryCount(0);
    }
  };

  // Default trigger based on variant
  const defaultTrigger =
    variant === "button" ? (
      <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
        <Plus size={18} />
        <span>Add New Item</span>
      </Button>
    ) : (
      <div className="flex flex-col items-center justify-center">
        <button
          className="bg-gray-100 rounded-full p-5 mb-4 hover:bg-gray-200 transition-colors cursor-pointer"
          aria-label="Add new item"
        >
          <Plus className="h-8 w-8 text-gray-400" />
        </button>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Your inventory is empty
        </h3>
        <p className="text-sm text-gray-600 mb-4 max-w-md">
          Start adding items to your store inventory to manage your products
        </p>
      </div>
    );

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Add New Item
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new item to your inventory
          </DialogDescription>
        </DialogHeader>

        <form className="w-full mt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Item Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Enter item name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent required:border-gray-400"
                  required
                  maxLength={64}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="code"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Item Code*
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    id="code"
                    name="code"
                    value={formState.code}
                    onChange={handleChange}
                    placeholder="Enter unique code"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent required:border-gray-400"
                    required
                    onKeyDown={handleNumberKeyDown}
                    onPaste={handlePaste}
                  />
                  <p className="text-xs text-gray-500 mt-1">Must be unique</p>
                </div>

                <div>
                  <label
                    htmlFor="categoryId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category*
                  </label>
                  <select
                    id="categoryId"
                    name="categoryId"
                    value={formState.categoryId}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent required:border-gray-400"
                    required
                  >
                    <option value="1">Electronics</option>
                    <option value="2">Clothing</option>
                    <option value="3">Home & Kitchen</option>
                    <option value="4">Beauty</option>
                    <option value="5">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="qty"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Quantity*
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    id="qty"
                    name="qty"
                    value={formState.qty}
                    onChange={handleChange}
                    placeholder="Enter quantity"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent required:border-gray-400"
                    required
                    onKeyDown={handleNumberKeyDown}
                    onPaste={handlePaste}
                  />
                </div>

                <div>
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formState.brand}
                    onChange={handleChange}
                    placeholder="Enter brand name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    maxLength={64}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sale Price (DZD)*
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    id="price"
                    name="price"
                    value={formState.price}
                    onChange={handleChange}
                    placeholder="Enter sale price"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent required:border-gray-400"
                    required
                    onKeyDown={handleNumberKeyDown}
                    onPaste={handlePaste}
                  />
                </div>

                <div>
                  <label
                    htmlFor="purchasePrice"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Purchase Price (DZD)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    id="purchasePrice"
                    name="purchasePrice"
                    value={formState.purchasePrice}
                    onChange={handleChange}
                    placeholder="Enter purchase price"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyDown={handleNumberKeyDown}
                    onPaste={handlePaste}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Type
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={formState.type}
                  onChange={handleChange}
                  placeholder="Enter item type"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength={32}
                />
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Image*
              </label>
              <div className="w-full h-40 border border-gray-300 rounded-lg overflow-hidden">
                <label
                  htmlFor="image-upload"
                  className="w-full h-full block cursor-pointer"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative bg-gray-100 hover:bg-gray-50 transition-colors">
                    {/* Image preview if available */}
                    {imagePreview ? (
                      <div className="absolute inset-0 group">
                        {/* Spinner overlay when loading */}
                        {imageIsLoading && !imageLoadError && (
                          <div className="absolute inset-0 bg-gray-800/40 flex items-center justify-center z-20">
                            <div className="bg-white rounded-full p-3">
                              <LoaderCircle
                                className="animate-spin text-blue-600"
                                size={40}
                              />
                            </div>
                          </div>
                        )}
                        {/* Error state with retry button */}
                        {imageLoadError && (
                          <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center z-10">
                            <p className="text-red-500 text-sm mb-2">
                              Failed to load image
                            </p>
                            {retryCount < maxRetries ? (
                              <button
                                onClick={handleRetryClick}
                                className="px-3 py-1.5 bg-blue-500 text-white rounded-md flex items-center text-sm"
                              >
                                <RefreshCw size={14} className="mr-1" />
                                Retry ({retryCount}/{maxRetries})
                              </button>
                            ) : (
                              <p className="text-sm text-gray-600">
                                Please try a different image
                              </p>
                            )}
                          </div>
                        )}
                        {/* Image */}
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                          onLoad={handleImageLoad}
                          style={imageIsLoading ? { opacity: 0.5 } : {}}
                        />
                        {/* Hover indicator */}
                        {!imageLoadError && (
                          <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                            <span className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-gray-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                              Change image
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <Upload size={24} className="text-gray-400 mb-2" />
                        <span className="text-xs text-gray-500">
                          Upload image
                        </span>
                      </div>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  name="image"
                  id="image-upload"
                  className="hidden"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {imagePreview
                  ? imageLoadError
                    ? "Image failed to load"
                    : "Image selected"
                  : "Please select an image for your item"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleDialogChange(false)}
              disabled={isLoading}
              className="flex items-center"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
              disabled={isLoading || imageLoadError}
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin mr-2" />
              ) : (
                <Plus size={16} className="mr-2" />
              )}
              {isLoading ? "Adding..." : "Add Item"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
