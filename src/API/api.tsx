import axios from "axios";
import { ApiCurrencyRatesResponseType } from "../Types/Types";

// DATA-FIXER API
const axiosInstRatesAndSymbols = axios.create({
    withCredentials: false,
    baseURL: 'http://data.fixer.io/api/',
})

const apiKey:string = "68cf59f9ae876060f7949852ca8556eb"

export const latestApi = (): Promise<ApiCurrencyRatesResponseType> => {
    return axiosInstRatesAndSymbols.get<ApiCurrencyRatesResponseType>(`latest?access_key=${apiKey}`)
        .then(res => { return res.data } )
}

export const symbolsApi = (): Promise<ApiCurrencyRatesResponseType> => {
    return axiosInstRatesAndSymbols.get<ApiCurrencyRatesResponseType>(`symbols?access_key=${apiKey}`)
        .then(res => { return res.data } )
}