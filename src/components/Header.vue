<template>
    <header class="bg-blue-700 h-16 flex items-center justify-between p-2 relative overflow-hidden">
        <div class="ml-4">
            <span class="text-blue-100 font-medium">{{ message }}</span>
            <div
                class="absolute translate-x-[450px] top-1/2 -translate-y-1/2 w-44 h-44 bg-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white font-bold">{{ buttonText }}</span>
            </div>
        </div>
        <nav class="mr-6 flex items-center justify-center">
            <ul class="flex space-x-4">
                <li v-for="(item, index) in navItems" :key="index">
                    <a :href="item.link" class="text-white font-semibold">{{
                        item.text }}</a>
                </li>

            </ul>
            <LanguageChanger />
        </nav>
    </header>
</template>
  
<script>
import { Select as DSelect } from 'daisy-ui-kit'
import LanguageChanger from './LanguageChanger.vue';
export default {
    data() {
        return {
            message: "Samos’ta artık bir araban var. Günlük kiralık aracın sadece 30€!",
            buttonText: "Daha Fazla Bilgi",
            navItems: [
                { text: "Kampanyalarımız", link: "#", items: [] },
                { text: "Ferry Destek", link: "#", items: [] },

            ],

        };
    },
    components: {
        DSelect,
        LanguageChanger
    }
};
</script>
  
<style scoped>
header {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;
    /* İhtiyaca göre z-index değerini ayarlayabilirsiniz */
    /* Diğer stil özellikleri buraya eklenebilir */
}
</style>
  