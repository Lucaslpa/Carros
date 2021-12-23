import styled from 'styled-components';
import media from 'styled-media-query';

export const MyDataContainer = styled.div`
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
  > *:first-child {
    margin-right: 2rem;
  }
`;

export const Form = styled.form`
  padding: 2.5rem;
  width: 100%;
  min-width: 32rem;
  
  height: 40rem;
  -webkit-box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.35);
  > div {
    margin: 2rem 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 35rem;
  height: 37rem;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.35);
  img {
    width: 60%;
  }
  ${media.lessThan('small')`
    display: none;
  `}
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

export const Types = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  ${media.lessThan('1000px')`
   justify-content: flex-start;
  `}
`;
export const Type = styled.div`
  width: auto;
  margin: 0.5rem 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    height: 1.7rem;
    width: 1.7rem;
    cursor: pointer;
    padding: 2rem;
    margin-right: 1rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  label {
    font-size: 1.7rem;
    font-weight: 300;
  }
`;

export const Title = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  position: absolute;
  left: -0.5%;
  bottom: 120%;
`;
