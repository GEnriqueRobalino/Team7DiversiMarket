import React, { useState } from 'react';
import BarraBusqueda from '../componentes/BarraBusqueda';
import TablaArticulos from '../componentes/TablaArticulos';
import { buscarArticulos } from '../servicios/axios';

const PaginaResultados = () => {
  const [articulos, establecerArticulos] = useState([]);

  const manejarBusqueda = (resultados) => {
    buscarArticulos(resultados)
      .then((respuesta) => {
        establecerArticulos(respuesta.data.response.docs);
      });
  };

  return (
    <div>
      <BarraBusqueda alBuscar={manejarBusqueda} />
      <TablaArticulos articulos={articulos} />
    </div>
  );
};

export default PaginaResultados;

