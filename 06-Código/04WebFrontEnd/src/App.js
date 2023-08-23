//npx create-react-app actividad3-p2-app
//cd actividad3-p2-app
//npm install axios @mui/material @emotion/react @emotion/styled react-router-dom
//npm install react-router-dom@5
//npm start

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import Clientes from './paginas/Clientes';
import GestionClientes from './paginas/GestionClientes';
import ClientesPorCiudad from './paginas/ClientesPorCiudad';
import Productos from './paginas/Productos';
import GestionProductos from './paginas/GestionProductos';
import DiasParaExpiracion from './paginas/DiasParaExpiracion';
import ExpiracionProducto from './paginas/ExpiracionProducto';
import UtilidadProducto from './paginas/UtilidadProducto';
import Navbar from './paginas/Navbar';

const RutaProtegida = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/registro" exact component={Registro} />
        <>
        <Navbar />
        <RutaProtegida path="/clientes" exact component={Clientes} />
        <RutaProtegida path="/gestion-clientes" exact component={GestionClientes} />
        <RutaProtegida path="/clientes-por-ciudad" exact component={ClientesPorCiudad} />
        <RutaProtegida path="/productos" exact component={Productos} />
        <RutaProtegida path="/productos/crear-actualizar-eliminar" exact component={GestionProductos} />
        <RutaProtegida path="/productos/dias-para-expiracion" exact component={DiasParaExpiracion} />
        <RutaProtegida path="/productos/expiracion" exact component={ExpiracionProducto} />
        <RutaProtegida path="/productos/utilidad" exact component={UtilidadProducto} />
        </>
      </Switch>
    </Router>
  );
}

export default App;