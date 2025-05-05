"use client";
import { handleItemSubmit } from "@/lib/actions";
import Image from "next/image";
import React, { useRef } from "react";

type Props = {};

export default function AddItem({}: Props) {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <form
      className="border border-foreground rounded-md p-4 w-fit"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
          handleItemSubmit(formData).then((res) => {
            if (res.ok) {
              alert("Item added successfully");
              console.log(res.message);
            } else {
              alert(res.message);
            }
          });
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("An error occurred while submitting the form.");
        }
      }}
    >
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            name="code"
            placeholder="Item Code"
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Item Price"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="w-40 h-40 border border-foreground flex-none">
          <label htmlFor="image-upload">
            <div className="w-full h-full flex items-center justify-center cursor-pointer overflow-hidden relative">
              <Image
                ref={imgRef}
                alt="preview"
                src="/shite.png"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </label>
          <input
            type="file"
            name="image"
            id="image-upload"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.item(0);
              if (file && imgRef.current) {
                imgRef.current.src = URL.createObjectURL(file);
              }
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Item
        </button>
      </div>
    </form>
  );
}
