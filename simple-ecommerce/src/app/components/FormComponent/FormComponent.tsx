const FormComponent = ({ register, handleSubmit, handleCreateProduct }) => {

  return(
    <form onSubmit={handleSubmit(handleCreateProduct)}>
      <input {...register('title')} type="text" placeholder="Título" />
      <input {...register('description')} type="text" placeholder="Descrição" />
      <input type="image" />
      <button type="submit" >Salvar Produto</button>
    </form>
  );
}

export default FormComponent;