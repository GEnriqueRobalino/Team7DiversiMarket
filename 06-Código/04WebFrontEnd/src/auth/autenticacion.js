// src/auth/autenticacion.js
import axios from 'axios';

export const iniciarSesion = (credenciales) => {
  return axios.post('https://node-js-ac2.rj.r.appspot.com/clientes/login', credenciales)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      return res.data;
    })
    .catch((error) => {
      console.error('Hubo un error al iniciar sesión:', error);
      throw error;
    });
};

export const cerrarSesion = () => {
  localStorage.removeItem('token');
};