<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[223px] bg-slate-200" />
        <div class="relative top-[-11rem] w-full lg:px-28 md:px-16 sm:px-8">
            <h1 class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide mb-14 pl-10 md:pl-0">
                Feribot Bileti Ücretleri
            </h1>
            <div className="w-full mx-auto bg-neutral-100 rounded-[20px] md:p-4 p-0">
                <div className="flex flex-col overflow-x-auto">
                    <div className="md:p-8 p-4">
                        <div className="flex flex-row items-center">
                            <IconAsteriskSimple />
                            <h2 className="text-black text-base font-medium leading-[26.88px] h-7 ml-3">
                                {{ whichFerry }}
                            </h2>
                        </div>
                        <table className="relative bg-white mb-4 rounded-2xl w-full mt-10">
                            <thead>
                                <tr v-for="(header, index) in tableHeaders" :key="index"
                                    class="lg:mx-24 md:mx-20 mx-14 mt-8 md:mt-14 md:mb-9 mb-4 flex flex-row text-black md:text-lg text-base font-semibold leading-loose rounded-2xl ">
                                    <th v-for="(label, labelIndex) in header" :key="labelIndex"
                                        class="md:pl-20 last:pl-24 first:pl-2 w-full flex">{{
                                            label }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td v-for="(row, index) in tableData" :key="index"
                                    className="flex flex-row lg:mx-16 mx-4 mb-4 last:mb-[70px] border border-stone-300 rounded-2xl [&>*:nth-last-child(1)]:border-none">
                                    <li v-for="(cell, cellIndex) in row" :key="cellIndex"
                                        className="w-full justify-center items-center border-r border-neutral-300 lg:py-[21px] py-2 first:lg:pl-10 lg:pl-16 xl:pl-24 md:pl-14 pl-3 first:text-lg first:font-semibold first:leading-loose md:text-2xl text-xl font-normal">
                                        {{ cell }}</li>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconAsteriskSimple from "../components/icons/IconAsteriskSimple.vue";
import { ref, onMounted } from 'vue';

const loading = ref(true);
const tableHeaders = ref([]);
const tableData = ref([]);
const whichFerry = ref("");

onMounted(async () => {
    try {
        const response = await fetch('/tickerPrice.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        tableHeaders.value = data.tableHeaders;
        tableData.value = data.tableData;
        whichFerry.value = data.whichFerry;
        loading.value = false;
    } catch (error) {
        loading.value = false;
    }
});
</script>
  
<style scoped></style>