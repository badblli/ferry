// src/pinia/modules/auth.ts

import { defineStore } from 'pinia'

export const useLanguageStore = defineStore({
  id: 'language',
  state: () => ({
 languages: [],
 i18n:[],
 currentLanguage:''
  }),
  actions: {
    setAllLanguage(data:any): void {
        this.languages = data 
        this.seti18N(this.languages)
    },
    seti18N(data:any): void {
        this.i18n = data.map((item:any) => item.code);
    },
    
    getters: {},
    setup() {
      
    }
  }
})
