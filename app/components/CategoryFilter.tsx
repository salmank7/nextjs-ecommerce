"use client";

import React from "react";
import { FiFilter } from "react-icons/fi";
import { SafeProduct } from "../types";

interface CategoryFilterProps {
  product: any;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ product }) => {
  return (
    <div className="w-full flex items-center justify-between px-2 text-sm">
      <div className="text-gray-500 flex items-center justify-center gap-1">
        <FiFilter />
        <p>Filter</p>
      </div>
      <div className="text-gray-500 flex items-center justify-center gap-1">
        <p>Total Products</p>
        <p>{product.length}</p>
      </div>
      <div className="text-gray-500 flex items-center justify-center gap-1 border border-gray-400 px-4 py-2 rounded-full">
        <p>Feaured</p>
      </div>
    </div>
  );
};

export default CategoryFilter;
