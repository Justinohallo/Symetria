<template>

  <div class="container">
  <div class="heading">
      <h1 class="heading__title"> Your Portfolio </h1>
    </div>
    <div class="portfolio">
      <h2 class="portfolio__title" >PORTFOLIO VALUE</h2>
      <h1 class="portfolio__value">C$19,500.31</h1>
      <p class="portfolio__change">&#9650; +$8,700.86</p>
    </div>
    <button @click='displayWallet()'> View Portfolio </button>
    Loading
    <div class='totalWallet' v-show='walletStatus'>
    <div class="wallet">
      <div class="wallet__section--left">
        <img class="wallet__icon" src="../data/images/btc.svg" alt="">
      </div>
      <div class="wallet__section--middle">
        <p class="wallet__cryptoAsset">BTC</p>
        <p class="wallet__value--cryptoAsset">0.5001 BTC
          <span class="crypto__price--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="wallet__section--right">
        <p class="wallet__value--active">&#9650; +C$1,000.77</p>
        <p class="wallet__value--cad">C$10,000.10</p>
      </div>
    </div>




    <div class="wallet">
      <div class="wallet__section--left">
        <img class="wallet__icon" src="../data/images/eth.svg" alt="">
      </div>
      <div class="wallet__section--middle">
        <p class="wallet__cryptoAsset">ETH</p>
        <p class="wallet__value--cryptoAsset">0.5001 BTC
          <span class="crypto__price--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="wallet__section--right">
        <p class="wallet__value--active">&#9650; +C$1,000.77</p>
        <p class="wallet__value--cad">C$10,000.10</p>
      </div>
    </div>
    <div class="wallet">
      <div class="wallet__section--left">
        <img class="wallet__icon" src="../data/images/ltc.svg" alt="">
      </div>
      <div class="wallet__section--middle">
        <p class="wallet__cryptoAsset">LTC</p>
        <p class="wallet__value--cryptoAsset">0.5001 BTC
          <span class="crypto__price--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="wallet__section--right">
        <p class="wallet__value--active">&#9650; +C$1,000.77</p>
        <p class="wallet__value--cad">C$10,000.10</p>
      </div>
    </div>
    </div>
    <button v-show='true' @click='getWallets()'></button>
    TEST: {{loadedWallets.ETH.hello}}
    <ul>
      <li v-for="item in items">
          <div class="wallet">
      <div class="wallet__section--left">
        <img  :src=" ethWallet " alt=""/>
         <img class="wallet__icon" src="../data/images/ltc.svg" alt="">

      </div>
      <div class="wallet__section--middle">
        <p class="wallet__cryptoAsset">{{item.currency}}</p>
        <p class="wallet__value--cryptoAsset">{{item.amount.toLocaleString('en')}} {{item.currency}}
          <span class="crypto__price--cad">/ ${{item.rate.toLocaleString('en')}}</span>
        </p>
      </div>
      <div class="wallet__section--right">
        <p class="wallet__value--active">&#9650; C{{item.changeToday.toLocaleString('en')}}</p>
        <p class="wallet__value--cad">C$10,000.10</p>
      </div>
    </div>
      </li>
    </ul>
       <button @click='walletTotal()'> View Portfolio </button>
       {{this.walletValue}}
  </div>

</template>

<script>
export default {
  name: "CryptoWallet",
  props: {
    msg: String
  },
  data() {
    return {
      test: 0,
      btcWallet: "Hi",
      ethWallet: "../data/images/ltc.svg",
      walletStatus: true,
      walletValue:'',
      rate: 10000,
      items: [
        { currency: "BTC", amount: 0.5, changeToday: 300, img: "ltc.svg", rate:10100 },
        { currency: "ETH", amount: 10, changeToday: -400, rate:10000 },
        { currency: "LTC", amount: 34, changeToday: 0, rate: 0.5 },
        { currency: "XMR", amount: 64, changeToday: 3000, rate: 1}
      ], 
      exchangeRate: [
        {currency:'BTC', rate:'10100'}
      ]
    };
  },
  computed: {
    loadedWallets() {
      return {
        BTC: { title: "test" },
        ETH: { hello: "Hi" },
        LTC: "",
        DOGE: "",
        XMR: ""
      };
    }
  },
  methods: {
    displayWallet() {
      this.walletStatus = !this.walletStatus
    },
    walletTotal (){
    const rate = this.exchangeRate[0].rate
    const cryptoAsset = this.items[0].amount
      console.log(this.exchangeRate[0].rate)
      console.log(this.items[0].amount)
      const total = rate*cryptoAsset
      this.walletValue = total
      console.log(this.walletValue)
      
      
  
    },


    getWallets() {
      return new Promise(function(resolve, reject) {
        console.log("Success");
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
  }
};

const Wallet = function(currency, amount, changeToday) {
  this.currency = currency;
  this.amount = amount;
  this.changeToday = changeToday;
};

const ExchangeRate = function(currency, rate) {
  this.currency = currency;
  this.rate = rate;
};

const ExchangeRatesToCAD = [
  new ExchangeRate("BTC", 10100),
  new ExchangeRate("XMR", 320.45),
  new ExchangeRate("LTC", 241.4),
  new ExchangeRate("DOGE", 0.00041),
  new ExchangeRate("ETH", 500.12717)
];
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

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
