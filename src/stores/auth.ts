// src/pinia/modules/auth.ts

import { defineStore } from 'pinia'

interface UserCompany {
  ID: string
  Name: string
}

interface UserProfile {
  UserID: number
  Username: string
  Name: string
  Surname: string
  Email: string
  RoleID: number
  RoleList: number[]
  UserCompanyList: UserCompany[]
  UserToken: string | null
  LanguageID: number
  LanguageIsoCode: string
  DefaultPage: string
  UserAvatar: string | null
  DarkMode: boolean
  SellerID: number
}

interface UserInfo {
  Token: string
  UserProfile: UserProfile
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
  actions: {
    login(userInfo: UserInfo): void {
      this.isAuthenticated = true
      this.user = userInfo
      this.returnUrl = '/'
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
