import { deleteProduct, getProductById, updateProduct } from "@/app/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id =  req.url.split("api/form")[1]
  const products = getProductById(id.toString().replace('/', ''));

  if(!products){
    return NextResponse.json({message: "ERROR"})
  }
  return NextResponse.json({products})
}

export async function PUT(req: Request) {
  const { title, description } = await req.json();
  const id =  req.url.split("api/form")[1];

  updateProduct(id, title, description)

  return NextResponse.json({ message: 'Product updated' });
}

export async function DELETE(req: Request) {
  const id =  req.url.split("api/form")[1]
  const products = deleteProduct(id);

  return NextResponse.json({products})
}
