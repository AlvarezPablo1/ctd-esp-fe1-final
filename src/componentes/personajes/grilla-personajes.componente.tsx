
import { Character } from '../../types/character.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

interface CharacterGridProps {
    characters : Character[]
}

/**
 * GRILLA EN DONDE SE RENDERIZAN LOS PERSONAJES
 * 
 * @author Pablo Alvarez
 * @param {object} characters -array de objetos de tipo Character (interface) para darle los valores necesarios a *TarjetaPersonaje* y poder renderizar las cards con la informacion necesaria
 * @returns un JSX element 
 */
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