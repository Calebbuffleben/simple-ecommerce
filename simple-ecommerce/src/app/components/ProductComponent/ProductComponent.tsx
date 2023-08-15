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
    AddToCartButton 
} from "./styles"
import IProductValues from '@/app/interfaces/IProduct';

const ProductComponent = ({ product }: IProductValues | any) => (
    <ProductPageContainer>
        <ProductImage>
            <Image src={shoes} alt={product.name} />
        </ProductImage>
        <ProductInfo>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
            <AddToCartButton>Add to Cart</AddToCartButton>
        </ProductInfo>
    </ProductPageContainer>
);

export default ProductComponent;