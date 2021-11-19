import React from 'react';
import './Selector.css';
import Preloader from '../../../Common/Preloader/Preloader'
import { SelectorPropsType } from '../../../Types/Types';

let Selector: React.FC<SelectorPropsType> = (props: SelectorPropsType) => {

    let currencyNamesList: Array<string> = Object.values(props.currencyNames)
    let currencyNamesOptions = currencyNamesList.map(el => <option key={el}>{el}</option>)

    return (
        <div>
            <div>
                <h3>Choose</h3>
            </div>
            {
                props.iscurrencyNames ?
                <select onChange={props.selectChange}>
                    <option defaultValue={''}>...</option>
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
