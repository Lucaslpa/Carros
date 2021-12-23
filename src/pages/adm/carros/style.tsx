import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 89vh;
  padding: 0.6rem 2rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  justify-content: center; 
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
