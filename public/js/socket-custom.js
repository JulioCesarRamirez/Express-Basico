var socket = io();

socket.on("connect", function () {
  console.log("Conectado al servidor");
});
//escuchar
socket.on("disconnect", function () {
  console.log("Perdimos conecion con el servidor");
});
//enviar informacion
socket.emit(
  "enviarMensaje",
  {
    usuario: "Julio",
    mensaje: "Hola mundo",
  },
  function (resp) {
    console.log("Respuesta server: ", resp);
  }
);

//Escuchar informacion

socket.on("enviarMensaje", function (message) {
  console.log("Servidor: ", message);
});
