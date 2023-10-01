'use client'

import React, { ChangeEvent, useState } from 'react';
import ProductComponent from '@/app/components/ProductComponent/ProductComponent';

const ProductPage = () => {
    const [rating, setRating] = useState(0);

    const handleUpdateRating = (rating: number) => {
        setRating(rating);
    }

    const handleSubmitReview = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(e.target.review.value)
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
        <ProductComponent product={product} rating={rating} updateRating={handleUpdateRating} submitReview={handleSubmitReview} />
    );
};

export default ProductPage;
