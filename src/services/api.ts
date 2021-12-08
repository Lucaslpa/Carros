import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://carros-springboot.herokuapp.com/api/v2',
  validateStatus: () => true,
});
