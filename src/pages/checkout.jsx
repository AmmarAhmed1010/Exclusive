import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingFee, setShippingFee] = useState(10); // Example shipping fee
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const calculateSubtotal = () => cartItems.reduce((sum, item) => sum + (item.totalPrice || item.price * item.quantity), 0);
  const calculateTotal = () => calculateSubtotal() + shippingFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    setShowModal(true); // Show the modal instead of alert
  };

  const handleContinueShopping = () => {
    localStorage.removeItem('cart'); // Clear cart after order
    router.push('/'); // Redirect to home page
  };

  return (
    <div className="container mx-auto px-6 md:px-32 my-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cart Summary */}
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b py-2">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm text-gray-600">Total: ${item.totalPrice || item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between mt-4 font-bold">
                <span>Subtotal:</span>
                <span>${calculateSubtotal()}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping Fee:</span>
                <span>${shippingFee}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          )}
        </div>

        {/* Shipping Information */}
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                required
              >
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Thank You for Shopping!</h2>
            <p className="mb-4">Your order has been placed successfully. We appreciate your business.</p>
            <button
              onClick={handleContinueShopping}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
