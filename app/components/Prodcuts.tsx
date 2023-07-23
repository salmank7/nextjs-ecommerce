import React from "react";
import getProducts from "../actions/getProducts";
import Product from "./Product";

interface ProdcutsProps {
  products: any;
}

const Prodcuts: React.FC<ProdcutsProps> = async ({ products }) => {
  if (products?.length == 0) return null;

  return (
    <div className="min-h-screen py-10 px-[2px]">
      <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Prodcuts;
