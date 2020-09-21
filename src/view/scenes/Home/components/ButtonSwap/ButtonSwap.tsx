import * as React from 'react';

import { RetweetOutlined } from '@ant-design/icons';

import { Button } from 'view/components/Button';

export const ButtonSwap = ({ onClick }: Props) => (
  <Button onClick={onClick} type='default' icon={<RetweetOutlined />} />
);

interface Props {
  onClick?: () => void;
}
