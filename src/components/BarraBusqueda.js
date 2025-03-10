import React from "react";
import "../style/VistaProductos.css";

const BarraBusqueda = ({ setFiltro }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar producto..."
        onChange={(e) => setFiltro(e.target.value)}
      />
    </div>
  );
};

export default BarraBusqueda;
