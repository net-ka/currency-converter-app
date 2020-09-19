import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { ExchangeTodayData } from 'api/currenciesInfo';

import { Dropdown } from 'view/components/Dropdown';
import { InputNumber } from 'view/components/InputNumber';
import { ButtonSwap } from 'view/components/ButtonSwap';

export const Exchange = ({ data }: Props) => {

  const [changeCurrency, setChangeCurrency] = useState<string>('base_ccy');
  const [getCurrency, setGetCurrency] = useState<string>('ccy');

  const [currency, setCurrency] = useState<ExchangeTodayData>(data[0]);
  console.log(data);

  const handleSwap = () => {
    setChangeCurrency(changeCurrency === 'base_ccy' ? 'ccy' : 'base_ccy');
    setGetCurrency(getCurrency === 'ccy' ? 'base_ccy' : 'ccy');
  }

  return (
    <>
      <InputNumber />
      <Dropdown data={data} currencyProp={changeCurrency} currency={currency} />
      <ButtonSwap onClick={handleSwap}/>
      <InputNumber />
      <Dropdown data={data} currencyProp={getCurrency} currency={currency} />
    </>
  );
}

interface Props {
  data: ExchangeTodayData[];
}
