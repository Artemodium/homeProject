import React from 'react';
import { CurrencyNamesType } from '../../../Types/Types';
import './ContentCard.css';

type ContentCardPropsType = {
    findLittleCurrencyName: (obj: CurrencyNamesType, value: string) => string | null
    option: string
    currencyNames: CurrencyNamesType
}


let ContentCard: React.FC<ContentCardPropsType> = (props: ContentCardPropsType) => {

    let currencyName: string | null = props.findLittleCurrencyName(props.currencyNames, props.option)
    console.log('aaaa ', currencyName)

  return (
    <div>
      <div>
        <img src={`https://flagcdn.com/224x168/$ae.png`} alt=''/>
      </div>
        <div>
            <span>LittleNameCurrency: {currencyName ? currencyName.toLowerCase(): ''} </span>
        </div>
      <div>
        <span>Rate: </span>
      </div>
    </div>
  );
}

export default ContentCard;
