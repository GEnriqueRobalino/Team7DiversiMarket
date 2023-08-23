//Codificado por: Garzón César

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const TablaArticulos = ({ articulos }) => {
  return (
    <div style={{ marginBottom: '50px', margin: '30px', border: '10px solid #FDFEFE' }}>
      <Button
        variant="contained"
        color="primary"
        href="/identificadores"
        target="_blank"
        rel="noreferrer"
        style={{ padding: '10px 15px',border: '2px solid #1C2833' }} 
      >
        Buscar por ID
        
      </Button>
      <Table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #1C2833' }}>
        <TableHead>
          <TableRow style={{ backgroundColor: '#5DADE2', border: '2px solid #1C2833' }}>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Identificación</TableCell>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Diario</TableCell>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>EISSN</TableCell>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Fecha de Publicación</TableCell>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Tipo de Artículo</TableCell>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Pantalla Autor</TableCell>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Exhibición del Título</TableCell>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>Puntaje</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articulos.map((articulo) => (
            <TableRow key={articulo.id}>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{articulo.id}</TableCell>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{articulo.journal}</TableCell>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{articulo.eissn}</TableCell>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{articulo.publication_date}</TableCell>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{articulo.article_type}</TableCell>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{articulo.author_display}</TableCell>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>
                <a href={`/resumen/${encodeURIComponent(articulo.id)}`} target="_blank" rel="noreferrer">
                  {articulo.title_display}
                </a>
              </TableCell>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{articulo.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TablaArticulos;




