import React, { useState, useEffect } from 'react';
import { obtenerClientes } from '../servicios/clientes';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    marginBottom: '50px',
    margin: '30px',
    border: '10px solid #FDFEFE',
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
};

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    obtenerClientes().then((res) => setClientes(res.data));
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={styles.container}>
      <div style={{ marginTop: '60px' }}> {/* Adding some top margin to avoid content overlap */}
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Lista de Clientes</h1>
        <Table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #1C2833' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#5DADE2', border: '2px solid #1C2833' }}>
              <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Nombre</TableCell>
              <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Apellido</TableCell>
              <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Cédula</TableCell>
              <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Edad</TableCell>
              <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Ciudad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow key={cliente.cedula}>
                <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{cliente.nombre}</TableCell>
                <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{cliente.apellido}</TableCell>
                <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{cliente.cedula}</TableCell>
                <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{cliente.edad}</TableCell>
                <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{cliente.ciudad}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Clientes;