import * as React from 'react';
import styled from 'styled-components';
import { Button as ButtonAntD } from 'antd';

export const Button = ({ onClick, type = 'default', icon, children }: Props) => (
  <ButtonStyled onClick={onClick} type={type} icon={icon}>
    {children}
  </ButtonStyled>
);

const ButtonStyled = styled(ButtonAntD)`
  background-color: var(--defaultBackground);
  border: 1px solid var(--border);
  border-radius: 5px;
  height: 30px;
  min-width: 70px;
  text-transform: uppercase;

  &:hover {
    background-color: var(--mainAccent);
    border-color: var(--border);
    color: var(--secondaryText);
  }

  svg {
    fill: var(--secondaryText);
    width: 25px;
    height: 25px;
  }
`;

interface Props {
  onClick?: () => void;
  type?: "default" | "link" | "text" | "ghost" | "primary" | "dashed";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
