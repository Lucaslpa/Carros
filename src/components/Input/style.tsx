import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.7rem;
  font-weight: 500;
`;

export const Input = styled.input<{ error: boolean }>`
  outline: none;
  border: none;
  border-bottom: solid 2px
    ${(props) => (props.error ? 'red' : props.theme.colors.secondaryDark)};
  width: 100%;
  max-width: 50rem;
  transition: 0.3s;
  font-size: 1.4rem;
  font-weight: 300;
  padding: 1.3rem 0;
  background-color: transparent;
  &:focus {
    border-bottom: solid 2px
      ${(props) => (props.error ? 'red' : props.theme.colors.primary)};
  }
`;
