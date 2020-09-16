import * as React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../resources/logo.svg';

const Header = () => (
  <Wrapper>
    <LogoStyled />
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
  width: 80px;
  height: 80px;
`;

export default Header;