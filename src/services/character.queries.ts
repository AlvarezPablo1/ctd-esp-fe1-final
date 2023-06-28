import axios from "axios"
import { InitialState} from "../redux/slices/characterReducer"
import { GET_CHARACTER_BY_PAGE, GET_EPISODES_BY_CHARACTER, GET_SINGLE_CHARACTER } from "./api"

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
  return getCharactersByPage(GET_CHARACTER_BY_PAGE)
}

export const getfilterCharacter = async (filter: string) => {
  return getCharactersByPage(`${GET_SINGLE_CHARACTER}?name=${filter}&page=1`)
}


export const getCharactersByArray = async (array: number[]) => {
  let data = []
  if (array.length > 0) {
      const response = await axios(`${GET_SINGLE_CHARACTER}${String(array)}`)
          .then((response) => response.data)
      if (response.length > 0) {
          data = mapCharacter(response)
      } else {
          data = mapCharacter([response])
      }
  }
  return data
}

export const getEpisodesByArray = async (array: number[]) => {
  let data = []
  if (array.length > 0) {
      const response = await axios(`${GET_EPISODES_BY_CHARACTER}${String(array)}`)
          .then((response) => response.data)
      if (response.length > 0) {
          data = mapEpisode(response)
      } else {
          data = mapEpisode([response])
      }
  }
  return data
}