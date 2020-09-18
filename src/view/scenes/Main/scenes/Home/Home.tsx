import * as React from "react";
import { useEffect } from "react";
import { Layout } from 'antd';

import 'antd/dist/antd.css';

import { exchangeToday } from 'api/currenciesInfo';

import { PageWrapper } from '../../components/PageWrapper';

export const Home = () => {

  useEffect(() => {
    exchangeToday()
    .then(response => console.log(response.data))
  }, []);

  return (
    <Layout>
      <PageWrapper />
    </Layout>
  );
}
