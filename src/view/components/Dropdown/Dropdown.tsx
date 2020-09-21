import * as React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

import { ExchangeTodayData } from 'api/currenciesInfo';

const { Option } = Select;

export const Dropdown = ({ data, currencyProp = '', onSelect, value, defaultValue }: Props) => {

  const values = data && data.reduce((acc, item) => {
    const optionValue = currencyProp === 'ccy' ? item.ccy : item.base_ccy;
    
    if (acc.includes(optionValue))
    return acc;
    
    return [...acc, optionValue];
  }, []);

  return (
    <SelectStyled onSelect={onSelect} value={value} defaultValue={defaultValue}>
      {values.map((item, i) => (
          <Option value={item} key={`${i}-${item}`}>{item}</Option>
        )
      )}
    </SelectStyled>
  );
}

const SelectStyled = styled(Select)`
  &.ant-select:focus {
    border-color: var(--mainAccent);
    box-shadow: none;
  }
`;

interface Props {
  data: ExchangeTodayData[];
  currencyProp: string;
  onSelect: (arg: number) => void;
  value: string;
  defaultValue: string;
}

