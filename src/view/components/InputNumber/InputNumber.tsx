import * as React from 'react';
import styled from 'styled-components';
import { InputNumber as Input } from 'antd';

export const InputNumber = ({
  onChange,
  value,
  defaultValue
}: Props) => (
  <InputStyled
    max={1000000}
    min={0}
    precision={2}
    size="large"
    step={0.01}
    onChange={onChange}
    value={value}
    defaultValue={defaultValue}
  />
);

const InputStyled = styled(Input)`
  &.ant-input-number:hover,
  &.ant-input-number:focus {
    border-color: var(--mainAccent);
    box-shadow: none;
  }
`;

interface Props {
  onChange: (arg: number) => void;
  value: number;
  defaultValue: number
}
