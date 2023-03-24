import { useForm } from "react-hook-form"

export function SuperHeroi() {
  const { register, handleSubmit } = useForm()
  function onSubmit(data) {
alert (`
Novo Super-Herói
Nome: ${data.nome}
Poder: ${data.poder}
Fraqueza: ${data.fraqueza}
História: ${data.historia}
`
)
  }
  return (
    <div className="superHeroi">
      <h1>Cadastro de SuperHeroi</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nome">Nome</label><br />
        <input type="text" id="nome" {...register("nome")} /><br />
        <label htmlFor="poder">Poder</label><br />
        <input type="text" id="poder" {...register("poder")} /><br />
        <label htmlFor="fraqueza">Fraqueza</label><br />
        <input type="text" id="fraqueza" {...register("fraqueza")} /><br />
        <label htmlFor="historia">História</label><br />
        <textarea id="historia" {...register("historia")} /><br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}