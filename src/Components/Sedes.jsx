import {useEffect, useState} from 'react'
import "../Style/Sedes.css"
function Sedes(){
    const [Sedes, setSedes] = useState([]);
    useEffect(()=>{
    fetch("http://localhost:5000/sedes", {
        method: "GET",
        headers:{
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json()).then((data)=>{
        setSedes(data)
    })
    .catch((erro)=> console.log(erro))
}, [])
console.log(Sedes)
    function Card(props) {
        return (
          <div className="card">
            <img src={props.imagem} className="card-img" alt={props.imagem} />
            <div className="card-body">
              <h5 className="card-titulo">
                Sede: {props.Local}</h5>
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
                {Sedes.map((Sede) => (
                    <Card 
                        key={Sede.Local}
                        Local={Sede.Local}
                        texto={Sede.texto}
                        imagem={Sede.imagem}
                    />
                ))}
            </div>
        </section>
        </>

    )
}
export default Sedes
