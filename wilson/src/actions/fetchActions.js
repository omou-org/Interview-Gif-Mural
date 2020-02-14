import * as allActions from "./allActions"
import search from "../utils/API"

export function recieveGiphy(data) {
    return {type: allActions.GET_GIF_SUCCESS, getGiphy: data }
}


export function fetchGif(query) {
    return (dispatch) => {
        search(query).then(res => {
            let arr = []
            let dataArr = res.data.data
            arr.push(dataArr)
            // console.log(arr)
            // console.log(res.data.data);
            // console.log(search)
            if(res.status === 200) {
                return dispatch(recieveGiphy(arr))
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
