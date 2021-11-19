import { ChangeEvent } from 'react'
import { GET_EXCHANGE_RATES, GET_CURRENCY_NAMES, SET_OPTION, SET_CONNECTION_PROBLEMS } from '../redux_store/Actions/actions'

        //API Types
export interface CommonType {
    [key: string]: string
}

export type ApiCurrencyRatesResponseType = {
    success: boolean
    timestamp?: number
    base?: string
    date?: string
    rates?: Array<CommonType>
    symbols?: Array<CommonType>
    error?: {
        code: number
        type: string
        info:string
    }
}

/*export type ApiCurrencyNamesResponseType = {
    success: boolean,
    symbols: Array<CommonType>
}

export type ConnectionsProblemsType = {
    success:
}*/

     //ActionCreator types
export type GetCurrencyNamesType = {
    type: typeof GET_CURRENCY_NAMES,
    res: Array<CommonType>
}

export type GetCurrencyRatesType = {
    type: typeof GET_EXCHANGE_RATES,
    res: Array<CommonType>
}

export type SetOptionType = {
    type: typeof SET_OPTION,
    value: string
}

export type SetConnectionsProblemsType = {
    type: typeof SET_CONNECTION_PROBLEMS,
    value: boolean
}

export type ActionsType = GetCurrencyNamesType | GetCurrencyRatesType | SetOptionType | SetConnectionsProblemsType

        //PROPS TYPES
export type AppPropsType = {
    getCurrencyNames: () => void,
    getExchangeRates: () => void,
}

export type SelectorPropsType = {
    currencyNames: CommonType,
    isExchangeRates: boolean,
    iscurrencyNames: boolean,
    selectChange: (value: ChangeEvent<HTMLSelectElement>) => void,
}

export type ContentCardPropsType = {
    find: (obj: CommonType, value: string) => string | null
    option: string
    currencyNames: CommonType
    countryToCurrency: CommonType
    exchangeRates: CommonType
}
