//https://github.com/bitmakerlabs/react-marvel-api/blob/master/README.md#overview
//! This is what must be pass: two paramters in addition to the API key https://developer.marvel.com/documentation/authorization

//?https://stackoverflow.com/questions/69832429/not-able-to-search-for-character-name-in-marvel-api-using-nodejs

//In the documentation we have create a timestamp (ts) and a hash with md5. Need to install the md5. I need to use the public and private key

import axios from 'axios';
import md5 from 'md5';

axios.defaults.baseURL = 'https://gateway.marvel.com/v1/public'

//generating the timestamp and hash
const ts = new Date().getTime()

const hash= md5(ts + import.meta.env.VITE_PRIVATE_API_KEY + import.meta.env.VITE_PUBLIC_API_KEY)

const API_PARAMS = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

//Function to get dataf from a given endpoint
const getData = async(endpoint) => {
    try {
        const response = await axios.get(`${endpoint}?${API_PARAMS}`)
        console.log(response.data)
    } catch(e) {
        console.error(e)
    }
}