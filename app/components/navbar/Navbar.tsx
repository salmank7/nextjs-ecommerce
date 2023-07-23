"use client";

import { SafeUser } from "@/app/types";
import LowerNavbar from "./LowerNavbar";
import UpperNavbar from "./UpperNavbar";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed top-0 z-10 bg-white w-full">
      <UpperNavbar currentUser={currentUser} />
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
