import * as allActions from "./allActions";
import search from "../utils/API";

export function recieveGiphy(data) {
    return {type: allActions.GET_GIF_SUCCESS, payload: data }
}

export function fetchGif(query) {
    return (dispatch) => {
        search(query).then(res => {
            Object.assign(res.data, {query: query})
            if(res.status === 200) {
                return dispatch(recieveGiphy(res.data))
            } else {
                let flash = {
                    type: "error",
                    title: "Error getting task list",
                    content: "There was an error getting the task list. Please try agian."
                }
                dispatch({type: "DISPLAY_FLASH", data: flash})
            }
        })
    };
}