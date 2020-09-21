import * as React from 'react';
import styled from 'styled-components';

import { Header } from 'view/components/Header';
import { Footer } from 'view/components/Footer';

export const PageWrapper = ({ children }:Props) => (
  <Wrapper>
    <Container>
      <Header />
      {children}
    </Container>
    <Footer />
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
