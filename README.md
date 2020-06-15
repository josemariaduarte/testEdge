# testEdge
ABM  de Categorias y Articulos en Node js:
Creamos un proyecto para la creacion, edicion, busqueda, activacion y desactivacion de Categorias y Articulos.




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
