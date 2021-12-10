import { Grid } from 'components/Grid';
import * as S from './style';
import { useVehiclesContext } from 'contexts/vehicles';
import { useEffect, useState } from 'react';
import { getVehicles } from 'services/getVehicles';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'components/spinner/style';

export const Carros = () => {
  const { vehicles, setVehicles } = useVehiclesContext();
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  useEffect(() => {
    if (vehicles.length === 0) {
      setLoading(true);
      getVehicles().then((data) => {
        if (data && 'length' in data) {
          setVehicles(data);
          setLoading(false);
          return;
        }
        Navigate('/');
        return;
      });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <S.Container>
      {loading ? (
        <S.Loading>
          <Spinner />
        </S.Loading>
      ) : (
        <Grid vehicles={vehicles} to="ChangeCar" />
      )}
    </S.Container>
  );
};
