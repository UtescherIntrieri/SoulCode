// - Crie um array de alunos (nome, data de nascimento, nota, telefone);
// - Crie um componente que renderiza cada aluno em cards (ListaAlunos);
//    - Os alunos com média acima ou igual a 7 tem card com borda verde;
//    - Os alunos com média abaixo de 7 tem card com borda vermelha;
//    - Mostrar a média APENAS se o aluno tiver a nota maior ou igual a 7;
//    - Mostrar uma mensagem motivacional se o aluno tiver nota abaixo de 7;

import "./ListaAlunos.css";


const alunos = [
  {chamada: 1, nome: "Nai Abreu", dataNasc: "18/06/1999", nota: 9, telefone: "(14)999104-1098" },
  {chamada: 2, nome: "Peter Parker", dataNasc: "15/11/1962", nota: 6, telefone: "(99)99999-9999" },
  {chamada: 3, nome: "Cachorrinho Pançudo", dataNasc: "01/02/2023", nota: 0, telefone: "(99)99999-9999" },
  {chamada: 4, nome: "Shrek", dataNasc: "18/05/1987", nota: 5, telefone: "(99)99999-9999" },
  {chamada: 5, nome: "Joel", dataNasc: "22/01/1975", nota: 1000000, telefone: "(99)99999-9999" },
];

export function ListaAlunos() {
  const ListaAlunos = alunos.map((aluno) => {
    let borderColor = "black"
    let texto = ""
    
    // aluno.nota >= 7 ? borderColor = "green" : borderColor = "red"
    // aluno.nota >= 7 ? texto = `Nota: ${aluno.nota}` : texto = "Mensagem motivacional"
    
    if (aluno.nota>=7) {
      borderColor = "green"
      texto = `Nota: ${aluno.nota}`
    } else {
      borderColor = "red"
      texto = "Mensagem motivacional"
    }
    
    const objectStyle = { borderColor };
    return <div key={aluno.chamada} className="card-aluno" style={objectStyle}>
      <h2>{aluno.nome}</h2>
      <p>Data de Nascimento: {aluno.dataNasc}</p>
      <p>Telefone: {aluno.telefone}</p>
      <p>{texto}</p>
    </div>
  })
  
  return (
    <>
      <ul>{ListaAlunos}</ul>
    </>
  )
  
}
