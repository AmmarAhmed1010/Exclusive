import ProductCard from '@/components/ProductCard';
import newproductsData from '@/newproductsData';

const category_gaming = () => {
  return (
    <div className="container mx-auto px-6 md:px-32 my-8">
      <h1 className="text-3xl font-bold mb-6">Gaming</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newproductsData
          .filter((product) => product.id >= 0 && product.id <= 3) // Filter products with IDs from 0 to 4
          .map((product) => (
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
  )
}

export default category_gaming
