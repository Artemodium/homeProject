import React from 'react';
import { ContentCardPropsType } from '../../../Types/Types';
import './ContentCard.css';

let ContentCard: React.FC<ContentCardPropsType> = (props: ContentCardPropsType) => {

    let currencyName: string | null = props.find(props.currencyNames, props.option)
    currencyName = currencyName ? currencyName : ''

    let countryName: string | null = props.find(props.countryToCurrency, currencyName ? currencyName : '')
    countryName = countryName ? countryName.toLowerCase() : ''

    return (
        <div className = 'ContentCard'>
            { props.option === '' || props.option === '...' ? <div></div> :
                <div>
                    <div>
                        <img src={`https://flagcdn.com/224x168/${countryName}.png`} alt=''/>
                    </div>
                    <br/>
                    <div>
                        <span>Currency name: {currencyName} </span>
                    </div>
                    <div>
                        <span>Currency exchange rate: {props.exchangeRates[currencyName]}</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default ContentCard;
