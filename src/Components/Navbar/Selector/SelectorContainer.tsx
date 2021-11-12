import React from 'react';
import {connect} from "react-redux";
import { setOptionAC } from '../../../redux_store/ActionCreators/actionCreators';
import { AppStateType } from '../../../redux_store/store';
import Selector from './Selector';

let mapStateToProps = (state: AppStateType) => {
    return {
        currencyNames: state.startApp.currencyNames,
        isExchangeRates: state.startApp.isExchangeRates,
        iscurrencyNames: state.startApp.isCurrencyNames
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        changeSelect: (value: string) => {
            dispatch(setOptionAC(value)) 
        }
    }
}

const SelectorContainer = connect(mapStateToProps, mapDispatchToProps)(Selector);

export default SelectorContainer;
