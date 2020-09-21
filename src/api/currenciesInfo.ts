import { api } from './api';

export const exchangeToday = () => {
  return api.request<ExchangeTodayData[]>({
    method: 'GET',
    url: 'pubinfo?json&exchange&coursid=5',
  });
}

export interface ExchangeTodayData {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string
}
