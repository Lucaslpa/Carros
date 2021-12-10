export const client = {
  id: 1,
  login: 'loginh',
  nome: 'name',
  email: 'email@gmail.com',
  urlFoto: 'https://i.pinimg.com/originals/85/45/81/854581580a300a561e5146ced943ccb7.jpg',
  token: 'sadasdasdfasfasfasf32f2f23f23t2t',
  roles: ['admin'],
};

export const clients = [client, client, client].map((client, index) => {
  return { ...client, id: index + 1 };
});
