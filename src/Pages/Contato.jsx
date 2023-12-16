import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import headerContato from "../Images/headerContato.jpg"
import Sedes from "../Components/Sedes"
function Contato(){

    return(
        <>
            <Navbar></Navbar>
            <Header imagem = {headerContato} titulo = {"  NOSSOS CONTATOS"}></Header>
            <Sedes></Sedes>
            <Footer></Footer>
        </>
    )
}
export default Contato