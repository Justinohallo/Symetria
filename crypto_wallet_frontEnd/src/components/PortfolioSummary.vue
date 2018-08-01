<template>
 <div>
    <div v-if="this.serverFailure && this.viewPortfolio" >Sorry, something went wrong. Please reload portfolio. </div>
      
       <div v-else>
      
      
         
       <h2 class="portfolio__title" >PORTFOLIO VALUE</h2>
      <h1 class="portfolio__value">{{this.portfolioValue.toLocaleString('en',{style: 'currency', currency: 'CAD'})}}</h1>
      <p class="portfolio__change">&#9650; +$8,700.86</p>
  </div>
    </div>
    
</template>
<script>


export default {
    props: ['portfolioValue'], 
  data() {
    return {
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
</style>
