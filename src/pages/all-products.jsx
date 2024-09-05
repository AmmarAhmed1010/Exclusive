// pages/all-products.js
import ProductCard from '@/components/ProductCard';
import allproductsData from './allproductsData';

const AllProductsPage = () => {
  return (
    <div className="container mx-auto px-6 md:px-32 my-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allproductsData.map((product, index) => (
          <ProductCard
            key={index}
            productId={index.toString()}  // Ensure this is passed as a string
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
  );
};

export default AllProductsPage;
