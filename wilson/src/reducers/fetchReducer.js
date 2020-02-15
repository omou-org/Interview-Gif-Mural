import initialState from "./initialState";
import { GET_GIF_SUCCESS, GET_GIF_FAIL, GET_GIF_LOADING } from "../actions/allActions";

// Name after the application we're creating I.E. GiphyReducer

export default function fetchGiphy(state = initialState, action) {
    let newState;
    switch(action.type) {
        case GET_GIF_SUCCESS:
            // newState = action.fetchGiphy
            // console.log(action.payload.data)
            // newState = {...state, idea: action.payload.data}
            // console.log(newState)
            // console.log("This works fetching success");
            return handleGiphyFetch(state, action);
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


// First in Actions, add a key with the value of the search term into the response.
// Second, refactor handleGiphyFetch function to first pass in state and action.
// Then, assign query term + data to an empty variable.
// Third, create a condition to check if the search query is = to the state.
// Fourth, call updateGiphyState function and pass in the original state, query, and data.
// Fifth, setup updateGiphyState by spreading the original state then targeting the query term and then assigning each term the data. 
// Note, when doing step five use string for key values instead of regular keys



export const handleGiphyFetch = (state, action) => {
    console.log(action)
    let query;
    let data;
    if (action.payload.query === state) {
        data = action.payload.data
        query = action.payload.query
        return updateGiphyState(state, query, data)
    }
    return state
}

export const updateGiphyState = (state, query, data) => ({
    ...state,
    [query]: {
        idea: data,
        animal: data,
        quaint: data,
        football: data,
        concentration: data,
        witness: data,
        slap: data,
        apparatus: data,
        north: data,
        nominate: data
    }
});