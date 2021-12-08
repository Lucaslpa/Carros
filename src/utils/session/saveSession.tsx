import { client } from 'types/client';

export const saveSession = (client: client) => {
  const session = {
    client,
  };
  sessionStorage.setItem('session', JSON.stringify(session));

  return session;
};
