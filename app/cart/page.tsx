import React from "react";
import Heading from "../components/Heading";
import CartClient from "./CartClient";
import getCurrentUser from "../actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="mt-[51px] md:mt-[155px]">
      <div className="flex flex-col w-full">
        <Heading label="Cart" />
        <CartClient />
      </div>
    </div>
  );
};

export default page;
