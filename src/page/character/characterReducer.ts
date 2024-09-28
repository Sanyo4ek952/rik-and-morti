import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {rikAndMortiAPI} from "../../api/rikAndMortiApi";

export type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

interface CharacterState {
    characters: CharacterType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CharacterState = {
    characters: [],
    status: 'idle',
    error: null,
};

const slice = createSlice({
    name: "character",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchCharacter.fulfilled, (state,action)=>{
            state.characters = action.payload.characterItems
        })
    }
})
export const characterReducer = slice.reducer

export const fetchCharacter = createAsyncThunk(`${slice.name}/fetchCharacter`, async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {

        const res = await rikAndMortiAPI.getCharacter()
        const characterItems = res.data.results
        return {characterItems};
    }
    catch (e){
        return rejectWithValue(null)
    }
})