//  Crie um componente Postagem que possui:
// 	- Uma imagem como demonstração da postagem;
// 	- Um corpo de seção com <Titulo>;
// 	- Aplique estilizações nos elementos desse componente;

// - Crie um componente <Blog> que possui:
// 	- Vários componente <Postagem>.

// - Crie um componente <Footer>.

// Trazer de outro arquivo/biblioteca alguma função ou variável
import { createRoot } from "react-dom/client";
import { Mensagem } from "./components/Mensagem";
import { Titulo } from "./components/Titulo";
import { Postagem } from "./components/Postagem";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";

// Linka o arquivo css ao projeto React
import "./styles.css";

// Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement);

// Inserimos o conteúdo da página
root.render(
  <div>
    <Titulo></Titulo>
    <Mensagem></Mensagem>
    <hr />
    <Postagem></Postagem>
    <Blog></Blog>
    <Footer></Footer>
  </div>
);

// let nome = "Almir";

// root.render(
//   <section>
//     <h1>React é top</h1>
//     <img src="https://picsum.photos/200" />
//     <p>
//       Olá, tudo bem? <br /> <b>{nome.toUpperCase()}</b>
//     </p>
//     <p>Soma: {1 + 1}</p>
//   </section>
// );

// JSX = Javascript Extension
// No fim o HTML é convertido para Javascript (por baixo dos panos)
// JSX = Açúcar Sintático

// Dentro das chaves podemos escrever expressões JS!
