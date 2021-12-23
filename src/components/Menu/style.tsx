import styled, { css } from 'styled-components';
import { ArrowLeft as ArrowIcon } from '@styled-icons/bootstrap/';
import { LogoutBoxR } from '@styled-icons/remix-line';

const isUserStyle = css`
  background-color: '#0eab4d';
  height: 6rem;
  justify-content: space-between;
  -webkit-box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.65);
  box-shadow: 1px 3px 7px 1px rgba(0, 0, 0, 0.65);
`;

export const MenuContainer = styled.menu<{ isUser: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 3.5rem;
  ${({ theme, isUser }) => css`
    background-color: ${isUser ? '#19c710' : theme.colors.primary};
    height: 7rem;
    font-size: 1.9rem;
    color: white;
    ${isUser && isUserStyle}
  `}
  z-index: 1000;
`;

export const AdmProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  color: white;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  font-size: 1.7rem;
  font-weight: 300;
  right: 0;
  img {
    width: 4rem;
  }
`;

const openMenu = css`
  width: 100%;
  height: 15rem;
  opacity: 1;
`;

export const AdmMenu = styled.nav<{ open: boolean }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondary};
  top: 40%;
  right: 0;
  padding: 1rem 0;
  width: 0%;
  height: 0rem;
  transition: 0.2s;
  opacity: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  -webkit-box-shadow: 3px 5px 18px 0px rgba(51, 51, 51, 0.6);
  box-shadow: 3px 5px 18px 0px rgba(51, 51, 51, 0.6);
   z-index: 1000;
  ul {
    list-style: none;
    li {
      padding: 1rem 0.7rem;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryDark};
      }
      color: black;
    }
  }
  ${({ open }) => css`
    ${open ? openMenu : null}
  `}
`;

export const Logout = styled(LogoutBoxR)`
  padding: 1rem;
  width: 4.3rem;
  cursor: pointer;
  border-radius: 100%;
  margin-right: 1rem;
  transition: 0.2s;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

export const ArrowLeft = styled(ArrowIcon)`
  padding: 1rem;
  width: 4.3rem;
  cursor: pointer;
  border-radius: 100%;
  margin-right: 1rem;
  transition: 0.2s;
  fill: white;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;
