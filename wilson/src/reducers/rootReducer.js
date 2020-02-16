import { combineReducers } from "redux";
import giphyReducer from "./fetchReducer";

const rootReducer = combineReducers({
  giphyReducer
});

export default rootReducer;
