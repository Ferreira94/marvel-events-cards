import axios from "axios";
import md5 from "md5";

export const timestamp = Number(new Date());

export const public_key = import.meta.env.VITE_PUBLIC_KEY;

export const hash = md5(
  timestamp + import.meta.env.VITE_PRIVATE_KEY + import.meta.env.VITE_PUBLIC_KEY
);

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
});
