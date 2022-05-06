import axios from "axios";
import { baseURL } from "./baseURL";

const pipelistAxios = axios.create({
  baseURL,
  params: {
    api_token: process.env.REACT_APP_API_KEY
  }
});

export default pipelistAxios;
