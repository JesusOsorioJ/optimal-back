# Proyecto de API RESTful con Node.js

Este proyecto consiste en una API RESTful desarrollada en Node.js. La API incluye funcionalidades CRUD para gestionar items.

## Tabla de Contenidos

- [Requerimientos](#requerimientos)
- [Instalación](#instalación)
- [Documentación de la API](#documentación-de-la-api)
- [Pruebas de Endpoints](#pruebas-de-endpoints)

## Requerimientos

Para ejecutar este proyecto, necesitas tener instalado:

- Node.js >= 14.x
- npm (incluido con Node.js)
- MongoDB Atlas (o cualquier base de datos MongoDB accesible)
- Visual Studio Code con la extensión [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Instalación

1. **Clona este repositorio:**

    ```bash
    git clone https://github.com/JesusOsorioJ/optimal-back.git
    cd proyecto
    ```

2. **Instalar dependencias de Node.js:**

    Ve al directorio del servidor de Node.js:

    ```bash
    npm install
    ```

3. **Configurar variables de entorno:**

    Copia el archivo `.env.example` y renómbralo a `.env`:

    ```bash
    cp .env.example .env
    ```

4. **Iniciar el servidor de Node.js:**

    ```bash
    npm run dev
    ```

    El servidor estará disponible en `http://localhost:3000`.


## Documentación de la API

La documentación de la API se ha generado utilizando **Swagger**. Puedes acceder a ella visitando: http://localhost:3000/api-docs

Esta documentación incluye todos los endpoints disponibles, sus métodos, parámetros, respuestas, y ejemplos.

## Pruebas de Endpoints

Para probar los endpoints, se ha proporcionado un folder de `REST Client` en el directorio raíz del proyecto.

### Cómo usar el archivo de `REST Client`:

1. **Instalar la extensión REST Client en Visual Studio Code:**

    Si aún no la tienes instalada, puedes encontrarla [aquí](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

2. **Abrir el archivo `.rest`:**

3. **Hacer requests:**

    Haz clic en el botón `Send Request` al lado de cada bloque de solicitud para probar los diferentes endpoints de la API.

