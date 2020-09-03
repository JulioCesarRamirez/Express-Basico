var socket = io();

var seachParams = new URLSearchParams(window.location.search);

if (!seachParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("El escritorio es necesario");
}

var escritorio = seachParams.get("escritorio");
var label = $("small");

console.log(escritorio);

$("h1").text("Escritorio " + escritorio);
$("button").on("click", function () {
  socket.emit("atenderTicket", { escritorio: escritorio }, function (resp) {
    console.log(resp);
    if (resp === "No hay tickets") {
      label.text(resp);
      alert(resp);
      return;
    }
    label.text("Ticket " + resp.numero);
  });
});
