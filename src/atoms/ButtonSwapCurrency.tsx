import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';

interface Props {
  onClick?: () => void;
}

const ButtonSwapCurrency = ({ onClick }: Props) => (
  <ButtonWrapper onClick={onClick} type='default' icon={<RetweetOutlined />} />
);

const ButtonWrapper = styled(Button)`
  background-color: var(--defaultBackground);
  border: 1px solid var(--border);
  border-radius: 5px;
  height: 30px;
  width: 70px;

  &:hover {
    background-color: var(--mainAccent);
    border-color: var(--border);
  }

  svg {
    fill: var(--secondaryText);
    width: 25px;
    height: 25px;
  }
`;

export default ButtonSwapCurrency;
