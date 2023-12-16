import {useEffect, useState} from 'react'
import "../Style/Servicos.css"
function Servicos(){
    const [Servicos, setServicos] = useState([]);
    useEffect(()=>{
    fetch("http://localhost:5000/Servicos", {
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json()).then((data)=>{
        setServicos(data)
    })
    .catch((erro)=> console.log(erro))
}, [])
console.log(Servicos)
    function Card(props) {
        return (
          <div className="card">
            <img src={props.imagem} className="card-img" alt={props.imagem} />
            <div className="card-body">
              <h5 className="card-titulo">{props.nomeServico}</h5>
              <p className="card-texto">EXPLICAÇÃO: {props.texto}</p>
            </div>
          </div>
        )
      }
      

    return(
        
        <>
        <section className="main-container">
            <h1 className="titulo">
            Serviços
            </h1>
            <div className="cards">
                {Servicos.map((servico) => (
                    <Card 
                        key={servico.nomeServico}
                        nome={servico.nomeServico}
                        texto={servico.texto}
                        imagem={servico.imagem}
                    />
                ))}
            </div>
        </section>
        </>

    )
}
export default Servicos
