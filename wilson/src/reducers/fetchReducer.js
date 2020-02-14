import initialState from "./initialState";
import { GET_GIF_SUCCESS, GET_GIF_FAIL, GET_GIF_LOADING } from "../actions/allActions";

// Name after the application we're creating I.E. GiphyReducer

export default function fetchGiphy(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_GIF_SUCCESS:
            // newState = action.fetchGiphy
            console.log(action.getGiphy)
            newState = {...state, idea: action.getGiphy, animal: action.getGiphy}
            // console.log(newState)
            // console.log("This works fetching success");
            return newState;
        case GET_GIF_FAIL: 
            console.log("This failed");
            return state;
        case GET_GIF_LOADING:
            console.log("Still Loading");
            return action;
        default:
            return state;
    }
}