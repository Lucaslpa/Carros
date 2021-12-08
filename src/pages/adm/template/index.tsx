import { ReactElement, useEffect, useState } from 'react';
import { Menu } from 'components/Menu';
import * as S from './style';
import { Option } from 'components/Option';
import { HouseFill } from '@styled-icons/bootstrap';
import { VehicleCar } from '@styled-icons/fluentui-system-filled';
import { Outlet, Link } from 'react-router-dom';
import { client } from 'types/client';
import { getSession } from 'utils/session/getSession';
import { useNavigate } from 'react-router-dom';

export const AdmTemplate = () => {
  const [client, setClient] = useState<client>({
    email: '',
    id: 0,
    login: '',
    nome: '',
    roles: [],
    token: '',
    urlFoto: '',
  });
  const Navigate = useNavigate();

  useEffect(() => {
    const session = getSession();
    if (!session) {
      Navigate('/');
      return;
    }
    setClient(session.client);
  }, []);

  return (
    <S.Container>
      <header>
        <Menu isUser={false} client={client} />
      </header>
      <main>
        <S.Aside>
          <ul>
            <li>
              <Option to="Home" text="Home" Img={HouseFill} />
            </li>
            <li>
              <Option to="Cars" text="Carros" Img={VehicleCar} />
            </li>
          </ul>
        </S.Aside>
        <Outlet />
      </main>
    </S.Container>
  );
};
