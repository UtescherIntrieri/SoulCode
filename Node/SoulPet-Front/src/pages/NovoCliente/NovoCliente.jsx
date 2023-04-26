import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";

export function NovoCliente() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    axios.post("http://localhost:3001/clientes", data)
      .then((response) => {
        toast.success("Cliente adicionado.", { position: "bottom-left", duration: 2000 })
        Navigate("/clientes")
      })
      .catch(error => {
        toast.success("Algo deu errado.", { position: "bottom-left", duration: 2000 })
        console.log(error)
      })
  }

  return (
    <div className="container">
      <h1>Novo Cliente</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" className={errors.nome && "is-invalid"} {...register("nome", { required: "O Nome é obrigatório.", maxLength: { value: 130, message: "Limite de 130 caracteres" } })} />
          {errors.nome && <Form.Text>{errors.nome.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" className={errors.email && "is-invalid"} {...register("email", { required: "O Email é obrigatório.", maxLength: { value: 255, message: "Limite de 255 caracteres" } })} />
          {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" className={errors.telefone && "is-invalid"} {...register("telefone", { required: "O Telefone é obrigatório.", maxLength: { value: 255, message: "Limite de 255 caracteres" } })} />
          {errors.telefone && <Form.Text>{errors.telefone.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" className={errors.endereco?.cidade && "is-invalid"} {...register("cidade", { required: "A Cidade é obrigatória.", maxLength: { value: 255, message: "Limite de 255 caracteres" } })} />
          {errors.endereco?.cidade && <Form.Text>{errors.endereco?.cidade.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>UF</Form.Label>
          <Form.Control type="text" className={errors.endereco?.uf && "is-invalid"} {...register("uf", { required: "A UF é obrigatória.", maxLength: { value: 2, message: "Limite de 2 caracteres" } })} />
          {errors.endereco?.uf && <Form.Text>{errors.endereco?.uf.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="text" className={errors.endereco?.cep && "is-invalid"} {...register("cep", { required: "O CEP é obrigatório.", maxLength: { value: 9, message: "Limite de 9 caracteres" } })} />
          {errors.endereco?.cep && <Form.Text>{errors.endereco?.cep.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rua</Form.Label>
          <Form.Control type="text" className={errors.endereco?.rua && "is-invalid"} {...register("rua", { required: "A Rua é obrigatória.", maxLength: { value: 255, message: "Limite de 255 caracteres" } })} />
          {errors.endereco?.rua && <Form.Text>{errors.endereco?.rua.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Numero</Form.Label>
          <Form.Control type="text" className={errors.endereco?.numero && "is-invalid"} {...register("numero", { required: "O Número é obrigatório.", maxLength: { value: 255, message: "Limite de 255 caracteres" } })} />
          {errors.endereco?.numero && <Form.Text>{errors.endereco?.numero.message}</Form.Text>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}