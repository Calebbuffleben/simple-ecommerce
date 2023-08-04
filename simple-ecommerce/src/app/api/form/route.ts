import { addProduct, getProduct } from "@/app/data";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, description, price } = await req.json();

  try{
    const product = { title, description, price };
    addProduct(product);

    return NextResponse.json({ message: 'Product added', product }, {status: 200},);
  } catch {
    return NextResponse.json({ message: 'Form data received successfully!' }, {status: 200});
  }
}

export async function GET() {
  const products = getProduct();
  return NextResponse.json({products})
}

