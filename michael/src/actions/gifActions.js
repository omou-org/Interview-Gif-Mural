import * as types from './actionTypes';
import axios from "axios";

export function receiveGif(data) {
  return {type: types.GET_GIF_SUCCESS, payload: data};
}

export function search(word){
  var mykey="LbcdDpV8yLnnqN8tULmaKuH31Qn3zvFc";
  let url = `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=${mykey}&limit=4`;
  return axios.get(url);
};

export function fetchGif(request) {
  return dispatch => {
    search(request).then(res => {
      Object.assign(res.data.data, { request: request });
      return dispatch(receiveGif(res.data.data));
      }
    )
  };
}