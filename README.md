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

Issues:

Monday July 30 - 
I am not able to use the functions provided by the "API" to render the wallet data. As a work around I simply hardcoded the data in the API and passed in a completed Array to the Wallets Component. This allowed me to properly map the data and generate a dynamic list of Wallets. 

This is not the correct way to to things, as I need to work with the GetWallets() function to generate the data. Here is how things should run:

Before the DOM is populated, the functions will run and populate the state or data properties on the Wallet component. This will produce 3 arrays: 1. Image Source Array, 2. Exchange Rate Array, 3. Wallets Array. 

A function will then act to add key-pairs to the objects in the Wallets array that reflect the currency in that object. The goal is to create an object with all of the key-pairs required to map the Wallet properly. 

As an aside, I am having trouble generating the images for each Object appropriately. I have to use a require function to create a specific path when rendered. When hard coding the data, the path is fine and the image renders. However, when mapping using v-for, the image will not show up. The work around is currently located in the API.mock file. 

I am consistently stuck trying to figure out how to render the functions before the page loads. There does not appear to be a way to retreive data from the API, run the code and have it ready for production when the component Mounts. I keep getting erros that certain properties are undefines as they have not been activated in the life cycle as of yet. 

Another area that I am having trouble with is the promise that produces the array of Wallet Data. The promise is designed to fail 2/5 times. When this happens, the getWallets() function stops. If you were to render this data initially using a life cycle hook, you would need to ensure that it re-ran to start the process of building the component data. The entire wallet component data is dependant on the getWallets function running and having the appropriate arrays available to run the array combining function. This is where I am stuck as:

1. I cannot find where to run the GetWallet function where it will have access to the Wallets function. Currently the Wallets function is undefined when I try to run the GetWallets() function. 

2. I do not know how to address the rejected Promise, as I need it to run again. 

Styling and CSS Issues: 

I need to use the class binding based on the values in the Wallet Array to dynamically render currency change data. If the value in Wallets.changeToday is positive, then I need to render a positive arrow and have the number value be represented in green. If the number is negative, I need to render a negative arrow and have the number represented in red. 

Wednesday July August 1st. 

Problems from Monday have been solved. 

New issue currently exists when attempting to load the wallet data via a click button. 

The data is being called from the server, with the getWallets function generating 

