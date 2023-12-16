
import "../Style/Header.css"
function Header(props){
    return(
        <div className="header">
            <img src={props.imagem} alt="Fundo do header" />
            <h1 className="titulo">{props.titulo}</h1>
        </div>
    )
}

export default Header
