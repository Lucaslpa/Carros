import * as S from './style';
import { Input } from 'components/Input';
import { ButtonCustom } from 'components/Button';
import { useParams } from 'react-router-dom';
import { useVehiclesContext } from 'contexts/vehicles';
import { useEffect, useState } from 'react';
import { vehicle } from 'types/vehicle';
import { getVehicles } from 'services/getVehicles';
import { useNavigate } from 'react-router-dom';

export const ChangeCar = () => {
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
    <S.MyDataContainer>
      <S.Wrapper>
        <S.ImageContainer>
          <img alt="Vehicle" src={vehicle.urlFoto} />
        </S.ImageContainer>
        <S.Form>
          <S.Types>
            <S.Title>Tipo </S.Title>
            {carTypes.map((type) => (
              <S.Type key={type}>
                <input type="radio" id={type} name="type" value={type} />
                <label htmlFor={type}>{type}</label>
              </S.Type>
            ))}
          </S.Types>
          <Input
            name="Nome"
            placeholder=""
            type="text"
            value={vehicle.nome}
            onChange={() => {}}
          />{' '}
          <Input
            name="Descrição"
            placeholder=""
            type="text"
            value={vehicle.descricao}
            onChange={() => {}}
          />{' '}
          <S.ButtonsContainer>
            <ButtonCustom
              color="light"
              size="medium"
              type="button"
              onClick={() => {
                navigate('/Cars');
              }}
              loading={false}
            >
              Cancelar
            </ButtonCustom>
            <ButtonCustom
              color="dark"
              size="medium"
              type="submit"
              onClick={() => {}}
              loading={false}
            >
              Salvar
            </ButtonCustom>
          </S.ButtonsContainer>
        </S.Form>
      </S.Wrapper>
    </S.MyDataContainer>
  );
};
