import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaBusqueda from "./paginas/PaginaBusqueda";
import PaginaResultados from "./paginas/PaginaResultados";
import PaginaResumen from "./paginas/PaginaResumen";
import PaginaIdentificadores from "./paginas/PaginaIdentificadores";
import PaginaInformacionCliente from "./paginas/PaginaInformacionCliente";
import Navbar from "./componentes/BarraNavegacion/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaBusqueda />} />
          <Route path="/resultados" element={<PaginaResultados />} />
          <Route path="/resumen/:id" element={<PaginaResumen />} />
          <Route path="/identificadores" element={<PaginaIdentificadores />} />
          <Route path="/informacion-cliente" element={<PaginaInformacionCliente />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
