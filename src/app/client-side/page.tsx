"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Products {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=5");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center lg:mt-10">Products List</h1>
      <ul className="flex flex-wrap gap-12 justify-center">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center"
          >
            <h2 className="text-xl font-semibold mb-2 lg:mt-20">{product.title}</h2>
            {product.images[0] && (
              <Image
                src={product.images[0]}
                alt={product.title}
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
            )}
            <p className="text-xl font-medium mb-2 lg:mb-5 ">{product.description}</p>
            <Link href={`/products/${product.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
