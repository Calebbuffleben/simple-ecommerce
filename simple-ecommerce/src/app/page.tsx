'use client'
import Image from 'next/image'
import { useQuery } from 'react-query';
import styled from 'styled-components';
import api from './services/api';
import shoes from "./shoes.jpg"


const HeaderContainer = styled.header`
  background-color: #222;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroSection = styled.section`
  background-image: url('hero-background.jpg');
  background-size: cover;
  background-position: center;
  padding: 4rem 0;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: #ddd;
    max-width: 600px;
    margin: 0 auto;
  }

  button {
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: #ff4500;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e63900;
    }
  }
`;


const Logo = styled.h1`
  font-size: 2.5rem;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

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

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 1rem;
  text-align: center;
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
      <HeaderContainer>
        <Logo>MyStore</Logo>
        <Navigation>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </Navigation>
      </HeaderContainer>
      <HeroSection>
          <Logo>MyStore</Logo>
          <h1>Welcome to Our Online Store</h1>
          <p>Discover amazing products and deals for your every need.</p>
          <button>Shop Now</button>
        </HeroSection>
      <ProductContainer>
        {products.map((product: any ) => (
          <ProductCard key="0">
            <Image src={shoes} alt="{product.name}" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>$0,00</p>
            <button>Add to Cart</button>
          </ProductCard>
        ))}
      </ProductContainer>
      <FooterContainer>
        <p>&copy; 2023 MyStore. All rights reserved.</p>
      </FooterContainer>
    </>
  )
}
