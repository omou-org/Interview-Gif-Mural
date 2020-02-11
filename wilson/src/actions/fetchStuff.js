import * as types from "../actions/actionTypes"

const url = () => {
    return "https://api.giphy.com/v1/gifs/search"
}

const  recieveGiphy = (json) => {
    return {type: types.GET_GIF_SUCESS};
}

const fetchGiphy = () => {
    return dispatch => {
        return fetch(url(), {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "x-api-key": process.env.SECRET
            }
        })
    }
}