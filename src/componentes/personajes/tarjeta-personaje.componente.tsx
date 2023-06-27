import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setDetail } from '../../redux/slices/detailReducer';
import { Character } from '../../types/character.types';
import './tarjeta-personaje.css';
import BotonFavorito from '../botones/boton-favorito.componente';
import { fetchToggleFavorite } from '../../redux/slices/favoriteReducer';



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
    const {list} = useAppSelector((state) => state.favorite)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const viewDetail = () => {
        dispatch(setDetail(character))
        navigate("/detalle")
    }

    const onClickFavorite = () => {
        dispatch(fetchToggleFavorite(character.id))
    }

    const isFavorite = list.includes(character.id)
    return ( 
        <div className="tarjeta-personaje">
            <img  src={character.image} alt={character.name} onClick={() => viewDetail()}/>
            <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito onClick={onClickFavorite} isFavorite={isFavorite} />
        </div>
        </div>
    )
}

export default TarjetaPersonaje;