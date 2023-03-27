import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import logoIcon from "../../assets/icons/livros.png";
import googleIcon from "../../assets/icons/google-white.svg";
import { cadastrarEmailSenha, loginGoogle } from "../../firebase/auth";
import { toast } from "react-hot-toast";

export function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate()
  
  function onSubmit(data) {
    const { email,senha } = data
    cadastrarEmailSenha(email, senha).then((user) => {
      console.log(user);
    })
    navigate("/")
  }
  
  function onLoginGoogle() {
    loginGoogle().then((user) => {
      toast.success(`Bem-Vindo(a) ${user.email}`, {
        position: "bottom-right",
        duration: 2500
      })  
      navigate("/")
    })
    .catch((erro) => {
      toast.error(`Um erro aconteceu. Cód: ${erro.code}`, {
        position: "bottom-right",
        duration: 2500
      })    
    })
  }
  
  return (
    <Container fluid className="my-5">
      <p className="text-center">
        <img src={logoIcon} width="256" alt="Logo do app" />
      </p>
      <h4>Faça parte da nossa plataforma</h4>
      <p className="text-muted">
        Já tem conta? <Link to="/login">Entre</Link>
      </p>
      <hr />
      <Button className="mb-3" variant="danger" onClick={onLoginGoogle}>
        <img src={googleIcon} width="32" alt="Logo do google" />
        Entrar com o Google
      </Button>
      <Form  onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
          type="email"
          className={errors.email ? "is-invalid":""}
          placeholder="Seu email" 
          {...register("email", {required: "O email é obrigatório"})}
          />
          <Form.Text className="invalid-feedback">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
          type="password"
          placeholder="Sua senha"
          className={errors.senha ? "is-invalid":""}
          {...register("senha", {required: "A senha é obrigatória"})}
          />
          <Form.Text className="invalid-feedback">
          {errors.senha?.message}
        </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
