import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setDetail } from '../../redux/slices/detailReducer';
import { Character } from '../../types/character.types';
import './tarjeta-personaje.css';



interface CharacterProps{
    character: Character
}
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({character} : CharacterProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const viewDetail = () => {
        dispatch(setDetail(character))
        navigate("/detalle")
    }

    return ( 
        <div className="tarjeta-personaje" onClick={() => viewDetail()}>
            <img src={character.image} alt={character.name} />
            <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
        </div>
        </div>
    )
}

export default TarjetaPersonaje;