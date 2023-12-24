const marcarPaso = (pasoActual) => {
  document
    .querySelector(`.linea-pasos [data-paso= "${pasoActual}"] span`)
    .classList.add("linea-pasos__paso-check--checked");
};

export default marcarPaso;
