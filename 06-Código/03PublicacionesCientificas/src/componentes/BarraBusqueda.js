//Codificado por: Robalino Gabriel

import React from 'react';
import { Button, TextField } from '@mui/material';

const BarraBusqueda = ({ alBuscar }) => {
  const manejarBusqueda = (e) => {
    e.preventDefault();
    const consulta = e.target.elements.consulta.value;
    alBuscar(consulta);
  };

  return (
    <form onSubmit={manejarBusqueda} style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background:'#E3F2F8',}}>
        <TextField
          name="consulta"
          placeholder="Buscar término"
          style={{ width: '300px', marginRight: '10px',border: '2px solid #1C2833',margin:'30px'}} // Ajusta el ancho del cuadro de búsqueda y el margen derecho
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ padding: '10px 15px',border: '2px solid #1C2833' }} // Ajusta el padding del botón
        >
          Buscar
        </Button>
      </div>
    </form>
  );
};

export default BarraBusqueda;


