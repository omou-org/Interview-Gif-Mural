import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveGif(json) {
  return {type: types.GET_GIF_SUCCESS, gif: json.gif};
}

export function fetchGif() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveGif(json)));
  };
}