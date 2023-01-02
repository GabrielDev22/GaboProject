import "./ValidadorComponent.css"
import {useState} from "react"
export const ValidadorComponent = () => {

    const [nombre, setNombre] = useState(null); 
    const [edad, setEdad] = useState(null);
    const [email, setEmail] = useState(null);

    const imprimirNombre = (e) => {
       
        console.log(e.target.value)

    }

    const imprimirEdad = (e) =>{

        console.log(e.target.value)
    }

    const imprimirEmail = (e) =>{
        
        console.log(e.target.value)
    }

    return(
       <div className="validador">
            <h1 className="tituloValidador">Validador</h1>
            <h3 className="subtituloValidador">Resultado Final</h3>
            <p className="texto__Validacion">Validacion del Nombre</p>
            <p className="texto__Validacion">Validacion del Edad</p>
            <p className="texto__Validacion">Validacion del Email</p>


        <div className="formulario">
        <h1>Formulario</h1>
        <form autocomplete="off">
            <label for="Nombre">Nombre</label>
            <input onChange={(event) => imprimirNombre(event) } type="text" required />

            <label for="Edad">Edad</label>
            <input onChange={(event) => imprimirEdad(event)} type="text" required />

            <label for="Email">Email</label>
            <input onChange={(event) => imprimirEmail(event)} type="text" required />
        </form>

        <button>Enviar</button>
    </div>
       </div>
    )
}