
function avisoImagen(){
  alert("Hola soy la imagen");
}

function avisoParrafo(){
  alert("Hola soy el parrafo");
}

function llamarEventos(){
  var imagen = document.getElementById("imagen");
  var parrafo = document.getElementById("parrafo");

  imagen.addEventListener("click",avisoImagen,false);
  parrafo.addEventListener("click",avisoParrafo,true);
}

window.addEventListener("load",llamarEventos,false);

/*El tercer parametro siver para imponer en caso de elementos anidados, quien se ejecuta primero
por ejemplo, el img esta dentro del p, y al hacer clic en el img se ejecutan ambas como parrafo tiene true esa se
llama primero
*/
