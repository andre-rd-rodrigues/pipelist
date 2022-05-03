import axios from "axios";
import { baseURL } from "./baseURL";

const personsAxios = axios.create({
  baseURL,
  params: {
    api_token: process.env.REACT_APP_API_KEY
  }
});

export default personsAxios;
