import * as axios from "axios";

export const BE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_DEV_BE_URL
    : import.meta.env.VITE_PROD_BE_URL;

export const instance = axios.default.create({
  baseURL: `${import.meta.env.VITE_BE_URL}/`,
  headers: {
    get: { Accept: "text/plain; charset=utf-8" },
    post: { "Content-Type": "text/plain; charset=utf-8" },
    put: { "Content-Type": "text/plain; charset=utf-8" },
    delete: { "Content-Type": "text/plain; charset=utf-8" },
  },
});
