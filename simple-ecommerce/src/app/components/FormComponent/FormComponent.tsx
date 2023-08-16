"use client"

import { Button, FormContainer, Input, Label } from "./style";

const FormComponent = ({ register, handleSubmit, handleProduct, defaultValues }: any) => (

  /* Add options like  
    - Size
    - Color
    - Quantity
    - Price
  */
  <FormContainer onSubmit={handleSubmit(handleProduct)}>
      <Input
        {...register('title')}
        defaultValue={defaultValues?.title}
        type="text"
        placeholder="Título"
      />
      
      <Input
        {...register('description')}
        defaultValue={defaultValues?.description}
        type="text"
        placeholder="Descrição"
      />

      <Label >Produto digital ou físico?</Label>
      <Label> 
        Digital 
        <Input type="radio" name="type-product" /> 
      </Label>

      <Label> 
        Físico 
        <Input type="radio" name="type-product" /> 
      </Label>
      <Label>Faça upload da imagem do produto</Label>

      <Input {...register("file")} type="file" />

      <Button type="submit">Salvar Produto</Button>
    </FormContainer>
);
export default FormComponent;