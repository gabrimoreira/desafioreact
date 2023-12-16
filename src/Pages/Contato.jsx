import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import headerContato from "../Images/headerContato.jpg"
import Sedes from "../Components/Sedes"
import Formulario from "../Components/Formulario"
import Redes from "../Components/Redes"
function Contato(){

    return(
        <>
            <Navbar></Navbar>
            <Header imagem = {headerContato} titulo = {"  NOSSOS CONTATOS"}></Header>
            <Sedes></Sedes>
            <Formulario></Formulario>
            <Redes></Redes>
            <Footer></Footer>
        </>
    )
}
export default Contato