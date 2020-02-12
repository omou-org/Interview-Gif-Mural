import { combineReducers } from "redux";
import fetchGiphy from "./fetchReducer";

const rootReducer = combineReducers({
    fetchGiphy
});

export default rootReducer;