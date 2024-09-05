import { useState, useEffect } from 'react';
import Link from 'next/link';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div className="container mx-auto px-6 md:px-32 my-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Remove</button>
            </div>
          ))}
        </div>
      )}
      <Link href="/">
        <div className="text-blue-500 hover:underline mt-4">Continue Shopping</div>
      </Link>
    </div>
  );
};

export default CartPage;
