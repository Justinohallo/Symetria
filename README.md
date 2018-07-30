# Symetria

The concept behind this project is to dynamically generate a list of CryptoAsset wallets. 

The CryptoAsset wallets will be populated with data, that is being retreived from an API. 

The API will provide the following variables and functions. 

var Wallet = function (currency, amount, changeToday) {
	this.currency = currency;
	this.amount = amount;
	this.changeToday = changeToday;
}

Wallet is a function, and when a new Wallet is generated with the proper paramaters, 
an object will be returned. There is also the option to return an array of Wallet Objects. 

var ExchangeRate = function (currency, rate) {
	this.currency = currency;
	this.rate = rate;
}

ExchangeRate is a function, and when a new ExchangeRate is generated with the proper paramaters, 
an object will be returned. There is also the option to return an array of ExchangeRate Objects. 

var ExchangeRatesToCAD = [
	new ExchangeRate("BTC", 10100),
	new ExchangeRate("XMR", 320.45),
	new ExchangeRate("LTC", 241.4), 
	new ExchangeRate("DOGE", 0.00041),
	new ExchangeRate("ETH", 500.12717)
];

ExchangeRatesToCAD is an array, that contains a number of constructors acting on the ExchangeRate function. When called, the variable will run each instance of ExchangeRate with the associated paramaters and produce an array with the represntative data. 

function GetWallets() {

	return new Promise(function (resolve, reject) {

		setTimeout(function () {

			if (Math.random() < 0.2) {
				reject("Could not connect to server");
				return "Sorry";
			}

			resolve([

				new Wallet("BTC", 0.5001, 1000.77),
				new Wallet("ETH", 1.2211, -213.40),
				new Wallet("LTC", 105.3177, 0),
				new Wallet("XMR", 1, 0.48)

			]);

		}, 250);

	});

}

GetWallets is a function that returns a promise. The promise contains a setTimeout function, which will run after 250ms. The promise can be rejected randomly, based on the Math.random function that will
force the promise to reject if the result of Math.random is < 0.2. If Math.random > 0.3, than the promise will be resolved. In this case, a new array will be produced by the promise where a number 
of instances will act on the Wallet function, producing an array of Wallet data. 

In order for a web application to use this data, the arrays produced by GetWallets and Exchange Data need to be merged. This will allow the application to dynamically render the following information ising v-for: 
CryptoAssetName:
CryptoAssetPrice:
CryptoAssetExchangeRate:
CryptoAssetDailyChange:

Using the V-for method, the information in each object in the new array will be rendered dynamically. However, the page need to load this information first and make all of the requesite calculations before the DOM is rendered. 

