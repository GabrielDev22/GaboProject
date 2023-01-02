import "./HeaderComponent.css"
import {Link} from "react-router-dom"
export const HeaderComponent = () => {
    return(
        <nav className="headerComponentBase">
        <ul>
            <li>
                {/* <a href="index.html">Inicio</a> */}
                <Link to="/">Inicio</Link>

            </li>

            <li>
                {/* <a href="formulario.html">Formuarlio</a> */}
                <Link to="/form">Formulario</Link>
            </li>

            <li>
                <Link to="/validador">Validador</Link>
            </li>

            <li>
                <Link to="/apiSimpons">FotoSimpons</Link>
            </li>

            <li>
                <Link to="/apiSimponsMultiple">SimponsMultiple</Link>
            </li>

        </ul>
    </nav>
    )
}
