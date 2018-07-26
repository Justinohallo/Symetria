<template>
  <div id="app">
    <CryptoWallet />
    
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
<style lang="scss">

// * {
//   box-sizing: border-box;
// }

html {
  font-size: 62.5%;
}

body {
  background: #84c4a1;
  color: #333;
  font-family: "Roboto"; 
  font-size: 1.6;
  line-height: 1.2;
}
</style>
