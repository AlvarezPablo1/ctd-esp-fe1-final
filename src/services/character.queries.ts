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

const mapEpisode = (episodeToMap: any) =>{
  return episodeToMap.map((episode: any) =>({
    id: episode.id,
    title: episode.name,
    date: episode.air_date,
    episode: episode.episode
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

export const getEpisodesByArray = async (array: number[]) => {
  let data = []
  if (array.length > 0) {
      const response = await fetch(`https://rickandmortyapi.com/api/episode/${String(array)}`)
          .then((response) => response.json())
      if (response.length > 0) {
          data = mapEpisode(response)
      } else {
          data = mapEpisode([response])
      }
  }
  return data
}