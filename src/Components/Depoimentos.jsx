import {useEffect, useState} from 'react'
import "../Style/Depoimentos.css"
function Depoimentos(){
    const [Depoimentos, setDepoimentos] = useState([]);
    useEffect(()=>{
    fetch("http://localhost:5000/depoimentos", {
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json()).then((data)=>{
        setDepoimentos(data)
    })
    .catch((erro)=> console.log(erro))
}, [])
console.log(Depoimentos)
    function Card(props) {
        return (
          <div className="card">
            <img src={props.imagem} className="card-img" alt={props.imagem} />
            <div className="card-body">
              <h5 className="card-titulo">{props.nome}</h5>
              <p className="card-texto">Opinião: {props.texto}</p>
            </div>
          </div>
        )
      }
      

    return(
        
        <>
        <section className="main-container">
            <h1 className="titulo">
            Depoimentos
            </h1>
            <div className="cards">
                {Depoimentos.map((depoimento) => (
                    <Card 
                        key={depoimento.nome}
                        nome={depoimento.nome}
                        texto={depoimento.texto}
                        imagem={depoimento.imagem}
                    />
                ))}
            </div>
        </section>
        </>

    )
}
export default Depoimentos
