var Wallet = function(currency, amount, changeToday) {
  this.currency = currency;
  this.amount = amount;
  this.changeToday = changeToday;
};

var ExchangeRate = function(currency, rate) {
  this.currency = currency;
  this.rate = rate;
};

var ExchangeRatesToCAD = [
  new ExchangeRate("BTC", 10100),
  new ExchangeRate("XMR", 320.45),
  new ExchangeRate("LTC", 241.4),
  new ExchangeRate("DOGE", 0.00041),
  new ExchangeRate("ETH", 500.12717)
];

function GetWallets() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Math.random() < 0.2) {
        reject("Could not connect to server");
        return;
      }

      resolve([
        new Wallet("BTC", 0.5001, 1000.77),
        new Wallet("ETH", 1.2211, -213.4),
        new Wallet("LTC", 105.3177, 0),
        new Wallet("XMR", 1, 0.48)
      ]);
    }, 250);
  });
}



const images = require.context("./images", true, /\.svg$/);
const imageArray = [
  {
    currency: "BTC",
    image: images("./btc.svg")
  },
  {
    currency: "ETH",
    image: images("./eth.svg")
  },
  {
    currency: "LTC",
    image: images("./ltc.svg")
  },
  {
    currency: "XMR",
    image: images("./xmr.svg")
  }
];


export default {
  Wallet,
  ExchangeRate,
  ExchangeRatesToCAD,
  GetWallets,
  imageArray
};
