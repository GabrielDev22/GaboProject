import "./FormComponent.css"
import {useState} from "react"
export const FormComponent = () => {

    const [nombre, setNombre] = useState(null); 
    const [edad, setEdad] = useState(null);
    const [email, setEmail] = useState(null);
    const [envio, setEnvio] = useState(null)

    const imprimirNombre = (e) => {
        var targetValue = e.target.value
        var numeroConvetido = Number.parseInt(targetValue)
        var isNotNombre = !Number.isInteger(numeroConvetido)
       
        if(isNotNombre){
            setNombre(e.target.value)
        }
        console.log(nombre)

    }

    const imprimirEdad = (e) =>{

        var targetValue = e.target.value
        var numeroConvetido = Number.parseInt(targetValue)
        var isNumber = Number.isInteger(numeroConvetido)

        if(isNumber){
            setEdad(numeroConvetido)
        }

        console.log(edad)
    }

    const imprimirEmail = (e) =>{
        
        if(checkIfEmail(e.target.value)){
            setEmail(e.target.value)
        }
        console.log(email)
    }

    const checkIfEmail = (email) => {
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        return regexExp.test(email);
    }

    const enviarFormulario = () => {
        if(nombre != null && email != null && edad != null){
            const campoCompletados = {
                nombre,
                edad,
                email
            }

            setEnvio(campoCompletados)
            console.log(campoCompletados)

        }else{  
            console.log('Fallo en la validacion')
        }
    }





    return(
        <div className="formulario">
        <h1>Formulario</h1>
        <form>
            <label>Nombre</label>
            <input onChange={(event) => imprimirNombre(event) } type="text" required />

            <label>Edad</label>
            <input onChange={(event) => imprimirEdad(event)} type="text" required />

            <label>Email</label>
            <input onChange={(event) => imprimirEmail(event)} type="text" required />
        </form>

        <button onClick={enviarFormulario}>Enviar</button>
    </div>
    )
}