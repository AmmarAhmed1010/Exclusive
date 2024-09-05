import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingFee, setShippingFee] = useState(10); // Example shipping fee
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) newQuantity = 1; // Ensure quantity is at least 1

    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    updatedCart[index].totalPrice = updatedCart[index].price * newQuantity;
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => cartItems.reduce((sum, item) => sum + (item.totalPrice || item.price * item.quantity), 0);
  const calculateTotal = () => calculateSubtotal() + shippingFee;

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 my-8 flex flex-col lg:flex-row">
      <div className="flex-1 lg:mr-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex  md:flex-row items-center justify-between p-4 border rounded">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
                <div className="flex-1 md:ml-4 flex flex-col">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity || 1}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                      className="w-16 p-1 border rounded"
                    />
                    <p className="ml-4 text-sm text-gray-600">
                      Total: ${item.totalPrice || item.price * (item.quantity || 1)}
                    </p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mt-4 md:mt-0"
                  onClick={() => {
                    const updatedCart = cartItems.filter((_, i) => i !== index);
                    setCartItems(updatedCart);
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <Link href="/all-products">
          <div className="border border-gray-300 mt-6 mb-4 md:py-4 px-6 py-4 md:px-8 inline-block text-center">Return To Shop</div>
        </Link>
      </div>
      <div className="w-full lg:w-1/3 mt-8 lg:mt-0 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-4">Checkout Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${calculateSubtotal()}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping Fee:</span>
          <span>${shippingFee}</span>
        </div>
        <div className="flex justify-between mb-4 font-bold">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
