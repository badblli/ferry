import { defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export const useBlog = defineStore({
     id: 'blog',
     state: () => ({
          blog: []
     }),
     //  persist: {
     //       storage: sessionStorage
     //  },
     actions: {
          setBlogPost(data: any): void {
               this.blog = data
          }
     },
     getters: {
          getBlogPost() {
               return this.blog
          }
     }
})
