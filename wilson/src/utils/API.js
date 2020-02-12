import axios from "axios";

const search = query => {
    const baseURL = `http://api.giphy.com/v1/gifs/search?q=dog&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=5`;
    return axios.get(baseURL)
}

export default search;