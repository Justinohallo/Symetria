<template>
    <div v-if="this.userWalletTest.length > 1" class='totalWallet' >
        <ul>
      <li v-for="wallet in userWalletTest" >
          <div class="wallet">
      <div class="wallet__section--left">
         <img class="wallet__icon" :src='wallet.image' alt="">
      </div>
      <div class="wallet__section--middle">
        <p class="wallet__cryptoAsset">{{wallet.currency}}</p>
        <p class="wallet__value--cryptoAsset">{{wallet.amount.toLocaleString('en')}} {{wallet.currency}}
          <span class="crypto__price--cad">/ {{wallet.rate.toLocaleString('en', {style: 'currency', currency: 'CAD'})}}</span>
        </p>
      </div>
      <div class="wallet__section--right">
        <p  class='wallet__value--increase' :class="{'wallet__value--same': wallet.changeToday === 0 , 'wallet__value--decrease': wallet.changeToday < 0  }">  

        
        <span v-if="wallet.changeToday > 0"> ▲ </span> 
        <span v-else-if="wallet.changeToday < 0"> ▼</span>
        <span v-else>  </span>
        {{wallet.changeToday.toLocaleString('en', {style: 'currency', currency: 'CAD'})}}</p>
        <p class="wallet__value--cad"> {{wallet.currency}} Value: {{wallet.CADValue.toLocaleString('en', {style: 'currency', currency: 'CAD'})}}</p>
      </div>
    </div>
      </li>
    </ul>   

    
    </div>
    
</template>
<script>
import API from "../data/ApiMock.js";

export default {
    props: ['userWalletTest'], 
  data() {
    return {
      ExchangeRatesToCAD: API.ExchangeRatesToCAD,
      GetWallets: API.GetWallets,
      Wallet: [],
      images: API.imageArray,
      userWallet: [],
        gain: "▲",
      loss: 0,
    };
  },


};
</script>
<style lang='scss'>
// Color
$dark-grey: #333;
$light-grey: #ccc;
$white: #ffffff;
$color-main: $dark-grey;
$color-main-bg: #84c4a1;
$color-shadow-main: darken($color-main-bg, 20%);
$color-heading-border-top: #000;
$color-increase: #40b350;
$color-decrease: #ea2471;
$color-same: #000;
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
  text-align:left;
}

.wallet__value--cryptoAsset {
  font-weight: bold;
  margin: 0;
  text-align:left;
}

.crypto__price--cad {
  font-weight: normal;
  margin: 0;
}

.wallet__value--increase {
  color: $color-increase;
  font-weight: bold;
  font-size: $font-size-xlarge;
  margin: 0;
}

.wallet__value--decrease {
  color: $color-decrease;
  font-weight: bold;
  font-size: $font-size-xlarge;
  margin: 0;
}

.wallet__value--same {
  color: $color-same;
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
