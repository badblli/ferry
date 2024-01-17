// src/pinia/modules/user.js

import { defineStore } from 'pinia';

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isAuthenticated: false,
    user: null,
    returnUrl: null,
    loginModal: false,
  }),
  actions: {
    login(userInfo) {
      // Kullanıcı giriş işlemleri burada gerçekleştirilir
      // Örneğin, backend servisine kullanıcı bilgilerini gönderip doğrulama yapabilirsiniz

      // Bu örnekte basit bir giriş işlemi
      this.isAuthenticated = true;
      this.user = userInfo;
      this.returnUrl = "/"
    },
    logout() {
      // Kullanıcı çıkış işlemleri burada gerçekleştirilir
      this.isAuthenticated = false;
      this.user = null;
      this.returnUrl = "/"
    },
  },
});

export default useUserStore;