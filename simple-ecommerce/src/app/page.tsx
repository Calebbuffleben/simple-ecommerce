'use client'
import { useQuery } from 'react-query';
import HomeComponent from './components/HomeComponent/HomeComponent';
import api from './services/api';

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
    <HomeComponent products={products} />
  )
}
