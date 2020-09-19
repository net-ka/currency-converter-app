import * as React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';

import 'antd/dist/antd.css';

import { exchangeToday, ExchangeTodayData } from 'api/currenciesInfo';

import { PageWrapper } from 'view/components/PageWrapper';
import { Table } from '../components/Table';
import { Exchange } from '../components/Exchange';

export const Home = () => {

  const [currenciesToday, setCurrenciesToday] = useState<ExchangeTodayData[]>(null);

  useEffect(() => {
    exchangeToday()
      .then(response => setCurrenciesToday(response.data))
  }, []);

  return (
    <Layout>
      <PageWrapper>
        <Row>
          <ColStyled xs={22} sm={20} md={18} lg={16} xl={12}>
            <Table data={currenciesToday} />
            {currenciesToday && <Exchange data={currenciesToday} />}
          </ColStyled>
        </Row>
      </PageWrapper>
    </Layout>
  );
}

const ColStyled = styled(Col)`
  margin: 50px auto 0;
`;
