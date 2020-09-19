import * as React from 'react';
import styled from 'styled-components';

import { Header } from 'view/components/Header';

export const PageWrapper = ({ children }:Props) => (
  <Wrapper>
    <Container>
      <Header />
      {children}
    </Container>
    <SomeFooter />
  </Wrapper>
);

interface Props {
  children?: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  flex: 1 0 auto; 
`;

const SomeFooter = styled.div`
  flex: 0 0 auto;
  height: 50px;
  background: var(--secondaryAccent);
`;