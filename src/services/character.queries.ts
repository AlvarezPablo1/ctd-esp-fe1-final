import axios from "axios"
import { InitialState} from "../redux/slices/characterReducer"

const mapCharacter = (characterToMap : any) => {
  return characterToMap.map((character : any) => ({
    id: character.id,
    image: character.image,
    url: character.url,
    name: character.name,
    location: character.location.name,
    gender: character.gender,
    episodes: character.episode
  }))
}


export const getCharactersByPage = async (url: string) => {
  const response = await axios(url)  
    .then((response) => response.data)
    
  const data: InitialState = {
    isLoading : false,
    next: response.info.next,
    prev: response.info.prev,
    characters: mapCharacter(response.results),
  }
  
  return data
}




export const getCharacters = async () => {
  return getCharactersByPage(`https://rickandmortyapi.com/api/character/?page=1`)
}

export const getfilterCharacter = async (filter: string) => {
  return getCharactersByPage(`https://rickandmortyapi.com/api/character/?name=${filter}&page=1`)
}
