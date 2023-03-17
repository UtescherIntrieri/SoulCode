import { useState } from "react";
import "./QuestaoQuiz.css";
const pergunta = [
  {
    enunciado: "Qual é a capital de Brunei?",
    alternativas: ["Fortaleza", "Bandar Seri Begawan", "Jakarta", "Kuala Lumpur"],
    alternativaCorreta: "Bandar Seri Begawan",
  },
  {
    enunciado: "Qual é a cor mais quente?",
    alternativas: ["Azul", "Vermelho", "Verde", "Branco"],
    alternativaCorreta: "Azul",
  },
  {
    enunciado: "Qual variavel favorita do prof. Almir?",
    alternativas: ["Batata", "Num", "Flamengo", "Carro"],
    alternativaCorreta: "Batata",
    }
];
let contador = 0
let dif
let questionnum = 0
let question = pergunta[questionnum]
export function QuestaoQuiz() {
  const [statusQuiz, setStatusQuiz] = useState("menu");
  // pendente = precisa marcar uma alternativa
  // acertou = marcou a alternativa correta
  // errou = marcou a alternativa errada

  function checarResposta(altMarcada) {
    if (altMarcada === question.alternativaCorreta) {
      setStatusQuiz("acertou");
    } else {
      setStatusQuiz("errou");
    }
  }
  function acertou(){
    questionnum+=1
    if (questionnum===pergunta.length) {
      setStatusQuiz("vitoria")
    } else {
      setStatusQuiz("pendente")
      contador = 0
      question = pergunta[questionnum]
    }
  }
  function errou(){
    setStatusQuiz("pendente")
  }
  function reset(){
    setStatusQuiz("menu")
    questionnum = 0
    contador = 0
    question = pergunta[questionnum]

  }
  function facil(){
    setStatusQuiz("pendente")
    dif=3
  }
  function medio(){
    setStatusQuiz("pendente")
    dif=2
  }
  function hardcore(){
    setStatusQuiz("pendente")
    dif=1
  }
  
  function shuffle() {
    let currentIndex = question.alternativas.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [question.alternativas[currentIndex], question.alternativas[randomIndex]] = 
      [question.alternativas[randomIndex], question.alternativas[currentIndex]];
    }
    return question.alternativas;
  }
  
  if(statusQuiz==="pendente") {
    shuffle()
    return (
      <div>
        <h3>{question.enunciado}</h3>
        <ol type="A">
          {question.alternativas.map((alt) => (
            <li className="alternativa" onClick={() => checarResposta(alt)}>
              {alt}
            </li>
          ))}
        </ol>
      </div>
    )
  } else if(statusQuiz==="acertou") {
    return (
      <div>
        <h3>Parabéns, você acertou!</h3>
        <p>Mostrou que manja!</p>
        <button onClick={acertou}>Continuar</button>
      </div>
    )
  } else if(statusQuiz==="errou") {
    contador += 1   
    if (contador<dif) {
      return (
        <div>
          <h3>Você errou!</h3>
          <p>Sinto muito!</p>
          <button onClick={errou}>Tentar novamente</button>
        </div>
      )
    } else {
      setStatusQuiz("semtentativas")
    }
  } else if(statusQuiz==="semtentativas") {
    return (
      <div>
        <h3>Acabaram suas tentativas</h3>
        <p>Sinto muito!</p>
      <button onClick={reset}>Voltar ao inicio</button>
      </div>
    )
  } else if(statusQuiz==="menu") {
    return (
      <div>
        <h3>Escolha a dificuldade</h3>
        <button onClick={facil}>Fácil</button>
        <button onClick={medio}>Médio</button>
        <button onClick={hardcore}>!!Hardcore!!</button>
      </div>
    )
  } else if(statusQuiz==="vitoria") {
    return (
      <div>
        <h3>Parabéns!!!</h3>
        <button onClick={reset}>Recomeçar</button>
      </div>
    )
  }
}

