'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import shoes from "../../shoes.jpg"
import ProductComponent from '@/app/components/ProductComponent/ProductComponent';

const ProductPage = () => {
    const [rating, setRating] = useState(0);

    const handleUpdateRating = (rating: number) => {
        setRating(rating);
    }

    // Replace this with actual product data
    const product = {
        id: 1,
        name: 'Product Name',
        price: 39.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'product.jpg',
        rating: 4.5,
        reviews: 125,
    };

    return (
        <ProductComponent product={product} rating={rating} updateRating={handleUpdateRating} />
    );
};

export default ProductPage;
