import { Episode } from '../../types/character.types';
import './tarjeta-episodio.css';

interface EpisodeProps{
    episode: Episode
}

/**
 * TARJETA QUE MUESTRA LA INFO DE CADA CAPITULO EN EL QUE UN PERSONAJE ESPECIFICO APARECIO
 * 
 * @author Pablo Alvarez
 * @param {object} episode - Objeto de tipo Episode (interface) con la información necesaria a renderizar en la pagina cuando se seleccione un personaje en particular
 * @returns un JSX element
 */
const TarjetaEpisodio = ({episode}: EpisodeProps) => {

    return <div className="tarjeta-episodio">
            <h4>{episode.title}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>Lanzado el: {episode.date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;