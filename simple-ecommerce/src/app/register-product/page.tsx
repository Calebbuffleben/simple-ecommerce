"use client"

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import FormComponent from '../components/FormComponent/FormComponent';

import api from '../services/api'

import IProductValues from '../interfaces/IProduct';

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
})

export default function Register() {
  const { handleSubmit, register, formState: { errors } } = useForm<IProductValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleCreateProduct = async (data: IProductValues): Promise<void> => {
    const { title, description } = data;

    await api.post<IProductValues>('api/form',{ title, description })
  }
  return (
    <>
      <FormComponent handleProduct={handleCreateProduct} handleSubmit={handleSubmit} register={register} />
    </>
  )
}
