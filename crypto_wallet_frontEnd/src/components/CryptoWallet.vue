<template>

  <div v-if="ExchangeRatesToCAD" class="container">
  <div class="heading">
      <h1 class="heading__title"> Your Portfolio </h1>
    </div>
    <div class="portfolio">
      <h2 class="portfolio__title" >PORTFOLIO VALUE</h2>
      <h1 class="portfolio__value">C$19,500.31</h1>
      <p class="portfolio__change">&#9650; +$8,700.86</p>
      <button v-show="render" class="displayPortfolio" @click='displayWallet(); GetWallets1()'> View Portfolio  </button>
    </div>
   
    <div class='totalWallet' v-show='walletStatus'>
   <Wallets/>
        <ul>
      <li v-for="wallet in walletArray" v-show="cart.length > 1">
          <div class="wallet">
      <div class="wallet__section--left">
        <img  alt=""/>
         <img class="wallet__icon" :src='wallet.image' alt="">

      </div>
      <div class="wallet__section--middle">
        <p class="wallet__cryptoAsset">{{wallet.currency}}</p>
        <p class="wallet__value--cryptoAsset">{{wallet.amount.toLocaleString('en')}} {{wallet.currency}}
          <span class="crypto__price--cad">/ {{wallet.rate.toLocaleString('en', {style: 'currency', currency: 'CAD'})}}</span>
        </p>
      </div>
      <div class="wallet__section--right">
        <p  class="wallet__value--active">  {{wallet.changeToday.toLocaleString('en', {style: 'currency', currency: 'CAD'})}}</p>
        <p class="wallet__value--cad">C$10,000.10</p>
      </div>
    </div>
      </li>
    </ul>  
    </div>
   <button class="displayPortfolio" @click='ExchangeRate()'> View Portfolio  </button>
  Wallet Array {{walletArray}}
  Image Array {{ imageArray}}
  Exchange Array {{exchangeArray}}
    
  </div>

</template>

<script>
import Wallets from "./Wallets.vue"
import API from "../data/ApiMock.js"

