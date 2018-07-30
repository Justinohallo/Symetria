import Vue from 'vue';
import Vuex from 'vuex';
import API from "../data/ApiMock.js"

Vue.use(Vuex)

export default new Vuex.Store({

state:{
    Wallet:API.Wallet,
    ExchangeRatesToCAD:API.ExchangeRatesToCAD,
    ExchangeRate: API.ExchangeRate,
    imageData:[],
    computer: API.computer,
    userWallet:[],
},
actions:{
   walletAPI({commit}) {

   }
},
mutations: {
    walletData(state, crypto){
state.userWallet=state.userWallet.concat(crypto);
    },
updateWallets(){
   state.userWallet = wallets 
}
},
getters: {
    bitcoin(state){
        return state.wallet.filter(wallet =>  wallet > 2)
    }
}
})


