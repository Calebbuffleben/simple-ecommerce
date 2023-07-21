'use client'
import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, SyntheticEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
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
    
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <input {...register('title')} type="text" placeholder="Título" />
        <input {...register('description')} type="text" placeholder="Descrição" />
        <input type="image" />
        <button type="submit" >Salvar Produto</button>
      </form>
    </>
  )
}
