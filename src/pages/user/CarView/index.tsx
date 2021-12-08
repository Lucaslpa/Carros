import { Menu } from 'components/Menu';
import * as S from './style';
import { useEffect, useState } from 'react';
import { useVehiclesContext } from 'contexts/vehicles';
import { useNavigate, useParams } from 'react-router';
import { getVehicles } from 'services/getVehicles';
import { vehicle } from 'types/vehicle';

export const CarView = () => {
  const [vehicle, setVehicle] = useState<vehicle>({
    descricao: '',
    id: 0,
    latitude: '',
    longitude: '',
    nome: '',
    tipo: '',
    urlFoto: '',
    urlVideo: '',
  });
  const carTypes = ['Classicos', 'Esportivos', 'Luxo'];
  const { id } = useParams();
  const { vehicles } = useVehiclesContext();
  const navigate = useNavigate();
  useEffect(() => {
    const vehicle = vehicles.find((v) => v.id === Number(id));
    if (!vehicle || typeof vehicle === 'undefined') {
      getVehicles(Number(id)).then((vehicle) => {
        if (!vehicle || 'length' in vehicle) {
          navigate('/');
          return;
        }
        setVehicle(vehicle);
      });
      return;
    }
    setVehicle(vehicle);
  }, [id]);
  return (
    <S.Container>
      <header>
        <Menu isUser={true} carName={vehicle.nome} />
      </header>
      <main>
        <img alt="vehicle" src={vehicle.urlFoto} />
      </main>
    </S.Container>
  );
};
