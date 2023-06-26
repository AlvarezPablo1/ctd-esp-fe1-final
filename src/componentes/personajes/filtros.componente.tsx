import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchFilterCharacters, filterCharacter } from '../../redux/slices/characterReducer';
import './filtros.css';

const Filtros = () => {
    const filter = useAppSelector((state) => state.characters.filter)
    const dispatch = useAppDispatch();

    useEffect(() =>{
        if(filter != undefined){
            dispatch(fetchFilterCharacters(filter))
        }
    }, [filter])


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(filterCharacter(e.target.value))
    }

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={filter} onChange={(e) => onChange(e)}/>
    </div>
}

export default Filtros;