import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 47rem;
  margin: 0 1 rem;
  height: 48rem;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1rem;
  -webkit-box-shadow: 2px 6px 17px 5px rgba(0, 0, 0, 0.27);
  box-shadow: 2px 6px 17px 5px rgba(0, 0, 0, 0.27);
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 85%;

  div:nth-child(1) {
    margin: 1rem;
  }
  div:nth-child(2) {
    margin-top: 1rem;
  }

  a {
    text-decoration: underline;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .keep-loginForget-password {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-size: 1.4rem;
    margin-top: 2rem;
    ${({ theme }) => css`
      div {
        display: flex;
        align-items: center;
        padding: 2rem 0;
        span {
          margin-right: 1rem;
          color: ${theme.colors.primary};
        }
      }
      a {
        text-decoration: underline;
        color: ${theme.colors.primary};
      }
    `}
  }
`;

export const CreateAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  font-size: 1.4rem;
  span {
    margin-right: 1rem;
    color: grey;
  }
  a {
    text-decoration: underline;
    ${({ theme }) => css`
      color: ${theme.colors.primary};
    `}
  }
`;

export const Title = styled.div`
  background-color: #242424;
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: white;
  }
`;
