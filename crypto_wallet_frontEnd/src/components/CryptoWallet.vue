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
      <button v-show="render" class="displayPortfolio" @click='displayWallet(); GetWallets1()'> Hide Portfolio  </button>
    </div>
   <Wallets v-show='walletStatus'/> 
  </div>
</template>

<script>
import Wallets from "./Wallets.vue";
import API from "../data/ApiMock.js";

export default {
  name: "CryptoWallet",
  components: { Wallets },
  props: {
    msg: String
  },
  beforeMount() {
    this.render = true;
  },

  data() {
    return {
      ExchangeRatesToCAD: this.$store.state.ExchangeRatesToCAD,
      ExchangeRate: this.$store.state.ExchangeRate,
      Wallet: this.$store.state.Wallet,
      gain: "▲",
      loss: 9660,
      walletStatus: true,
      render: false,
      walletArray: API.userWallets,
      imageArray: [],
      userWallets: [],
      items: []
    };
  },
  computed: {
    cart() {
      return this.$store.state.Wallet;
    }
  },
  methods: {
    displayWallet() {
      this.walletStatus = !this.walletStatus;
      this.$store.commit("walletData", this.ExchangeRatesToCAD);
    },
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
