import * as React from 'react';
import styled from 'styled-components';

import { Link } from 'view/components/Link'

export const Footer = () => (
  <Wrapper>
    <Text>
      2020 by <Link href='https://github.com/net-ka' text='net-ka' />. All rights reserved
    </Text>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  height: 50px;
  background: var(--secondaryAccent);
`;

const Text = styled.p`
  color: var(--secondaryText);
  margin: 0;
`;
