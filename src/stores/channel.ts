import { defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export const useChannel = defineStore({
     id: 'channel',
     state: () => ({
          saleChannel: import.meta.env.VITE_SALE_CHANNEL,
          subSaleChannel: ''
     }),
     //  persist: {
     //       storage: sessionStorage
     //  },
     actions: {
          setSaleChannel(data: any): void {
               this.saleChannel = data
          },
          setSubSaleChannel(data: any): void {
               this.subSaleChannel = data
               localStorage.setItem('SubSalechannelname', this.subSaleChannel)
          }
     },
     getters: {}
})
