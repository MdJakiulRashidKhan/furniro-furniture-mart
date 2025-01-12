import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4); // Start by showing 4 products

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleShowMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4); // Show 4 more products each time
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-2xl text-center font-bold py-6">Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleProducts).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-outline btn-success"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
