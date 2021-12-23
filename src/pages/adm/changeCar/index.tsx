import * as S from './style';
import { Input } from 'components/Input';
import { ButtonCustom } from 'components/Button';
import { useParams } from 'react-router-dom';
import { useVehiclesContext } from 'contexts/vehicles';
import { useEffect, useState } from 'react';
import { vehicle } from 'types/vehicle';
import { getVehicles } from 'services/getVehicles';
import { useNavigate } from 'react-router-dom';
import { updateVehicle as Update } from 'services/updateVehicles';


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

  async function updateVehicle() {
    if(!vehicle.id) return 
     await Update(vehicle)
  }

  function getVehicle() {
 const vehicle = vehicles.find((v) => v.id === Number(id));
    if (!vehicle || typeof vehicle === 'undefined') {
      getVehicles(Number(id)).then((vehicle) => {
        const vehicleNotFound = !vehicle || 'length' in vehicle
        if (vehicleNotFound) {
          navigate('/');
          return;
        }
        setVehicle(vehicle);
      });
      return;
    }
    setVehicle(vehicle);
  }

  useEffect(() => {
   getVehicle()
  }, [id]);

  return (
    <S.MyDataContainer>
      <S.Wrapper>
        <S.ImageContainer>
          <img alt="Vehicle" src={vehicle.urlFoto} />
        </S.ImageContainer>
        <S.Form onSubmit={(e) => {
                e.preventDefault();
                updateVehicle()
              }}>
          <S.Types>
            <S.Title>Tipo </S.Title>
            {carTypes.map((type) => (
              <S.Type key={type}>
                <input type="radio"  id={type} name="type" value={type}
                 onChange={(e) => setVehicle({ ...vehicle, tipo: e.target.value })}
                 checked={type.toLowerCase() === vehicle.tipo.toLowerCase() && true || false }/>
                <label htmlFor={type}>{type}</label>
              </S.Type>
            ))}
          </S.Types>
          <Input
            name="Nome"
            placeholder=""
            type="text"
            value={vehicle.nome}
            onChange={(e) => {
              setVehicle({ ...vehicle, nome: e.target.value })
            }}
          />{' '}
          <Input
            name="Descrição"
            placeholder=""
            type="text"
            value={vehicle.descricao}
            onChange={(e) => {
              setVehicle({ ...vehicle, descricao: e.target.value })
            }}
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
