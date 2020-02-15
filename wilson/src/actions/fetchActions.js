import * as allActions from "./allActions"
import search from "../utils/API"

export function recieveGiphy(data) {
    return {type: allActions.GET_GIF_SUCCESS, getGiphy: data }
}

// export const wrapGet = (endpoint, [startType, successType, failType], {id, config}) =>
//     async (dispatch, getState) => {
//         // creates a new action based on the response given
//         const newAction = (type, response) => {
//             dispatch({
//                 type,
//                 "payload": {
//                     "id": id || REQUEST_ALL,
//                     response,
//                 },
//             });
//         };

//         // request starting
//         newAction(startType, {});

//         const requestURL = id ? `${endpoint}${id}/` : endpoint;
//         try {
//             const response = await instance.get(requestURL, {
//                 "headers": {
//                     "Authorization": `Token ${getState().auth.token}`,
//                     'Content-Type': 'text/plain',
//                 },
//                 ...(config || {}),
//             });
//             // successful request
//             newAction(successType, response);
//         } catch ({response}) {
//             // failed request
//             newAction(failType, response);
//         }
//     };



// export function fetchGif(query) {
//     return (dispatch) => {
//         search(query).then(res => {
//             let arr = []
//             let dataArr = res.data.data
//             arr.push(dataArr)
//             // console.log(arr)
//             // console.log(res.data.data);
//             // console.log(search)
//             if(res.status === 200) {
//                 return dispatch(recieveGiphy(arr))
//             } else {
//                 let flash = {
//                     type: "error",
//                     title: "Error getting task list",
//                     content: "There was an error getting the task list. Please try agian."
//                 }
//                 dispatch({type: "DISPLAY_FLASH", data: flash})
//             }
//         })
//     };
// }


export function fetchGif(query) {
    return async (dispatch) => {
        search(query).then(res => {
            // console.log(res)
            // console.log(res.data.data);
            // console.log(search)
            if(res.status === 200) {
                return dispatch({
                    type: allActions.GET_GIF_SUCCESS,
                    "payload": {
                        "data": res.data.data,
                        "id": res.data.meta.response_id
                    } 
                });
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