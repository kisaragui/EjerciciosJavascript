class API {
	contructor(apiKey){
		this.apiKey = apiKey;
	}

	async monedasAPI (){
		const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;

		const obtenerAPI = await fetch(url);
		const datos = await obtenerAPI.json(); 

		return {datos};
	}

	async valoresMonedasAPI (moneda,cryptoMoneda){
		let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoMoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;

		let obtenerAPI = await fetch(url);
		let valores = await obtenerAPI.json(); 

		return {valores};
	}
}