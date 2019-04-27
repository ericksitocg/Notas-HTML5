/*
Evento = Desencadenante de la accion
Manejador del evento = codigo que procesa el evento
*/
var foto;
var imagenes = Array(3);

function mostrar_mensaje() {
  alert("Galeria de fotos Random");
}

function presentar() {
  foto.width = 550;
  foto.height = 350;
}

function reestablecer() {//medidas originales
  foto.width = 250;
  foto.height = 250;
}

function accionesInLine() {
  var foto_1 = document.getElementsByTagName('img')[0].onclick = mostrar_mensaje;
}

function accionesListener() {
  //Se toma el primero elemento o etiqueta/contenedor de la familia img
  foto = document.getElementsByTagName('img')[0];

  //Se agregan los manejadores de eventos
  foto.addEventListener("mouseover", presentar, false);
  foto.addEventListener("mouseout", reestablecer, false);
  foto.addEventListener("click", mostrar_mensaje, false);
}

// 2 video
function llenaArreglo(){
  for(var i=0;i<3;i++){
    imagenes[i] = document.getElementsByTagName("img")[i];
  }
}


function accionesFinal(){
  llenaArreglo();
  //No se puede poner en un for
  //funcion anomina funcion(){codigo};
  imagenes[0].addEventListener("mouseover",function(){imagenes[0].width = 550;imagenes[0].height = 350;}, false);
  imagenes[0].addEventListener("mouseout",function(){imagenes[0].width = 250;imagenes[0].height = 250;} , false);
  imagenes[0].addEventListener("click", mostrar_mensaje, false);

  imagenes[1].addEventListener("mouseover",function(){imagenes[1].width = 550;imagenes[1].height = 350;}, false);
  imagenes[1].addEventListener("mouseout",function(){imagenes[1].width = 250;imagenes[1].height = 250;} , false);
  imagenes[1].addEventListener("click", mostrar_mensaje, false);

  imagenes[2].addEventListener("mouseover",function(){imagenes[2].width = 550;imagenes[2].height = 350;}, false);
  imagenes[2].addEventListener("mouseout",function(){imagenes[2].width = 250;imagenes[2].height = 250;} , false);
  imagenes[2].addEventListener("click", mostrar_mensaje, false);

}

/*el sistema desencadena la accion y esta line de codigo es el manejador*/
//window.onload = accionesListener;
window.addEventListener("load",accionesFinal,false);
/*addEvenListener(nombre_evento,funcion,valor_booleano)*/
