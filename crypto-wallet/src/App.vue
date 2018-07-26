<template>
  <div id="app">
    <CryptoWallet msg="Welcome to Your Vue.js App"/>
    <img src=../src/data/images/ltc.svg>
  </div>
  
</template>

<script>
import CryptoWallet from './components/CryptoWallet.vue';

export default {
  name: 'app',
  components: {
  CryptoWallet,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
