import * as React from 'react';
import date from 'date-and-time';
import styled from 'styled-components';

import { Table as TableAntD } from 'antd';

import { fontH2Styles } from 'GlobalStyles';

import { ExchangeTodayData } from 'api/currenciesInfo';

const columns = [
  {
    title: 'Currency/Current Date',
    dataIndex: 'currency',
    key: 'currency',
  },
  {
    title: 'Buy',
    dataIndex: 'buy',
    key: 'buy',
  },
  {
    title: 'Sale',
    dataIndex: 'sale',
    key: 'sale',
  },
];

export const Table = ({ data }: Props) => {

  const dateToday = date.format(new Date(), 'ddd, MMM DD YYYY');

  const dataModified = data && data.map((item, i) => ({
    key: i,
    currency: `${item.ccy}/${item.base_ccy}`,
    buy: (+item.buy).toFixed(2),
    sale: (+item.sale).toFixed(2),
  }));

  return (
    <TableAntDStyled
      columns={columns}
      dataSource={dataModified || []}
      bordered
      title={() => dateToday}
      pagination={false}
      loading={!dataModified && {
        size: 'large'
      }}
    />
  );
}

const TableAntDStyled = styled(TableAntD)`
  .ant-table {
    color: var(--mainText);
    background: var(--defaultBackground);
    min-height: 330px;

    .ant-table-tbody > .ant-table-row:hover > td {
      background: var(--secondaryAccent);
    }

    .ant-table-title {
      ${fontH2Styles};
    }
  }

  .ant-spin-dot-item {
    background-color: var(--secondaryAccent);
  }
`;

interface Props {
  data: ExchangeTodayData[] | null;
}
