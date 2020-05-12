class PanelPrincipal {
   
   // muestra las cryptomonedas en el segundo campo de seleccion
	cargartagselect(){
		api.monedasAPI()
		.then(dato =>{ 

			const selector = document.querySelector("#criptomoneda");

			for (let [k, v] of Object.entries(dato.datos.Data)){
				let opciones = document.createElement("option");
				opciones.value = v.Symbol;
				opciones.appendChild(document.createTextNode(v.CoinName));
				selector.appendChild(opciones);
		}

		})
	}	

	// imprime un mensaje de validacion de campos de seleccion
	imprimirMensajes(mensaje,estilo) {
		let div = document.createElement("div");
		div.className = estilo
		div.appendChild(document.createTextNode(mensaje));

		let divMensaje = document.querySelector(".mensajes").appendChild(div);

		setTimeout(() => document.querySelector(".mensajes").remove,3000)

	}

	// muestra el resultado en la pagina
	resultadoConversion(resultado, moneda, cryptoMoneda){
		
		let r = resultado[cryptoMoneda][moneda];

		let cuadroResultado = `
               <div class="card bg-warning">
                    <div class="card-body text-light">
                         <h2 class="card-title">Resumen:</h2>
                         <p>El Precio de ${r.FROMSYMBOL} a moneda ${r.TOSYMBOL} es de: $ ${r.PRICE}</p>
                    </div>
               </div>
          `
        document.querySelector("#resultado").innerHTML = cuadroResultado;
	}
}