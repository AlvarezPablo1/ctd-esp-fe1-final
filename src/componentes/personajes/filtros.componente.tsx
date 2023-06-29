import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchFilterCharacters, filterCharacter } from '../../redux/slices/characterReducer';
import './filtros.css';


/**
 * BUSCADOR POR NOMBRE PARA PODER VER UN PERSONAJE EN PARTICULAR
 * 
 * @author Pablo Alvarez 
 * @returns un jsx element
 */
const Filtros = () => {
    const filter = useAppSelector((state) => state.characters.filter)
    const dispatch = useAppDispatch();

    
    useEffect(() =>{
        if(filter != undefined){
            dispatch(fetchFilterCharacters(filter))
        }
    }, [filter])

    /*Dispara la action filterCharacter para poder filtrar por un nombre en especifico*/
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(filterCharacter(e.target.value))
    }

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={filter} onChange={(e) => onChange(e)}/>
    </div>
}

export default Filtros;