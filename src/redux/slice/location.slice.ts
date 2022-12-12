import {createSlice} from "@reduxjs/toolkit";
import {LocationParamsProps} from "../../interfaces";

export interface initialStateLocation {
    location:Array<string>;
    locationParams:LocationParamsProps|undefined

}

const initialState:initialStateLocation = {
    location:[],
    locationParams:undefined
};


const charactersSlice = createSlice({
    name:'charactersSlice',
    initialState,
    reducers:{
        getDimensions(state,action){
            state.location = action.payload
        },
        getLocationParams(state,action){
            state.locationParams = action.payload;
        }
    }

});


const {reducer:locationReducer,actions:{getDimensions,getLocationParams}} = charactersSlice;


const locationAction = {
    getDimensions,
    getLocationParams
}

export {
    locationReducer,
    locationAction
}
