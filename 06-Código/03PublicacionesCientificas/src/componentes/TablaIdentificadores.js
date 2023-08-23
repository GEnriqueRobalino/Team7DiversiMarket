//Codificado por: Luna Karla

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TablaIdentificadores = ({ identificadores }) => {
  return (
    <div style={{ marginBottom: '50px', margin: '30px', border: '10px solid #FDFEFE' }}>
      <Table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #1C2833' }}>
        <TableHead>
          <TableRow style={{ backgroundColor: '#5DADE2', border: '2px solid #1C2833' }}>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>ID</TableCell>
            <TableCell style={{ padding: '8px', border: '2px solid #1C2833', textAlign: 'center' }}>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {identificadores.map((id) => (
            <TableRow key={id}>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>{id}</TableCell>
              <TableCell style={{ padding: '8px', border: '1px solid #1C2833', textAlign: 'left' }}>
                <a href={`https://journals.plos.org/plosone/article?id=${id}`} target="_blank" rel="noreferrer">
                  Ver Documento
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TablaIdentificadores;