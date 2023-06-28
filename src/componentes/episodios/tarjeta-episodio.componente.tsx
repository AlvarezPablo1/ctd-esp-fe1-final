import { Episode } from '../../types/character.types';
import './tarjeta-episodio.css';

interface EpisodeProps{
    episode: Episode
}

/**
 * @author
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
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