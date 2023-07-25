"use client"
import { SubmitHandler, useForm } from 'react-hook-form'
import FormComponent from '../components/FormComponent/FormComponent';
import api from '../services/api'

interface IProductValues {
  title: string;
  description: string;
}

export default function Register() {
  const { handleSubmit, register } = useForm<IProductValues>({
    mode: 'onChange'
  })

  const handleCreateProduct = async (data: IProductValues): Promise<void> => {
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
