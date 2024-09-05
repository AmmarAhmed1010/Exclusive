"use client";
import newproductsData from '@/newproductsData'; // Ensure this has product IDs
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [notification, setNotification] = useState({ visible: false, message: '' });

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);

      // Show notification
      setNotification({ visible: true, message: 'Item added to cart!' });

      // Automatically hide notification after 3 seconds
      setTimeout(() => setNotification({ visible: false, message: '' }), 3000);
    }
  };

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const foundProduct = newproductsData.find((product) => product.id === productId);
      setProduct(foundProduct);
    }
  }, [id]);

  if (!id) {
    return <p>Loading...</p>; // Wait until `id` is defined
  }

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="container mx-auto px-6 md:px-32 my-8">
      {/* Notification */}
      {notification.visible && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-4 text-center z-50">
          {notification.message}{' '}
          <Link href="/cart" className="text-yellow-300 font-bold underline">
            View Cart
          </Link>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* First Column: Small images */}
        <div className="hidden md:flex">
          <div className="flex flex-row lg:flex-col gap-4">
            {[product.image, product.image, product.image, product.image].map(
              (imgSrc, index) => (
                <div
                  key={index}
                  className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 p-2 sm:p-4 bg-[#F5F5F5] flex justify-center items-center"
                >
                  <img
                    src={imgSrc}
                    alt={`Product Image ${index + 1}`}
                    className="object-contain h-full w-full"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Second Column: Main large image */}
        <div className="w-full lg:w-2/4 flex justify-center items-center">
          <div className="w-full h-full max-w-md px-2 sm:px-6 bg-[#F5F5F5]">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Third Column: Product details */}
        <div className="w-full lg:w-2/4 flex flex-col gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">{product.title}</h1>
          <div className="flex gap-2 sm:gap-4">
            <h3 className="text-xl sm:text-2xl text-red-500">${product.price}</h3>
            <h3 className="text-lg sm:text-xl text-gray-500 line-through">
              ${product.originalPrice}
            </h3>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <img
                  key={i}
                  src="/index/star.png"
                  alt="Star"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
              ))}
            <span className="text-gray-700 ml-1 sm:ml-2">
              ({product.reviews} reviews)
            </span>
          </div>
          <p className="mt-4 text-sm sm:text-base">
            This is a brief description of the product.
          </p>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-red-500 text-white py-2 px-3 sm:py-2 sm:px-4 rounded hover:bg-red-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Best Selling Products Section */}
      <section className="hidden md:flex my-20 flex-col">
        <div className="w-full flex items-center gap-4">
          <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
          <h3 className="text-[#DB4444] text-lg">This Month</h3>
        </div>
        <div className="w-full mt-2 flex justify-between">
          <h1 className="text-[36px] font-bold mb-8">Best Selling Products</h1>
          <div>
            <Link href="/all-products">
              <button className="bg-[#DB4444] rounded">
                <h4 className="text-white text-lg font-medium px-10 py-4">
                  View All
                </h4>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex mb-20 justify-between">
          {/* Product Cards */}
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newproductsData.map((product) => (
              <ProductCard
                key={product.id} // Use product ID
                productId={product.id.toString()} // Ensure this is passed as a string
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Best Selling Products Section */}
      <section className="md:hidden flex flex-col my-10">
        <div className="w-full flex items-center gap-4">
          <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
          <h3 className="text-[#DB4444] text-lg">This Month</h3>
        </div>
        <div className="w-full mt-2 flex justify-between">
          <h1 className="text-lg font-bold mb-8">Best Selling Products</h1>
          <div>
            <Link href="/all-products">
              <button className="bg-[#DB4444] rounded">
                <h4 className="text-white text-sm font-medium py-2 px-4">
                  View All
                </h4>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex mb-20 justify-between">
          {/* Product Cards */}
          <div className="grid w-full grid-cols-2 gap-6">
            {newproductsData.map((product) => (
              <ProductCard
                key={product.id} // Use product ID
                productId={product.id.toString()} // Ensure this is passed as a string
                image={product.image}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
