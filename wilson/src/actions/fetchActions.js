import * as allActions from "./allActions"
import search from "../utils/API"
import initialState from "../reducers/initialState"
// console.log(initialState)

export function recieveGiphy(data) {
    return {type: allActions.GET_GIF_SUCCESS, getGiphy: data }
}



export function fetchGif(query) {
    return (dispatch) => {
        search(query).then(res => {
            // console.log(res);
            if(res.status === 200) {
                dispatch(recieveGiphy(res.data))
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
