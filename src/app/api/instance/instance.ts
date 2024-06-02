import * as axios from "axios";

export const instance = axios.default.create({
  baseURL: `${import.meta.env.VITE_BE_URL}/`,
  headers: {
    get: { Accept: "text/plain; charset=utf-8" },
    post: { "Content-Type": "text/plain; charset=utf-8" },
    put: { "Content-Type": "text/plain; charset=utf-8" },
    delete: { "Content-Type": "text/plain; charset=utf-8" },
  },
});
