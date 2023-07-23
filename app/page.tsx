import React from "react";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import getProducts from "./actions/getProducts";
import Prodcuts from "./components/Prodcuts";

async function Home() {
  const products = await getProducts();

  return (
    <div className="mt-[51px] md:mt-[155px]">
      <Hero />
      <SectionTitle title="Featured" />
      <div className="w-full">
        <Prodcuts products={products} />
      </div>
    </div>
  );
}

export default Home;
