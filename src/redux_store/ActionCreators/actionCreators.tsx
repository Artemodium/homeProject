import { GetCurrencyNamesType, GetCurrencyRatesType, CommonType, SetOptionType, SetConnectionsProblemsType } from "../../Types/Types";
import { GET_CURRENCY_NAMES, GET_EXCHANGE_RATES, SET_CONNECTION_PROBLEMS, SET_OPTION } from "../Actions/actions";


export const getCurrencyNamesAC = (res: Array<CommonType>): GetCurrencyNamesType => ({
    type: GET_CURRENCY_NAMES,
    res: res
});

export const getExchangeRatesAC = (res: Array<CommonType>): GetCurrencyRatesType => ({
    type: GET_EXCHANGE_RATES,
    res: res
});

export const setOptionAC = (value: string): SetOptionType => ({
    type: SET_OPTION,
    value: value
})

export const setConnectionsProblemsAC = (value: boolean): SetConnectionsProblemsType => ({
    type: SET_CONNECTION_PROBLEMS,
    value: true
})