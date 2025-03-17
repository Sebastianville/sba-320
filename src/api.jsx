//https://github.com/bitmakerlabs/react-marvel-api/blob/master/README.md#overview

//! This is what must be pass: two paramters in addition to the API key https://developer.marvel.com/documentation/authorization

//?https://stackoverflow.com/questions/69832429/not-able-to-search-for-character-name-in-marvel-api-using-nodejs

//In the documentation we have create a timestamp (ts) and a hash with md5. Need to install the md5. I need to use the public and private key

import axios from 'axios';
import md5 from 'md5';

axios.defaults.baseURL = 'https://gateway.marvel.com/v1/public'

//generating the timestamp and hash
const ts = new Date().getTime()
// console.log('hello')
// console.log(import.meta.env.VITE_PRIVATE_API_KEY)

const hash= md5(ts + import.meta.env.VITE_PRIVATE_API_KEY + import.meta.env.VITE_PUBLIC_API_KEY)

const API_PARAMS = `ts=${ts}&apikey=${import.meta.env.VITE_PUBLIC_API_KEY}&hash=${hash}`;

//Function to get data from a given endpoint
const getData = async(endpoint,  params = "") => {
    try {
        const response = await axios.get(`${endpoint}?${API_PARAMS}&${params}`)
        //*the response.data gives me a lot information but what I want is what inside the data specifically in results 
        console.log(response.data);
        return response.data.data.results
    } catch(e) {
        console.error(e)
    }
}

//Getting the Marvel characters
export const getCharacters = () => getData("/characters", "limit=100")



//Getting a random character
export const getRandomCharacter = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 1500); 
      //I need a parameter that accepts this change in here. I need to update the function to accept a limit
      const characters = await getData("/characters", `limit=1&offset=${randomNumber}`);
      return characters[0]; 
    } catch (error) {
      console.error("Error fetching random character:", error);
      return null;
    }
  };