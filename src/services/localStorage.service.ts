

/* */
export const getFavFromStorage = () => {
  const favorites = localStorage.getItem('favs')
  if (favorites) {
      return JSON.parse(favorites)
  }
  return []
};

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


export const resetFavorites = () => {
  localStorage.removeItem('favs')
  return []
}
