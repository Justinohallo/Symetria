<template>

  <div class="container">
  <div class="heading">
      <h1 class="heading__title"> Your Portfolio </h1>
    </div>
    <div class="portfolio">
      <h2 class="portfolio__title">PORTFOLIO VALUE</h2>
      <h1 class="portfolio__value">C$19,500.31</h1>
      <p class="portfolio__change">&#9650; +$8,700.86</p>
    </div>
    <div class="currency">
      <div class="currency__section--left">
        <img class="currency__icon" src="../data/images/btc.svg" alt="">
      </div>
      <div class="currency__section--middle">
        <p class="currency__symbol">BTC</p>
        <p class="currency__value">0.5001 BTC
          <span class="currency__value--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="currency__section--right">
        <p class="currency__value--active">&#9650; +C$1,000.77</p>
        <p class="currency__value--cad-1">C$10,000.10</p>
      </div>
    </div>
    <div class="currency">
      <div class="currency__section--left">
        <img class="currency__icon" src="../data/images/eth.svg" alt="">
      </div>
      <div class="currency__section--middle">
        <p class="currency__symbol">ETH</p>
        <p class="currency__value">0.5001 BTC
          <span class="currency__value--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="currency__section--right">
        <p class="currency__value--active">&#9660; -C$1,000.77</p>
        <p class="currency__value--cad-1">C$10,000.10</p>
      </div>
    </div>
    <div class="currency">
      <div class="currency__section--left">
        <img class="currency__icon" src="../data/images/ltc.svg" alt="">
      </div>
      <div class="currency__section--middle">
        <p class="currency__symbol">LTC</p>
        <p class="currency__value">0.5001 BTC
          <span class="currency__value--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="currency__section--right">
        <p class="currency__value--active">&#9650; +C$1,000.77</p>
        <p class="currency__value--cad-1">C$10,000.10</p>
      </div>
    </div>
    <div class="currency">
      <div class="currency__section--left">
        <img class="currency__icon" src="../data/images/xmr.svg" alt="">
      </div>
      <div class="currency__section--middle">
        <p class="currency__symbol">XMR</p>
        <p class="currency__value">0.5001 BTC
          <span class="currency__value--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="currency__section--right">
        <p class="currency__value--active">&#9650; +C$1,000.77</p>
        <p class="currency__value--cad-1">C$10,000.10</p>
      </div>
    </div>
    <div class="currency">
      <div class="currency__section--left">
        <img class="currency__icon" src="../data/images/doge.svg" alt="">
      </div>
      <div class="currency__section--middle">
        <p class="currency__symbol">Doge</p>
        <p class="currency__value">0.5001 BTC
          <span class="currency__value--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="currency__section--right">
        <p class="currency__value--active">&#9650; +C$1,000.77</p>
        <p class="currency__value--cad-1">C$10,000.10</p>
      </div>
    </div>
    <div class="currency">
      <div class="currency__section--left">
        <img class="currency__icon" src="../data/images/eth.svg" alt="">
      </div>
      <div class="currency__section--middle">
        <p class="currency__symbol">ETH</p>
        <p class="currency__value">0.5001 BTC
          <span class="currency__value--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="currency__section--right">
        <p class="currency__value--active">&#9650; +C$1,000.77</p>
        <p class="currency__value--cad-1">C$10,000.10</p>
      </div>
    </div>
    <div class="currency">
      <div class="currency__section--left">
        <img class="currency__icon" src="../data/images/ltc.svg" alt="">
      </div>
      <div class="currency__section--middle">
        <p class="currency__symbol">LTC</p>
        <p class="currency__value">0.5001 BTC
          <span class="currency__value--cad">/ C$10,000.10</span>
        </p>
      </div>
      <div class="currency__section--right">
        <p class="currency__value--active">&#9650; +C$1,000.77</p>
        <p class="currency__value--cad-1">C$10,000.10</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CryptoWallet',
  props: {
    msg: String,
  },
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

.currency {
  border: 1px solid $light-grey;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 2px #ddd;
  display: flex;
  font-size: $font-size-medium;
  margin: $s-size;
  padding: $s-size;
}

.currency__section--left {
  display: flex;
  align-items: center;
}

.currency__section--middle {
  flex: 1;
  margin: 0 $xs-size;
}

.currency__section--right {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.currency__icon {
  width: $l-size;
  height: $l-size;
}

.currency__symbol {
  font-weight: bold;
  margin: 0;
}

.currency__value {
  font-weight: bold;
  margin: 0;}

  .currency__value--cad {
  font-weight: normal;
  margin: 0;
}

.currency__value--active {
  color: $color-increase;
  font-weight: bold;
  font-size: $font-size-xlarge;
  margin: 0;
}

.currency__value--cad-1 {
  color: grey;
  font-weight: bold;
  margin: 0;
}
</style>
