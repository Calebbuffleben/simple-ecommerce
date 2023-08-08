"use client"
import { useForm } from 'react-hook-form'
import FormComponent from '../components/FormComponent/FormComponent';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import api from '../services/api'

const schema = z.object({
  title: z.string(),
  description: z.string().length(200)
})

type ProductValues = z.infer<typeof schema>;

export default function Register() {
  const { handleSubmit, register, formState: { errors } } = useForm<ProductValues>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const handleCreateProduct = async (data: ProductValues): Promise<void> => {
    console.log("Entrou aqui")
    const { title, description } = data;

    await api.post('api/form',{ title, description })
  }
  return (
    <>
      <FormComponent handleProduct={handleCreateProduct} handleSubmit={handleSubmit} register={register} />
    </>
  )
}
