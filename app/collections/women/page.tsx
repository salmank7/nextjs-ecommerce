import getProducts from "@/app/actions/getProducts";
import CategoryFilter from "@/app/components/CategoryFilter";
import CategoryTypes from "@/app/components/CategoryTypes";
import Prodcuts from "@/app/components/Prodcuts";

const page = async () => {
  const proucts = await getProducts();
  const women = proucts?.filter((Product) => Product.category == "women");
  return (
    <div className="mt-[51px] md:mt-[155px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <CategoryTypes />
          <CategoryFilter product={women} />
          <div className="w-full">
            <Prodcuts products={women} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
