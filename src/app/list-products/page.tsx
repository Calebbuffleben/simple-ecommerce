'use client'

import Link from "next/link";
import React from "react"
import api from "../services/api";
import { useQuery } from 'react-query';
import { 
  Button, 
  Table, 
  Td, 
  Th 
} from "./styles"
import ProductFiltersComponent from "../components/ProductFiltersComponent/ProductFiltersComponent";

const getProduct = async () => {
  const response = await api.get('api/form');

  return response.data.products;
}

const ListProducts = () => {
  const { data: products, isLoading, error } = useQuery('products', getProduct);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return(
    <Table>
      <ProductFiltersComponent  onFilterChange={''}/>
      <thead>
          <tr>
            <Th>Title</Th>
            <Th>Price</Th>
            <Th>Description</Th>
            <Th>Actions</Th>
          </tr>
      </thead>
      <tbody>
          {products.map((product: any) => (
          <tr key='0'>
              <Td>{product.title}</Td>
              <Td>0,00</Td>
              <Td>{product.description}</Td>
              <Td>
                <Button>Delete</Button>
                <Link href={`/update-product/${product.id}`}>Edit</Link>
              </Td>
          </tr>
          ))}
      </tbody>
    </Table>    
  )
}
export default ListProducts;