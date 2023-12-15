import '../Style/TitleText.css'

function TitleText(props){
    return(
        <>
            <h1 className="titulo">{props.title}</h1>
            <p className="texto">{props.text}</p>
        </>
    )
}

export default TitleText
