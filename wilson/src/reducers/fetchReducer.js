import initialState from "./initialState";
import { GET_GIF_SUCCESS, GET_GIF_FAIL, GET_GIF_LOADING } from "../actions/actionTypes";

const giphy = (state = initialState, action) => {
    switch(action.type) {
        case GET_GIF_SUCCESS:
            console.log("This works")
            return {
                ...state,
                idea: "dog",
            }, console.log(state); 
        case GET_GIF_FAIL: 
            console.log("This failed");
            return state;
        case GET_GIF_LOADING:
            console.log("Still Loading");
            return {
                ...state,
                idea:"loading"
            }, console.log(state);
        default:
            return state;
    }
}

export default giphy;