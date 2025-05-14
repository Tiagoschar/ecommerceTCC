import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  loading: boolean;
  addToCart: (item: CartItem) => Promise<void>;
  updateQuantity: (id: number, size: string, color: string, delta: number) => Promise<void>;
  removeItem: (id: number, size: string, color: string) => Promise<void>;
  clearCart: () => Promise<void>;
  reloadCart: () => Promise<void>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCart = async () => {
    setLoading(true);
    const cartRaw = await AsyncStorage.getItem('cart');
    setCart(cartRaw ? JSON.parse(cartRaw) : []);
    setLoading(false);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (item: CartItem) => {
    let newCart = [...cart];
    const idx = newCart.findIndex(
      i => i.id === item.id && i.size === item.size && i.color === item.color
    );
    if (idx > -1) {
      newCart[idx].quantity += item.quantity;
    } else {
      newCart.push(item);
    }
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQuantity = async (id: number, size: string, color: string, delta: number) => {
    let newCart = cart.map(item =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeItem = async (id: number, size: string, color: string) => {
    let newCart = cart.filter(item => !(item.id === id && item.size === size && item.color === color));
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = async () => {
    setCart([]);
    await AsyncStorage.removeItem('cart');
  };

  const reloadCart = loadCart;

  return (
    <CartContext.Provider value={{ cart, loading, addToCart, updateQuantity, removeItem, clearCart, reloadCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
