import '../Style/NumberList.css'
function NumberList(props) {
    return (
      <div className="sessao">
        <h1 className="titulo">{props.titulo}</h1>
        <ul className="lista">
          {props.numeros.map((numero) => (
            <li className="item" key={numero.nome}>
              <span className="nome">{numero.nome}</span>
              <span className="valor">{numero.valor}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default NumberList;
  