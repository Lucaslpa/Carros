import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  padding-top: 1.4rem;
  width: 100%;
  max-width: 130rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.3rem;
  ${media.lessThan('900px')`
    grid-template-columns: 1fr 1fr;
  `}
  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
`;

export const GridItem = styled.div`
  width: 100%;
  height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: -1px 1px 5px 2px rgba(0, 0, 0, 0.06);
  box-shadow: -1px 1px 5px 2px rgba(0, 0, 0, 0.06);
  border-radius: 0.3rem;
  cursor: pointer;
  padding: 1rem;
  border-bottom: solid 1px black;
  border-right: solid 1px black;
  border-left: solid 0.2px gray;
  border-top: solid 0.2px gray;
  transition: 0.3s;
  img {
    width: 100%;
    max-width: 25rem;
    margin: 0 1rem;
  }
  h3 {
    width: auto;
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: 400;
    word-break: break-all;
    ${({ theme }) => css`
      color: ${theme.colors.primary};
    `}
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
