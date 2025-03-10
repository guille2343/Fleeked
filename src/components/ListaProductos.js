import React, { useEffect, useState } from "react";
import { PedirProductosApi } from "./PedirProductosApi";
import { SetLocalStorage } from "./SetLocalStorage";
import BarraBusqueda from "./BarraBusqueda";
import Carrito from "./Carrito";
import { FaShoppingCart } from "react-icons/fa";
import "../style/VistaProductos.css";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  useEffect(() => {
    const getProductos = async () => {
      const storeProductos = localStorage.getItem("productos");
      if (storeProductos) {
        setProductos(JSON.parse(storeProductos));
      } else {
        try {
          const productos = await PedirProductosApi();
          setProductos(productos);
          SetLocalStorage("productos", productos);
        } catch (error) {
          console.error("Error al obtener productos", error);
        }
      }
    };
    getProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
    setCarrito(carrito.filter((_, i) => i !== index));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const procederPago = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    alert("¡Compra realizada con éxito!");
    setCarrito([]);
  };

  const productosFiltrados = productos.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="contenedor-principal">
      <div className="productos-section">
        <h1>FLEEKED</h1>
        <BarraBusqueda setFiltro={setFiltro} />
        <div className="productos-container">
          {productosFiltrados.map((product) => (
            <div key={product.id} className="card-producto">
              <img
                src={product.image}
                alt={product.title}
                className="producto-img"
              />
              <h4>{product.title}</h4>
              <p className="producto-precio">Precio: ${product.price}</p>
              <p className="producto-descripcion">{product.description}</p>
              <p className="producto-categoria">
                Categoría: {product.category}
              </p>
              <button
                className="btn-agregar"
                onClick={() => agregarAlCarrito(product)}
              >
                Agregar al Carrito
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="carrito-icono" onClick={() => setMostrarCarrito(true)}>
        <FaShoppingCart />
        {carrito.length > 0 && (
          <span className="contador">{carrito.length}</span>
        )}
      </div>
      <Carrito
        carrito={carrito}
        eliminarDelCarrito={eliminarDelCarrito}
        vaciarCarrito={vaciarCarrito}
        procederPago={procederPago}
        mostrarCarrito={mostrarCarrito}
        setMostrarCarrito={setMostrarCarrito}
      />
    </div>
  );
};

export default ListaProductos;
