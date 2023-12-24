const formulario = document.getElementById("formulario");
const validarNombre = () => {
  const expresionRegCantidad = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  const inputCantidad = formulario["nombre-receptor"];

  if (expresionRegCantidad.test(inputCantidad.value)) {
    inputCantidad.classList.remove("formulario__input--error");
    return true;
  } else {
    inputCantidad.classList.add("formulario__input--error");
    return false;
  }
};

export default validarNombre;
