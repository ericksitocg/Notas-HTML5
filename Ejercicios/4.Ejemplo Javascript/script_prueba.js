function saludo(){
    alert("Hola,soy un script de un archivo JavaScript externo jsjsj");
}

function recorrer(){
	for(var i=0;i<3;i++){
		document.getElementsByTagName("p")[i].onclick=saludo;
	}
}

function ejecuta(){
	/*Para usar un array de las etiquetas por un tipo especifico*/
    var elementoNombre = document.getElementsByTagName("p")[0].onclick=saludo;
    /*Devulve el elemento del respectivo id*/
    var elementoId = document.getElementById("2_parrafo").onclick=saludo;
    /*Devuelve array con los elementos de esa clase*/
    var elementoClase = document.getElementsByClassName("importante")[0].onclick=saludo;
}

function ejecutaNuevosSelectores(){
	/*
	document.querySelector(".importante").onclick=saludo;//devuelve el primer p
	document.querySelector("#principal p:last-child").onclick=saludo;
	*/
//	var elementos = document.querySelectorAll("#principal p")[0].onclick=saludo;

	var elementos = document.querySelectorAll("#principal p,spam");//Elemeto principal selecciona las etiquetas p y las etiquetas spam
	for(var i=0;i<elementos.length;i++){
		elementos[i].onclick=saludo;
	}
}
//Cuando se carge la pantalla, se ejecuta la funcion lo mismo que linkar en el head del html
window.onload=ejecutaNuevosSelectores;

/*
querySelector(selectorCSS)
-Retorna el primer elemento que corresponde al grupo de selectores como parametro
querySelectorAll(selectorCSS)
-Retorna todos los elementos que corresponden al grupo de selectores, devuelve un array en el mismo orden que el elemento
*/
