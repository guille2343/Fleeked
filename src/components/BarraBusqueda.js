import React from "react";
import "../style/VistaProductos.css";

const BarraBusqueda = ({ setFiltro, setCategoria }) => {
  return (
    <div className="search-container">                      
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar producto..."
        onChange={(e) => setFiltro(e.target.value)}
      />
      <select onChange={(e) => setCategoria(e.target.value)} className="search-category">
        <option value="">Todas las categorías</option>
        <option value="electronics">Electrónica</option>
        <option value="jewelery">Joyería</option>
        <option value="men's clothing">Ropa de hombre</option>
        <option value="women's clothing">Ropa de mujer</option>
      </select>
    </div>
  );
};

export default BarraBusqueda;