import * as axios from "axios";
import { BE_URL } from "./constants.ts";

export const instance = axios.default.create({
  baseURL: `${BE_URL}/`,
  headers: {
    get: { Accept: "text/plain" },
    post: { "Content-Type": "text/plain" },
  },
});
