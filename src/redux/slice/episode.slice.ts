import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RequestService} from "../../services";
import {EpisodeTypes} from "../../interfaces";
import {EpisodeParamsProps} from "../../interfaces/ParamsProps";

export interface initialStateEpisodes {
    episodes_: Array<EpisodeTypes>|undefined,
    episode:EpisodeTypes,
    params_:EpisodeParamsProps|undefined
}

const initialState: initialStateEpisodes = {
    episodes_: undefined,
    episode:{
        episode:'Episode',
        characters:[],
        name:'Ep',
        id:2222332,
        air_date:'10.10.10',
        url:'www.www.www',
        created:'333'
    },
    params_:undefined
   };

const getEpisodeById = createAsyncThunk(
    'charactersSlice/getEpisodeById',
    async (id: string, {rejectWithValue}) => {
        try {
            const {data} = await RequestService.getEpisodeById(id);
            return data
        } catch (e: any) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getEpisodesById = createAsyncThunk(
    'charactersSlice/getEpisodesById',
    async (id: string, {rejectWithValue}) => {
        try {
            const {data} = await RequestService.getEpisodeById(id);
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
        getEpisodesParams(state,action){
            state.params_ = action.payload
        },
        setUndefined(state){
            state.episodes_ = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEpisodeById.fulfilled, (state, action) => {
                state.episode = action.payload;
            })
            .addCase(getEpisodesById.fulfilled, (state, action) => {
                state.episodes_ = action.payload;
            })
    }

});

const {reducer: episodesReducer,actions:{getEpisodesParams,setUndefined}} = charactersSlice;

const episodesAction = {
    getEpisodeById,
    getEpisodesById,
    getEpisodesParams,
    setUndefined
}

export {
    episodesReducer,
    episodesAction
}
