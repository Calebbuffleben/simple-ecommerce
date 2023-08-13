'use client'
import Image from 'next/image'
import { useQuery } from 'react-query';
import styled from 'styled-components';
import api from './services/api';

const ProductContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  p {
    margin-top: 0.5rem;
    color: #666;
  }
`;

const getProducts = async () => {
  const response = await api.get('api/form');

  return response.data.products;
}

export default function Home() {
  const { data: products, isLoading, error } = useQuery('products', getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h2>Ecommerce</h2>
      <ProductContainer>
        {products.map((product: any ) => (
          <ProductCard key="0">
            <img src="{product.imageUrl}" alt="{product.name}" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>$0,00</p>
            {/* Add 'Add to Cart' button and other product details */}
          </ProductCard>
        ))}
      </ProductContainer>
    </>
  )
}
