import * as S from './style';
import { Input } from 'components/Input';
import { ButtonCustom } from 'components/Button';
import { getSession } from 'utils/session/getSession';
import { useEffect, useState } from 'react';
import { client } from 'types/client';
import { useNavigate, Link } from 'react-router-dom';

export const MyData = () => {
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
    <S.MyDataContainer>
      <S.Wrapper>
        <S.ImageContainer>
          <img alt="Administrator" src={client.urlFoto} />
        </S.ImageContainer>
        <S.Form>
          <Input
            name="Nome"
            placeholder=""
            value={client.nome}
            type="text"
            onChange={() => {}}
          />{' '}
          <Input
            name="Login"
            placeholder=""
            type="text"
            value={client.login}
            onChange={() => {}}
          />{' '}
          <Input
            name="Email"
            placeholder=""
            type="email"
            value={client.email}
            onChange={() => {}}
          />
          <S.ButtonsContainer>
            <ButtonCustom
              color="light"
              size="medium"
              type="button"
              onClick={() => {
                Navigate('/Home');
              }}
              loading={false}
            >
              Cancelar
            </ButtonCustom>{' '}
            <ButtonCustom
              color="dark"
              size="medium"
              type="submit"
              onClick={() => {}}
              loading={false}
            >
              Salvar
            </ButtonCustom>
          </S.ButtonsContainer>
        </S.Form>
      </S.Wrapper>
    </S.MyDataContainer>
  );
};
