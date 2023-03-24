import {useForm} from "react-hook-form"

export function Pokemon() {
  const {register, handleSubmit} = useForm()
  function onSubmit(data) {
    
  }
  return (
      <div className="pokemon">
          <h1>Cadastro de Pokemon</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="nome">Nome</label><br />
              <input type="text" id="nome" {...register("nome")}/><br />
              
              <label htmlFor="tipo">Tipo</label><br />
              <input type="text" id="tipo" {...register("tipo")}/><br />
              
              <label htmlFor="altura">Altura</label><br />
              <input type="number" id="altura" {...register("altura")}/><br />
              
              <label htmlFor="peso">Peso</label><br />
              <input type="number" id="peso" {...register("nome")}/><br />
              
              <button type="submit">Cadastrar</button>
          </form>
      </div>
  )
}