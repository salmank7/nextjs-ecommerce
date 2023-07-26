"use client";

import { useEffect, useState } from "react";
import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "../components/EmptyState";
import { useCart } from "../hooks/useCart";
import { SafeProduct } from "../types";
import CartItem from "./CartItem";

const CartClient = () => {
  const cart = useCart();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let calculatedPrice = 0;
    cart.cartItems.forEach((item) => {
      calculatedPrice += item.price;
    });
    setTotalPrice(calculatedPrice);
  }, [cart.cartItems]);

  if (cart.cartItems.length === 0) {
    return (
      <div>
        <EmptyState
          label="Cart is Empty"
          action="/"
          actionLabel="Go Back To Home Page?"
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-6 px-4 md:px-0 md:w-[80%] mx-auto py-8">
      <div className="flex items-center justify-between border-b-2 uppercase font-bold py-4">
        <div className="flex-[2.5]">Product</div>
        <div className="flex-1 text-right hidden md:block">Price</div>
        <div className="flex-1 text-right hidden md:block">quantity</div>
        <div className="flex-1 text-right hidden md:block">Total</div>
      </div>
      {cart.cartItems.map((item: SafeProduct) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="flex flex-col md:flex-row items-start gap-4 justify-between py-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="message">Add Order Note</label>
            <textarea
              className="border border-gray-400 outline-none p-2 rounded-sm resize-none"
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <b>
              <label htmlFor="coupon">Coupon:</label>
            </b>
            <p>Coupon code will work on checkout page</p>
            <input
              className="border border-gray-400 outline-none p-2 rounded-sm"
              type="text"
              name="coupon"
              id="coupon"
            />
          </div>
        </div>
        <div className="flex flex-col items-start text-left md:items-end md:text-right gap-6">
          <div className="text-4xl font-bold uppercase">
            subtotal: <hr className="md:hidden" /> Rs. {totalPrice}
          </div>
          <p className="text-sm text-gray-700">
            All charges are billed in PKR. While the content of your cart is
            currently displayed in , the checkout will use PKR at the most
            current exchange rate.
          </p>
          <button className="bg-black border border-black text-white py-4 px-12 rounded-full text-lg">
            Check Out
          </button>
        </div>
      </div>
      <div className="bg-red-500 text-center text-sm w-full py-4 text-white ">
        *Note: As per the federal budget 2023-24, GST has increased from 12% to
        15% applicable to all existing products.
      </div>
    </div>
  );
};

export default CartClient;
