import { GET_EXCHANGE_RATES, GET_CURRENCY_NAMES } from '../redux_store/Actions/actions'

//API Types
export interface CurrencyRatesType {
    key: string,
    value: number
}

export interface CurrencyNamesType {
    key: string,
    value: string
}

export type ApiCurrencyRatesResponseType = {
    success: boolean,
    timestamp: number,
    base: string,
    date: string
    rates: Array<CurrencyRatesType>
}

export type ApiCurrencyNamesResponseType = {
    success: boolean,
    symbols: Array<CurrencyNamesType>
}

//ActionCreator types
export type GetCurrencyNamesType = {
    type: typeof GET_CURRENCY_NAMES,
    res: Array<CurrencyNamesType>
}

export type GetCurrencyRatesType = {
    type: typeof GET_EXCHANGE_RATES,
    res: Array<CurrencyRatesType>
}