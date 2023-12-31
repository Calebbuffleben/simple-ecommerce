"use client"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import FormComponent from "@/app/components/FormComponent/FormComponent"

import IProductValues from "@/app/interfaces/IProduct"

import api from "@/app/services/api"

const UpdateProduct = ({ params }: { params: { id: string }}) => {
    const [defaultValues, setDefaultValues] = useState();

    useEffect(() => {
        getDefaultValue();
    }, [])

    const getDefaultValue = async (): Promise<void> => {
        const response = await api.get(`api/form/${params.id}`)

        setDefaultValues(response.data.products);
    }

    const { handleSubmit, register } = useForm<IProductValues>({
        defaultValues: defaultValues,
        mode: 'onChange'
      })
    
    const handleUpdateProduct = async (data: IProductValues): Promise<void> => {
        const { title, description } = data;

        await api.put('api/form',{ title, description })
    }

    return (
        <>
            <FormComponent defaultValues={defaultValues} handleProduct={handleUpdateProduct} handleSubmit={handleSubmit} register={register} />
        </>
    )
}

export default UpdateProduct;