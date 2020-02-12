import { combineReducers } from "redux";
import giphy from "./fetchReducer";

const rootReducer = combineReducers({
    giphy
});

export default rootReducer;