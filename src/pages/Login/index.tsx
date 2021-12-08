import * as S from './style';
import { Input } from '../../components/Input';
import { ButtonCustom } from '../../components/Button';
import { useEffect, useState } from 'react';
import { ValidatePassword } from '../../utils/validatePassword';
import { Modal } from '../../components/Modal';
import { useNavigate } from 'react-router-dom';
import { useRoleProvider } from 'contexts/role';
import { saveSession } from 'utils/session/saveSession';
import { Login as Authenticate } from 'services/login';

export const Login = () => {
  const [login, setLogin] = useState({ content: '', error: false });
  const [password, setPassword] = useState({ content: '', error: false });
  const [modal, setModal] = useState({ message: '', open: false });
  const [loading, setLoading] = useState(false);
  const { role, setRole } = useRoleProvider();
  const Navigate = useNavigate();

  const handleValidateForm = () => {
    const loginIsEmpty = login.content.length === 0;
    const passwordIsEmpty = password.content.length === 0;
    if (loginIsEmpty) {
      setModal({ message: 'Preencha o campo do login', open: true });
      setLogin((e) => ({ ...e, error: true }));
      return false;
    } else {
      setLogin((e) => ({ ...e, error: false }));
    }
    if (passwordIsEmpty) {
      setModal({ message: 'Preencha o campo da senha', open: true });
      setPassword((e) => ({ ...e, error: true }));
      return false;
    } else {
      setPassword((e) => ({ ...e, error: false }));
    }
    const invalidPassword = ValidatePassword(password.content);
    if (invalidPassword) {
      setPassword((e) => ({ ...e, error: true }));
      setModal({ message: invalidPassword, open: true });
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    const formIsValid = handleValidateForm();
    if (!formIsValid) return;
    setLoading(true);
    const loginResponse = await Authenticate({
      username: login.content,
      password: password.content,
    });
    if (!loginResponse) {
      setLoading(false);
      setModal({ message: 'Login ou senha inválidos', open: true });
      return;
    }
    saveSession(loginResponse);
    setRole((prev) => loginResponse.roles);
    if (loginResponse.roles[0] === 'ROLE_ADMIN') {
      setLoading(false);
      Navigate('/Home');
      return;
    }
    if (loginResponse.roles[0] === 'ROLE_USER') {
      setLoading(false);
      Navigate('/Cars');
      return;
    }
  };

  const handleCloseModal = () => {
    setModal({ message: '', open: false });
  };

  return (
    <S.Container>
      {modal.open && (
        <Modal message={modal.message} closeModal={handleCloseModal} />
      )}
      <S.Wrapper>
        <S.Title>
          <h1>Carros</h1>
        </S.Title>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <Input
            onChange={(e) =>
              setLogin((current) => ({ ...current, content: e.target.value }))
            }
            name="Login"
            placeholder="Digite seu login"
            type="text"
            error={login.error}
            value={login.content}
          />
          <Input
            onChange={(e) =>
              setPassword((current) => ({
                ...current,
                content: e.target.value,
              }))
            }
            name="Senha"
            placeholder="Digite sua senha"
            type="password"
            error={password.error}
            value={password.content}
          />
          <div className="keep-loginForget-password">
            <div>
              <span>Manter logado</span>
              <input type="checkBox" />
            </div>
            <a>Esqueci a senha</a>
          </div>

          <ButtonCustom
            type="submit"
            size="large"
            color="dark"
            loading={loading}
          >
            Login
          </ButtonCustom>

          <S.CreateAccount>
            <span>Ainda não cadastrado ?</span>
            <a> Crie uma conta </a>
          </S.CreateAccount>
          <a>Ajuda</a>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};
