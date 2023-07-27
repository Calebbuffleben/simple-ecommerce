import { v4 as uuidv4 } from 'uuid';

type Product = {
  id?: string;
  title: string;
  description: string;
  price: string;
}

let products: Product[] = [
  {
    id: '1',
    title: 'Teste1',
    description: 'Description teste',
    price: '000',
  }
];

export const getProduct = () => products

export const getProductById = (id: string) => {
  const productsReturned = products.find((product) => product.id === id)

  console.log(productsReturned)
  return productsReturned
}

export const addProduct = (product: Product) => {
  const newProduct: Product = {
    id: uuidv4(),
    ...product,
  };

  products.push(newProduct);
}

export const deleteProduct = (id: string) => {
  products = products.filter((product) => product.id !== id)
}

export const updateProduct = (id: string, title: string, description: string) => {
  const product = products.find((product) => product.id === id);

  if (product) {
    product.title = title;
    product.description = description;
  } else {
    throw new Error("No products found")
  }
}
