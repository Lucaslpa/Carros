import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  main {
    display: flex;
    width: 100%; 
    justify-content: center;
    height: 90%;
  }
`;

export const Aside = styled.aside`
  height: 100%;
  width: 100%;
  max-width: 23rem;
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `}
  ${media.lessThan('medium')`
    display: none;
  `}
`;
