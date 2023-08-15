'use client'
import React from 'react';
import Image from 'next/image';
import shoes from "../../shoes.jpg"
import ProductComponent from '@/app/components/ProductComponent/ProductComponent';

const ProductPage = () => {
  // Replace this with actual product data
  const product = {
    id: 1,
    name: 'Product Name',
    price: 39.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'product.jpg',
  };

  return (
    <ProductComponent product={product} />
  );
};

export default ProductPage;
