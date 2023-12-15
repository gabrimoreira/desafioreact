import "../Style/Quiz.css";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import React, {useState} from 'react';
function Quiz() {
  const selecionado = (evento) => {
    //Pega o elemento html
    const elemento = evento.target;
    const buttons = document.querySelectorAll(".alternativa button");
    const next = document.querySelector("#nextQuiz");
    if(next){
      if(!(next.hasAttribute("nextQuiz"))){
        next.removeAttribute("id");
      }
  }

    buttons.forEach((button) => {
      button.classList.remove("selecionado");
    });
    elemento.classList.add("selecionado");
  };
  const Perguntas =[
    {
      pergunta: 'QUESTÃO 1',
      alternativas:[
        {alternativa: 'A', pontos: 1},
        {alternativa: 'B', pontos: 2},
        {alternativa: 'C', pontos: 3},
        {alternativa: 'D', pontos: 4},
      ]
    },
    {
      pergunta: 'QUESTÃO 2',
      alternativas:[
        {alternativa: 'A' , pontos: 1},
        {alternativa: 'B', pontos: 2},
        {alternativa: 'C', pontos: 3},
        {alternativa: 'D', pontos: 4},
      ]
    },
    {
      pergunta: 'QUESTÃO 3',
      alternativas:[
        {alternativa: 'A' , pontos: 1},
        {alternativa: 'B', pontos: 2},
        {alternativa: 'C', pontos: 3},
        {alternativa: 'D', pontos: 4},
      ]
    },
    {
      pergunta: 'QUESTÃO 4',
      alternativas:[
        {alternativa: 'A' , pontos: 1},
        {alternativa: 'B', pontos: 2},
        {alternativa: 'C', pontos: 3},
        {alternativa: 'D', pontos: 4},
      ]
    }
  ]
  const [Total, setTotal] = useState(0);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [quizTerminou, setQuizTerminou] = useState(false);

  function calcularPontos(elemento) {
    const pontos = parseInt(elemento.getAttribute("pontos"));
    setTotal(Total + pontos);
  }
  function verificarFim() {
    const proximaPergunta = perguntaAtual + 1;
    const buttons = document.querySelectorAll(".alternativa button");
    let temSelecionado = false;
    if (proximaPergunta < Perguntas.length) {
      buttons.forEach((button) => {
        if(button.classList.contains("selecionado")){
          calcularPontos(button);
          setPerguntaAtual(proximaPergunta);
          temSelecionado = true;
        }
        button.classList.remove("selecionado");
      });
      if (!temSelecionado) {
        alert("Por favor, selecione uma alternativa antes de continuar.");
      }
    } else {
      setQuizTerminou(true);
    }
  }
  

  function mostrarResultado() {
    let tipo;
    if (Total <= 4) {
      tipo = "A";
    } else if (Total <= 8) {
      tipo = "B";
    } else if (Total <= 12) {
      tipo = "C";
    } else {
      tipo = "D";
    }
    return (
      <div className="resultado">
        <h1>Você é do tipo {tipo}!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo quis nisi consequat aliquet. Morbi vitae nisl id nisi tincidunt tincidunt. Fusce quis augue sit amet quam tincidunt tincidunt.</p>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="mainQuiz">
      <h1 className="tituloQuiz">Nosso Quiz</h1>
      <div className="box">
        {quizTerminou ? mostrarResultado() : (
          <>
          <h1 className="pergunta">{Perguntas[perguntaAtual].pergunta}</h1>
          <ul className="alternativas">
            {Perguntas[perguntaAtual].alternativas.map((alternativa) => (
              <li className="alternativa">
                <button pontos={alternativa.pontos} onClick={(evento) => selecionado(evento)}>{alternativa.alternativa}</button>
                
              </li>
            ))}
            <button className = "nextQuiz" id="nextQuiz"  onClick={verificarFim}>NEXT</button>
          </ul>
          </>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Quiz;
