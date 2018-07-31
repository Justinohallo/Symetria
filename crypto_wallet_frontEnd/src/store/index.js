import Vue from "vue";
import Vuex from "vuex";
import API from "../data/ApiMock.js";
import Wallets from "../components/Wallets.vue"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Wallet: Wallets.userWallet,
    ExchangeRatesToCAD: API.ExchangeRatesToCAD,
    ExchangeRate: API.ExchangeRate,
  },
  actions: {
  },
  mutations: {
    walletData(state, crypto) {
      state.userWallet = state.userWallet.concat(crypto);
    },
    updateWallets() {
      state.userWallet = wallets;
    }
  },
 
});
