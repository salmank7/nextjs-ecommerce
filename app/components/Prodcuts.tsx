import React from "react";
import Product from "./Product";
import { SafeUser } from "../types";

interface ProdcutsProps {
  products: any;
  currentUser: SafeUser | null;
}

const Prodcuts: React.FC<ProdcutsProps> = async ({ products, currentUser }) => {
  if (products?.length == 0) return null;

  return (
    <div className="min-h-screen py-10 px-[2px]">
      <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product: any) => (
          <Product
            key={product.id}
            product={product}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Prodcuts;
