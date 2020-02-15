import axios from "axios";

const search = (fetchURL) => {
    return axios.get(fetchURL)
}

export default search;