import { GetCurrencyNamesType, GetCurrencyRatesType, CurrencyRatesType, CurrencyNamesType, SetOptionType } from "../../Types/Types";
import { GET_CURRENCY_NAMES, GET_EXCHANGE_RATES, SET_OPTION, GET_COUNTRY_TO_CURRENCY } from "../Actions/actions";


export const getCurrencyNamesAC = (res: Array<CurrencyNamesType>): GetCurrencyNamesType => ({
    type: GET_CURRENCY_NAMES,
    res: res
});

export const getExchangeRatesAC = (res: Array<CurrencyRatesType>): GetCurrencyRatesType => ({
    type: GET_EXCHANGE_RATES,
    res: res
});

export const getCountryToCurrencyAC = (res: any): any => ({
    type: GET_COUNTRY_TO_CURRENCY,
    res: res
});

export const setOptionAC = (value: string): SetOptionType => ({
    type: SET_OPTION,
    value: value
})