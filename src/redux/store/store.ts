import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer} from "../slice/characters.slice";
import {locationReducer} from "../slice/location.slice";
import {episodesReducer} from "../slice/episode.slice";




const comb = combineReducers({
    characters:charactersReducer,
    locations:locationReducer,
    episodes:episodesReducer
});

const setupStore = () => configureStore({
    reducer:comb,
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

type RootState = ReturnType<typeof comb>
type setup = ReturnType<typeof setupStore>
type AppDispatch = setup['dispatch']

export type {
    RootState,
    setup,
    AppDispatch
}

export {
    setupStore
}