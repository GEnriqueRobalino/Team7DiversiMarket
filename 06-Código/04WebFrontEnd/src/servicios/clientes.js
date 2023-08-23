// src/servicios/clientes.js
import axios from 'axios';

const URL = 'https://node-js-ac2.rj.r.appspot.com/clientes';

export const obtenerClientes = () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.get(URL + '/clients', config);
};

export const crearCliente = async (cliente) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  
  const response = await axios.post(URL + '/add', cliente, config);

  console.log(response)
  return response
};

export const actualizarCliente = (cliente) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.put(URL + '/updateClient', cliente, config);
};

export const eliminarCliente = (cliente) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.delete(URL + '/deleteClient', { data: { nombre: cliente.nombre }, ...config });
};

export const obtenerClientesPorCiudad = (ciudad) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.post(URL + '/clientsforCity', { ciudad }, config);
};