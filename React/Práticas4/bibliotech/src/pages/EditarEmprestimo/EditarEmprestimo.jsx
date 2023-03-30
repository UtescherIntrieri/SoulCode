import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { editEmprestimo, getEmprestimo, updateEmprestimo } from "../../firebase/emprestimos";
import { getLivro, getLivros } from "../../firebase/livros"

export function EditarEmprestimo() {

  const { id } = useParams();

  const [livros, setLivros] = useState([]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    getLivro(data.idLivro).then(livro => {
      delete data.idLivro;
      let editEmprestimo = { ...data, livro };
      updateEmprestimo(id, editEmprestimo).then(() => {
        toast.success("Empréstimo editado com sucesso!", { duration: 2000, position: "bottom-right" })
        navigate("/emprestimos");
      })
    })
  }

  useEffect(() => {
    getLivros().then(busca => {
      setLivros(busca);
    });
    getEmprestimo(id).then(emprestimo => {
      emprestimo.idLivro = emprestimo.livro.id;
      reset(emprestimo);
    })
  }, []);

  return (
    <div className="editar-emprestimo">
      <Container>
        <h1>Editar empréstimo</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Leitor</Form.Label>
            <Form.Control type="text" className={errors.leitor && "is-invalid"} {...register("leitor", { required: "Leitor é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
            <Form.Text className="invalid-feedback">
              {errors.leitor?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" className={errors.email && "is-invalid"} {...register("email", { required: "E-mail é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
            <Form.Text className="invalid-feedback">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="tel" className={errors.telefone && "is-invalid"} {...register("telefone", { required: "Telefone é obrigatório!", maxLength: { value: 15, message: "Limite de 15 caracteres!" } })} />
            <Form.Text className="invalid-feedback">
              {errors.telefone?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Livro</Form.Label>
            <Form.Select className={errors.idLivro && "is-invalid"} {...register("idLivro", { required: "Livro é obrigatório!" })}>
              {livros.map(livro => <option key={livro.id} value={livro.id}>{livro.titulo}</option>)}
            </Form.Select>
            <Form.Text className="invalid-feedback">
              {errors.idLivro?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select className={errors.status && "is-invalid"} {...register("status", { required: "Status é obrigatório!" })}>
              <option value="Pendente">Pendente</option>
              <option value="Entregue">Entregue</option>
            </Form.Select>
            <Form.Text className="invalid-feedback">
              {errors.status?.message}
            </Form.Text>
          </Form.Group>
          <Button type="submit" variant="success">Editar</Button>
        </Form>
      </Container>
    </div>
  );
}