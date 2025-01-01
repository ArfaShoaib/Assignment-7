"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const ProductDetails = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data); // Set the single product data
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Image src={product.images[0]} alt={product.title} />
    </div>
  );
};

export default ProductDetails;
