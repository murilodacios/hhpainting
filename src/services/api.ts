import axios, { AxiosError } from "axios";
import { destroyCookie, parseCookies } from "nookies";

const cookies = parseCookies()

export const api = axios.create({
    baseURL: "https://leads-api.hhpaintingfl.com",
    // baseURL: "http://localhost:3456/",
})

api.interceptors.response.use(response => {
    return response
})

export const apiReceita = axios.create({
    baseURL: "https://minhareceita.org/"
})


