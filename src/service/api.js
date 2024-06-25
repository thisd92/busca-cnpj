import axios from "axios";
import { BASE_URL_WS } from "../utils/request";

export const apiWS = axios.create({
  method: "get",
  baseURL: BASE_URL_WS,
});
