import "../Style/Quiz.css";

function Quiz() {
  const selecionado = (evento) => {
    const elemento = evento.target;
    const buttons = document.querySelectorAll(".alternativa button");
    buttons.forEach((button) => {
      button.classList.remove("selecionado");
    });
    elemento.classList.add("selecionado");
  };
  
  return (
    <div className="mainQuiz">
      <h1 className="tituloQuiz">Nosso Quiz</h1>
      <div className="box">
        <h1 className="pergunta"> Pergunta</h1>
        <ul className="alternativas">
          <li className="alternativa">
            <button onClick={(evento) => selecionado(evento)}>A</button>{" "}
          </li>
          <li className="alternativa">
            <button onClick={(evento) => selecionado(evento)}>B</button>
          </li>
          <li className="alternativa">
            <button onClick={(evento) => selecionado(evento)}>C</button>
          </li>
          <li className="alternativa">
            <button onClick={(evento) => selecionado(evento)}>D</button>
          </li>
          <li className="alternativa" id="nextQuiz">
            <button>NEXT</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
