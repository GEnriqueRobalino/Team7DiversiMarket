//Codificado por: Caisaguano Diana

import React, { useEffect, useState } from 'react';
import { obtenerResumen } from '../servicios/axios';

const ResumenArticulo = ({ id }) => {
  const [resumen, establecerResumen] = useState(null);
  
  useEffect(() => {
    obtenerResumen(id)
      .then((respuesta) => {
        establecerResumen(respuesta.data.response.docs[0].abstract[0]);
      })
      .catch((error) => {
        console.error('Error al obtener el resumen:', error);
      });
  }, [id]);

  return (
    //Diseño de resumen artículo
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f0f8ff', // Color de fondo suave (blanco hueso/marfil)
     
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'multiply', // Agregar mezcla para reducir la intensidad
      filter: 'brightness(1)', // Ajustar la intensidad (0.7 para reducir)
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Times New Roman, sans-serif',
    }}>
      <h1 style={{
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0 0 20px',
      }}>Resumen del Artículo</h1>
      <p style={{
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#333',
        textAlign: 'justify',
        margin: 0,
      }}>
        {resumen || (
          <span style={{
            color: '#2e4f95', // Azul oscuro
            display: 'block', // Alineación centrada
            textAlign: 'center', // Alineación centrada
          }}>
            El artículo no presenta resumen.
          </span>
        )}
      </p>
    </div>
  );
};

export default ResumenArticulo;