import '../Style/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar(){
    return(
        <div className = 'navbar'>
            <p className='chamada'>DÊ À SUA EMPRESA A MELHOR CONSULTORIA</p>
            <Link to = "/"><p>HOME</p></Link>
            <Link to = "/sobre"><p>SOBRE NÓS</p></Link>
            <Link to = "/contato"><p>CONTATO</p></Link>
            <Link to="/quiz"><p>QUIZ</p></Link>

        </div>
    )
}
export default Navbar