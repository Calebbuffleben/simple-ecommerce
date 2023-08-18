'use client'
import React from 'react';
import Image from 'next/image';
import shoes from "../../shoes.jpg"

import { 
    ProductPageContainer, 
    ProductImage, 
    ProductInfo, 
    ProductTitle, 
    ProductDescription, 
    ProductPrice,
    RatingContainer,
    StarIcon, 
    AddToCartButton 
} from "./styles"
import IProductValues from '@/app/interfaces/IProduct';
import RatingComponent from '../RatingComponent/RatingComponent';

const ProductComponent = ({ product, updateRating, rating, submitReview }: IProductValues | any) => (
    <ProductPageContainer>
        <ProductImage>
            <Image src={shoes} alt={product.name} />
        </ProductImage>
        <ProductInfo>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
            <RatingContainer>
                <p>
                    <StarIcon>&#9733;</StarIcon> {product.rating.toFixed(1)} ({product.reviews} reviews)
                </p>
            </RatingContainer>
            <AddToCartButton>Add to Cart</AddToCartButton>
            <RatingComponent  updateRating={updateRating} rating={rating} submitReview={submitReview} />
        </ProductInfo>
    </ProductPageContainer>
);

export default ProductComponent;