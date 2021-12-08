import * as S from './style';
import { Input } from 'components/Input';
import { ButtonCustom } from 'components/Button';
import {useNavigate} from 'react-router-dom'

export const ChangePassword = () => {
  const Navigate = useNavigate()
  return (
    <S.Container>
      <S.Wrapper>
        <S.Form>
          <Input
            name="Senha Atual"
            placeholder=""
            type="text"
            onChange={() => {}}
          />{' '}
          <Input
            name="Nova Senha"
            placeholder=""
            type="text"
            onChange={() => {}}
          />{' '}
          <Input
            name="Confirmar Email"
            placeholder=""
            type="email"
            onChange={() => {}}
          />
          <S.ButtonsContainer>
            <ButtonCustom
              color="light"
              size="medium"
              type="button"
              onClick={() => {
                Navigate('/Home')
              }}
              loading={false}
            >
              Cancelar
            </ButtonCustom>
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
    </S.Container>
  );
};
