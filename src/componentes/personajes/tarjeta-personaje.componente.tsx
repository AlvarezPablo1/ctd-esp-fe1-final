import { Character } from '../../types/character.types';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

interface CharacterProps{
    character: Character
}

const TarjetaPersonaje = ({character} : CharacterProps) => {


    return ( 
        <div className="tarjeta-personaje">
            <img src={character.image} alt={character.name} />
            <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            
        </div>
        </div>
    )
}

export default TarjetaPersonaje;