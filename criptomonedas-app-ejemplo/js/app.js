const api = new API("c9f8f35737da2c2110b31242a7e5d3b4a8b24a1e55d7ff88211aba617e3eaf16");
const panel = new PanelPrincipal();
panel.cargartagselect();



//leer formulario

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
	e.preventDefault();

	const monedaSelector = document.querySelector("#moneda");
	const monedaSelectorValor = monedaSelector.options[monedaSelector.selectedIndex].value;

	const crytoSelector = document.querySelector("#criptomoneda");
	const cryptoSelectorValor = crytoSelector.options[crytoSelector.selectedIndex].value;
	if(monedaSelectorValor === "" || cryptoSelectorValor === ""){
		panel.imprimirMensajes("Todos los campos son obligatorio llenarlos", "alert bg-danger text-center")
	}else{
		api.valoresMonedasAPI(monedaSelectorValor, cryptoSelectorValor)
		.then(data =>{
			panel.resultadoConversion(data.valores.RAW, monedaSelectorValor, cryptoSelectorValor)
			
		})	
	}
})