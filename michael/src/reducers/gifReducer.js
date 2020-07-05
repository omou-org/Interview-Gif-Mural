import initialState from './initialState';
import {GET_GIF_LOADING, GET_GIF_SUCCESS, GET_GIF_FAIL} from '../actions/actionTypes';

export default function gifReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_GIF_LOADING:
      console.log('loading')
      return action;
    case GET_GIF_SUCCESS:
      newState = action;
      console.log('success')
      return newState;
    case GET_GIF_FAIL:
      state = action;
      console.log('fail')
      return state;
    default:
      return state;
  }
}