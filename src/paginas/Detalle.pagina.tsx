import "./Detalle.css";
// import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import { fetchToggleFavorite } from "../redux/slices/favoriteReducer";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";

/**
 * PAGINA QUE MUESTRA EL DETALLE DE CADA PERSONAJE MÁS LOS EPISODIOS EN LOS QUE APARECIO
 * 
 * @author Pablo Alvarez
 * @returns un jsx element sobre la pagina de detalle
 */
const PaginaDetalle = () => {
    
    const { character, episodes, isLoading } = useAppSelector(state => state.detail)
    const {list} = useAppSelector((state) => state.favorite)
    const dispatch = useAppDispatch()

    /*Si el array de personajes del detailReducer esta vacio, muestra este texto pre-definido */
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
                <BotonFavorito onClick={() => dispatch(fetchToggleFavorite(character.id))} isFavorite={list.includes(character.id)} />
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