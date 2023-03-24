import {usuarios} from "../../data/usuarios"
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Usuarios.css"

export function Usuarios() {
  const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const { register, handleSubmit, formState: { errors } } = useForm();
  function onSubmitProduto(data) {
    alert (
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
    <div className="usuarios">
      <h1>Usuários</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => {
            return (
              <tr>
                <td>{usuario.id+1}</td>
                <td>{usuario.nome}</td>
                <td>{usuario.idade}</td>
                <td>{usuario.email}</td>
                <td>
                  <Link to={`/usuario/edit/${usuario.id}`}>Editar</Link>
                </td>
                <td>
                  <Link to={`/usuario/perfil/${usuario.id}`}>Perfil</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      
      
      <h1>Cadastro de Usuários</h1>
      <form onSubmit={handleSubmit(onSubmitProduto)}>
        <label htmlFor="nomecompleto">Nome Completo</label><br />
        <input type="text" id="nomecompleto" {...register("nomecompleto", { required: true, maxLength: 255 })} /><br />
        {errors.nomecompleto && <span className="invalid">Digite um nome válido!</span>}<br />

        <label htmlFor="email">E-mail</label><br />
        <input type="text" id="email" {...register("email", { required: true, maxLength: 255, pattern: patternEmail })} /><br />
        {errors.email && <span className="invalid">Digite um e-mail válido!</span>}<br />

        <label htmlFor="telefone">Telefone</label><br />
        <input type="tel" id="telefone" {...register("telefone", { required: true, minLength: 8, maxLength: 255})}/><br />
        {errors.telefone && <span className="invalid">Digite um número de telefone válido!</span>}<br />

        <label htmlFor="estado">Estado de Residência</label><br />
        <input type="text" id="estado" {...register("estado", { required: true, maxLength: 255 })} /><br />
        {errors.estado && <span className="invalid">Digite um estado válido!</span>}<br />

        <label htmlFor="cidade">Cidade de Residência</label><br />
        <input type="text" id="cidade" {...register("cidade", { required: true, maxLength: 255 })} /><br />
        {errors.cidade && <span className="invalid">Digite uma cidade válida!</span>}<br />

        <label htmlFor="interesse">Áreas de interesse</label><br />
        <input type="checkbox" id="frontend" name="frontend" />
        <label for="frontend">Front-End</label><br />
        <input type="checkbox" id="backend" name="backend" />
        <label for="backend">Back-End</label><br />
        <input type="checkbox" id="fullstack" name="fullstack" />
        <label for="fullstack">FullStack</label><br />
        <input type="checkbox" id="design" name="design" />
        <label for="design">Design</label>
        {errors.interesse && <span className="invalid">Digite uma data válida!</span>}<br />

        <label htmlFor="exp">Nível de experiência</label><br />
        <select name="exp" id="exp" {...register("exp", { required: true, })}>
          <option value="" disabled selected hidden />
          <option value="Júnior">Júnior</option>
          <option value="Pleno">Pleno</option>
          <option value="Sênior">Sênior</option>
        </select>  <br />
        {errors.status && <span className="invalid">Escolha um Status!</span>}<br />

        <label htmlFor="portfolio">Portfólio</label><br />
        <input type="text" id="portfolio" {...register("portfolio", { required: true })} /><br />
        {errors.portfolio && <span className="invalid">Digite um link válido!</span>}<br />

        <label htmlFor="hardskills">Hard Skills</label><br />
        <input type="date" id="hardskills" {...register("hardskills", { required: true })} /><br />
        {errors.hardskills && <span className="invalid">Digite uma data válida!</span>}<br />

        <label htmlFor="formacao">Formação acadêmica</label><br />
        <input type="date" id="formacao" {...register("formacao", { required: true })} /><br />
        {errors.formacao && <span className="invalid">Digite uma data válida!</span>}<br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}