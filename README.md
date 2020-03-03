
# Test MercadoLibre Front-end

Autor: Fernando Arias [fernandorafaelarias@gmail.com](mailto:fernandorafaelarias@gmail.com)

Este proyecto incluye:
* Front-end desarrollado con React.js.
* Back-end desarrollado con Node.js.

## Requisitos

* Instalar la última versión de Node.js
* Instalar el package `create-react-app` de manera global.

## Up and Running

### Instalación

Luego de desacargar el proyecto, es necesario instalar las librerías, para eso se puede usar el comando:

```
npm run installer
```

Este comando realiza una instalación de las librerías para el back-end seguido de las librerías de front-end.

### Back-end

Para levantar el backend, se debe correr:

```
npm run server
```

Que realizará la transpilación a ES5 de los archivos del servidor y lo levantará.

### Front-end

Para levantar el front, se debe correr en una nueva ventana:

```
npm run client
```

Simplemente llama al comando `npm start` de `create-react-app`. Si el puerto 3000 (por default) se encuentra en uso, consultará por otro disponible, esto no afectará al uso de la aplicación.

## Puertos

Tanto en el root del proyecto como en la carpeta `/client` se encuentran dos archivos `.env` con las respectivas variables:

* `BACKEND_PORT=8626` para configurar el puerto en donde correrá el backend.
* `REACT_APP_BACKEND_PORT=8626` para indicar al front-end en qué puerto se encuentra la instancia de back-end.

Si el puerto se encuentra en uso, es necesario cambiarlo en ambos archivos, desde luego coincidiendo, y luego reiniciando las instancias de front y back.
