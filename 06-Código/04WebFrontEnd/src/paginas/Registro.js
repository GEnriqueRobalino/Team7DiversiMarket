// src/paginas/Registro.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';

function Registro() {
  const [registroForm, setRegistroForm] = useState({
    nombreUsuario: '',
    email: '',
    password: '',
  });
  const history = useHistory();

  const manejarCambio = (e) => {
    setRegistroForm({ ...registroForm, [e.target.name]: e.target.value });
  };

  const manejarRegistro = (e) => {
    e.preventDefault();

    axios
      .post('https://node-js-ac2.rj.r.appspot.com/clientes/register', registroForm)
      .then((res) => {
        if (res.status === 201) {
          alert('Registro exitoso! Por favor inicie sesión.');
          history.push('/');
        } else {
          alert('Hubo un problema con el registro. Por favor, inténtalo de nuevo.');
        }
      })
      .catch((err) => {
        alert('Error al registrarse. Por favor, inténtalo de nuevo.');
      });
  };

  const manejarCancelar = () => {
    history.push('/');
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 8 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Registro
        </Typography>
        <form onSubmit={manejarRegistro}>
          <TextField
            fullWidth
            label="Nombre de usuario"
            type="text"
            name="nombreUsuario"
            required
            onChange={manejarCambio}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            required
            onChange={manejarCambio}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            name="password"
            required
            onChange={manejarCambio}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ margin: 2 }}>
            Registrarse
          </Button>
          <Button type="button" variant="contained" color="secondary" sx={{ margin: 2 }} onClick={manejarCancelar} >
            Cancelar
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Registro;
