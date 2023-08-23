import React, { useState } from 'react';
import { obtenerClientesPorCiudad } from '../servicios/clientes';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando react-router para la navegación

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    padding: '20px',
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
    marginBottom: '20px',
    padding: '5px',
  },
  result: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

function ClientesPorCiudad() {
  const [clientes, setClientes] = useState([]);
  const [ciudad, setCiudad] = useState('');

  const manejarCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const buscarClientesPorCiudad = () => {
    obtenerClientesPorCiudad(ciudad).then((res) => setClientes(res.data));
  };

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1></h1>
        <h1>Buscar clientes por ciudad</h1>
        <label htmlFor="ciudad">Ciudad:</label>
        <input type="text" name="ciudad" onChange={manejarCambioCiudad} style={styles.input} />
        <Button variant="contained" color="primary" onClick={buscarClientesPorCiudad} style={{ margin: '10px' }}>
          Buscar
        </Button>
        <h2>Clientes en {ciudad}</h2>
        <Table style={{ width: '50%', borderCollapse: 'collapse', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#5DADE2' }}>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow key={cliente.nombre}>
                <TableCell>{cliente.nombre}</TableCell>
                <TableCell>{cliente.apellido}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ClientesPorCiudad;