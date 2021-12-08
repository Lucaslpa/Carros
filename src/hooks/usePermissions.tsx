import { useNavigate } from 'react-router-dom';
import { getSession } from 'utils/session/getSession';
export const usePermissions = (role: 'ROLE_ADMIN' | 'ROLE_USER') => {
  const Navigate = useNavigate();
  const session = getSession();

  if (!session || session?.client.roles[0] !== role) {
    Navigate('/');
  }
};
