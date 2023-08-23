import React, { useState } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { iniciarSesion, cerrarSesion } from '../auth/autenticacion';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Link,
  Box,
  Avatar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    padding: "12px",
    borderRadius: "2px",
  },
  avatar: {
    margin: "2px",
  },
}));

function Login() {
  const classes = useStyles();
  const [datos, setDatos] = useState({ username: '', password: '' });
  const history = useHistory();

  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    iniciarSesion(datos).then((res) => {
      history.push('/clientes');
    });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{
      height: "100vh",
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
    }}>
      <Paper elevation={3} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon fontSize='large' />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form onSubmit={manejarEnvio}>
          <TextField
            fullWidth
            label="Usuario"
            type="text"
            name="username"
            onChange={manejarCambio}
            value={datos.username}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            name="password"
            onChange={manejarCambio}
            value={datos.password}
            margin="normal"
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Iniciar sesión
            </Button>
          </Box>
        </form>
        <Link component={RouterLink} to="/registro" variant="body2" sx={{ display: 'block', textAlign: 'center', marginTop: 2 }}>
          ¿No tienes una cuenta? Regístrate aquí
        </Link>
      </Paper>
    </Container>
  );
}

export default Login;