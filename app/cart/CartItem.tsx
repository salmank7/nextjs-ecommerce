import Image from "next/image";
import { SafeProduct } from "../types";
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from "../hooks/useCart";

interface CartItemProps {
  item: SafeProduct;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const cart = useCart();

  const handleRemoveItem = (id: string) => {
    cart.removeItem(id);
  };
  return (
    <div className="flex items-center justify-between border-b-2 py-4 gap-4">
      <div className="flex flex-col md:flex-row items-center justify-start gap-4 w-full">
        <div className="flex items-center justify-center gap-4 flex-[2.5] w-full">
          <Image src={item?.imageSrc[0]} width={150} height={150} alt="Image" />
          <div className="flex flex-col gap-2">
            <div className="font-bold text-sm ">
              {item?.type} Piece - {item?.title} - {item?.id}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                handleRemoveItem(item.id);
              }}
            >
              <AiOutlineDelete size={28} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-between items-center md:text-right w-full md:justify-end">
          <div className=" text-right md:hidden">Price</div>
          <p className="text-right text-gray-500">RS {item?.price}</p>
        </div>
        <div className="flex-1 flex justify-between w-full items-center md:text-right md:justify-end">
          <div className="text-right md:hidden capitalize">quantity</div>
          <div className="text-right">something</div>
        </div>
        <div className="flex-1 flex justify-between w-full items-center md:text-right md:justify-end">
          <div className="text-left md:hidden">Total</div>
          <p className="text-right font-bold">RS {item?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
