import React, { useState } from 'react';
import { obtenerUtilidadProducto } from '../servicios/productos';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const combinedStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: '30px',
    marginTop: '100px', // Añade un margen para que el contenido no se superponga con la cabecera
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5DADE2',
    padding: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
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
  linkButton: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
};

function UtilidadProducto() {
  const [nombreProducto, setNombreProducto] = useState('');
  const [utilidad, setUtilidad] = useState('');

  const manejarCambioNombreProducto = (e) => {
    setNombreProducto(e.target.value);
  };

  const calcularUtilidad = () => {
    obtenerUtilidadProducto(nombreProducto).then((res) => setUtilidad(res.data));
  };

  return (
    <div>
      <div style={combinedStyles.container}>
        <div style={combinedStyles.title}>Utilidad del producto</div>
        <label htmlFor="producto">Nombre del producto:</label>
        <input type="text" name="producto" onChange={manejarCambioNombreProducto} style={combinedStyles.input} />
        <button onClick={calcularUtilidad} style={combinedStyles.button}>
          Calcular
        </button>
        {utilidad !== null && <p style={combinedStyles.result}>{utilidad}</p>}
      </div>
    </div>
  );
}

export default UtilidadProducto;