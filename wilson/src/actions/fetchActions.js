import * as allActions from "./allActions"

export function recieveGiphy(data) {
    // console.log(data);
    return {type: allActions.GET_GIF_SUCCESS, giphy: data }
}

// export function fetchGif() {
//     return dispatch => {
//         return fetch(`http://api.giphy.com/v1/gifs/search?q=dog&api_key=IHp122Ym4VWZWroBGB8Cgg3aLU4QMpT1&limit=5`)
//         .then(response => {
//             response.json().then(data => ({
//                data: data,
//                status: response.status 
//             }))
//         })
//         .then(response => {
//             if(response.status === 200) {
//                 dispatch(recieveStuff(response.data))
//             } else {
//                 let flash = {
//                     type: "error",
//                     title: "Error getting giphy data",
//                     content: "There was an error getting the data. Please try again."
//                 }
//                 dispatch({type: "DISPLAY_FLASH", data: flash});
//             };
//         });
//     };
// };

export function fetchGif() {
    return (dispatch) => {
        fetch('http://api.giphy.com/v1/gifs/search?q=dog&api_key=IHp122Ym4VWZWroBGB8Cgg3aLU4QMpT1&limit=5')
            .then(response => 
                // console.log(response)
                response.json().then(data => 
                    // console.log(data)
                    ({
                    data: data,
                    status: response.status
                })
            )
            
            )
            .then(response => {
                // console.log(response)
                if(response.status === 200){
                    dispatch(recieveGiphy(response.data))
                }else{
                    var flash = {
                        type: 'error',
                        title: 'Error getting task list',
                        content: 'There was an error getting the task list. Please try again.'
                    }
                    dispatch({type: "DISPLAY_FLASH", data: flash})
                }
            });
    };
}

