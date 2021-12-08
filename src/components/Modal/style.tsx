import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.07);
`;

export const Modal = styled.div`
  width: auto;
  height: 14rem;
  max-width: 40rem;
  min-width: 20rem;
  border-radius: 0.5rem;
  position: relative;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  strong {
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
    hyphens: manual;
    font-weight: 300;
    word-break: break-all;
  }

  span {
    font-size: 1.3rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    ${({ theme }) => css`
      color: ${theme.colors.blue};
    `}
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 0.5rem;

    &:hover {
      background-color: rgb(0, 0, 0, 0.07);
    }
  }
`;
