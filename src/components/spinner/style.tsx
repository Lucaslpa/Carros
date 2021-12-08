import styled, { keyframes } from 'styled-components';
import { Spinner2 } from '@styled-icons/icomoon/';

const spin = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(Spinner2)`
  width: 2.5rem;

  animation: 1s linear ${spin} infinite;
`;
