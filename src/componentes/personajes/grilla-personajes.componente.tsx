
import { Character } from '../../types/character.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

interface CharacterGridProps {
    characters : Character[]
}

const GrillaPersonajes = ({characters}: CharacterGridProps) => {
    
    return <div className="grilla-personajes">
        {
            characters.map((character) =>(
                <TarjetaPersonaje key={character.id} character={character}/>
            ))
        }
    </div>
}

export default GrillaPersonajes