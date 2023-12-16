import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Servicos from "../Components/Servicos"
import header1 from "../Images/header1.jpg"
function Sobre(){

    return(
        <>
            <Navbar></Navbar>
            <Header titulo= {"SOBRE NÓS"}
            imagem={header1}></Header>
            <Servicos></Servicos>
            <Footer></Footer>
        </>

    )
}
export default Sobre