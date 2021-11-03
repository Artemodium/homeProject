import {latestApi, symbolsApi } from '../../API/api'
import { getCurrencyNamesAC, getExchangeRatesAC } from '../ActionCreators/actionCreators';
import { GET_CURRENCY_NAMES, GET_EXCHANGE_RATES } from '../Actions/actions';
import { CurrencyRatesType, CurrencyNamesType } from '../../../src/Types/Types'

const initialState = {
    currencyNames: {} as CurrencyNamesType,
    exchangeRates: {} as CurrencyRatesType
}

type InitialStateType = typeof initialState

const startAppReducer = (state:InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_CURRENCY_NAMES:
            return {
                ...state,
                currencyNames: {...action.res}
            }
        case GET_EXCHANGE_RATES:
            return {
                ...state,
                exchangeRates: {...action.res}
            }
        default:
            return state
    }
}

export const getCurrencyNames = () => async (dispatch: any) => {
    let response = await symbolsApi();
    dispatch(getCurrencyNamesAC(response.symbols))
}

export const getExchangeRates = () => async (dispatch: any) => {
    let response = await latestApi();
    dispatch(getExchangeRatesAC(response.rates))
}

export default startAppReducer;