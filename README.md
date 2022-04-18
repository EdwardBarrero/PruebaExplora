# PruebaExplora

Lenguaje empleado JavaScript

Tecnologias usadas:
  - base de datos: mongoDB, y como interprete se utilizo mongoose
  - backend: express
  - frontend: React, Redux

Para acceder de forma local debes clonar el repositorio.

<h1>BACKEND</h1>

1. En la carpeta de api debes crear un documento .js con el nombre credenciales con el siguiente contenido.
  
  
  <b>DB_PASSWORD = "YOUR_DB_PASSWORD" (Para esto debes de crear una cuenta en mongoDB)
  
  API_KEY = "YOUR_API_KEY" (Para consumir la api de pexels para lo cual debes de crear una cuenta en su pagina https://www.pexels.com/es-es/api/)
  
  module.exports = {DB_PASSWORD, API_KEY}</b>
  
2. Desde la consola o la terminal de visual studio code dirigete a api (cd .\api\) y ejecuta el comando npm install

3. Luego ejecutaremos el comando npm start, por defecto se que abrira en el puerto 3001 tambien puedes modificarlo desde \api\bin\www linea 15

4. Desde postman podras verificar que todas las rutas estan funcionales
    
    !importante  dentro de postman los parametros que vamos a utilizar son por body para post y put en tipo JSON y son 
    - title
    - description
    - interactiveRoom

<h1>FRONTEND</h1>

1. Nos dirigiremos a la carpeta "client" por consola cd .\client\

2. Ejecutaremos el comando npm install

3. Ejecutaremos el comando npm start y por defecto se abrira en el puerto 3000

<b>NOTA:</b> el proyecto no esta terminado al 100%, por lo tanto el reedme como el codigo pueden cambiar



