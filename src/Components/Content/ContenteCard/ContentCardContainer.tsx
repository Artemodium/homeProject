import React from 'react';
import {connect} from "react-redux";
import { AppStateType } from '../../../redux_store/store';
import { ContainerPropsType, CurrencyNamesType} from '../../../Types/Types'
import ContentCard from './ContentCard';
import './ContentCard.css';


function findLittleCurrencyName(obj: CurrencyNamesType, value: string) {
  for (let key in obj) {
    if (obj[key].includes(value)) return key;
  }
  return null;
}

function findLittleCountryName() {

}


let mapStateToProps = (state: AppStateType) => {
  return {
      option: state.startApp.option,
      currencyNames: state.startApp.currencyNames
  }
}

let mapDispatchToProps = () => {
  return {
    findLittleCurrencyName
  }
}

let ContentCardContainer = connect(mapStateToProps, mapDispatchToProps)(ContentCard)

export default ContentCardContainer;
