import { PayloadAction,  createAsyncThunk,  createSlice } from "@reduxjs/toolkit";
import { getCharacters, getCharactersByPage, getfilterCharacter } from "../../services/character.queries";
import { Character } from "../../types/character.types";
import { RootState } from "../store";

export interface InitialState{
  isLoading : boolean
  next : string | null
  prev: string | null
  characters: Character[]
  filter?: string
}

const initialState : InitialState = {
  isLoading: true,
  next: null,
  prev: null,
  characters: [],
  filter: '',
}

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
      const response = await getCharacters()
      return response
  }
  
)

export const fetchFilterCharacters = createAsyncThunk(
  'characters/fetchFilterCharacters',
  async (filter: string) => {
    const response = await getfilterCharacter(filter)
    return response
  }
)

export const fetchNextCharacters = createAsyncThunk(
  'characters/fetchNextCharacters',
  async (_, {getState}) =>{

    const state = getState() as RootState
    const next = state.characters.next

    if(next == null){
      throw new Error( "no hay mas personajes");
    }else{
      const response = await getCharactersByPage(next)
      return response
    }
  }
)

export const fetchPrevCharacters = createAsyncThunk(
  'characters/fetchPrevCharacters',
  async (_, {getState}) =>{

    const state = getState() as RootState
    const prev = state.characters.prev

    if(prev == null){
      throw new Error( "no hay mas personajes");
    }else{
      const response = await getCharactersByPage(prev)
      return response
    }
  }
)

const characterSlice = createSlice({
  name: "characterSlice",
  initialState,
  reducers: {
    filterCharacter: (state, action: PayloadAction<string>) =>{
      state.filter = action.payload
    },
    resetFilter: (state) =>{
      state.filter = ""
    }
  },
  extraReducers: (builder)=> {
    builder
      .addCase(fetchCharacters.pending, (state) => {
          state.isLoading = true;
        })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false
        state.prev = action.payload.prev
        state.next = action.payload.next
        state.characters = action.payload.characters
      })

      .addCase(fetchFilterCharacters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchFilterCharacters.fulfilled, (state, action) =>{
        state.isLoading = false
        state.prev = action.payload.prev
        state.next = action.payload.next
        state.characters = action.payload.characters
      })

      .addCase(fetchNextCharacters.pending, (state) =>{
        state.isLoading = true
      })
      .addCase(fetchNextCharacters.fulfilled, (state, action) =>{
        state.isLoading = false
        state.prev = action.payload.prev
        state.next = action.payload.next
        state.characters = action.payload.characters
      })

      .addCase(fetchPrevCharacters.pending, (state) =>{
        state.isLoading = true
      })
      .addCase(fetchPrevCharacters.fulfilled, (state, action) =>{
        state.isLoading = false
        state.prev = action.payload.prev
        state.next = action.payload.next
        state.characters = action.payload.characters
      })
    }
})

export const {filterCharacter, resetFilter} = characterSlice.actions

export default characterSlice.reducer