import initialState from "./initialState";
import {
  GET_GIF_SUCCESS,
  GET_GIF_FAIL,
  GET_GIF_LOADING
} from "../actions/allActions";

// Our reducer function which sets the initial state based on our initialState file while passing in action as a parameter to recieve our action object from fetchActions
export default function giphyReducer(state = initialState, action) {
  // Created an empty variable to store our newState if it gets modified
  let newState;
  switch (action.type) {
    case GET_GIF_SUCCESS:
      console.log("This was successful");
      newState = { ...state, [action.payload.query]: action.payload }; // spread the state to clone it then pass in query to the array so that each payload is saved as it's own instant instead of being rewritten
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
