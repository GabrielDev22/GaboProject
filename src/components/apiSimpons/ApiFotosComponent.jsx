import axios from "axios"
import { useEffect, useState} from "react"
export const ApiFotosComponent = () =>{
    
    const [simponsImg, setSimponsImg] = useState(null)
    const [condicion, setCondicion] = useState(false)

     const llamadaApiSimpons = async() => {
       const result = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes"); 

        setSimponsImg(result.data[0].image)

        }

    useEffect(() => {
        llamadaApiSimpons()
    },[condicion])


    return(
        <div>

            <img className="fotoSimpons" src={simponsImg} alt="" />
            <hr /> 
            <button className="botonCambioDeEstado" onClick={() => setCondicion(!condicion)}>Reiniciar</button>

        </div>       
    )
} 