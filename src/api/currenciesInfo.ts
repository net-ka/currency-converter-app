import { api } from './api';

export const exchangeToday = () => {
  return api.request<ExchangeTodayData>({
    method: 'GET',
    url: 'pubinfo?json&exchange&coursid=5',
  });
}

export const exchangeArchive = (date: string) => {
  return api.request<ArchiveData>({
    method: 'GET',
    url: 'pubinfo?json&exchange&coursid=5',
    params: {
      date
    }
  });
}

export interface ExchangeTodayData {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string
}

export interface ExchangeArchiveData {
  baseCurrency: string;
  currency: string;
  saleRateNB: number;
  purchaseRateNB: number
}

export interface ArchiveData {
  date: string;
  bank: string;
  baseCurrency: number;
  baseCurrencyLit: string;
  exchangeRate: ExchangeArchiveData[]
}