import "./NavBar.css";


export function NavBar(props) {
  const logado = props.logado;
  const nomeUsuario = props.nomeUsuario;

  let mensagem;

  if(logado === true) {
    mensagem = <p>Bem vindo(a), <b>{nomeUsuario}!</b></p>;
  } else {
    mensagem = <p>Você está desconectado!</p>;
  }
  
  return (
    <div>
      <hr />
      {logado && <img width="25" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png"/>}
      {mensagem}
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Ajuda</a></li>
      </ul>
      <hr />
    </div>
  );
}

/* MÉTODO 1: (repete toda a estrutura)
if (logado === true) {
    return (
      <div>
        <hr />
        <p>Bem vindo(a), <b>{nomeUsuario}!</b></p>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Ajuda</a></li>
        </ul>
        <hr />
      </div>
    );
  } else {
    return  (
        <div>
          <hr />
          <p>Você está desconectado!</p>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Ajuda</a></li>
          </ul>
          <hr />
        </div>
      );
  }
*/
