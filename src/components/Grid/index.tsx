import * as S from './style';
import { Link } from 'react-router-dom';
import { vehicle } from 'types/vehicle';

export const Grid = ({ vehicles, to }: { vehicles: vehicle[]; to: string }) => {
  return (
    <S.Grid>
      {vehicles.map((vehicle) => (
        <Link to={`/${to}/${vehicle.id}`} key={vehicle.id}>
          <S.GridItem>
            <img src={vehicle.urlFoto} alt="vehicle" />
            <h3>{vehicle.nome}</h3>
          </S.GridItem>
        </Link>
      ))}
    </S.Grid>
  );
};
