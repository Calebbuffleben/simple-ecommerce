'use client'
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import shoes from "../../shoes.jpg"


const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProductImage = styled.div`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    max-width: 40%;
    margin-bottom: 0;
  }
`;

const ProductInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    width: 50%;
  }
`;

const ProductTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ProductPrice = styled.p`
  font-size: 1.75rem;
  color: #ff4500;
  margin-bottom: 2rem;
`;

const AddToCartButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
  background-color: #ff4500;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63900;
  }
`;

const ProductPage = () => {
  // Replace this with actual product data
  const product = {
    id: 1,
    name: 'Product Name',
    price: 39.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'product.jpg',
  };

  return (
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
};

export default ProductPage;
