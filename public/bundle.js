'use strict';

const marcarPaso = (pasoActual) => {
  document
    .querySelector(`.linea-pasos [data-paso= "${pasoActual}"] span`)
    .classList.add("linea-pasos__paso-check--checked");
};

const siguientePaso = () => {
  const pasos = [...document.querySelectorAll(".linea-pasos__paso")];

  const pasoActivo = document
    .querySelector(".linea-pasos__paso-check--active")
    .closest(".linea-pasos__paso");

  const indexPasoActivo = pasos.indexOf(pasoActivo);

  if (indexPasoActivo < pasos.length - 1) {
    pasoActivo.querySelector("span").classList.remove("linea-pasos__paso-check--active");
    pasos[indexPasoActivo + 1]
      .querySelector("span")
      .classList.add("linea-pasos__paso-check--active");

    const id = pasos[indexPasoActivo + 1].dataset.paso;

    document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
        inline: 'start',
        behavior: 'smooth'
    });
  }
};

const formulario$3 = document.getElementById("formulario");
const validarCantidad = () => {
  const expresionRegCantidad = /^\d+(\.\d+)?$/;

  const inputCantidad = formulario$3.cantidad;

  if (expresionRegCantidad.test(inputCantidad.value)) {
    inputCantidad.classList.remove("formulario__input--error");
    return true;
  } else {
    inputCantidad.classList.add("formulario__input--error");
    return false;
  }
};

const formulario$2 = document.getElementById("formulario");
const validarCorreo = () => {
  const expresionRegCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const inputCorreo = formulario$2['correo-receptor'];

  if (expresionRegCorreo.test(inputCorreo.value)) {
    inputCorreo.classList.remove("formulario__input--error");
    return true;
  } else {
    inputCorreo.classList.add("formulario__input--error");
    return false;
  }
};

const formulario$1 = document.getElementById("formulario");
const validarNombre = () => {
  const expresionRegCantidad = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  const inputCantidad = formulario$1["nombre-receptor"];

  if (expresionRegCantidad.test(inputCantidad.value)) {
    inputCantidad.classList.remove("formulario__input--error");
    console.log(inputCantidad);
    return true;
  } else {
    inputCantidad.classList.add("formulario__input--error");
    return false;
  }
};

document.getElementById('alerta');

const formulario = document.getElementById("formulario");

formulario.querySelector(".formulario__body").scrollLeft = 0;

// Eventlistener para comprobar los campos de formulario cuando el usuario corrige.
formulario.addEventListener("keyup", (e) => {
  if (e.target.tagName === "INPUT") {
    if (e.target.id === "cantidad") {
      validarCantidad();
    } else if (e.target.id === "nombre-receptor") {
      validarNombre();
    } else if (e.target.id === "correo-receptor") {
      validarCorreo();
    }
  }
});

const btnFormulario = document.getElementById("formulario__btn");

