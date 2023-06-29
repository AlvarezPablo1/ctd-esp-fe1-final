import {Link, useNavigate} from "react-router-dom";
import './encabezado.css';

/**
    CONTIENE LOS LINKS PARA PODER NAVEGAR POR LA PAGINA

    @author Pablo alvarez
    @returns un jsx element
 */
const Encabezado = (): JSX.Element => {

    const navigate = useNavigate();


    return <header>
            <div>
                <div>
                    <h2 onClick={() =>navigate("/")}>Examen Final de Frontend IV</h2>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                        <li><Link to="/detalle">Detalle</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Encabezado