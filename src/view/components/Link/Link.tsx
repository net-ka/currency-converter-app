import * as React from 'react';
import styled from 'styled-components';

export const Link = ({ href, text }:Props) => (
  <LinkStyled href={href} target='_blank' rel='noopener noreferrer'>
    {text}
  </LinkStyled>
);

const LinkStyled = styled.a`
  color: var(--mainText);
  text-decoration: none;
  border-bottom: 1px solid var(--mainAccent);

  &:hover {
    border-bottom-width: 2px;
    color: var(--mainText);
  }
`;

interface Props {
  href: string;
  text: string;
}
