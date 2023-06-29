

/*Busca los personajes favoritos que esten guardados en el local storage */
export const getFavFromStorage = () => {
  const favorites = localStorage.getItem('favs')
  if (favorites) {
      return JSON.parse(favorites)
  }
  return []
};


/**
 * GUARDA UN PERSONAJE COMO FAVORITO EN EL LOCAL STORAGE
 * 
 * @author Pablo Alvarez
 * @param {number} fav - el id del personaje que se desea guardar en el storage
 * @returns un array con todos los perosnajes que tiene el local storage
 */
export const setFavInStorage = (fav: number) => {
  let favorites = getFavFromStorage()
  if (!favorites) {
      favorites = []
  }

  if (favorites.includes(fav)) {
      return favorites
  }

  const newFavorites = [...favorites, fav]
  localStorage.setItem('favs', JSON.stringify(newFavorites))

  return newFavorites
}

/**
 * ELIMINA UN PERSONAJE COMO FAVORITO EN EL LOCAL STORAGE
 * 
 * @author Pablo Alvarez
 * @param {number} fav - el id del personaje que se desea eliminar en el storage
 * @returns un array con todos los perosnajes que tiene el local storage menos el que eliminamos
 */
export const removeFavInStorage = (fav: number) => {
  const favorites = getFavFromStorage()
  if (!favorites) {
      return []
  }

  if (!favorites.includes(fav)) {
      return favorites
  }

  const newFavorites = favorites.filter((f: number) => f !== fav)
  localStorage.setItem('favs', JSON.stringify(newFavorites))

  return newFavorites
}

/**
 * ENCARGADO DE ELIMINAR O GUARDAR UN PERSONAJE EN FAVORITOS
 * 
 * @author Pablo Alvarez
 * @param {number} id - recibe un id y si ya existe en el storage, lo *elinima*. Caso contrario *guarda*
 * @returns una función, ya se *setFavInStorage* o *RemoveFavInStorage*
 */
export const toggleFavorite = (id: number) => {
  const favoritos = getFavFromStorage()
  if (!favoritos) {
      return setFavInStorage(id)
  }

  if (!favoritos.includes(id)) {
      return setFavInStorage(id)
  }

  return removeFavInStorage(id)
}

/*Resetea el storage*/
export const resetFavorites = () => {
  localStorage.removeItem('favs')
  return []
}
