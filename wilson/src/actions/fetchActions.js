import * as allActions from "./allActions";
import search from "../utils/API";

// Function to recieve our data
export function recieveGiphy(data) {
  return { type: allActions.GET_GIF_SUCCESS, payload: data };
}

// Function to fetch gifs by calling search from our API file which accepts a parameter which then passes into the search parameter
export function fetchGif(query) {
  return dispatch => {
    search(query).then(res => {
      Object.assign(res.data.data, { query: query }); // Assigning the object a key called query with the value of query for the loop from our search terms
      //   If data is successful dispatch our data to our reducer * status 200 = success
      if (res.status === 200) {
        return dispatch(recieveGiphy(res.data.data));
      } else {
        //   Our error handler
        let flash = {
          type: "error",
          title: "Error getting task list",
          content: "There was an error getting the task list. Please try agian."
        };
        dispatch({ type: "DISPLAY_FLASH", data: flash });
      }
    });
  };
}
