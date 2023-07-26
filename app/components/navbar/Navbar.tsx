"use client";

import { SafeProduct, SafeUser } from "@/app/types";
import LowerNavbar from "./LowerNavbar";
import UpperNavbar from "./UpperNavbar";

interface NavbarProps {
  currentUser?: SafeUser | null;
  favProducts: SafeProduct | null | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser, favProducts }) => {
  return (
    <div className="fixed top-0 z-10 bg-white w-full">
      <UpperNavbar currentUser={currentUser} favProducts={favProducts} />
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
