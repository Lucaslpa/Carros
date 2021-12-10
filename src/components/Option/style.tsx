import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 6.4rem;
  cursor: pointer;
  transition: 0.2s;
  color: black;
  span {
    margin-left: 3rem;
    font-size: 1.8rem;
    font-weight: 300;
  }
  ${({ theme }) => css`
    svg {
      width: 100%;
      max-width: 3rem;
      fill: ${theme.colors.primary};
    }
    background-color: ${theme.colors.secondary};
    &:hover {
      background-color: #ededed;
    }
  `}
`;
