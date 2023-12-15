import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Slider from "../Components/Slider"
import TitleText from "../Components/TitleText"
import "../Style/Main.css"



function Main(){

    return(
        <div className="main">
            <Navbar/>
            <Slider/>
            <TitleText></TitleText>
            <Footer/>
        </div>
    )
}
export default Main