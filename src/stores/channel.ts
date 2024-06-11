import { defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export const useChannel = defineStore({
     id: 'channel',
     state: () => ({
          saleChannel: import.meta.env.VITE_SALE_CHANNEL,
          subSaleChannel: '',
          subSaleChannelName: ''
     }),
     //  persist: {
     //       storage: sessionStorage
     //  },
     actions: {
          setSaleChannel(data: any): void {
               this.saleChannel = data
          },
          setSubSaleChannel(sc: string, scn: string): void {
               console.log(sc, scn, 'subsalechannel')
               if (sc && scn) {
                    this.subSaleChannel = sc
                    this.subSaleChannelName = scn
                    localStorage.setItem('SubSalechannel', sc.toString()) // toString kullanarak veri türünü metin olarak değiştirir
                    localStorage.setItem('SubSalechannelName', scn)
               } else {
                    console.error("Invalid parameters: Both 'sc' and 'scn' must be provided.")
               }
          }
     },
     getters: {}
})
