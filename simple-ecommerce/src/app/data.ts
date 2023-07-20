type Product = {
  id?: string;
  title: string;
  description: string;
  price: number;
}

let products: Product[] = [];

export const getProduct = () => products

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id)
}

export const addProduct = (product: Product) => {
  products.push(product);
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
