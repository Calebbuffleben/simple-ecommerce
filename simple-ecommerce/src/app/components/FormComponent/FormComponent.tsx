"use client"
const FormComponent = ({ register, handleSubmit, handleProduct, handleUpdateProduct }: any) => {
  return(
    <form onSubmit={handleSubmit(handleProduct)}>
      <input {...register('title')} type="text" placeholder="Título" />
      <input {...register('description')} type="text" placeholder="Descrição" />
      <input type="image" />
      <button type="submit" >Salvar Produto</button>
    </form>
  );
}

export default FormComponent;