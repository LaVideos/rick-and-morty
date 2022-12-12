import {setupStore,RootState,setup,AppDispatch} from "./store/store";
import {charactersReducer,charactersAction} from "./slice/characters.slice";
import {locationAction,locationReducer} from "./slice/location.slice";
import {episodesAction,episodesReducer} from "./slice/episode.slice";

export type {
    setup,
    RootState,
    setupStore,
    AppDispatch,
}

export {
    charactersReducer,
    charactersAction,
    locationReducer,
    locationAction,episodesReducer,
    episodesAction
}
