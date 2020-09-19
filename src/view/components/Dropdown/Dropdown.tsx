import * as React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

import { ExchangeTodayData } from 'api/currenciesInfo';

const { Option } = Select;

export const Dropdown = ({ data, currencyProp = '', currency, ...props }: Props) => {

  const values = data && data.reduce((acc, item) => {
    const optionValue = currencyProp === 'ccy' ? item.ccy : item.base_ccy;
    
    if (acc.includes(optionValue))
    return acc;
    
    return [...acc, optionValue];
  }, []);

  console.log(values);

  return (
    <Select value={currency[currencyProp]} {...props} >
      {values.map((item, i) => (
          <Option value={item} key={`${i}-${item}`}>{item}</Option>
        )
      )}
    </Select>
  );
}

interface Props {
  data: ExchangeTodayData[];
  currencyProp: string;
  currency: ExchangeTodayData;
}

