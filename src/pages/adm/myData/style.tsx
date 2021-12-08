import styled from 'styled-components';
import media from 'styled-media-query';

export const MyDataContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
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
  max-width: 100%;
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
