import {connect} from "react-redux";
import { AppStateType } from '../../../redux_store/store';
import { CommonType } from '../../../Types/Types'
import ContentCard from './ContentCard';
import './ContentCard.css';


function find(obj: CommonType, value: string) {
    for (let key in obj) {
        if (obj[key].includes(value)) return key;
    }
    return null;
}

let mapStateToProps = (state: AppStateType) => {
  return {
      option: state.startApp.option,
      currencyNames: state.startApp.currencyNames,
      countryToCurrency: state.startApp.countryToCurrency,
      exchangeRates: state.startApp.exchangeRates
  }
}

let mapDispatchToProps = () => {
  return {
    find
  }
}

let ContentCardContainer = connect(mapStateToProps, mapDispatchToProps)(ContentCard)

export default ContentCardContainer;
