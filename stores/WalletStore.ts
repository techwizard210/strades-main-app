import {defineStore} from 'pinia';
import walletData from '~/data/Wallet.json';
export const useWalletStore = defineStore('WalletStore',()=>{
    const wallets = ref(walletData)
    return{
        wallets
    }
})