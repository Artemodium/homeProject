import { GetCurrencyNamesType, GetCurrencyRatesType, CurrencyRatesType, CurrencyNamesType } from "../../Types/Types";
import { GET_CURRENCY_NAMES, GET_EXCHANGE_RATES } from "../Actions/actions";


export const getCurrencyNamesAC = (res: Array<CurrencyNamesType>): GetCurrencyNamesType => ({
    type: GET_CURRENCY_NAMES,
    res: res
});

export const getExchangeRatesAC = (res: Array<CurrencyRatesType>): GetCurrencyRatesType => ({
    type: GET_EXCHANGE_RATES,
    res: res
});