import React, { useState, useEffect } from 'react';
import {
  obtenerClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
} from '../servicios/clientes';

import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';


function GestionClientes() {
  const [clientes, setClientes] = useState([]);
  const [clienteForm, setClienteForm] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    edad: '',
    ciudad: '',
  });

  useEffect(() => {
    obtenerClientes().then((res) => setClientes(res.data));
  }, []);

  const manejarCambio = (e) => {
    setClienteForm({ ...clienteForm, [e.target.name]: e.target.value });
  };

  const actualizarListaClientes = () => {
    obtenerClientes().then((res) => setClientes(res.data));
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    const buttonValue = e.nativeEvent.submitter.value;

    switch (buttonValue) {
      case 'crear':
        crearCliente(clienteForm).then(() => {
          actualizarListaClientes();
        });
        break;
      case 'actualizar':
        actualizarCliente(clienteForm).then(() => {
          actualizarListaClientes();
        });
        break;
      case 'eliminar':
        eliminarCliente(clienteForm).then(() => {
          actualizarListaClientes();
        });
        break;
      default:
        break;
    }
  };

  return (
    <div>
    <Container sx={{ margin: 4, display: "flex", width: "100%" }}>
      <Paper elevation={3} sx={{ padding: 4, width: "45%", marginRight: 2, height: "450px" }}>
        <form onSubmit={manejarSubmit}>
          <Typography variant="h5" gutterBottom>
            Gestionar Clientes
          </Typography>
          <TextField
            fullWidth
            label="Nombre"
            type="text"
            name="nombre"
            onChange={manejarCambio}
            value={clienteForm.nombre}
            placeholder='Nombre'
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Apellido"
            type="text"
            name="apellido"
            onChange={manejarCambio}
            value={clienteForm.apellido}
            placeholder='Apellido'
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Cedula"
            type="text"
            name="cedula"
            onChange={manejarCambio}
            value={clienteForm.cedula}
            placeholder='Cedula'
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Edad"
            type="text"
            name="edad"
            onChange={manejarCambio}
            value={clienteForm.edad}
            placeholder='Edad'
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Ciudad"
            type="text"
            name="ciudad"
            onChange={manejarCambio}
            value={clienteForm.ciudad}
            placeholder='Ciudad'
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" value="crear" sx={{marginRight: "5px"}}>
            Crear
          </Button>
          <Button type="submit" variant="contained" color="primary" value="actualizar" sx={{marginRight: "5px"}}>
            Actualizar
          </Button>
          <Button type="submit" variant="contained" color="secondary" value="eliminar">
            Eliminar
          </Button>
        </form>
      </Paper>

     
      <TableContainer component={Paper} elevation={3}>
      <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }} align='center'>
        Lista de Clientes
      </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Cédula</TableCell>
              <TableCell>Edad</TableCell>
              <TableCell>Ciudad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente, index) => (
              <TableRow key={index}>
                <TableCell>{cliente.nombre}</TableCell>
                <TableCell>{cliente.apellido}</TableCell>
                <TableCell>{cliente.cedula}</TableCell>
                <TableCell>{cliente.edad}</TableCell>
                <TableCell>{cliente.ciudad}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </div>
  );
}

export default GestionClientes;