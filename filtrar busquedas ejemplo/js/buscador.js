// crear los años en el campo año
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

// conjunto de datos a usar en la practica
const carros = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 	marca: 'Audi', 
		modelo: 'A4', 
		year: 2018, 
		precio: 40000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'automatico' 
	},
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 	marca: 'Audi', 
		modelo: 'A6', 
		year: 2010, 
		precio: 35000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'automatico' 
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ 
		marca: 'Ford', 
		modelo: 'Mustang', 
		year: 2019, 
		precio: 80000, 
		puertas: 2,
		color: 'Rojo', 
		transmision: 'manual' 
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 	marca: 'Audi', 
		modelo: 'A3', 
		year: 2017, 
		precio: 55000, 
		puertas: 2, 
		color: 'Negro', 
		transmision: 'manual' 
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 	marca: 'Ford', 
		modelo: 'Mustang', 
		year: 2017, 
		precio: 60000, 
		puertas: 2, 
		color: 'Negro', 
		transmision: 'manual' 
	},
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 	marca: 'Audi', 
		modelo: 'A4', 
		year: 2016, 
		precio: 30000, 
		puertas: 4, 
		color: 'Azul', 
		transmision: 'automatico' 
	}
];

//se carga los datos de los carros en la pagina
document.addEventListener("DOMContentLoaded",() =>{
	mostrarCarros(carros);
})

// funcion que construye el contenido de la tabla
 function mostrarCarros(c) {

 	limpiarContenidoTabla();

 	let contenedorResultado = document.querySelector("#resultado");
 	let contenedorTabla = document.createElement("table");

 	contenedorTabla.className = "u-full-width"
 	
 	let TablaCabecera = `<thead>
    <tr>
      <th>marca</th>
      <th>modelo</th>
      <th>year</th>
      <th>precio</th>
      <th>puertas</th>
      <th>color</th>
      <th>transmision</th>
    </tr>
  	</thead>`;
  	
  	contenedorTabla.innerHTML =TablaCabecera;
  	contenedorTablaCuerpo = document.createElement("tbody");

  	contenedorResultado.appendChild(contenedorTabla);
  	contenedorTabla.appendChild(contenedorTablaCuerpo);

 	c.forEach(carro => {
 		contenedorFilaCuerpo = document.createElement("tr");
 		contenedorFilaCuerpo.innerHTML =`
      			<td>${carro.marca}</td>
      			<td>${carro.modelo}</td>
      			<td>${carro.year}</td>
      			<td>${carro.precio}</td>
      			<td>${carro.puertas}</td>
      			<td>${carro.color}</td>
      			<td>${carro.transmision}</td>
    			`
    	contenedorTablaCuerpo.appendChild(contenedorFilaCuerpo);
 	});

 };
//  limpiar el contenido de la tabla
 function limpiarContenidoTabla () {

 	let contenedorResultado = document.querySelector("#resultado");
 	
 	// limpiar el contenido de la tabla 
 	while (contenedorResultado.firstChild) {
		contenedorResultado.removeChild(contenedorResultado.firstChild);
	}
 
 }

// variable para contener resultados cada filtro
 var contenedorBusqueda = {
	marca: "",
	year: "",
	minimo:"",
	maximo:"",
	puertas:"",
	color:"",
	transmision:""

}

// ------ Filtros -----------------//

const marca = document.querySelector("#marca");
marca.addEventListener("input", e =>{
	// se obtiene el valor del campo que se selecciono.
 contenedorBusqueda.marca = e.target.value;

  // llama la funcion de filtro 
 filtrarCarros();
});

const anio = document.querySelector("#year");
anio.addEventListener("input", e =>{
	// se obtiene el valor del campo que se selecciono.
 contenedorBusqueda.year = Number(e.target.value);

  // llama la funcion de filtro 
 filtrarCarros();
});

const precioMaximo = document.querySelector("#maximo");
precioMaximo.addEventListener("input", e =>{
	// se obtiene el valor del campo que se selecciono.
 contenedorBusqueda.maximo = Number(e.target.value);

  // llama la funcion de filtro 
 filtrarCarros();
});

const precioMinimo = document.querySelector("#minimo");
precioMinimo.addEventListener("input", e =>{
	// se obtiene el valor del campo que se selecciono.
 contenedorBusqueda.minimo = Number(e.target.value);

  // llama la funcion de filtro 
 filtrarCarros();
});

const numeroPuertas = document.querySelector("#puertas");
numeroPuertas.addEventListener("input", e =>{
	// se obtiene el valor del campo que se selecciono.
 contenedorBusqueda.puertas = Number(e.target.value);

  // llama la funcion de filtro 
 filtrarCarros();
});

const transmision = document.querySelector("#transmision");
transmision.addEventListener("input", e =>{
	// se obtiene el valor del campo que se selecciono.
 contenedorBusqueda.transmision = e.target.value;

  // llama la funcion de filtro 
 filtrarCarros();
});

const color = document.querySelector("#color");
color.addEventListener("input", e =>{
	// se obtiene el valor del campo que se selecciono.
 contenedorBusqueda.color = e.target.value;

  // llama la funcion de filtro 
 filtrarCarros();
});

// funcion principal que filtra la busqueda con cada valor de los campos
function filtrarCarros () {
	const carrosFiltrados = carros.filter(filtrarPorMarca).filter(filtrarPorAnio).filter(filtrarPorPrecioMinimo)
		.filter(filtrarPorPrecioMaximo).filter(filtrarPorNumeroPuertas).filter(filtrarPorTransmision)
		.filter(filtrarPorColor);

	  if(carrosFiltrados.length){
	  	mostrarCarros(carrosFiltrados);
	  }else{
	  	noEncuentraCarros();
	  }

};

function noEncuentraCarros () {
 	limpiarContenidoTabla();	

	let div = document.createElement("div");
	div.classList.add("alerta", "error");
	div.appendChild(document.createTextNode(" No hay carros"));
	document.querySelector("#resultado").appendChild(div);

 } 

//--- campos de los filtros ---//

function filtrarPorMarca (carro) {
	if (contenedorBusqueda.marca){
		return carro.marca == contenedorBusqueda.marca;
	}else{
		return carro;
	}
}

function filtrarPorAnio (carro) {
	if (contenedorBusqueda.year){
		return carro.year == contenedorBusqueda.year;
	}else{
		return carro;
	}
}

function filtrarPorPrecioMaximo (carro) {
	if (contenedorBusqueda.maximo){
		return carro.precio <= contenedorBusqueda.maximo;
	}else{
		return carro;
	}
}

function filtrarPorPrecioMinimo (carro) {
	if (contenedorBusqueda.minimo){
		return carro.precio >= contenedorBusqueda.minimo;
	}else{
		return carro;
	}
}

function filtrarPorNumeroPuertas (carro) {
	if (contenedorBusqueda.puertas){
		return carro.puertas == contenedorBusqueda.puertas;
	}else{
		return carro;
	}
}

function filtrarPorTransmision (carro) {
	if (contenedorBusqueda.transmision){
		return carro.transmision == contenedorBusqueda.transmision;
	}else{
		return carro;
	}
}

function filtrarPorColor (carro) {
	if (contenedorBusqueda.color){
		return carro.color == contenedorBusqueda.color;
	}else{
		return carro;
	}
}