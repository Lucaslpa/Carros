export const vehicle = {
  id: 1,
  nome: 'carro1',
  tipo: 'carros',
  descricao: 'descrição',
  urlFoto:
    'https://conteudo.imguol.com.br/c/entretenimento/dc/2020/11/17/fiat-argo-10-2021-1605633169362_v2_450x337.jpg',
  urlVideo: 'urlvideo',
  latitude: 'lat',
  longitude: 'long',
};

export const vehicles = [vehicle, vehicle, vehicle].map((vehicle, index) => {
  return { ...vehicle, id: index + 1 };
});
