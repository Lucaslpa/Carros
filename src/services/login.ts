import { Api } from './api';
import { client } from 'types/client';

export const Login = async (login: { username: string; password: string }) => {
  const authentication = await Api.post<client>('/login', login);
  if (authentication.status === 200) {
    return authentication.data;
  }
  return null;
};
