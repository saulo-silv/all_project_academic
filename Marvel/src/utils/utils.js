import axios from "axios";
import { MD5 } from "crypto-js";

let API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

const fetchHeros = async (name) => {
  let heroUrl = `${API_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`;

  try {
    const response = await axios.get(url);
    return response.data.data.results;
  } catch (err) {
    console.log(err);
    return;
  }
};

const fetchHero = async (id) => {
  let heroUrl = `${API_URL}/v1/public/characters/${id}`;

  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    const response = await axios.get(url);
    return response.data.data.results;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export { fetchHeros, fetchHero };
