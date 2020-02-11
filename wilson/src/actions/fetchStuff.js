import * as types from "../actions/actionTypes"
import search from "../utils/API";

const recieveGiphy = (json) => {
    return {type: types.GET_GIF_SUCCESS, json};
};

const fetchGiphy = () => {
    return dispatch => {
       search().then(res => {
           console.log(res);
           res.json()
       }).then(json => dispatch(recieveGiphy(json)))  
    };
};

export default { recieveGiphy, fetchGiphy };