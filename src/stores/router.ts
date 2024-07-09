import { defineStore } from 'pinia'
import { ref } from 'vue'

interface RouterChange {
    title: string,
    meta: {
        id: number,
        title: string
    }
}

export const useRouterStore = defineStore({
    id: 'router',
    state: (): {
        routerChange: RouterChange[],
        language: string
    } => ({
        routerChange: [],
        language: 'tr' // Varsayılan dil kodu
    }),
    getters: {
        getRouterChange: (state) => state.routerChange
    },
    actions: {
        addRouteChange(change: RouterChange) {
            if (this.routerChange.length >= 4) {
                this.routerChange.shift();
            }
            const exists = this.routerChange.find(rc => rc.to === change.to);
            if (!exists) {  
                this.routerChange.push(change);
            }
        },
        updateLanguage(newLanguage: string) {
            this.language = newLanguage;
        }
    },
    persist: true
});
