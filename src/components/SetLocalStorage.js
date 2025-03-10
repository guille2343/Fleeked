export const SetLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log("Datos guardados en localStorage");
  } catch (error) {
    console.error("Error al guardar en localStorage", error);
  }
};
