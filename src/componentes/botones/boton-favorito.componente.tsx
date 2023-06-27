import './boton-favorito.css';


interface CharacterFavoriteProps{
    isFavorite: boolean
    onClick: () => void
}
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({isFavorite, onClick}: CharacterFavoriteProps) => {
    const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";

    return <div onClick={onClick} className="boton-favorito">
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;