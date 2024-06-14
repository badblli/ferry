// src/pinia/modules/auth.ts

import { defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

interface UserCompany {
     ID: string
     Name: string
}

interface UserInfo {
     Id: number
     Name: string
     SurName: string
     EmailAddress: string
     PhoneNumber: string
     BirthDate: string // Date string in ISO format
     TckNo: string
     PassportNumber: string
     NationalityID: number
     Address: string
     Password: string
     LanguageID: number
     CurrencyID: number
     Offers: boolean
     Trends: boolean
     NewsUpdates: boolean
     Feedback: boolean
     AccountActivity: boolean
     ReservationStatus: boolean
     IsActivated: boolean
}

interface UserState {
     isAuthenticated: boolean
     user: UserInfo | null
     returnUrl: string | null
     loginModal: boolean
     selectedLanguage: string | null
}

export const useUserStore = defineStore({
     id: 'user',
     state: (): UserState => ({
          isAuthenticated: false,
          user: null,
          returnUrl: null,
          loginModal: false,
          selectedLanguage: 'Turkish'
     }),
     persist: {
          storage: sessionStorage
     },
     actions: {
          login(userInfo: UserInfo): void {
               console.log('loginUserInfo', userInfo)
               this.isAuthenticated = true
               this.user = userInfo
               this.returnUrl = '/'
          },
          saveMember(userInfo: UserInfo): void {
               console.log('saveMember', userInfo)

               this.user = userInfo
          },
          logout(): void {
               this.isAuthenticated = false
               this.user = null
               this.returnUrl = '/'
          },
          updateLanguage(language: string): void {
               this.selectedLanguage = language
               localStorage.setItem('selectedLanguage', language)
          },

          getters: {},
          setup() {
               const storedLanguage = localStorage.getItem('selectedLanguage')
               if (storedLanguage) {
                    this.selectedLanguage = storedLanguage
               }
          }
     }
})
