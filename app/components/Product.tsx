"use client";

import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { SafeProduct } from "../types";
import { AiOutlineShoppingCart } from "react-icons/ai";
import usePreviewModal from "../hooks/usePreviewModal";
import { toast } from "react-hot-toast";

interface ProductProps {
  product: SafeProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const previewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(product);
  };

  const addToCart: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();

    toast.success("propagatin complete");
  };
  return (
    <div
      onClick={onPreview}
      className="group flex items-center relative shadow-md w-full h-[548px] md:h-[630px] flex-col "
    >
      <div className="relative w-full h-full">
        <Image
          fill
          alt="image"
          src={product.imageSrc[0]}
          className="absolute top-0 w-full h-full"
          objectFit="cover"
        />
        <div className="hidden absolute group-hover:flex items-center justify-center inset-0 w-full h-full bg-black/40">
          <div
            className="cursor-pointer text-sm items-center hover:bg-black hover:text-white flex gap-2 bg-white px-6 py-3 rounded-full overflow-hidden"
            onClick={addToCart}
          >
            <div>Add to cart</div>
            <AiOutlineShoppingCart className="mx-auto" size={16} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 py-4">
        <div className="text-[10px] whitespace-nowrap">
          {product.type} Piece - {product.title} - {product.serialNo}
        </div>
        <div className="text-sm text-gray-500">RS {product.price}</div>
      </div>
      {/* add to cart button */}
    </div>
  );
};

export default Product;
