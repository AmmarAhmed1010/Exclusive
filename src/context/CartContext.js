import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    setCartItemCount(storedCart.reduce((sum, item) => sum + item.quantity, 0));
  }, []);

  const addToCart = (product) => {
    // Check if product already exists in the cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    const updatedCart = [...cartItems];

    if (existingItemIndex > -1) {
      // Product exists, increase quantity
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      // Product doesn't exist, add new item
      updatedCart.push({ ...product, quantity: 1 });
    }

    // Update cart and localStorage
    setCartItems(updatedCart);
    setCartItemCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    const removedItem = updatedCart[index];
    const newCart = updatedCart.filter((_, i) => i !== index);

    // Update cart and localStorage
    setCartItems(newCart);
    setCartItemCount((prevCount) => prevCount - removedItem.quantity);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cartItems, cartItemCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
