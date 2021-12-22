import { MenuContainer, AdmMenu, AdmProfile, ArrowLeft, Logout } from './style';
import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/handleClickOutside';
import { Link, useNavigate } from 'react-router-dom';
import { removeSession } from 'utils/session/removeSession';
import { client } from 'types/client';
import {useRoleProvider} from 'contexts/role'

export const Menu = ({
  isUser,
  carName,
  client,
}: {
  isUser: boolean;
  carName?: string;
  client?: client;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const Menu = useRef<HTMLElement>(null);
  const Navigate = useNavigate();
  const {setRole} = useRoleProvider()

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useClickOutside(Menu, setIsOpen);

  const handleLogout = () => {
    removeSession();
    setRole([''])
    Navigate('/');
  };

  return (
    <MenuContainer isUser={isUser}>
      {isUser && (
        <>
          <div>
            {carName && (
              <Link to="/Cars">
                <ArrowLeft />
              </Link>
            )}
            <span>{carName ? carName : 'Carros'}</span>
          </div>
          <Logout onClick={handleLogout} />
        </>
      )}

      {!isUser && client && (
        <AdmProfile onClick={handleClick}>
          <span>{client.nome}</span>
          <img alt="profile" src={client.urlFoto} />
          <AdmMenu ref={Menu} open={isOpen}>
            <ul>
              <Link to="/myData">
                <li>
                  <span>Meus Dados</span>
                </li>
              </Link>
              <Link to="/changePassword">
                <li>
                  <span>Alterar senha</span>
                </li>
              </Link>

              <li onClick={handleLogout}>
                <span>Logout</span>
              </li>
            </ul>
          </AdmMenu>
        </AdmProfile>
      )}
    </MenuContainer>
  );
};
