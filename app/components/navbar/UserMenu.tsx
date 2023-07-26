"use client";
import getFavouriteProducts from "@/app/actions/getFavouriteProducts";
import { useCart } from "@/app/hooks/useCart";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeProduct, SafeUser } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser, BiUserCheck } from "react-icons/bi";
import { BsCart2, BsHeart } from "react-icons/bs";

interface UserMenuProps {
  currentUser: SafeUser | null | undefined;
  favProducts: any;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser, favProducts }) => {
  const cart = useCart();
  const loginModal = useLoginModal();
  const router = useRouter();

  const handleWishlist = () => {
    if (!currentUser) {
      toast.error("login First");
      loginModal.onOpen();
      return;
    }
    router.push("wishlist");
  };
  return (
    <div className="relative flex-1">
      <div className="flex items-center justify-end flex-row gap-x-4">
        <div className="cursor-pointer">
          <AiOutlineSearch size={24} />
        </div>
        <div
          className="cursor-pointer hidden md:block"
          onClick={() => {
            if (!currentUser) {
              return loginModal.onOpen();
            }
            router.push("/account");
          }}
        >
          {!currentUser ? <BiUser size={24} /> : <BiUserCheck size={24} />}
        </div>

        <div
          onClick={handleWishlist}
          className="cursor-pointer hidden md:block relative"
        >
          <BsHeart size={24} />
          <span className="bg-black rounded-full absolute z-10 -top-1 -right-2 h-5 w-5 text-white flex items-center justify-center">
            {favProducts?.length || "0"}
          </span>
        </div>

        <Link href="/cart" className="cursor-pointere">
          <BsCart2 size={28} />
          <span className="bg-black rounded-full absolute -top-1 -right-2 h-5 w-5 text-white flex items-center justify-center">
            {cart.cartItems.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
