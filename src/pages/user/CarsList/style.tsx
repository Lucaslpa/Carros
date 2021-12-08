import styled from 'styled-components';

export const Container = styled.div`
  main {
    display: flex;
    justify-content: center;
    padding: 1rem;
    height: 89vh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
