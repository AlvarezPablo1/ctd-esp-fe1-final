import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character, Episode } from "../../types/character.types";
import { RootState } from "../store";
import { getEpisodesByArray } from "../../services/character.queries";

interface InitialState {
    character: Character,
    isLoading: boolean,
    episodes: Episode[],
}

const initialState:InitialState= {
    character: {
        id: -1,
        name: "",
        url: "",
        image: "",
        location: "",
        gender: "",
        episodes: [],
    },
    isLoading: true,
    episodes: [],
}

export const fetchEpisodes = createAsyncThunk(
    'episodes/fetchEpisodes',
    async (_, { getState }) => {
        const state = getState() as RootState
        const { character } = state.detail
        if (character.episodes === undefined) {
            return []
        }
        const arrayEpisodesId = character.episodes.map((episode: any) => {
            const arrayUrl = episode.split("/")
            const id = arrayUrl[arrayUrl.length - 1]
            return Number(id)
        })
        const response = getEpisodesByArray(arrayEpisodesId)
        return response
    }
)

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        setDetail: (state, action) => {
            state.character = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEpisodes.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.isLoading = false
                state.episodes = action.payload
            })
    },
})

export const { setDetail } = detailSlice.actions
export default detailSlice.reducer