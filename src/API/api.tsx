import axios from "axios";
import { ApiCurrencyNamesResponseType, ApiCurrencyRatesResponseType } from "../Types/Types";

const axiosInst = axios.create({
    withCredentials: false,
    baseURL: 'http://data.fixer.io/api/',
})

const apiKey:string = "5d83df53dd5b53402a227b8634e4fd64"

export const latestApi = () => {
    return axiosInst.get<ApiCurrencyRatesResponseType>(`latest?access_key=${apiKey}`)
        .then(res => { return res.data } )
}

export const symbolsApi = () => {
    return axiosInst.get<ApiCurrencyNamesResponseType>(`symbols?access_key=${apiKey}`)
        .then(res => { return res.data} )
}