btnFormulario.addEventListener("click", (e) => {
  e.preventDefault();

  const pasoActual = document
    .querySelector(".linea-pasos__paso-check--active")
    .closest(".linea-pasos__paso").dataset.paso;

  if (pasoActual === "cantidad") {
    if (validarCantidad()) {
      marcarPaso("cantidad");
      siguientePaso();
    }
  } else if (pasoActual === "datos") {
    if (validarNombre() && validarCorreo()) {
      marcarPaso("datos");
      siguientePaso();
    }
  } else if (pasoActual === "metodo") {
    marcarPaso("metodo");
    // Paso final, confirmación
    const opciones = { style: "currency", currency: "MXN" };
    const formatoMoneda = new Intl.NumberFormat("es-MX", opciones);
    // Obtenemos los valores del formulario y los pasamos a la seccion de confirmar.
    document.querySelector('[data-valor="cantidad"] span').innerText =
      formatoMoneda.format(formulario.cantidad.value);
    document.querySelector('[data-valor="nombre-receptor"] span').innerText =
      formulario["nombre-receptor"].value;
    document.querySelector('[data-valor="correo-receptor"] span').innerText =
      formulario["correo-receptor"].value;
    document.querySelector('[data-valor="metodo"] span').innerText =
      formulario.metodo.value;
// Cambiamos el texto del btn a 'Transferir'
btnFormulario.querySelector('span').innerText = 'Transferir';

// Agregamos la clase que deshabilita el boton.
btnFormulario.classList.add('formulario__btn--disabled');

// Ocultamos el icono de siguiente.
btnFormulario
    .querySelector('[data-icono="siguiente"]')
    .classList.remove('formulario__btn-contenedor-icono--active');

// Mostramos el icono del banco.
btnFormulario.querySelector('[data-icono="banco"]').classList.add('formulario__btn-contenedor-icono--active');

siguientePaso();

// Eliminamos la clase de disabled despues de 4 segundos.
setTimeout(() => {
    btnFormulario.classList.remove('formulario__btn--disabled');
}, 4000);

// Comprobamos si estamos en el paso actual y el boton no tiene la clase de disabled
} else if (pasoActual === 'confirmacion' && !btnFormulario.matches('.formulario__btn--disabled')) {
// Aqui se haria una peticion al servidor, una redireccion, etc.

// Cambiamos el texto del btn a 'Transferir'
btnFormulario.querySelector('span').innerText = 'Transfiriendo';
// Agregamos la clase que deshabilita el boton.
btnFormulario.classList.add('formulario__btn--disabled');

setTimeout(() => {
    formulario.classList.add('formulario--hidden');
    document.getElementById('alerta').classList.add('alerta--active');
    
    // Después de 4 segundos, mostramos la alerta, y después de 4 segundos más, recargamos la página.
    setTimeout(() => {
        // Recargar la página después de 2 segundos (4000 milisegundos)
        location.reload();
    }, 4000);
}, 4000);


}

else {
siguientePaso();
}
});

const linea = document.getElementById('linea-pasos');

linea.addEventListener('click', (e) => {
	// Validamos que el click sea en un paso
	if (!e.target.closest('.linea-pasos__paso')) return false;

	// Validamos el campo actual antes de saltar a otro.
	// Obtenemos el paso actual.
	const pasoActual = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso')
		.dataset.paso;

	// Validamos el campo actual.
	if (pasoActual === 'cantidad') {
		if (!validarCantidad()) return false;
	} else if (pasoActual === 'datos') {
		if (!validarNombre() || !validarCorreo()) return false;
	}

	// Obtenemos el paso al que queremos navegar.
	const pasoANavegar = e.target.closest('.linea-pasos__paso');

	// Comprobamos si el paso tiene el icono de palomita.
	// Solo queremos poder dar click a los que tienen palomita.
	if (pasoANavegar.querySelector('.linea-pasos__paso-check--checked')) {
		// Obtenemos el paso actual.
		const pasoActual = linea.querySelector('.linea-pasos__paso-check--active');
		if (pasoActual) {
			// Le quitamos la clase de activo.
			pasoActual.classList.remove('linea-pasos__paso-check--active');
		}

		// Obtenemos el id del paso a navegar.
		const id = pasoANavegar.dataset.paso;

		// Nos aseguramos de que el texto del boton sea siguiente.
		const btnFormulario = document.querySelector('.formulario__btn');
		btnFormulario.querySelector('span').innerText = 'Siguiente';

		// Nos aseguramos de ocultar el icono de banco.
		btnFormulario
			.querySelector('[data-icono="banco"]')
			.classList.remove('formulario__btn-contenedor-icono--active');

		// Nos aseguramos de mostrar el icono del siguiente.
		btnFormulario
			.querySelector('[data-icono="siguiente"]')
			.classList.add('formulario__btn-contenedor-icono--active');

		// Nos aseguramos de que no tenga la clase de disabled.
		btnFormulario.classList.remove('formulario__btn--disabled');

		// Navegamos al paso.
		document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
			inline: 'start',
			behavior: 'smooth',
		});

		// Agregamos la clase de active al nuevo paso.
		linea.querySelector(`[data-paso="${id}"] span`).classList.add('linea-pasos__paso-check--active');
	}
});
//# sourceMappingURL=bundle.js.map
