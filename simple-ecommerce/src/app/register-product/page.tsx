"use client"
import { SubmitHandler, useForm } from 'react-hook-form'
import FormComponent from '../components/FormComponent/FormComponent';
import api from '../services/api'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  title: z.string(),
  description: z.string().length(200)
})

type ProductValues = z.infer<typeof schema>;

export default function Register() {
  const { handleSubmit, register } = useForm<ProductValues>({
    mode: 'onChange',
    resolver: zodResolver(schema)
  })

  const handleCreateProduct = async (data: ProductValues): Promise<void> => {
    console.log(data)

    const { title, description } = data;

    await api.post('api/form',{ title, description })
  }
  return (
    <>
      <FormComponent handleProduct={handleCreateProduct} handleSubmit={handleSubmit} register={register} />
    </>
  )
}
