import React, { useState } from "react";
import slide1 from "../Images/slide1.jpg"
import slide2 from "../Images/slide2.jpg"
import slide3 from "../Images/slide3.jpg"
import "../Style/Slider.css"

function Slider(){
  const imagens = [slide1,slide2,slide3];
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index === imagens.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevImage = () => {
    if (index === 0) {
      setIndex(imagens.length - 1);
    } else {

      setIndex(index - 1);
    }
  };

  return(
    <div className="slider">
      <button className="prev" onClick={prevImage}> Anterior</button>
      <div ><img className="slideimg" src={imagens[index]} alt="" /></div>
      <button className="next" onClick={nextImage}>Próximo</button>
    </div>
  )
}
export default Slider;
