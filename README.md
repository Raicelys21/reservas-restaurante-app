# reservas-restaurante-app

## Aplicación de Reservas para Restaurantes
### Requerimientos y Funcionalidades:

Gestión de Reservas: Permitir a los usuarios seleccionar fecha, hora y número de personas para hacer una reserva.
Calendario de Disponibilidad: Mostrar disponibilidad en tiempo real usando un calendario.
Confirmación de Reservas: Enviar confirmaciones por correo electrónico o SMS.
Gestión de Restaurantes: Perfil para cada restaurante con información, menú y fotos.
Autenticación de Usuarios: Para gestionar reservas y ver historial.

# Reservas Restaurante App

Este proyecto consiste en una aplicación de reservas para restaurantes. Incluye dos partes: un servidor Express para gestionar las reservas y una aplicación de cliente para realizar reservas.

## Configuración del servidor Express

1. Navega a la carpeta `express-server`:
    ```
    cd express-server
    ```

2. Instala las dependencias del servidor:
    ```
    npm install
    ```

3. Ejecuta el servidor:
    ```
    npm run backend
    ```

El servidor Express ahora debería estar en funcionamiento en [http://localhost:5000](http://localhost:5000).

## Configuración de la aplicación de cliente Mesa Selecta

1. Navega a la carpeta `mesa-selecta`:
    ```
    cd mesa-selecta
    ```

2. Instala las dependencias del cliente:
    ```
    npm install
    ```

3. Inicia la aplicación de cliente en modo de desarrollo:
    ```
    npm run dev
    ```

La aplicación de cliente ahora debería estar en funcionamiento y se abrirá en tu navegador predeterminado.

## Uso

Una vez que el servidor y la aplicación de cliente estén en funcionamiento, puedes usar la aplicación de cliente para realizar reservas en los restaurantes disponibles.

## Notas

- Asegúrate de tener Node.js y npm instalados en tu sistema antes de ejecutar estos comandos.
- Asegúrate de que el servidor Express esté en funcionamiento antes de iniciar la aplicación de cliente, ya que la aplicación de cliente necesita comunicarse con el servidor para realizar operaciones de reserva.

