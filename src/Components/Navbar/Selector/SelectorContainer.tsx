import {connect} from "react-redux";
import { setOptionAC } from '../../../redux_store/ActionCreators/actionCreators';
import { AppStateType } from '../../../redux_store/store';
import Selector from './Selector';

let mapStateToProps = (state: AppStateType) => {
    return {
        currencyNames: state.startApp.currencyNames,
        isExchangeRates: state.startApp.isExchangeRates,
        isCurrencyNames: state.startApp.isCurrencyNames,
        isConnectionProblems: state.startApp.isConnectionProblems,
        error: state.startApp.error
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        selectChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
            const value = event.target.value;
            dispatch(setOptionAC(value))
        }
    }
}

const SelectorContainer = connect(mapStateToProps, mapDispatchToProps)(Selector);

export default SelectorContainer;
