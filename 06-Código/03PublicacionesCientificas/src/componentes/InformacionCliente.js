//Codificado por: Guashpa Wilfrido

import React, { useEffect, useState } from "react";
import { obtenerInformacionCliente } from "../servicios/axios";
import { Box, Typography } from "@mui/material";
import Campo from "./PaginaInformacionCliente/Campo";

const InformacionCliente = () => {
  const [infoCliente, establecerInfoCliente] = useState(null);

  useEffect(() => {
    obtenerInformacionCliente().then((respuesta) =>
      establecerInfoCliente(respuesta.data)
    );
  }, []);

  return (
    <Box>
      <Typography variant="h4">Información del Cliente</Typography>
      {infoCliente && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",

          }}
        >
          <Campo titulo={`Archivos Aceptados: `} dato={infoCliente.headers.Accept} imagen={"https://acf.geeknetic.es/imgri/imagenes/tutoriales/91-archivos-extensiones-programas-muestra.jpg?f=webp"}/>
          <Campo titulo={`Idioma:`} dato={infoCliente.headers["Accept-Language"]} imagen={"https://www.portafolio.co/files/article_multimedia/uploads/2016/02/06/56b65121693a4.jpeg"}/>
          <Campo titulo={`Host Remoto: `} dato={infoCliente.headers.Host} imagen={"https://4.bp.blogspot.com/-5dXUU91XeaE/UhNJaRpDffI/AAAAAAAAPTE/PjMvgI-rT8Y/s1600/Que+es+un+host.jpg"} /> 
          <Campo titulo={`IP de Origen:`} dato= {infoCliente.origin} imagen={"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/09/ip-ordenador-2463441.jpg?tf=3840x"}/>
          <Campo titulo={`Navegador: `} dato={infoCliente.headers["User-Agent"]} imagen={"https://tecnosoluciones.com/wp-content/uploads/2023/02/que-navegador-usar-en-internet.png"}/>
          <Campo
            titulo={`Sistema Operativo:`} dato={ infoCliente.headers["Sec-Ch-Ua-Platform"]} imagen={"https://img.freepik.com/vector-premium/equipo-hardware-computadora-pantalla-concepto-configuracion-personalizacion-portatiles-gestion-host_135661-1863.jpg"}
          />
        </Box>
      )}
    </Box>
  );
};

export default InformacionCliente;
