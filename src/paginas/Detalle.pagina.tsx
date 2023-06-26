import "./Detalle.css";
// import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    
    const { character, episodes, isLoading } = useAppSelector(state => state.detail)


    if (character.id === -1) return <div className="container">
        <h3>Seleccione un personaje para ver sus datos</h3>
        <Link to={'/'}>Ver listado</Link>
    </div>

    return <div className="container">
        <h3>{character.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={character.image} alt={character.name} />
                <div className={"detalle-header-texto"}>
                    <p>{character.name}</p>
                    <p>Planeta: {character.location}</p>
                    <p>Genero: {character.gender}</p>
                </div>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {isLoading ? <p>Cargando...</p> :
                episodes.map(episode => <TarjetaEpisodio key={episode.id} episode={episode} />)
            }
        </div>
    </div>
}

export default PaginaDetalle