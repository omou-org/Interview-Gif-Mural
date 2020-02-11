import * as types from "./actionTypes"
import axios from "axios";

const search = query => {
    const baseURL = `http://api.giphy.com/v1/gifs/search?q=dog&api_key=${process.env.API_KEY}&limit=5`;
    return axios.get(baseURL)
}

const recieveStuff = (json) => {
    return {type: types.GET_GIF_SUCCESS, json: json }
}

const fetchGif = () => {
    return dispatch => {
        return search().then(res => {
            console.log(res);
            res.json()
        })
        .then(json => {dispatch(recieveStuff(json))});
    }
};

export default { recieveStuff, fetchGif };