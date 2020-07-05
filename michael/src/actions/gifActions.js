import * as types from './actionTypes';
import axios from "axios";

export function receiveGif(data) {
  return {type: types.GET_GIF_SUCCESS, payload: data};
}

export function search(word){
  var mykey="LbcdDpV8yLnnqN8tULmaKuH31Qn3zvFc";
  let url = `https://api.giphy.com/v1/gifs/random?api_key=${mykey}&tag=${word}&limit=1`;
  return axios.get(url);
};

export function fetchGif(name) {
  return dispatch => {
    search(name).then(res => {
      Object.assign(res.data.data, { query: name });
      return dispatch(receiveGif(res.data.data));
      }
    )
  };
}