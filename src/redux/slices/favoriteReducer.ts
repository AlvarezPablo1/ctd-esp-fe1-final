import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types/character.types";
import { getFavFromStorage, resetFavorites, toggleFavorite } from "../../services/localStorage.service";
import { RootState } from "../store";
import { getCharactersByArray } from "../../services/character.queries";


interface InitialState{
  list: number[]
  characters: Character[]
}

const initialState: InitialState = {
  list: [],
  characters : []
}


export const fetchFavorite = createAsyncThunk(
  "favorite/fetchFavorite",
  async () => {
    const response = await getFavFromStorage()
    return response
  }
)

export const fetchToggleFavorite = createAsyncThunk(
  "favorite/fetchToggleFavorite",
  async (id: number) => {
    const response = toggleFavorite(id)
    return response
  }
)

export const fetchFavoritesCharacters= createAsyncThunk(
  'personajes/fetchFavoritesCharacters',
  async (_, { getState }) => {
      const state = getState() as RootState
      const { list } = state.favorite
      const response = getCharactersByArray(list)
      return response
  }
)

export const fetchResetFavorites = createAsyncThunk(
  'favoritos/fetchResetFavorites',
  async () => {
      const response = resetFavorites()
      return response
  }
)


const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
        .addCase(fetchFavorite.fulfilled, (state, action) => {
            state.list = action.payload
        })
        .addCase(fetchToggleFavorite.fulfilled, (state, action) => {
            state.list = action.payload
        })
        .addCase(fetchFavoritesCharacters.fulfilled, (state, action) => {
            state.characters = action.payload
        })
        .addCase(fetchResetFavorites.fulfilled, (state, action) => {
            state.list = action.payload
        })
}
})

export default favoriteSlice.reducer;