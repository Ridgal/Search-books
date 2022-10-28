import axios from "axios";
import { API_URL } from "../utils/constant";

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;