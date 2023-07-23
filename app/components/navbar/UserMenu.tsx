"use client";
// import getCurrentUser from "@/app/actions/getCurrentUser";
import useLoginModal from "@/app/hooks/useLoginModal";
import usePreviewModal from "@/app/hooks/usePreviewModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUser, BiUserCheck } from "react-icons/bi";
import { BsHeart, BsCart3 } from "react-icons/bs";

interface UserMenuProps {
  currentUser: SafeUser | null | undefined;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const router = useRouter();
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

        <div className="cursor-pointer hidden md:block">
          <BsHeart size={24} />
        </div>

        <div className="cursor-pointer flex items-center justify-between bg-black text-white gap-2 rounded-md py-1 px-4 relative">
          <BsCart3 size={24} />
          <span className="text-2xl">0</span>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
