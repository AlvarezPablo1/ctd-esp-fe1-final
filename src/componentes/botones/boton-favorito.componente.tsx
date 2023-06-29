import './boton-favorito.css';


interface CharacterFavoriteProps{
    isFavorite: boolean
    onClick: () => void
}

/**
 * BOTON QUE ACTIVA EL GUARDADO/ELIMINACION EN EL LOCALSTORAGE DE LOS PERSONJES QUE SEAN MARCADOS/DESMARCADOS COMO FAVORITOS
 * 
 * @author Pablo Alvarez
 * @param {boolean} isFavorite - Dependiendo si es verdadero o falso, cambia el boton de favoritos o no
 * @param {onclick} onClick - El encargado de disparar la action correspondiente cuando se clickea el boton 
 * @returns JSX element 
 */
const BotonFavorito = ({isFavorite, onClick}: CharacterFavoriteProps) => {
    const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";

    return <div onClick={onClick} className="boton-favorito">
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;