import axios from 'axios';

const instanciaAxios = axios.create({
  baseURL: 'https://api.plos.org',
});

export const buscarArticulos = (termino) => {
  return instanciaAxios.get(`/search?q=title:${termino}`);
};

export const obtenerResumen = (id) => {
  return instanciaAxios.get(`/search?q=id:${id}`);
};

export const obtenerInformacionCliente = () => {
  return axios.get('https://httpbin.org/get');
};
