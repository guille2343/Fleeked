import React from "react";
import "../style/VistaProductos.css";

const Carrito = ({
  carrito,
  eliminarDelCarrito,
  vaciarCarrito,
  procederPago,
  mostrarCarrito,
  setMostrarCarrito,
}) => {
  return (
    <div className={`carrito-modal ${mostrarCarrito ? "mostrar" : ""}`}>
      <div className="carrito-contenido">
        <h2>🛒 Carrito</h2>
        <button
          className="cerrar-carrito"
          onClick={() => setMostrarCarrito(false)}
        >
          X
        </button>
        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.title} - ${producto.price}
                <button onClick={() => eliminarDelCarrito(index)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
        {carrito.length > 0 && (
          <>
            <button onClick={vaciarCarrito} className="btn-vaciar">
              Vaciar Carrito
            </button>
            <button onClick={procederPago} className="btn-pagar">
              Proceder al Pago
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
