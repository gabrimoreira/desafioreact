import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Slider from "../Components/Slider"
import TitleText from "../Components/TitleText"
import NumberList from "../Components/NumberList"
import Depoimentos from "../Components/Depoimentos"
import "../Style/Main.css"



function Main(){
    const numeros = [
        { nome: 'Faturamento: ', valor: 1000000},
        { nome: 'Lucro: ', valor: 500000},
        { nome: 'Clientes: ', valor: 10000},
        { nome: 'Produtos: ', valor: 500},
      ];
    return(
        <div className="main">
            <Navbar/>
            <Slider/>
            <TitleText
        title="Nossa história"
        text="Somos uma empresa que oferece soluções inovadoras para o mercado:                     
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo sapiente officia neque, ratione nostrum doloremque, dignissimos incidunt ab, ex vitae fugiat. Harum perferendis commodi aut. Nobis deserunt amet eum ab."
      />
            <NumberList numeros={numeros} titulo = {"Nosso Números(2022)"} />
            <Depoimentos/>
            <Footer/>
            
        </div>
    )
}
export default Main