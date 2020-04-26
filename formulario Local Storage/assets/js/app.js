// ---- variables globales
var listaMensaje = document.querySelector("#lista-tweets");

// ejecucion la funcion principal
eventoSubmits();

// ----- funcion principal
function eventoSubmits(){
	// añadiendo el evento a formulario al enviar
	document.querySelector("#formulario").addEventListener("submit", agregarMensaje);
	
	listaMensaje.addEventListener("click", borrarMensaje);

	// añadiendo el evento al cargar la pagina y muestre los mensajes guardados
	document.addEventListener("DOMContentLoaded", listarMensajeLocalStorage)

};

// --- Acciones

function agregarMensaje(e){
	// previene que el formulario haga por defecto del envio
	e.preventDefault();

	// contruccion del boton de eliminar en la lista de mensajes
	let boton = document.createElement("a");
	boton.className = "borrar-tweet";
	boton.innerText = "x";

	// guardado del mensaje 
	const mensaje = document.getElementById("tweet").value;

	// construccion de la lista para ver los mensajes en la pagina
	let lista = document.createElement("li");
	lista.innerText = mensaje;
	lista.appendChild(boton);
	listaMensaje.appendChild(lista);
	
	agregarMensajeLocalStorage(mensaje);

}

function borrarMensaje(e) {	
	e.preventDefault()
	if(e.target.className === "borrar-tweet"){
		e.target.parentElement.remove();
		borrarMensajeLocalStorage(e.target.parentElement.innerText);
	}

}
// --- acciones en el Local Storage

function listarMensajeLocalStorage () {
	let mensajes
	 mensajes = obtenerMensajeLocalStorage();
	 mensajes.forEach((mensaje) => {

		// contruccion del boton de eliminar
		let boton = document.createElement("a");
		boton.className = "borrar-tweet";
		boton.innerText = "x";

		// construccion de la lista para ver los mensajes en la pagina
		let lista = document.createElement("li");
		lista.innerText = mensaje;
		lista.appendChild(boton);
		listaMensaje.appendChild(lista) 	
		})
}

function agregarMensajeLocalStorage (m) {
	let mensajes;
	mensajes = obtenerMensajeLocalStorage();
	mensajes.push(m);
	// se guardan los mensajes en formato de string
	localStorage.setItem("mensajes",JSON.stringify(mensajes) );


}

function obtenerMensajeLocalStorage() {
	let mensajes;

	if (localStorage.getItem("mensajes") === null){
		// en caso de obtener no tener mensajes se inicializa la variable
		mensajes = [];
	}else{
		// en caso de que halla mensajes se obtienen todos en un formato json para ser leidos en string
		mensajes = JSON.parse(localStorage.getItem("mensajes"));
	}
	return mensajes;
}

function borrarMensajeLocalStorage (m) {
	let mensajes, mensajeborrado
	// como regresa el contenido del mensaja  mas el contenido de la "x" del boton, se decide cortar la parte
	// de la variable que no se necesita.
	mensajeborrado = m.substring(0, m.length - 1);
	mensajes = obtenerMensajeLocalStorage();
	// se busca el mensaje a borrar dentro del json identificando su posicion
	mensajes.forEach( (m, i) => {
		if(m === mensajeborrado){
			// al ubicarlo con el contenido del mensaje y la posicion del indice, se elimina del json en la posicion que este
			mensajes.splice(i,1);
		}
	});
	// se guardan los cambios en el local storage
	localStorage.setItem("mensajes", JSON.stringify(mensajes));
}