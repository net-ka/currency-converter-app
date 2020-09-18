import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from 'view/assets/icons/logo.svg';

export const Header = () => (
  <Wrapper>
    <LogoStyled />
    <Title>Awesome Currency Converter</Title>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--mainAccent);
  width: 100%;
  height: 100px;
  padding: 0 80px;
`;

const LogoStyled = styled(Logo)`
  width: 70px;
  height: 70px;
`;

const Title = styled.h1.attrs({
  className: 'font-h1'
})`
  text-transform: uppercase;
  margin: 0;
  color: var(--secondaryText);
`;
