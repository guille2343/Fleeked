export const PedirProductosApi = async () => {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    if (!respuesta.ok) {
      throw new Error("Error en la petición");
    }
    return await respuesta.json();
  } catch (error) {
    console.log("Error en la petición", error);
    throw error;
  }
};
