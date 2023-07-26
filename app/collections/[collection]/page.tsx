import getCurrentUser from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/getProducts";
import CategoryFilter from "@/app/components/CategoryFilter";
import CategoryTypes from "@/app/components/CategoryTypes";
import EmptyState from "@/app/components/EmptyState";
import Prodcuts from "@/app/components/Prodcuts";
import React from "react";

interface Collections {
  params: any;
}

const Homepage: React.FC<Collections> = async ({ params }) => {
  const proucts = await getProducts();
  const currentUser = await getCurrentUser();
  let category = proucts?.filter(
    (Product) => Product.category == params.collection
  );

  if (category?.length == 0) {
    return (
      <div>
        <EmptyState
          label="this category has not items"
          actionLabel="Go Back to Home Page?"
          action="/"
        />
      </div>
    );
  }

  return (
    <div className="mt-[51px] md:mt-[155px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <CategoryTypes />
          <CategoryFilter product={category} />
          <div className="w-full">
            <Prodcuts products={category} currentUser={currentUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
