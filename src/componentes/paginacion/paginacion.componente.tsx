import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchNextCharacters, fetchPrevCharacters } from '../../redux/slices/characterReducer';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
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