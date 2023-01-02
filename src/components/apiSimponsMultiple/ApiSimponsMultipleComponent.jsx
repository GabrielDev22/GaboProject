import "./ApiSimponsMultipleComponent.css"
import axios from "axios"
import { useEffect, useState} from "react"

export const ApiSimponsMultipleComponent = () => {

    const [simponsImg, setSimponsImg] = useState(null)
    const [condicion, setCondicion] = useState(false)

     const llamadaApiSimpons = async() => {
       const result = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10"); 

        setSimponsImg(result.data)

        }

    useEffect(() => {
        llamadaApiSimpons()
    },[condicion])



    return(
        <div>

            {simponsImg == null ? 
            <p>Esperando porfavor...</p>: 
            <div className="contenedorImagenes">
                {simponsImg.map(particularImg => (
                    <img key={particularImg.quote} className="imagenSimponsMultiple" src={particularImg.image} alt="" />
                ))}
            </div>}

        </div>
    )


}