import axios from 'axios';

const baseURL = 'https://node-js-ac2.rj.r.appspot.com/clientes';

export const obtenerProductos = () => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.get(`${baseURL}/productos`, config);
};

export const crearProducto = (producto) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.post(`${baseURL}/addProducto`, producto, config);
};

export const actualizarProducto = (producto) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.put(`${baseURL}/actualizarProducto`, producto, config);
};

export const eliminarProducto = (producto) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.delete(`${baseURL}/deleteProducto`, { data: { name: producto.name }, ...config });
};

export const obtenerDiasParaExpiracion = (name) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.post(`${baseURL}/productos/daysToExpiration`, { name }, config);
};

export const obtenerExpiracionProducto = (name) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.post(`${baseURL}/productos/expiration`, { name }, config);
};

export const obtenerUtilidadProducto = (name) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Bearer ${token}` }
  };
  return axios.post(`${baseURL}/productos/profit`, { name }, config);
};