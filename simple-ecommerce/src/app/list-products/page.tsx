'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react"
import styled from "styled-components";
import api from "../services/api";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: Arial, sans-serif;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  color: #333;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
`;

const Button = styled.button`
  margin-right: 5px;
  padding: 8px 12px;
  font-size: 14px;
  color: #fff;
  background-color: #f44336;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

const EditButton = styled(Button)`
  background-color: #2196f3;

  &:hover {
    background-color: #1976d2;
  }
`;

const ListProducts = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    handleGetProduct();
  }, [])

  const handleGetProduct = async () => {
    const response = await api.get('api/form');

    console.log(response.data)

    setProducts(response.data.products)
  }

  return(
    <Table>
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
                <Link href={`/update-product?id=${product.id}`}>Edit</Link>
              </Td>
          </tr>
          ))}
      </tbody>
    </Table>    
  )
}
export default ListProducts;