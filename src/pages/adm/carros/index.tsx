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

  function getVehiclesFromApi() {
 if (!vehicles.length) {
      setLoading(true);
      getVehicles().then((data) => {
        const dataExist = data && 'length' in data
        if (dataExist) {
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
  }

  


  useEffect(() => {
   getVehiclesFromApi()
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
