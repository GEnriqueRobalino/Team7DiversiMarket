//Codificado por: Robalino Gabriel

import React, { useState } from 'react';
import BarraBusqueda from '../componentes/BarraBusqueda';
import TablaArticulos from '../componentes/TablaArticulos';
import { buscarArticulos } from '../servicios/axios';

const PaginaBusqueda = () => {
  const [articulos, establecerArticulos] = useState([]);

  const manejarBusqueda = (consulta) => {
    buscarArticulos(consulta)
      .then((respuesta) => {
        establecerArticulos(respuesta.data.response.docs);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '130vh', backgroundImage: 'url("https://i.pinimg.com/564x/4b/e0/1c/4be01cacdecb8428dd0ee0376d897806.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px' }}>
        <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#000000' }}>
          Buscador de Artículos
        </h1>
        <BarraBusqueda alBuscar={manejarBusqueda} />
        {articulos.length > 0 && <TablaArticulos articulos={articulos} />}
      </div>
    </div>
  );
};

export default PaginaBusqueda;
