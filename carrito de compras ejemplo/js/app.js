// ---- variables

var cursos = document.getElementById('lista-cursos');
var carrito = document.getElementById("carrito");
var listaCarrito = document.getElementById("lista-carrito");
var vaciarCarrito = document.querySelector("#vaciar-carrito"); 

// ---- funcion principal

cargarEventos()

 function cargarEventos(){
 	// agrega el evento para cargar el cursos al carrito
 	cursos.addEventListener("click", agregarCurso);

 	// agrega el evento de elimimar los cursos del carrito 
 	carrito.addEventListener("click", eliminaCurso);

 	vaciarCarrito.addEventListener("click", vaciarCurso)
 	
 	// Al cargar el documento, mostrar los cursos guardados en el LocalStorage
    document.addEventListener('DOMContentLoaded',leerCursosLocalStorage);
 }

// ---- acciones del carrito

function agregarCurso(e){
	e.preventDefault();
	let cursos;
	cursos = e.target;
	// se busca el boton selector css de agregar-carrito
	if (cursos.className.includes("agregar-carrito")){

		leerDatosCurso(cursos.closest(".card"));
	};
}

// lee los datos de los cursos en la pagina para pasarlos al carrito de compra
function leerDatosCurso(datos){
	let informacion = {
      	imagen: datos.querySelector("img").src,
        titulo: datos.querySelector("h4").textContent,
      	precio: datos.querySelector(".precio span").textContent,
        id: datos.querySelector("a").getAttribute("data-id")
     };
    agregarCarrito(informacion);
}

function agregarCarrito(datos){
	let fila = document.createElement('tr');
    fila.innerHTML = `
        <td>  
          <img src="${datos.imagen}" width=100>
        </td>
          <td>${datos.titulo}</td>
          <td>${datos.precio}</td>
          <td>
           <a href="#" class="borrar-curso" data-id="${datos.id}">X</a>
          </td>
     	`;
     // se agrega las filas en el carrito
    listaCarrito.appendChild(fila);
    agregarCursoLocalStorage(datos);
}

function eliminaCurso (e) {
	e.preventDefault();
	let cursos;

	cursos = e.target;

	if(cursos.classList.contains("borrar-curso")){
		cursos.closest("tr").remove();
		borrarCursoLocalStorage(cursos.closest("a").getAttribute("data-id"));
	}
	
}

function vaciarCurso() {
	listaCarrito.innerHTML = "";
	vaciarLocalStorage();
}

// --- acciones en el Local Storage

function leerCursosLocalStorage () {
	let cursos
	cursos = obtenerCursoLocalStorage();
	cursos.forEach((c) => {

	let fila = document.createElement('tr');
    fila.innerHTML = `
        <td>  
          <img src="${c.imagen}" width=100>
        </td>
          <td>${c.titulo}</td>
          <td>${c.precio}</td>
          <td>
           <a href="#" class="borrar-curso" data-id="${c.id}">X</a>
          </td>
     	`;
    listaCarrito.appendChild(fila);
	})
}

function agregarCursoLocalStorage (c) {
	let cursos;
	cursos = obtenerCursoLocalStorage();
	cursos.push(c);
	// se guardan los mensajes en formato de string
	localStorage.setItem("cursos",JSON.stringify(cursos));
}

function obtenerCursoLocalStorage() {
	let cursos;
	if (localStorage.getItem("cursos") === null){
		// en caso de obtener no tener mensajes se inicializa la variable
		cursos = [];
	}else{
		// en caso de que halla mensajes se obtienen todos en un formato json para ser leidos en string
		cursos = JSON.parse(localStorage.getItem("cursos"));
	}
	return cursos;
}

function borrarCursoLocalStorage (c) {
	let cursos;
	// como regresa el contenido del mensaja  mas el contenido de la "x" del boton, se decide cortar la parte
	// de la variable que no se necesita.
	cursos = obtenerCursoLocalStorage();
	// se busca el mensaje a borrar dentro del json identificando su posicion
	cursos.forEach( (curso, i) => {

		if(c === curso.id){
			// al ubicarlo con el contenido del mensaje y la posicion del indice, se elimina del json en la posicion que este
			cursos.splice(i, 1);

		}
	});
	// se guardan los cambios en el local storage 
	localStorage.setItem("cursos", JSON.stringify(cursos));
}

function vaciarLocalStorage () {
	localStorage.clear()
}