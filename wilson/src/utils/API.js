import axios from "axios";

// Our API call

const search = query => {
  let baseURL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=10`;
  return axios.get(baseURL);
};

export default search;
