"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Products {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
  price: number;
}

const ProductDetails = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const [product, setProduct] = useState<Products | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data); // Set the single product data
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">{product.title}</h1>
      {product.images?.[0] && (
        <Image
          src={product.images[0]}
          alt={product.title}
          width={500}
          height={500}
          className="mx-auto mb-6 rounded-lg shadow-md"
        />
      )}
      <p className="text-lg text-gray-700 text-center">{product.description}</p>
      <p className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <span className="font-semibold">Price:</span> ${product.price}
            </p>
            <p className="text-gray-700 text-sm mb-4">
              {product.description.substring(0, 80)}...
            </p>
    </div>
  );
};

export default ProductDetails;
