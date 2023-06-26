import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetFilter } from "../redux/slices/characterReducer";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const {characters, isLoading} = useAppSelector((state) => state.characters)
    const dispatch = useAppDispatch();

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button onClick={()=> dispatch(resetFilter())} className="danger">borrar filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        {isLoading ?( "cargando...") : (
            <GrillaPersonajes characters={characters}/>
        )}
        <Paginacion />
    </div>
}

export default PaginaInicio