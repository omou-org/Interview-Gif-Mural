import initialState from "./initialState";
import { GET_GIF_SUCCESS, GET_GIF_FAIL, GET_GIF_LOADING } from "../actions/allActions";

export default function giphyReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_GIF_SUCCESS:
            newState = {...state, [action.payload.query]: action.payload}
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