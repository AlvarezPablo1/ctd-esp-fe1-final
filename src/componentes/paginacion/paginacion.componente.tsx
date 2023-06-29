import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchNextCharacters, fetchPrevCharacters } from '../../redux/slices/characterReducer';
import './paginacion.css';

/**
 * CONTIENE LOS BOTONES NECESARIOS PARA CAMBIAR DE PAGINA ENTRE LOS PERSONAJES
 * 
 * @author Pablo Alvarez
 * @returns un JSX element 
 */
const Paginacion = () => {
    const {next, prev} = useAppSelector((state) => state.characters)
    const dispatch = useAppDispatch();

    return <div className="paginacion">
        <button className={"primary"} disabled={prev == null} onClick={() => dispatch(fetchPrevCharacters())}>Anterior</button>
        <button className={"primary"} disabled={next == null} onClick={() => dispatch(fetchNextCharacters())}>Siguiente</button>
    </div>
}

export default Paginacion;