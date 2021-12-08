import { Menu } from 'components/Menu';
import { Grid } from 'components/Grid';
import * as S from './style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useVehiclesContext } from 'contexts/vehicles';
import { getVehicles } from 'services/getVehicles';
import { Spinner } from 'components/spinner/style';

export const CarsList = () => {
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
      <header>
        <Menu isUser={true} carName="" />
      </header>
      <main>
        {loading ? (
          <S.Loading>
            <Spinner />
          </S.Loading>
        ) : (
          <Grid vehicles={vehicles} to="Car" />
        )}
      </main>
    </S.Container>
  );
};
