import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  height: 100%;
   display: flex; 
  justify-content: center; 
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
 max-width: 120rem;
  height: 100%;
  padding: 2rem;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 2.5rem;
  width: 100%;

  max-width: 50rem;
  height: 40rem;
  -webkit-box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.35);
  > div {
    margin: 2rem 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  > *:first-child {
    margin-right: 1.5rem;
  }
`;
