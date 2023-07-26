"use client";
import usePreviewModal from "@/app/hooks/usePreviewModal";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = (index: any) => {
    setCurrentImage(index);
  };

  const addToCart = () => {
    previewModal.onClose();
  };
  if (!product) return null;
  return (
    <div
      className={`${
        previewModal.isOpen ? "block" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50  h-screen w-full z-30 `}
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-white w-[95%] md:w-[60%] h-[80%] md:h-[80%] shadow-2xl relative">
          <div className="flex flex-col md:flex-row items-center justify-center h-full">
            {/* gallery */}
            <div className="flex flex-col md:flex-row h-full w-full flex-[3] pr-1 bg-gray-300 md:flex-1">
              <div className="h-full w-full  relative">
                <Image
                  src={product.imageSrc[currentImage]}
                  className="absolute inset-0"
                  alt=""
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
            {/* gellery */}
            {/* info */}
            <div className="flex-1 w-full md:py-10  border-left h-full p-8 bg-gray-200 flex flex-col md:gap-4 gap-2">
              <h1 className="font-bold text-xl md:text-3xl text-neutral-600">
                {product.title}
              </h1>

              <p className="capitalize mb-1 text-sm">
                Category: <b>{product.category}</b>
              </p>
              <p className="text-sm md:text-md ">{product.description}</p>
              <div className="flex md:flex-col gap-8 md:gap-4">
                <p className="font-bold md:font-normal text-sm md:text-md">
                  {product.type} Piece
                </p>
                <p>Product Id: {product.serialNo}</p>
              </div>
              <div className="flex flex-row flex-wrap relative gap-2 mt-1">
                {product.imageSrc.map((image, index) => (
                  <Image
                    key={image}
                    src={image}
                    width={60}
                    height={40}
                    objectFit="cover"
                    alt="image"
                    className=" hover:opacity-70 shadow-lg"
                    onClick={() => handleClick(index)}
                  />
                ))}
              </div>
              <p className="pb-2 md:pb-4 text-sm md:text-md">
                Price: <b> RS {product.price} </b>
              </p>
              <button
                onClick={addToCart}
                className="border border-black w-[120px] px-4 py-2 rounded-md bg-black text-white"
              >
                Add To Cart
              </button>
              {/* cross */}
              <div
                className="cursor-pointer absolute top-2 right-2"
                onClick={() => {
                  previewModal.onClose();
                  setCurrentImage(0);
                }}
              >
                <AiFillCloseCircle size={28} />
              </div>
            </div>
            {/* info */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
