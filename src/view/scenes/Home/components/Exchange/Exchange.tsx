import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { ExchangeTodayData } from 'api/currenciesInfo';

import { Dropdown } from 'view/components/Dropdown';
import { InputNumber } from 'view/components/InputNumber';
import { ButtonSwap } from '../ButtonSwap';

const initialAmount: Amount = {
  change: 0,
  get: 0
};

export const Exchange = ({ data }: Props) => {

  const [changeCurrency, setChangeCurrency] = useState<string>('ccy');
  const [getCurrency, setGetCurrency] = useState<string>('base_ccy');

  const [currency, setCurrency] = useState<ExchangeTodayData>(data[0]);

  const [currencyAmount, setCurrencyAmount] = useState(initialAmount);

  const handleSwap = () => {
    setChangeCurrency(changeCurrency === 'ccy' ? 'base_ccy' : 'ccy');
    setGetCurrency(getCurrency === 'base_ccy' ? 'ccy' : 'base_ccy');
    setCurrencyAmount(initialAmount);
  }

  const handleInputChange = (key: string) => (e: number) => {
    const newAmountValue =
      (changeCurrency === 'ccy' && key === 'change' && { change: e, get: e * +currency.buy }) ||
      (changeCurrency === 'base_ccy' && key === 'change' && { change: e, get: e / +currency.sale }) ||
      (getCurrency === 'base_ccy' && key === 'get' && { change: e / +currency.buy, get: e }) ||
      (getCurrency === 'ccy' && key === 'get' && { change: e * +currency.sale, get: e });

    setCurrencyAmount(newAmountValue);
  };

  const handleSelectChange = (key: string) => (e: number) => {
    const newCurrency = data.find(item => item[key] === e);
    setCurrency(newCurrency);
  };

  return (
    <Wrapper>
      <Group>
        <InputNumber
          onChange={handleInputChange('change')}
          value={currencyAmount.change}
          defaultValue={initialAmount.change}
        />
        <Dropdown
          data={data}
          currencyProp={changeCurrency}
          onSelect={handleSelectChange(changeCurrency)}
          value={currency[changeCurrency]}
          defaultValue={currency[changeCurrency]}
        />
      </Group>
      <ButtonSwapStyled onClick={handleSwap} />
      <Group>
        <InputNumber
          onChange={handleInputChange('get')}
          value={currencyAmount.get}
          defaultValue={initialAmount.get}
        />
        <Dropdown
          data={data}
          currencyProp={getCurrency}
          onSelect={handleSelectChange(getCurrency)}
          value={currency[getCurrency]}
          defaultValue={currency[getCurrency]}
        />
      </Group>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const Group = styled.div`
  & > *:first-child {
    margin-right: 10px;
  }
`;

const ButtonSwapStyled = styled(ButtonSwap)`
  &.ant-btn {
    margin: 0 30px !important;
  }
`;

interface Props {
  data: ExchangeTodayData[];
}

interface Amount {
  [x: string]: number;
}
