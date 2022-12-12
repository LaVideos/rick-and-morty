import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RequestService} from "../../services";
import {CardProps, ParamsProps} from "../../interfaces";

export interface initialStateCharacters {
    characters: Array<CardProps>,
    character_: Array<CardProps>,
    needReload:boolean,
    charactersParams:ParamsProps|undefined
}

const initialState: initialStateCharacters = {
    characters: [],
    character_: [],
    needReload:false,
    charactersParams:undefined,
};

const getCharacterById = createAsyncThunk(
    'charactersSlice/getCharacterById',
    async (id: string, {rejectWithValue}) => {
        try {
            const {data} = await RequestService.getCharacterById(id);
            return data
        } catch (e: any) {
            return rejectWithValue(e.response.data)
        }
    }
);


const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {
        getAccessToReload(state, action) {
            state.needReload = action.payload
        },
        getCharacters(state,action){
            state.characters = action.payload
        },
        getCharacterParams(state,action){
            state.charactersParams = action.payload;
        }
    },
        extraReducers: (builder) => {
        builder
            .addCase(getCharacterById.fulfilled, (state, action) => {
                state.character_ = action.payload.results;
            })
    }

});


const {reducer: charactersReducer, actions: {getAccessToReload,getCharacters,getCharacterParams}} = charactersSlice;


const charactersAction = {
    getCharacterById,
    getAccessToReload,
    getCharacters,getCharacterParams
}

export {
    charactersReducer,
    charactersAction
}
