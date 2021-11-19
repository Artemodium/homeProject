import { latestApi, symbolsApi } from '../../API/api'
import { ActionsType, CommonType } from '../../Types/Types';
import { AppStateType } from '../store'
import { getCurrencyNamesAC, getExchangeRatesAC, setConnectionsProblemsAC, setOptionAC} from '../ActionCreators/actionCreators';
import { GET_CURRENCY_NAMES, GET_EXCHANGE_RATES, SET_OPTION, SET_CONNECTION_PROBLEMS} from '../Actions/actions';
import { ThunkAction } from 'redux-thunk'

const initialState = {
    option: '',
    isConnectionsProblems: false,
    isExchangeRates: false,
    isCurrencyNames: false,
    currencyNames: {},
    exchangeRates: {},
    countryToCurrency: {
        "BD": "BDT",
        "BE": "EUR",
        "BF": "XOF",
        "BG": "BGN",
        "BA": "BAM",
        "BB": "BBD",
        "WF": "XPF",
        "BL": "EUR",
        "BM": "BMD",
        "BN": "BND",
        "BO": "BOB",
        "BH": "BHD",
        "BI": "BIF",
        "BJ": "XOF",
        "BT": "BTN",
        "JM": "JMD",
        "BV": "NOK",
        "BW": "BWP",
        "WS": "WST",
        "BQ": "USD",
        "BR": "BRL",
        "BS": "BSD",
        "JE": "GBP",
        "BY": "BYR",
        "BZ": "BZD",
        "RU": "RUB",
        "RW": "RWF",
        "RS": "RSD",
        "TL": "USD",
        "RE": "EUR",
        "TM": "TMT",
        "TJ": "TJS",
        "RO": "RON",
        "TK": "NZD",
        "GW": "XOF",
        "GU": "USD",
        "GT": "GTQ",
        "GS": "GBP",
        "GR": "EUR",
        "GQ": "XAF",
        "GP": "EUR",
        "JP": "JPY",
        "GY": "GYD",
        "GG": "GBP",
        "GF": "EUR",
        "GE": "GEL",
        "GD": "XCD",
        "GB": "GBP",
        "GA": "XAF",
        "SV": "USD",
        "GN": "GNF",
        "GM": "GMD",
        "GL": "DKK",
        "GI": "GIP",
        "GH": "GHS",
        "OM": "OMR",
        "TN": "TND",
        "JO": "JOD",
        "HR": "HRK",
        "HT": "HTG",
        "HU": "HUF",
        "HK": "HKD",
        "HN": "HNL",
        "HM": "AUD",
        "VE": "VEF",
        "PR": "USD",
        "PS": "ILS",
        "PW": "USD",
        "PT": "EUR",
        "SJ": "NOK",
        "PY": "PYG",
        "IQ": "IQD",
        "PA": "PAB",
        "PF": "XPF",
        "PG": "PGK",
        "PE": "PEN",
        "PK": "PKR",
        "PH": "PHP",
        "PN": "NZD",
        "PL": "PLN",
        "PM": "EUR",
        "ZM": "ZMK",
        "EH": "MAD",
        "EE": "EUR",
        "EG": "EGP",
        "ZA": "ZAR",
        "EC": "USD",
        "IT": "EUR",
        "VN": "VND",
        "SB": "SBD",
        "ET": "ETB",
        "SO": "SOS",
        "ZW": "ZWL",
        "SA": "SAR",
        "ES": "EUR",
        "ER": "ERN",
        "ME": "EUR",
        "MD": "MDL",
        "MG": "MGA",
        "MF": "EUR",
        "MA": "MAD",
        "MC": "EUR",
        "UZ": "UZS",
        "MM": "MMK",
        "ML": "XOF",
        "MO": "MOP",
        "MN": "MNT",
        "MH": "USD",
        "MK": "MKD",
        "MU": "MUR",
        "MT": "EUR",
        "MW": "MWK",
        "MV": "MVR",
        "MQ": "EUR",
        "MP": "USD",
        "MS": "XCD",
        "MR": "MRO",
        "IM": "GBP",
        "UG": "UGX",
        "TZ": "TZS",
        "MY": "MYR",
        "MX": "MXN",
        "IL": "ILS",
        "FR": "EUR",
        "IO": "USD",
        "SH": "SHP",
        "FI": "EUR",
        "FJ": "FJD",
        "FK": "FKP",
        "FM": "USD",
        "FO": "DKK",
        "NI": "NIO",
        "NL": "EUR",
        "NO": "NOK",
        "NA": "NAD",
        "VU": "VUV",
        "NC": "XPF",
        "NE": "XOF",
        "NF": "AUD",
        "NG": "NGN",
        "NZ": "NZD",
        "NP": "NPR",
        "NR": "AUD",
        "NU": "NZD",
        "CK": "NZD",
        "XK": "EUR",
        "CI": "XOF",
        "CH": "CHF",
        "CO": "COP",
        "CN": "CNY",
        "CM": "XAF",
        "CL": "CLP",
        "CC": "AUD",
        "CA": "CAD",
        "CG": "XAF",
        "CF": "XAF",
        "CD": "CDF",
        "CZ": "CZK",
        "CY": "EUR",
        "CX": "AUD",
        "CR": "CRC",
        "CW": "ANG",
        "CV": "CVE",
        "CU": "CUP",
        "SZ": "SZL",
        "SY": "SYP",
        "SX": "ANG",
        "KG": "KGS",
        "KE": "KES",
        "SS": "SSP",
        "SR": "SRD",
        "KI": "AUD",
        "KH": "KHR",
        "KN": "XCD",
        "KM": "KMF",
        "ST": "STD",
        "SK": "EUR",
        "KR": "KRW",
        "SI": "EUR",
        "KP": "KPW",
        "KW": "KWD",
        "SN": "XOF",
        "SM": "EUR",
        "SL": "SLL",
        "SC": "SCR",
        "KZ": "KZT",
        "KY": "KYD",
        "SG": "SGD",
        "SE": "SEK",
        "SD": "SDG",
        "DO": "DOP",
        "DM": "XCD",
        "DJ": "DJF",
        "DK": "DKK",
        "VG": "USD",
        "DE": "EUR",
        "YE": "YER",
        "DZ": "DZD",
        "US": "USD",
        "UY": "UYU",
        "YT": "EUR",
        "UM": "USD",
        "LB": "LBP",
        "LC": "XCD",
        "LA": "LAK",
        "TV": "AUD",
        "TW": "TWD",
        "TT": "TTD",
        "TR": "TRY",
        "LK": "LKR",
        "LI": "CHF",
        "LV": "EUR",
        "TO": "TOP",
        "LT": "LTL",
        "LU": "EUR",
        "LR": "LRD",
        "LS": "LSL",
        "TH": "THB",
        "TF": "EUR",
        "TG": "XOF",
        "TD": "XAF",
        "TC": "USD",
        "LY": "LYD",
        "VA": "EUR",
        "VC": "XCD",
        "AE": "AED",
        "AD": "EUR",
        "AG": "XCD",
        "AF": "AFN",
        "AI": "XCD",
        "VI": "USD",
        "IS": "ISK",
        "IR": "IRR",
        "AM": "AMD",
        "AL": "ALL",
        "AO": "AOA",
        "AQ": "",
        "AS": "USD",
        "AR": "ARS",
        "AU": "AUD",
        "AT": "EUR",
        "AW": "AWG",
        "IN": "INR",
        "AX": "EUR",
        "AZ": "AZN",
        "IE": "EUR",
        "ID": "IDR",
        "UA": "UAH",
        "QA": "QAR",
        "MZ": "MZN"
    } as CommonType
}

type InitialStateType = typeof initialState

const startAppReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
        case SET_OPTION:
            return {
                ...state,
                option: action.value
            }
        case SET_CONNECTION_PROBLEMS:
            return {
                ...state,
                isConnectionsProblems: action.value
            }

        default:
            return state
    }
}

export const getCurrencyNames = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
    async (dispatch) => {
    let response = await symbolsApi()
        if(response.success && response.symbols) {
            dispatch(getCurrencyNamesAC(response.symbols))
        }
        else {
            dispatch(setConnectionsProblemsAC(true))
        }
}

export const getExchangeRates = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
    async (dispatch) => {
    let response = await latestApi()
        if(response.success && response.rates) {
            dispatch(getCurrencyNamesAC(response.rates))
        }
        else {
            dispatch(setConnectionsProblemsAC(true))
        }
}

export const setOption = (value: string): ThunkAction<void, AppStateType, unknown, ActionsType> =>
    (dispatch) => {
    dispatch(setOptionAC(value))
}

export default startAppReducer;

