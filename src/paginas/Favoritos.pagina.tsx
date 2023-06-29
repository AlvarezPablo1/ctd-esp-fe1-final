// import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { fetchResetFavorites } from "../redux/slices/favoriteReducer"

/**
 * MUESTRA TODOS LOS PERSONAJES QUE SE HAYAN DEFINIDO COMO FAVORITOS
 * 
 * @author Pablo Alvarez
 * @returns un jsx element sobre la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const {characters} = useAppSelector(state => state.favorite)
    const dispatch = useAppDispatch()

    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button onClick={() => dispatch(fetchResetFavorites())} className="danger">Quitar todos</button>
            </div>
            <GrillaPersonajes characters={characters} />
        </div>
    )
}
export default PaginaFavoritos