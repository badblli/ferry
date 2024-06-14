<template>
    <div>
        <div>
            <nav class="-mb-0.5 flex space-x-8" aria-label="Tabs" role="tablist">
                <button type="button"
                    class="leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                    id="horizontal-alignment-item-1" data-hs-tab="#horizontal-alignment-1"
                    aria-controls="horizontal-alignment-1" role="tab">
                    Güncelleme ve Öneriler
                </button>
            </nav>
        </div>
        <div class="pt-[91px] w-full">
            <div id="horizontal-alignment-1" role="tabpanel" aria-labelledby="horizontal-alignment-item-1">
                <div class="-m-1.5 overflow-x-auto w-full">
                    <div>
                        <div>
                            <div v-for="(value, key) in notifications" :key="key" class="flex flex-col">
                                <div class="items-center">
                                    <div
                                        class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                                        <div class="ml-[46px]">
                                            <h2 class="mb-3 text-black text-base font-medium font-display">
                                                {{ value.offers.name }}
                                            </h2>
                                            <h2 class="text-zinc-300 text-base font-normal font-display tracking-tight">
                                                {{ value.offers.subName }}
                                            </h2>
                                        </div>
                                        <div
                                            class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 cursor-pointer">
                                            <input type="checkbox" id="hs-basic-usage"
                                                class="relative w-[3.25rem] h-7 p-px bg-gray-500 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { defineProps, ref } from 'vue';

// Define the type for the notifications prop
interface Notification {
    offers: {
        name: string;
        subName: string;
    };
    // Add other properties as needed
}

const props = defineProps<{
    notifications: Notification[];
}>();

// Iterate over notifications and add a checked property
const notificationsWithChecked = ref(
    props.notifications.map(notification => ({ ...notification, checked: false }))
);
</script>

<style></style>