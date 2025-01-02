"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Products {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
  price: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // To handle loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Adjust this line to directly set the data if it's an array at the root level
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Ensure loading is set to false even in case of error
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Loading products...</p>; // Show loading message
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center lg:mt-10">
        Products List
      </h1>
      <ul className="flex flex-wrap gap-12 justify-center">
        {products.length > 0 ? (
          products.map((product) => (
            <li
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center bg-gray-100 rounded-lg shadow-lg p-4"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {product.title}
              </h2>
              {product.images?.[0] && (
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="mx-auto mb-4 rounded-lg"
                />
              )}
              <p className="text-gray-700 text-sm mb-2">
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                <span className="font-semibold">Price:</span> ${product.price}
              </p>
              <p className="text-gray-700 text-sm mb-4">
                {product.description.substring(0, 80)}...
              </p>
              <Link href={`/client-side/${product.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-center">No products found.</p> // In case products are empty
        )}
      </ul>
    </div>
  );
};

export default ProductsPage;
