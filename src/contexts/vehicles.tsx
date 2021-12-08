import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { vehicle } from 'types/vehicle';

const VehiclesContext = createContext<{
  vehicles: vehicle[];
  setVehicles: Dispatch<SetStateAction<vehicle[]>>;
}>({ setVehicles: () => {}, vehicles: [] });

export const VehiclesProvider = ({ children }: { children: any }) => {
  const [vehicles, setVehicles] = useState<vehicle[]>([]);
  return (
    <VehiclesContext.Provider value={{ vehicles, setVehicles }}>
      {children}
    </VehiclesContext.Provider>
  );
};

export const useVehiclesContext = () => useContext(VehiclesContext);
