# NODE JS #
Ejecutor Javascript desde un servidor usando el motor V8 del navegador WEB

## HTTP ##
protocolo de comunicacion de la capa 3-4 modelo OSI para la trasnimision de informacion via WEB; lenguaje comun para el entenimiento entre maquinas
se maneja por peticiones.
Esta el Cliente -> va a internet -> Servdor y este responde al cliente.
las info mas relvenate es:
HOST: A donde se hace la peticion
REFER: de donde viene
USER_AGENT: Navigator
CONNECTION: quien pasa el enlace client server
Puntos clave: METODOS(que se quiere hacer), ESTADOS(como le fue la operacion), CUERPO(lo que el servidor responde - HTML o archivo JS)

### metodos ###
GET-> pedir o recojer info del servidor
POST-> insertar o añadir o enviar un formulario
PUT-> Editar o reemplazar informacion de un producto o mensaje
PATCH -> Cambiar algunas cosas
DELETE-> Excluir o eliminar informacion
OPTIONS -> saber si se puede ejecutar algun verbose

### cabeceras ###
informacion contextual de la peticion., de como hacer la solicitud y que debe tener por ejemplo autenticacion cahce indicadores condiciones cors cookies
cookies-> compatir informacion entre peticiones para hacer la solicitud
cors -> compatir recursos entrre diferentes originees
autenticacion-> asefgura de pedir las cosas.
cache-> almacenamiento temporal, gestiona durante cuanto tiempo la respuat sera la misma

### estados ###
numero donde indica el resultado de la peticion
200 -> ok
201 -> creado
301 -> se ha redirigido a otra direccion
400 -> bad request
404 -> not found
500 -> error del servidor

### cuerpos de peticion y query ###
cuerpo o body la informacion de la peticion que la cual se esta solicitamdo
la informacion depende de que se pide en la cabecera o header en el content-type
ejemplo
text/html
text/css
app/JavaScript
image/jpeg
app/json
app/xml

ejemplos:

Resquest
[POST]
https://api.com/user
content-type: application/json
{
    "name": "duck",
    "username": "el hermoso"
}

Response
[POST]
https://api.com/user
content-type: application/json
{
    id: "vf5e09skjmcs93w"
    "name": "duck",
    "username": "el hermoso"
}

Query -> informacion extra que se envia al servidor para alguna solicitud en especifico
tambien se puede usar para compartir datos con el frontend; se recomiendo no enviar informacion sensible

#### npm ####
gestion de dependencias para node 

#### express ####
libreria para crear servidores en node js
npm install express()

https://platzi.com/clases/1689-nodejs-mongo-websockets/22632-conceptualmente-rutas-controladores-y-bases-de-dat/

## Mongoose ##
mongodb no tiene schemas lo cual es importante saber como se almacena, mongoose es una libreria de node que permite programar las schemas por software para la db, lo cual previene fallos de consistencias, dada la naturaleza de la base de datos por ducomentos

