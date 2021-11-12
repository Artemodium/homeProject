import {latestApi, symbolsApi, countryToCurrencyJsonApi } from '../../API/api'
import {getCountryToCurrencyAC, getCurrencyNamesAC, getExchangeRatesAC, setOptionAC } from '../ActionCreators/actionCreators';
import {GET_COUNTRY_TO_CURRENCY, GET_CURRENCY_NAMES, GET_EXCHANGE_RATES, SET_OPTION } from '../Actions/actions';
import { CurrencyRatesType, CurrencyNamesType, CountryToCurrencyType } from '../../../src/Types/Types'

const initialState = {
    option: '',
    isExchangeRates: false,
    isCurrencyNames: false,
    currencyNames: {} as CurrencyNamesType,
    exchangeRates: {} as CurrencyRatesType,
    countryToCurrency: {} as CountryToCurrencyType
}

type InitialStateType = typeof initialState

const startAppReducer = (state:InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_CURRENCY_NAMES:
            return {
                ...state,
                isCurrencyNames: true,
                currencyNames: {...action.res}
            }
        case GET_EXCHANGE_RATES:
            return {
                ...state,
                isExchangeRates: true,
                exchangeRates: {...action.res}
            }
        case GET_COUNTRY_TO_CURRENCY:
            return {
                ...state,
                countryToCurrency: {...action.res}
            }
        case SET_OPTION :
            return {
                ...state,
                option: action.value
            }
        default:
            return state
    }
}

export const getCurrencyNames = () => async (dispatch: any) => {
    let response = await symbolsApi()
    dispatch(getCurrencyNamesAC(response.symbols))
}

export const getExchangeRates = () => async (dispatch: any) => {
    let response = await latestApi()
    dispatch(getExchangeRatesAC(response.rates))
}

export const getCountryToCurrencyJSON = () => async  (dispatch: any) => {
    let response = await countryToCurrencyJsonApi()
    dispatch(getCountryToCurrencyAC(response))
}

export const setOption = (value: string) => (dispatch: any) => {
    dispatch(setOptionAC(value))
}

export default startAppReducer;