import { Api } from './api';
import { vehicle } from 'types/vehicle';
import { getSession } from 'utils/session/getSession';

export const updateVehicle = async (vehicle: vehicle) => {
  const update = await Api.post<vehicle>(
    '/carros',
    vehicle,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getSession()?.client.token}`,
      },
    }
  );
 
  if(update.status !== 200) return null;
  return update.data;
};
