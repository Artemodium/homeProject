import React from 'react';
import { CurrencyNamesType, SelectorType } from '../../../Types/Types';
import './Selector.css';
import Preloader from '../../../Common/Preloader/Preloader'

let Selector: React.FC<SelectorType> = (props: SelectorType) => {

    let currencyNamesList: Array<string> = Object.values(props.currencyNames)
    let currencyNamesOptions = currencyNamesList.map(el => <option>{el}</option>)

    console.log(props.iscurrencyNames, props.isExchangeRates)
    
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        props.changeSelect(value);
    };
    
    return (
        <div>
            <div>
                <h3>Choose</h3>
            </div>
            {
                props.iscurrencyNames && props.isExchangeRates ?
                <select onChange={selectChange}>
                    <option selected defaultValue={''}></option>
                    {currencyNamesOptions}
                </select>
            :
            <div>
                <Preloader/>
            </div>
            }
        </div>
    );
}

export default Selector;