export default {
  name: "CryptoWallet",
  components: {Wallets},
  props: {
    msg: String
  },

beforeMount(){
  this.render = true
},



  data() {
    return {

      ExchangeRatesToCAD:this.$store.state.ExchangeRatesToCAD,
      ExchangeRate: this.$store.state.ExchangeRate,
      Wallet: this.$store.state.Wallet,
      test: this.$store.state.ExchangeRatesToCAD,
      images: API.images,
      gain: "▲",
      loss: 9660,
      walletStatus: false,
      render: false,
      // newWallets: GetWallets.asset,
     walletArray: API.userWallets,
     imageArray: [
  {currency: 'BTC', img: '../btc.svg'},
  {currency: 'ETH', img: '../eth.svg'},
  {currency: 'LTC', img: '../ltc.svg'},

],

userWallets:[
   { currency: 'BTC',
    amount: 0.5001,
    changeToday: 1000.77,
    image: '../data/images/ltc.svg',
    rate: 10100 },
  { currency: 'ETH',
    amount: 1.2211,
    changeToday: -213.4,
    image: ('../images/eth.svg'),
    rate: 500.12717 },
  { currency: 'LTC',
    amount: 105.3177,
    changeToday: 0,
    image: '../ltc.svg',
    rate: 60 },
  { currency: 'XMR',
    amount: 1,
    changeToday: 0.48,
    image: '../xmr.svg',
    rate: 320.45 } 
],
     exchangeArray:this.$store.state.ExchangeRatesToCAD,
      items: [
        {
          currency: "BTC",
          amount: 0.5,
          changeToday: 300,
          img: "ltc.svg",
          rate: 10100
        },
        { currency: "ETH", amount: 10, changeToday: -400, rate: 10000 },
        { currency: "LTC", amount: 34, changeToday: 0, rate: 0.5 },
        { currency: "XMR", amount: 64, changeToday: 3000, rate: 1 }
      ],
    };
  },
  computed: {
    cart(){
      return this.$store.state.Wallet
    },
    

},
  methods: {
    combineWallets(){
    Wallet.forEach((item) => {
	const image = images.find((image) => {
		return image.currency === item.currency
	})
	const exchange = exchangeRates.find((exchange) => {
		return exchange.currency === item.currency
	})
	item.image = image.img
	item.rate = exchange.exchangeRate
})
    },
  
    displayWallet() {
      this.walletStatus = !this.walletStatus;
      this.$store.commit('walletData', this.ExchangeRatesToCAD)
    },
    GetWallets1() {
       this.Wallet = this.Wallet
       let Wallet = this.Wallet
	return new Promise(function (resolve, reject) {
  
		setTimeout(function () {
    
			if (Math.random() < 0.2) {
				reject("Could not connect to server");
				return;
			}

			resolve([

				new Wallet("BTC", 0.5001, 1000.77),
				new Wallet("ETH", 1.2211, -213.40),
				new Wallet("LTC", 105.3177, 0),
        new Wallet("XMR", 1, 0.48)

        

			]);

		}, 250);

	}).then((data) =>{
  this.$store.commit('walletData', data)
  return this.walletArray = data
})

}
   
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Color
$dark-grey: #333;
$light-grey: #ccc;
$white: #ffffff;
$color-main: $dark-grey;
$color-main-bg: #84c4a1;
$color-shadow-main: darken($color-main-bg, 20%);
$color-heading-border-top: #000;
$color-increase: #40b350;
$color-descrease: #ea2471;
// Font Size
$font-size-enourmous: 4rem;
$font-size-xxlarge: 2.6rem;
$font-size-xlarge: 2rem;
$font-size-large: 1.8rem;
$font-size-medium: 1.6rem;
$font-size-small: 1.4rem;
$font-size-xsmall: 1.2rem;
$font-size-xxsmall: 0.6rem;
// Spacing
$xxs-size: 0.3rem;
$xs-size: 0.6rem;
$s-size: 1.2rem;
$m-size: 1.6rem;
$l-size: 3.2rem;
$xl-size: 4.8rem;
$desktop-breakpoint: 45rem;

.container {
  background: $white;
  border-radius: 3px;
  box-shadow: 5px 5px 5px $color-shadow-main;
  margin: 0 auto;
  max-width: 60rem;
  padding-bottom: $s-size;
}

.heading {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top: 10px solid $color-heading-border-top;
}

.heading__title {
  font-size: $font-size-large;
  margin: $m-size;
}

.portfolio {
  border-top: 1px solid $light-grey;
  border-bottom: 1px solid $light-grey;
  box-shadow: 0 4px 8px #aaa;
  margin-bottom: $l-size;
  text-align: center;
}

.portfolio__title {
  color: grey;
  font-size: $font-size-large;
  margin: 0;
  margin-top: $l-size;
}

.portfolio__value {
  font-size: $font-size-enourmous;
  margin: $xs-size;
}

.portfolio__change {
  color: $color-increase;
  margin: 0;
  margin-bottom: $l-size;
  font-size: $font-size-large;
}

.wallet {
  border: 1px solid $light-grey;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 2px #ddd;
  display: flex;
  font-size: $font-size-medium;
  margin: $s-size;
  padding: $s-size;
}

.wallet__section--left {
  display: flex;
  align-items: center;
}

.wallet__section--middle {
  flex: 1;
  margin: 0 $xs-size;
}

.wallet__section--right {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wallet__icon {
  width: $l-size;
  height: $l-size;
}

.wallet__cryptoAsset {
  font-weight: bold;
  margin: 0;
}

.wallet__value--cryptoAsset {
  font-weight: bold;
  margin: 0;
}

.crypto__price--cad {
  font-weight: normal;
  margin: 0;
}

.wallet__value--active {
  color: $color-increase;
  font-weight: bold;
  font-size: $font-size-xlarge;
  margin: 0;
}

.wallet__value--cad {
  color: grey;
  font-weight: bold;
  margin: 0;
}
.displayPortfolio {
  margin: 10px;
  background: #e2a14c;
  display: inline-block;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  vertical-align: top;
  color: #fff;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
