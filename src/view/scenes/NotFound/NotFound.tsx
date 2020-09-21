import * as React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';

import { PageWrapper } from 'view/components/PageWrapper';
import { Button } from 'view/components/Button';

export const NotFound = () => (
  <Layout>
    <PageWrapper>
      <Row>
        <ColStyled xs={22} sm={20} md={18} lg={16} xl={12}>
          <Title>Booom! Page not found. You can visit Main Page</Title>
          <Link to='/'><Button>Main page</Button></Link>
        </ColStyled>
      </Row>
    </PageWrapper>
  </Layout>
);

const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const Title = styled.h2.attrs({
  className: 'font-h2'
})`
  color: var(--extraAccent);
  margin-bottom: 20px;
`;
