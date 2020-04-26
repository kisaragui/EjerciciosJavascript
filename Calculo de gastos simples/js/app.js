// varaiables

const montoInicial = prompt("Indique el monto estimado para realizar el presupuesto: ");
const formulario = document.getElementById("agregar-gasto");
let presupuestoMonto, panel;


// Clases

// clase principal 
class Presupuesto {
	// inicializando las variables principales
	constructor(presupuesto){
		this.presupuesto = Number(presupuesto);
		this.saldoResto = Number(presupuesto);
	}
	// funcion para restar las cantidades a presupuesto
	saldoRestante(cantidad = 0){
		return this.saldoResto -= Number(cantidad);
	}
}

// clase donde estan todas las funciones acciones 
class Pagina {
	//integrando las variables a los campos de la pagina
	insertarCantidades(cantidad){
		const presupuestoIndicador = document.querySelector("span#total");
		const saldoRestanteIndicador = document.querySelector("span#restante");
		presupuestoIndicador.innerHTML = cantidad;
		saldoRestanteIndicador.innerHTML = `${cantidad}`;
	}
	// funcion para mostrar notificaciones o avisos de datos introducidos en los campos en la pagina
	aviso(mensaje,tipo){
		let texto;
		texto = document.createTextNode(mensaje);

		const divAviso = document.createElement("div");
		divAviso.classList.add("text-center", "alert");
		if (tipo == "error"){
			divAviso.classList.add("alert-danger");
		}else{
			divAviso.classList.add("alert-success")
		}
		divAviso.appendChild(texto);
		// insertar en el DOM
		document.querySelector(".primario").insertBefore(divAviso, formulario);

		setTimeout(() =>{
			document.querySelector(".primario .alert").remove();   	
		},4000)
	}

	// muestra y añade los gastos o deducciones a la tabla para visualizarlos todos
	agregarGastosListado(nombreGasto, monto){
		
		let tabla = document.querySelector("tbody");
		
		let contenidoTabla = document.createElement("tr");
		contenidoTabla.innerHTML =`			
     				<td>${nombreGasto}</td>
     				<td>${monto}</td>`
		tabla.appendChild(contenidoTabla);
	}
	// funcion que automatiza la deduciones o cantidades restantes al saldo del presupuesto
	deducionesGatos(gastoResto){
		let restanteIndicador= document.querySelector("span#restante");
		let gastorestante = presupuestoMonto.saldoRestante(gastoResto)
		restanteIndicador.innerHTML = gastorestante;

		this.comprobarGastosIndicador()
		}
	
	// colorea el campo de gastos de acuerdo a la cantidad gastada
	comprobarGastosIndicador(){
			const total = presupuestoMonto.presupuesto;
			const resto = presupuestoMonto.saldoResto;
 
			if((total*0.50) > resto){
				let ri = document.querySelector(".restante");
				ri.classList.remove("alert-success");
				ri.classList.add("alert-warning");

			}else if((total*0.25) > resto){
			 	let ri = document.querySelector(".restante");
				ri.classList.remove("alert-success", "alert-warning");
			 	ri.classList.add("alert-danger");
			 }
		}
}

 
// funcion principal, se ejecuta al cargar el DOM

document.addEventListener("DOMContentLoaded",() =>{

	if(montoInicial === "") {
		alert("Por favor ingrese un monto valido para continuar.");
		window.location.reload();
		}else{
			presupuestoMonto = new Presupuesto(montoInicial);
			panel = new Pagina();
			panel.insertarCantidades(presupuestoMonto.presupuesto);
		}
})

//Eventos del formulario
formulario.addEventListener("submit", (e) =>{
	e.preventDefault();
	let gasto, cantidad;
	gasto = document.getElementById("gasto").value;
	cantidad = document.getElementById("cantidad").value;

	const panel = new Pagina();

	if(gasto === "" || cantidad === ""){
		panel.aviso("Por favar llene todos los campos", "error");
	}else{
		panel.aviso("monto correcto", "correcto");
		panel.agregarGastosListado(gasto,cantidad);
		panel.deducionesGatos(cantidad);
	}
})