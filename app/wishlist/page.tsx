import React from "react";
import Heading from "../components/Heading";
import getFavouriteProducts from "../actions/getFavouriteProducts";
import Product from "../components/Product";
import getCurrentUser from "../actions/getCurrentUser";

const page = async () => {
  const favProds = await getFavouriteProducts();
  const currentUser = await getCurrentUser();
  return (
    <div className="mt-[51px] md:mt-[155px]">
      <div className="flex flex-col w-full">
        <Heading label="Wishlisht" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[80%] mx-auto py-8">
          {favProds?.map((favProd: any) => (
            <div key={favProd.id}>
              <Product product={favProd} currentUser={currentUser} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
