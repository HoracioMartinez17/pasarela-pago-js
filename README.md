# Pasarela De Pago-js

Este proyecto es una simulación educativa de una pasarela de pago desarrollada con HTML, Sass y JavaScript. La pasarela guía al usuario a través de varios pasos, permitiéndole ingresar la cantidad a transferir, detalles personales y seleccionar un método de pago.

![Imagen de La ultima seccion](img/Captura%20de%20pantalla%20pasarela-pago.png)

## Características Principales

### 1. Selección de Cantidad

El usuario puede ingresar la cantidad que desea transferir en la primera sección de la pasarela.

### 2. Detalles Personales

En la siguiente sección, el usuario proporciona su nombre y correo electrónico para completar la transacción.

### 3. Selección de Método de Pago

La pasarela presenta opciones para que el usuario elija su método de pago preferido.

### 4. Confirmación de Datos

Antes de realizar la transferencia, se muestra al usuario una pantalla de resumen con todos los detalles ingresados hasta el momento.

### 5. Simulación de Transferencia

Al presionar el botón "Transferir", se simula un proceso de envío y se muestra un mensaje de confirmación al finalizar.

## Tecnologías Utilizadas

- **HTML5:** Utilizado para la estructura y organización del contenido.
- **Sass:** Preprocesador CSS que mejora la legibilidad y mantenimiento del código.
- **JavaScript:** Se emplea para la lógica de la pasarela, manejo de eventos y simulación de acciones del usuario.
- **Rollup**: Se ha utilizado para compilar el código JavaScript.

## Estructura de Carpetas

- **css/:** Contiene los archivos CSS generados a partir de los estilos Sass.
- **img/:** Almacena las imágenes utilizadas.
- **index.html:** Página principal.
- **src/:** Contiene los archivos JavaScript que implementan la lógica de la pasarela.

  - **src/validaciones/:** Contiene los archivos JavaScript que implementan la lógica de las validaciones regex del correo y el nombre del usuario.
  - **formulario.js:** Archivo que contiene la lógica del formulario de la pasarela de pagos.
  - **index.js:** Archivo principal del proyecto que se encarga de cargar el resto de los archivos.
  - **lineaPasos.js:** Archivo que contiene la lógica que le permite al usuario navegar entre diferentes secciones.
  - **marcarPaso.js:** Archivo que contiene la lógica para cambiar el estilo de los iconos mientras se navega entre diferentes secciones.
  - **siguientePaso.js:** Archivo que contiene la lógica para ir avanzando entre secciones al usuario una vez rellenado correctamente los datos.

## Instrucciones de Ejecución

1. Para visitar la web, por favor sigue este enlace: [Pasarela-pago](https://horaciomartinez17.github.io/pasarela-pago-js/)

2. Clona este repositorio en tu máquina local.

   ```bash
   git clone [URL_DEL_REPOSITORIO]
   ```

3. Abre el archivo `index.html` en tu navegador preferido.

4. Sigue los pasos de la pasarela de pago y experimenta con la simulación.

## Contribuciones

¡Contribuciones son bienvenidas! Siéntete libre de mejorar este proyecto y enviar tus contribuciones.
