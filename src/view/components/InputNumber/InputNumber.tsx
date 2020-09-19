import * as React from 'react';
import styled from 'styled-components';
import { InputNumber as Input } from 'antd';

interface Props {
  onClick?: () => void;
}

export const InputNumber = () => (
  <Input
    max={1000000}
    min={0}
    precision={2}
    size="large"
    step={0.01}
    defaultValue={0}
  />
);
