"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/toast";
import { LoaderCircle, Save, Upload, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";
import { updateItem } from "@/lib/actions";

type EditItemProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onItemUpdated?: () => void;
};

type FormState = {
  itemId: string;
  name: string;
  price: string;
  purchasePrice: string;
  qty: string;
  brand: string;
  type: string;
  categoryId: string;
  imageLink: string;
};

export default function EditItem({
  open,
  onOpenChange,
  onItemUpdated,
}: EditItemProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    itemId: "",
    name: "",
    price: "",
    purchasePrice: "",
    qty: "1",
    brand: "",
    type: "",
    categoryId: "1",
    imageLink: "",
  });
  const [newImage, setNewImage] = useState<File | null>(null);
  const { showToast } = useToast();

  // Load item data from localStorage when the dialog opens
  useEffect(() => {
    if (open) {
      const storedItem = localStorage.getItem("editItem");
      if (storedItem) {
        try {
          const itemData = JSON.parse(storedItem);
          setFormState({
            itemId: itemData.ItemID.toString(),
            name: itemData.Name || "",
            price: (itemData.Price / 100).toString(), // Convert from cents
            purchasePrice: (itemData.PurchasePrice / 100).toString(), // Convert from cents
            qty: itemData.Qty.toString(),
            brand: itemData.Brand || "",
            type: itemData.Type || "",
            categoryId: itemData.CategoryID?.toString() || "1",
            imageLink: itemData.ImageLink || "",
          });
        } catch (error) {
          console.error("Error parsing stored item data:", error);
          showToast({
            variant: "error",
            title: "Error",
            description: "Failed to load item data",
          });
          onOpenChange(false);
        }
      }
    } else {
      // Reset form state when dialog closes
      setFormState({
        itemId: "",
        name: "",
        price: "",
        purchasePrice: "",
        qty: "1",
        brand: "",
        type: "",
        categoryId: "1",
        imageLink: "",
      });
      setNewImage(null);
    }
  }, [open, onOpenChange, showToast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewImage(file);
      if (imgRef.current) {
        imgRef.current.src = URL.createObjectURL(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();

      // Add all form fields
      formData.append("itemId", formState.itemId);
      formData.append("name", formState.name);
      formData.append("price", formState.price);
      formData.append("purchasePrice", formState.purchasePrice);
      formData.append("qty", formState.qty);
      formData.append("brand", formState.brand);
      formData.append("type", formState.type);
      formData.append("categoryId", formState.categoryId);

      // If there's a new image, append it
      if (newImage) {
        formData.append("image", newImage);
      } else {
        formData.append("imageLink", formState.imageLink);
      }

      // Call the server action to update the item
      const result = await updateItem(formData);

      if (result.success) {
        showToast({
          variant: "success",
          title: "Success",
          description: "Item updated successfully",
        });
        onOpenChange(false);
        if (onItemUpdated) {
          onItemUpdated();
        }
      } else {
        throw new Error(result.message || "Failed to update item");
      }
    } catch (error) {
      console.error("Error updating item:", error);
      showToast({
        variant: "error",
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to update item",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Edit Item
          </DialogTitle>
          <DialogDescription>
            Update the information for this item
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  maxLength={64}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="1">Electronics</option>
                    <option value="2">Clothing</option>
                    <option value="3">Home & Kitchen</option>
                    <option value="4">Beauty</option>
                    <option value="5">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="qty"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Quantity*
                  </label>
                  <input
                    type="number"
                    id="qty"
                    name="qty"
                    value={formState.qty}
                    onChange={handleChange}
                    placeholder="Enter quantity"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    min="0"
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
                    type="number"
                    id="price"
                    name="price"
                    value={formState.price}
                    onChange={handleChange}
                    placeholder="Enter sale price"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label
                    htmlFor="purchasePrice"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Purchase Price (DZD)*
                  </label>
                  <input
                    type="number"
                    id="purchasePrice"
                    name="purchasePrice"
                    value={formState.purchasePrice}
                    onChange={handleChange}
                    placeholder="Enter purchase price"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Brand*
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formState.brand}
                    onChange={handleChange}
                    placeholder="Enter brand name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    maxLength={64}
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Type*
                  </label>
                  <input
                    type="text"
                    id="type"
                    name="type"
                    value={formState.type}
                    onChange={handleChange}
                    placeholder="Enter item type"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    maxLength={32}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Image
              </label>
              <div className="w-full h-40 border border-gray-300 rounded-lg overflow-hidden">
                <label
                  htmlFor="image-upload"
                  className="w-full h-full block cursor-pointer"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative bg-gray-100 hover:bg-gray-200 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        ref={imgRef}
                        alt="preview"
                        src={formState.imageLink || "/img-up.svg"}
                        fill
                        style={{ objectFit: "cover" }}
                        className={
                          formState.imageLink ? "" : "text-gray-400 opacity-50"
                        }
                      />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 opacity-0 hover:opacity-90 transition-opacity">
                      <Upload size={20} className="text-gray-500 mb-2" />
                      <span className="text-xs text-gray-500">
                        Change image
                      </span>
                    </div>
                  </div>
                </label>
                <input
                  type="file"
                  name="image"
                  id="image-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {newImage
                  ? "New image selected"
                  : "Keep current image or upload a new one"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
              className="flex items-center"
            >
              <X size={16} className="mr-1" />
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin mr-2" />
              ) : (
                <Save size={16} className="mr-2" />
              )}
              {isLoading ? "Updating..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
