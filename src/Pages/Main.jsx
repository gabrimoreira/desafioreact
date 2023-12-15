import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Slider from "../Components/Slider"
import "../Style/Main.css"



function Main(){

    return(
        <div className="main">
            <Navbar/>
            <Slider/>
            <Footer/>
        </div>
    )
}
export default Main