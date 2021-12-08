import { Api } from './api';
import { vehicle } from 'types/vehicle';
import { getSession } from 'utils/session/getSession';

export const getVehicles = async (vehicleID?: number) => {
  const getVehicles = await Api.get<vehicle[] | vehicle>(
    vehicleID ? `/carros/${vehicleID}` : '/carros',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getSession()?.client.token}`,
      },
    }
  );
  if (getVehicles.status === 200) {
    return getVehicles.data;
  }
  return null;
};
