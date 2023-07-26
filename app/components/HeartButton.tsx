import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavourite from "../hooks/useFavourite";
import { SafeUser } from "../types";

interface HeartButtonProps {
  productId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  productId,
  currentUser,
}) => {
  const { hasFavourited, toggleFavourite } = useFavourite({
    productId,
    currentUser,
  });
  return (
    <div
      onClick={toggleFavourite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={`${
          hasFavourited ? "fill-pink-700" : "fill-neutral-500/70"
        } z-10`}
      />
    </div>
  );
};

export default HeartButton;
