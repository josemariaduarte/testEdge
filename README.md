# testEdge
ABM  de Categorias y Articulos en Node js:
Creamos un proyecto para la creacion, edicion, busqueda, activacion y desactivacion de Categorias y Articulos.

## Correr la Web
Descargar el repositorio, y abrir el directorio con la consola de Node (es necesario tener instalado https://nodejs.org/)


### Instalar dependencias
Ejecutar la siguiente linea de comandos para instalar las dependencias
* npm install

Restaurar la Base de Datos MongoDb
* mongorestore dump/

Ejecutar la siguiente linea de comandos para correr el sitio
* npm run dev

Por ultimo abrir en el navegador
 http://localhost:3000/

Para el login
  * email: josemduarte91@gmail.com 
  * password: admin123


Probando nuestro Backend con Postman - Login

1. Login
  * Metodo HTTP: POST
  * URL: http://0.0.0.0:3000/api/usuario/login
  * Parametros:
    - email: correo electronico de usuario
    - password: contraseña




Probando nuestro Backend con Postman - Categorias

1. Crear categoria
  * Metodo HTTP: POST
  * URL: http://0.0.0.0:3000/api/categoria/add
  * Parametros:
    Body:
      * nombre (string 50)
      * descripcion (string 255)

2. Listar Categorias
  * Metodo HTTP: GET
  * URL: http://0.0.0.0:3000/api/categoria/

3. Obtener una categoria
  * Metodo HTTP: GET
  * URL: http://0.0.0.0:3000/api/categoria/{id}

4. Busqueda de una categoria
  * Descripcion: Permite la busqueda de una categoria por nombre o descripcion
  * Metodo HTTP: GET
  * URL: http://0.0.0.0:3000/api/categoria/?valor={texto}

5. Actualizar categoria
  * Metodo HTTP: PUT
  * URL: http://0.0.0.0:3000/api/categoria/{id}
  * Parametros:
    Body:
      * nombre (string 50)
      * descripcion (string 255)

6. Activar Categoria
  * Metodo HTTP: PUT
  * URL: http://0.0.0.0:3000/api/categoria/{id}/activate
  * Parametro:
    * id: id de categoria

7. Desactivar Categoria
  * Metodo HTTP: PUT
  * URL: http://0.0.0.0:3000/api/categoria/{id}/deactivate
  * Parametro:
    * id: id de categoria


Probando nuestro Backend con Postman - Articulos

1. Crear articulo
  * Metodo HTTP: POST
  * URL: http://0.0.0.0:3000/api/articulo/add
  * Parametros:
    Body:
      * categoria => id de Categoria    
      * codigo (string 64)
      * nombre (string 50)
      * descripcion (string 255)
      * precio_venta (int)
      * stock (int)
      * estado (0= activo y 1=inactivo)

2. Listar Articulos
  * Metodo HTTP: GET
  * URL: http://0.0.0.0:3000/api/articuli/

3. Obtener un articulo
  * Metodo HTTP: GET
  * URL: http://0.0.0.0:3000/api/articulo/{id}

4. Busqueda de un articulo
  * Descripcion: Permite la busqueda de un articulo por nombre o descripcion
  * Metodo HTTP: GET
  * URL: http://0.0.0.0:3000/api/articulo/?valor={texto}

5. Actualizar categoria
  * Metodo HTTP: PUT
  * URL: http://0.0.0.0:3000/api/articulo/{id}
  * Parametros:
    Body:
      * categoria => id de Categoria    
      * codigo (string 64)
      * nombre (string 50)
      * descripcion (string 255)
      * precio_venta (int)
      * stock (int)
  
6. Activar Articulo
  * Metodo HTTP: PUT
  * URL: http://0.0.0.0:3000/api/categoria/{id}/activate
  * Parametro:
    * id: id de articulo

7. Desactivar Articulo
  * Metodo HTTP: PUT
  * URL: http://0.0.0.0:3000/api/categoria/{id}/deactivate
  * Parametro:
    * id: id de articulo