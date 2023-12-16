import header1 from "../Images/header1.jpg"
import "../Style/Header.css"
function Header(){
    return(
        <div className="header">
            <img src={header1} alt="Fundo do header" />
            <h1>SOBRE NÓS</h1>
        </div>
    )
}

export default Header
