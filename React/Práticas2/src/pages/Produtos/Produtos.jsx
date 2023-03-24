import { useForm } from "react-hook-form";
import "./Produtos.css"

export function Produtos() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  function onSubmitProduto(data) {
    alert(
      `Produto Cadastrado!
    Marca: ${data.marca}
    
    Modelo: ${data.modelo}
    
    Número de Série: ${data.numserie}
    
    Problema: ${data.problema}
    
    Data de entrada: ${data.entrada}
    
    Data de entrega: ${data.entrega}
    
    Status: ${data.status}
    `
    )
  }

  return (
    <div className="produtos">
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit(onSubmitProduto)}>
        <label htmlFor="marca">Marca</label><br />
        <input type="text" id="marca" {...register("marca", { required: true, maxLength: 255 })} /><br />
        {errors.marca && <span className="invalid">Digite uma marca válida!</span>}<br />

        <label htmlFor="modelo">Modelo</label><br />
        <input type="text" id="modelo" {...register("modelo", { required: true, maxLength: 255 })} /><br />
        {errors.modelo && <span className="invalid">Digite um modelo válido!</span>}<br />

        <label htmlFor="numserie">Número de Série</label><br />
        <input type="number" id="numserie" {...register("numserie", { required: true, minLength: 8, maxLength: 255 })} step="0.01" /><br />
        {errors.numserie && <span className="invalid">Digite um número de série válido!</span>}<br />

        <label htmlFor="problema">Descreva seu Problema</label><br />
        <textarea id="problema" {...register("problema", { required: true, min: 0 })} /><br />
        {errors.problema && <span className="invalid">Campo Obrigatório!</span>}<br />

        <label htmlFor="entrada">Data de Entrada</label><br />
        <input type="date" id="entrada" {...register("entrada", { required: true })} /><br />
        {errors.entrada && <span className="invalid">Digite uma data válida!</span>}<br />

        <label htmlFor="entrega">Previsão de Entrega</label><br />
        <input type="date" id="entrega" {...register("entrega", { required: true })} /><br />
        {errors.entrega && <span className="invalid">Digite uma data válida!</span>}<br />

        <label htmlFor="status">Status</label><br />
        <select name="status" id="status" {...register("status", { required: true, })}>
          <option value="" disabled selected hidden />
          <option value="A Fazer">A Fazer</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Pronto">Pronto</option>
          <option value="Entregue">Entregue</option>
        </select>  <br />
        {errors.status && <span className="invalid">Escolha um Status!</span>}<br /><br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}