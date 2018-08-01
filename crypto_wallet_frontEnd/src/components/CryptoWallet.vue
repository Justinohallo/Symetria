<template>

  <div class="container">
  <div class="heading">
   <span><img class="portfolio__icon" src="../data/images/symetria.png"/></span> 
      <h1 class="heading__title">  Your Portfolio</h1>
      
    <button v-if='!this.viewPortfolio' class="displayPortfolio" @click='displayPortfolio()'> View Portfolio  </button>
      <!-- <button v-else-if='this.userWallet.length === 0' class="displayPortfolio" @click='generateWallet(), combineWalletData(),  calculatePortfolioValue(),  displayPortfolio()' > Reload Portfolio  </button> -->
      <button v-else-if='this.serverFailure && this.viewPortfolio' class="displayPortfolio" @click='generateWallet(), combineWalletData(),  calculatePortfolioValue(),  displayPortfolio()' > Reload Portfolio  </button>
        <button v-else class="displayPortfolio" @click='hidePortfolio()'> Hide Portfolio  </button>


    </div>
    

 <transition name="bounce">
    <div v-if='this.viewPortfolio' class="portfolio">
     <PortfolioSummary
     :portfolioValue="this.portfolioValue"
     />
    <div v-if="this.serverFailure && this.viewPortfolio" >Sorry, something went wrong. Please reload portfolio. </div>
      
       <div v-else>
         
       <h2 class="portfolio__title" >PORTFOLIO VALUE</h2>
      <h1 class="portfolio__value">{{portfolioValue.toLocaleString('en',{style: 'currency', currency: 'CAD'})}}</h1>
      <p class="portfolio__change">&#9650; +$8,700.86</p>
       
      <button v-if="!this.viewWallets" class="displayPortfolio" @click='displayWallets();'> View Wallets  </button>
      <button v-else  class="displayPortfolio" @click='hideWallets();'> Hide Wallets  </button> 
   
    </div>
 
      <transition name="slide-fade">
    <Wallets 
   v-show='viewWallets && viewPortfolio'
   :userWalletTest="this.userWallet" 
   /> 
  </transition>
  
  

   </div>
</transition> 

  </div>
</template>

<script>
import Wallets from "./Wallets.vue";
import PortfolioSummary from "./PortfolioSummary.vue";
import API from "../data/ApiMock.js";

export default {
  name: "CryptoWallet",
  components: { Wallets, PortfolioSummary },
  props: {
    msg: String
  },
  data() {
    return {
      // Wallet: this.$store.state.Wallet,
      walletStatus: false,
      render: false,
      walletArray: API.userWallets,
      imageArray: [],
      userWallets: [],
      items: [],
      ExchangeRatesToCAD: API.ExchangeRatesToCAD,
      GetWallets: API.GetWallets,
      Wallet: [],
      images: API.imageArray,
      userWallet: [],
      serverFailure: "",
      portfolioValue: 0,
      portfolioValueTest: 0,
      viewPortfolio: false,
      viewWallets: false,
      phase1: this.generateWallet,
      userWalletTest: []
    };
  },

  beforeMount() {
    this.render = true;
    this.GetWallets()
      .then(data => {
        this.Wallet = this.Wallet.concat(data);
        this.serverFailure = false;
        console.log("mount Generate");
        console.log(this.serverFailure);
      })
      .catch(e => {
        this.serverFailure = true;
        console.log(this.serverFailure);
        console.log(e);
      });
  },
  beforeUpdate() {
    this.combineWalletData();
    this.calculatePortfolioValue();
  },
  computed: {},
  methods: {
    //      generateNewWallet() {
    //   return new Promise(function(resolve, reject) {
    //     this.generateWallet(){
    //       resolve(
    //       console.log('generateWalletPromise')
    //       )
    //     }
    //   });
    // },
    displayPortfolio() {
      this.viewPortfolio = true;
      this.viewWallets = false;
    },
    hidePortfolio() {
      this.viewPortfolio = false;
    },
    displayWallets() {
      this.viewWallets = true;
    },
    hideWallets() {
      this.viewWallets = false;
    },
    generateWallet() {
      this.GetWallets()
        .then(data => {
          this.Wallet = this.Wallet.concat(data);
          this.serverFailure = false;
          console.log("click Generate");
          console.log(this.serverFailure);
        })
        .catch(e => {
          console.log(e);
          this.serverFailure = true;
          console.log(this.serverFailure);
        });
    },

    combineWalletData() {
      this.Wallet.forEach(item => {
        const index = this.Wallet.indexOf(item);
        const image = this.images.find(image => {
          return image.currency === item.currency;
        });
        const exchange = this.ExchangeRatesToCAD.find(exchange => {
          return exchange.currency === item.currency;
        });

        const CADValue = this.Wallet.map(({ amount, rate }) => amount * rate);

        item.image = image.image;
        item.rate = exchange.rate;
        item.CADValue = CADValue[index];
        this.userWallet = this.Wallet;
      });
    },
    calculatePortfolioValue() {
      let valueArray = [];
      this.userWallet.forEach(item => {
        valueArray.push(item.CADValue);
      });

      let portfolioValue = valueArray.reduce((a, b) => a + b, 0);

      this.portfolioValue = portfolioValue;
    },
    generateNewWallet() {
      return new Promise(function(resolve, reject) {
        generateWallet(function() {
          resolve(console.log("generateWalletPromise"));
        });
      });
    },

    promiseWallet() {
      this.GetWallets()
        .then(data => {
          console.log("promiseGenerate");
          return data;
        })
        .catch(e => {
          console.log(e);
        })
        .then(data => {
          console.log("promise #2");
          console.log("promise #2 start" + data);
          data.forEach(item => {
            const index = data.indexOf(item);
            const image = this.images.find(image => {
              return image.currency === item.currency;
            });
            const exchange = this.ExchangeRatesToCAD.find(exchange => {
              return exchange.currency === item.currency;
            });

            const CADValue = data.map(({ amount, rate }) => amount * rate);

            item.image = image.image;
            item.rate = exchange.rate;
            item.CADValue = CADValue[index];
            this.userWalletTest = data;
            return data;
          });
          console.log("promise #2 end" + data);
        })
        .then(data => {
          console.log("promise #3 Start");
          let valueArray = [];
          this.userWallet.forEach(item => {
            valueArray.push(item.CADValue);
          });

          let portfolioValue = valueArray.reduce((a, b) => a + b, 0);

          this.portfolioValueTest = portfolioValue;
          console.log("promise #3 end");
        });
    },

    combineWalletData() {
      this.Wallet.forEach(item => {
        const index = this.Wallet.indexOf(item);
        const image = this.images.find(image => {
          return image.currency === item.currency;
        });
        const exchange = this.ExchangeRatesToCAD.find(exchange => {
          return exchange.currency === item.currency;
        });

        const CADValue = this.Wallet.map(({ amount, rate }) => amount * rate);

        item.image = image.image;
        item.rate = exchange.rate;
        item.CADValue = CADValue[index];
        this.userWallet = this.Wallet;
      });
    },

    calculatePortfolioValue() {
      let valueArray = [];
      this.userWallet.forEach(item => {
        valueArray.push(item.CADValue);
      });

      let portfolioValue = valueArray.reduce((a, b) => a + b, 0);

      this.portfolioValue = portfolioValue;
    }
  }
};
</script>

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
  flex-wrap: wrap;
  display: flex;
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
.portfolio__icon {
  width: $l-size;
  height: $l-size;
  margin-top: $s-size;
  margin-left: $s-size;
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
  margin-left: auto;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>


