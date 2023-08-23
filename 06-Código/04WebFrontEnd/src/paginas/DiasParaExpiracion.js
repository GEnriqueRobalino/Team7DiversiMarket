import React, { useState } from 'react';
import { obtenerDiasParaExpiracion } from '../servicios/productos';
import { Menu, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando react-router para la navegación

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust the height as needed
    backgroundColor: '#F5F5F5', // Add your desired background color
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#5DADE2',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  linkButton: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  input: {
    marginBottom: '10px',
    padding: '5px',
  },
  result: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

function DiasParaExpiracion() {
  const [name, setNombreProducto] = useState('');
  const [dias, setFecha] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const manejarCambioNombreProducto = (e) => {
    setNombreProducto(e.target.value);
  };

  const buscarDiasParaExpiracion = () => {
    obtenerDiasParaExpiracion(name).then((res) => setFecha(res.data));
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={styles.container}>
      <h1>Días para la expiración del producto</h1>
      <label htmlFor="name">Nombre del producto:</label>
      <input
        type="text"
        name="name"
        onChange={manejarCambioNombreProducto}
        style={{ ...styles.input, marginBottom: '20px' }}
      />
      <button onClick={buscarDiasParaExpiracion} style={styles.button}>
        Calcular
      </button>
      {dias !== null && <p style={styles.result}>{dias}</p>}
    </div>
  );
}

export default DiasParaExpiracion;