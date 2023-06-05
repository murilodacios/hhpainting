import axios, { AxiosError } from "axios";
import { destroyCookie, parseCookies } from "nookies";

const cookies = parseCookies()

export const api = axios.create({
    // baseURL: "https://gpe-server.strongr.com.br/",
    baseURL: "http://localhost:3333/",
    headers: {
        Authorization: `Bearer ${cookies['strongr:token']}`
    }
})

api.interceptors.response.use(response => {
    return response
})

export const apiReceita = axios.create({
    baseURL: "https://minhareceita.org/"
})


