import React from 'react';
import { useParams } from 'react-router-dom';
import ResumenArticulo from '../componentes/ResumenArticulo';

const PaginaResumen = () => {
  const { id } = useParams();
  const idDecodificado = decodeURIComponent(id);

  return (
    <div>
      <ResumenArticulo id={idDecodificado} />
    </div>
  );
};

export default PaginaResumen;
