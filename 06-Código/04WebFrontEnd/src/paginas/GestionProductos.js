import React, { useState, useEffect } from 'react';
import {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from '../servicios/productos';
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function GestionProductos() {
  const [productos, setProductos] = useState([]);
  const [productoForm, setProductoForm] = useState({
    name: '',
    tipo: '',
    presentacion: '',
    costo: 0,
    precio: 0,
    proveedor: '',
    fechaf: '',
    fechav: '',
  });

  useEffect(() => {
    obtenerProductos().then((res) => setProductos(res.data));
  }, []);

  const manejarCambio = (e) => {
    setProductoForm({ ...productoForm, [e.target.name]: e.target.value });
  };

  const actualizarListaProductos = () => {
    obtenerProductos().then((res) => setProductos(res.data));
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    const buttonValue = e.nativeEvent.submitter.value;

    switch (buttonValue) {
      case 'crear':
        crearProducto(productoForm).then(() => {
          actualizarListaProductos();
        });
        break;
      case 'actualizar':
        actualizarProducto(productoForm).then(() => {
          actualizarListaProductos();
        });
        break;
      case 'eliminar':
        eliminarProducto(productoForm).then(() => {
          actualizarListaProductos();
        });
        break;
      default:
        break;
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Gestionar Productos
        </Typography>
        <form onSubmit={manejarSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            type="text"
            name="name"
            onChange={manejarCambio}
            value={productoForm.name}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Tipo"
            type="text"
            name="tipo"
            onChange={manejarCambio}
            value={productoForm.tipo}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Presentación"
            type="text"
            name="presentacion"
            onChange={manejarCambio}
            value={productoForm.presentacion}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Costo"
            type="text"
            name="costo"
            onChange={manejarCambio}
            value={productoForm.costo}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Precio"
            type="text"
            name="precio"
            onChange={manejarCambio}
            value={productoForm.precio}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Proveedor"
            type="text"
            name="proveedor"
            onChange={manejarCambio}
            value={productoForm.proveedor}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Fecha Fabricación"
            type="date"
            name="fechaf"
            onChange={manejarCambio}
            value={productoForm.fechaf}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Fecha Vencimiento"
            type="date"
            name="fechav"
            onChange={manejarCambio}
            value={productoForm.fechav}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" value="crear" sx={{ margin: 2 }}>
            Crear
          </Button>
          <Button type="submit" variant="contained" color="primary" value="actualizar" sx={{ margin: 2 }}>
            Actualizar
          </Button>
          <Button type="submit" variant="contained" color="secondary" value="eliminar" sx={{ margin: 2 }}>
            Eliminar
          </Button>
        </form>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
        Lista de Productos
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Presentación</TableCell>
              <TableCell>Costo</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Proveedor</TableCell>
              <TableCell>Fecha Fabricación</TableCell>
              <TableCell>Fecha Vencimiento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((producto) => (
              <TableRow key={producto.name + producto.tipo + producto.proveedor}>
                <TableCell>{producto.name}</TableCell>
                <TableCell>{producto.tipo}</TableCell>
                <TableCell>{producto.presentacion}</TableCell>
                <TableCell>{producto.costo}</TableCell>
                <TableCell>{producto.precio}</TableCell>
                <TableCell>{producto.proveedor}</TableCell>
                <TableCell>{producto.fechaf}</TableCell>
                <TableCell>{producto.fechav}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default GestionProductos;

