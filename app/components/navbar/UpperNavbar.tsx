"use client";

import { CiMenuBurger } from "react-icons/ci";
import { VscMenu } from "react-icons/vsc";
import UserMenu from "./UserMenu";
import Logo from "./Logo";
import Container from "../Container";
import { SafeProduct, SafeUser } from "@/app/types";

interface UpperNavbarProps {
  currentUser: SafeUser | null | undefined;
  favProducts: SafeProduct | null | undefined;
}

const UpperNavbar: React.FC<UpperNavbarProps> = ({
  currentUser,
  favProducts,
}) => {
  return (
    <div className="shadow-sm">
      <Container>
        <div className="flex items-center justify-between md:border-b py-2 md:py-8">
          <div className="md:hidden flex-1">
            <VscMenu size={28} />
          </div>
          {/* empty div for bigger screens */}
          <div className="hidden md:block flex-1"></div>
          {/* empty div for bigger screens */}
          <Logo />
          <UserMenu currentUser={currentUser} favProducts={favProducts} />
        </div>
      </Container>
    </div>
  );
};

export default UpperNavbar;
