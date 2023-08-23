import React, { useState } from 'react';
import { obtenerExpiracionProducto } from '../servicios/productos';
import { TextField, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#F5F5F5',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5DADE2',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
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
  button: {
    padding: '8px 14px',
    backgroundColor: '#2E86C1',
    color: 'white',
    border: '1px solid #1B4F72',
    cursor: 'pointer',
    boxShadow: '5px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  result: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

function ExpiracionProducto() {
  const [nombreProducto, setNombreProducto] = useState('');
  const [expirado, setExpirado] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const manejarCambioNombreProducto = (e) => {
    setNombreProducto(e.target.value);
  };

  const verificarExpiracion = () => {
    obtenerExpiracionProducto(nombreProducto).then((res) => setExpirado(res.data));
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={styles.container}>
      <div style={{ marginTop: '60px' }}>
        <h1>Verificar expiración del producto</h1>
        <label htmlFor="producto">Nombre del producto:</label>
        <input type="text" name="producto" onChange={manejarCambioNombreProducto} style={styles.input} />
        <button onClick={verificarExpiracion} style={styles.button}>
          Verificar
        </button>
        {expirado !== null && <p style={styles.result}>{expirado}</p>}
      </div>
    </div>
  );
}

export default ExpiracionProducto;