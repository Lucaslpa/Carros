import { client } from 'types/client';
export const getSession = (): { client: client } | null => {
  return JSON.parse(sessionStorage.getItem('session') || 'null');
};
