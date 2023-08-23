import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../servicios/productos';
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

function Productos() {
  const [productos, setProductos] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    obtenerProductos().then((res) => setProductos(res.data));
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={styles.container}>
      <div style={{ marginTop: '60px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Lista de Productos</h1>
        <Table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #1C2833' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#5DADE2', border: '2px solid #1C2833' }}>
              <TableCell align="center" style={{ padding: '8px', border: '2px solid #1C2833' }}>Nombre</TableCell>
              <TableCell align="center" style={{ padding: '8px', border: '2px solid #1C2833' }}>Tipo</TableCell>
              <TableCell align="center" style={{ padding: '8px', border: '2px solid #1C2833' }}>Presentación</TableCell>
              <TableCell align="center" style={{ padding: '8px', border: '2px solid #1C2833' }}>Costo</TableCell>
              <TableCell align="center" style={{ padding: '8px', border: '2px solid #1C2833' }}>Precio</TableCell>
              <TableCell align="center" style={{ padding: '8px', border: '2px solid #1C2833' }}>Proveedor</TableCell>
              <TableCell align="center" style={{ padding: '8px', border: '2px solid #1C2833' }}>Fecha de Fabricación</TableCell>
              <TableCell align="center" style={{ padding: '8px', border: '2px solid #1C2833' }}>Fecha de Vencimiento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((producto) => {
              const fechaF = new Date(producto.fechaf);
              const fechaFormateadaF = `${fechaF.getDate()}-${fechaF.getMonth() + 1}-${fechaF.getFullYear()}`;
              const fechaV = new Date(producto.fechav);
              const fechaFormateadaV = `${fechaV.getDate()}-${fechaV.getMonth() + 1}-${fechaV.getFullYear()}`;

              return (
                <TableRow key={producto.name + producto.tipo + producto.proveedor}>
                  <TableCell align="left" style={{ padding: '8px', border: '1px solid #1C2833' }}>{producto.name}</TableCell>
                  <TableCell align="left" style={{ padding: '8px', border: '1px solid #1C2833' }}>{producto.tipo}</TableCell>
                  <TableCell align="left" style={{ padding: '8px', border: '1px solid #1C2833' }}>{producto.presentacion}</TableCell>
                  <TableCell align="left" style={{ padding: '8px', border: '1px solid #1C2833' }}>{producto.costo}</TableCell>
                  <TableCell align="left" style={{ padding: '8px', border: '1px solid #1C2833' }}>{producto.precio}</TableCell>
                  <TableCell align="left" style={{ padding: '8px', border: '1px solid #1C2833' }}>{producto.proveedor}</TableCell>
                  <TableCell align="left" style={{ padding: '8px', border: '1px solid #1C2833' }}>{fechaFormateadaF}</TableCell>
                  <TableCell align="left" style={{ padding: '8px', border: '1px solid #1C2833' }}>{fechaFormateadaV}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Productos;