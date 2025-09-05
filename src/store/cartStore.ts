import { create } from 'zustand';
import { Product } from '../lib/supabase';

interface CartItem extends Product {
  cartQuantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (product, quantity) => {
    const items = get().items;
    const existingItem = items.find(item => item.id === product.id);
    
    if (existingItem) {
      set({
        items: items.map(item =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + quantity }
            : item
        )
      });
    } else {
      set({ items: [...items, { ...product, cartQuantity: quantity }] });
    }
  },
  removeItem: (productId) => {
    set({ items: get().items.filter(item => item.id !== productId) });
  },
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    set({
      items: get().items.map(item =>
        item.id === productId ? { ...item, cartQuantity: quantity } : item
      )
    });
  },
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.price * item.cartQuantity), 0);
  },
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.cartQuantity, 0);
  },
}));