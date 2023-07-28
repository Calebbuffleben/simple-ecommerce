"use client"
const FormComponent = ({ register, handleSubmit, handleProduct, defaultValues }: any) => (
  <form onSubmit={handleSubmit(handleProduct)}>
    <input {...register('title')} defaultValue={defaultValues?.title} type="text" placeholder="Título" />
    <input {...register('description')} defaultValue={defaultValues?.description} type="text" placeholder="Descrição" />
    <input type="image" />
    <button type="submit" >Salvar Produto</button>
  </form>
);


export default FormComponent;