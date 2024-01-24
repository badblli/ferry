<template>
    <div>
        <div class="w-full h-[223px] bg-slate-200" />
        <div className="relative top-[-10rem] w-full lg:px-28 md:px-16 sm:px-8">
            <span className="text-black text-4xl font-medium font-['Plus Jakarta Display'] tracking-wide">Merhaba
                Kevin.</span>
            <div>
                <nav class="pb-1 flex mb-4 space-x-1 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
                    aria-label="Tabs" role="tablist">
                    <button v-for="(tab, index) in tabs" :key="index" type="button"
                        class="text-[1.125rem] hs-tab-active:border-gray-900 hs-tab-active:text-gray-950 py-8 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-450 focus:outline-none focus:text-gray-450"
                        :class="{ 'active': activeTab === index }" @click="changeTab(index)"
                        :id="'horizontal-scroll-tab-item-' + (index + 1)"
                        :data-hs-tab="'#horizontal-scroll-tab-' + (index + 1)"
                        :aria-controls="'horizontal-scroll-tab-' + (index + 1)" role="tab">
                        <component :is="currentIcon[index]" />
                        {{ tab }}
                    </button>
                </nav>
                <div class="mt-3">
                    <div v-for="(tabContent, index) in data" :key="index" :id="'horizontal-scroll-tab-' + (index + 1)"
                        role="tabpanel" :aria-labelledby="'horizontal-scroll-tab-item-' + (index + 1)"
                        :class="{ 'hidden': activeTab !== index }">
                        <div class="text-gray-500">{{ tabContent }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button"
                class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1"
                role="tab">
                Tab 1
            </button>
            <button type="button"
                class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2"
                role="tab">
                Tab 2
            </button>
            <button type="button"
                class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                id="tabs-with-underline-item-3" data-hs-tab="#tabs-with-underline-3" aria-controls="tabs-with-underline-3"
                role="tab">
                Tab 3
            </button>
        </nav>
    </div>
    <div class="mt-3">
        <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
            <p class="text-gray-500 dark:text-gray-400">
                This is the <em class="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab body.
            </p>
        </div>
        <div id="tabs-with-underline-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
            <p class="text-gray-500 dark:text-gray-400">
                This is the <em class="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
            </p>
        </div>
        <div id="tabs-with-underline-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
            <p class="text-gray-500 dark:text-gray-400">
                This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
            </p>
        </div>
    </div>
</template> 
  
<script lang="ts">
import IconMainSamosa from '@/components/icons/IconMainSamosa.vue';
import IconArrowTop from '@/components/icons/IconArrowTop.vue';
import IconAsteriskSimple from '@/components/icons/IconAsteriskSimple.vue';
import TabsView from "@/components/sample/TabsItem.vue";

export default {
    name: 'MyReservation',

    data() {
        return {
            tabs: ["Rezervasyon", "Profilim", "Hesap Ayarlarım", "Bildirimler", "Mil Puan"],
            data: [
                "This is the first item's tab body.",
                "This is the second item's tab body.",
                "This is the third item's tab body.",
                "This is the fourth item's tab body.",
                "This is the fifth item's tab body."
            ],
            activeTab: 0,
            currentIcon: [IconMainSamosa, IconArrowTop, IconAsteriskSimple, IconAsteriskSimple, IconAsteriskSimple]
        };
    },
    methods: {
        changeTab(index: any) {
            this.activeTab = index;
        }
    },
    components: { IconMainSamosa, IconArrowTop, IconAsteriskSimple, TabsView }
};
</script>
  
<style scoped></style>
  

<!-- <template>
    <nav class="pb-1 flex space-x-1 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
        aria-label="Tabs" role="tablist">
        <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
            id="horizontal-scroll-tab-item-1" data-hs-tab="#horizontal-scroll-tab-1" aria-controls="horizontal-scroll-tab-1"
            role="tab">
            Long tab link 1
        </button>
        <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="horizontal-scroll-tab-item-2" data-hs-tab="#horizontal-scroll-tab-2" aria-controls="horizontal-scroll-tab-2"
            role="tab">
            Long tab link 2
        </button>
        <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="horizontal-scroll-tab-item-3" data-hs-tab="#horizontal-scroll-tab-3" aria-controls="horizontal-scroll-tab-3"
            role="tab">
            Long tab link 3
        </button>
        <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="horizontal-scroll-tab-item-4" data-hs-tab="#horizontal-scroll-tab-4" aria-controls="horizontal-scroll-tab-4"
            role="tab">
            Long tab link 4
        </button>
        <button type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            id="horizontal-scroll-tab-item-5" data-hs-tab="#horizontal-scroll-tab-5" aria-controls="horizontal-scroll-tab-5"
            role="tab">
            Long tab link 5
        </button>
    </nav>

    <div class="mt-3">
        <div id="horizontal-scroll-tab-1" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-1">
            <p class="text-gray-500 dark:text-gray-400">
                This is the <em class="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab body.
            </p>
        </div>
        <div id="horizontal-scroll-tab-2" class="hidden" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-2">
            <p class="text-gray-500 dark:text-gray-400">
                This is the <em class="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
            </p>
        </div>
        <div id="horizontal-scroll-tab-3" class="hidden" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-3">
            <p class="text-gray-500 dark:text-gray-400">
                This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
            </p>
        </div>
        <div id="horizontal-scroll-tab-4" class="hidden" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-4">
            <p class="text-gray-500 dark:text-gray-400">
                This is the <em class="font-semibold text-gray-800 dark:text-gray-200">fourth</em> item's tab body.
            </p>
        </div>
        <div id="horizontal-scroll-tab-5" class="hidden" role="tabpanel" aria-labelledby="horizontal-scroll-tab-item-5">
            <p class="text-gray-500 dark:text-gray-400">
                This is the <em class="font-semibold text-gray-800 dark:text-gray-200">fifth</em> item's tab body.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    data() {
        return {
            activeTab: ref(0),
        };
    },

    methods: {
        changeTab(index: any) {
            this.activeTab = index;
        },
    },
};
</script>

<style></style> -->