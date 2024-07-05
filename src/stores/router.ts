import { defineStore } from 'pinia'
import { ref } from 'vue'

interface RouterChange {
    to: string,
    meta: {
        pageTitle?: string,
    }
}

export const useRouterStore = defineStore({
    id: 'router',
    state: (): {
        routerChange: RouterChange[]
    } => ({
        routerChange: []
    }),
    getters: {
        getRouterChange: (state) => state.routerChange
    },
    actions: {
        addRouteChange(change: RouterChange) {
            if (this.routerChange.length >= 4) {
                this.routerChange.shift(); // En eski değeri kaldır
            }
            this.routerChange.push(change);
        }
    },
    persist: true
});