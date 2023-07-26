import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { SafeProduct } from '../types'
import { toast } from 'react-hot-toast';

type CartState = {
  cartItems: SafeProduct[];
  addToCart: (item: SafeProduct) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
};

const cartLocalStorageKey = 'cart';

// Create the useCart store with persistence middleware
const createStoreWithPersistence = persist<CartState>(
  (set) => ({
    cartItems: [],
    addToCart: (item: SafeProduct) => set((state) => {
      const isItemInCart = state.cartItems.some((CartItem) => CartItem.id === item.id)

      if(!isItemInCart) {
        toast.success("Added to Cart")
        return {cartItems: [...state.cartItems, item]}

      }

      toast.error("Item is Already in Cart")
      return state
    }),
    removeItem: (itemId: string) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== itemId) })),
    clearCart: () => set({ cartItems: [] }),
  }),
  {
    name: cartLocalStorageKey,
    getStorage: () => localStorage, // Use local storage for persistence
  }
);

export const useCart = create(createStoreWithPersistence);