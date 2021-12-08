import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkCustom = styled(Link)`
width: 100%;
`

type buttonProps = {
  color: 'light' | 'dark';
  size: 'medium' | 'large';
};

const sizes = {
  medium: css`
    width: 14rem;
    height: 5rem;
  `,
  large: css`
    height: 4.2rem;
    max-width: 60rem;
  `,
};

const colors = {
  dark: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      &:hover {
        background-color: ${theme.colors.primaryLight};
      }
    `}
  `,
  light: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      &:hover {
        background-color: ${theme.colors.secondary};
      }
    `}
  `,
};

export const Button = styled.button<buttonProps>`
  padding: 0.5rem;

  width: 100%;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  height: 6rem;
  -webkit-box-shadow: 3px 1px 7px 1px rgba(122, 122, 122, 0.46);
  box-shadow: 3px 1px 7px 1px rgba(122, 122, 122, 0.46);
  ${({ size, color }) => css`
    ${colors[color]}
    ${sizes[size]}
  `}
  a {
    width: 100%;
  }
  &:hover {
    -webkit-box-shadow: 3px 1px 7px 3px rgba(122, 122, 122, 0.52);
    box-shadow: 3px 1px 7px 3px rgba(122, 122, 122, 0.52);
  }
`;
