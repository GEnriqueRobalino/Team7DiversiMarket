//Codificado por: Luna Karla

import React, { useState, useEffect } from 'react';
import { buscarArticulos } from '../servicios/axios';
import TablaIdentificadores from '../componentes/TablaIdentificadores';

const PaginaIdentificadores = () => {
  const [identificadores, establecerIdentificadores] = useState([]);

  useEffect(() => {
    buscarArticulos('GitHub')
      .then((respuesta) => establecerIdentificadores(respuesta.data.response.docs.map(doc => doc.id)));
  }, []);

  return (
    <div>
      <TablaIdentificadores identificadores={identificadores} />
    </div>
  );
};

export default PaginaIdentificadores;
