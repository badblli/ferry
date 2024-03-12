<template>
    <!-- <DatePicker /> -->
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[223px] bg-slate-200" />
        <div class="relative top-[-11rem] w-full lg:px-[100px] px-16 md:px-16 sm:px-8 centered-w">
            <div class="flex flex-col md:flex-row justify-between">
                <h1 class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide mb-14">
                    Feribot Seferleri 2024
                </h1>
                <div
                    class="h-[37px] w-[174px] bg-white rounded-lg border flex justify-center items-center p-1 cursor-pointer md:mb-0 mb-4">
                    <div class="text-black text-lg font-medium font-display ml-1">Feribot Bileti Al</div>
                    <IconArrowDownBlack />
                </div>
            </div>
            <div className="w-full mx-auto bg-neutral-100 rounded-[20px] md:p-4 p-0">
                <div className="flex flex-col">
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row justify-start">
                            <div
                                class="py-5 flex flex-col mb-2 md:mb-0 justify-center bg-white rounded-xl border cursor-pointer hs-dropdown relative">
                                <div id="hs-dropdown-auto-close-outside"
                                    class="hs-dropdown-toggle text-black text-base font-medium font-display tracking-tight ml-[24px] mr-[24px]">
                                    Hangi
                                    tarihlerde
                                    gitmek istersin?</div>
                                <div
                                    class="text-black text-base font-light font-display tracking-tight ml-[24px] mr-[24px] hs-dropdown-toggle">
                                    Tarih aralığı seçin</div>
                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 bg-white shadow-md rounded-lg p-2"
                                    aria-labelledby="hs-dropdown-auto-close-outside">
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                        href="#">
                                        Date picker component will be here
                                    </a>
                                </div>
                            </div>
                            <div
                                class="py-3 flex flex-col justify-center bg-white rounded-xl border md:ml-[15px] cursor-pointer">
                                <div class="flex flex-row justify-between items-center mr-[15px]">
                                    <div class="flex flex-col mb-[3px] mr-[100px] ">
                                        <div
                                            class="text-black text-base font-medium font-display tracking-tight ml-[24px]">
                                            Rota
                                            Seçin</div>
                                        <div
                                            class="text-black text-base font-light font-display tracking-tight ml-[24px]">
                                            Kuşadası - Samos</div>
                                    </div>
                                    <div>
                                        <IconArrowDownBlack />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 mb-[80px] rounded-2xl rounded-b-lg">
                            <div
                                class="bg-white pt-10 pl-10 rounded-t-lg text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                                Kuşadası -
                                Samos Feribot Seferleri</div>
                            <table className="relative w-full bg-white">
                                <thead>
                                    <tr v-for="(header, index) in tableHeaders" :key="index"
                                        class="mt-[64px] md:pl-[50px] md:ml-16 m-4 flex flex-row justify-between items-center text-black text-lg font-semibold leading-loose rounded-lg">
                                        <th v-for="(label, labelIndex) in header" :key="labelIndex" class="w-full flex">
                                            {{ label }}</th>
                                    </tr>
                                </thead>
                                <tbody class="">
                                    <tr v-for="(row, index) in tableData" :key="index"
                                        class="md:ml-16 md:mr-16 mb:mb-16 m-4 flex flex-row justify-between text-black text-lg font-normal leading-loose border border-neutral-200 rounded-lg [&>*:nth-last-child(1)]:border-none">
                                        <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                            class="w-full border-r border-neutral-300 pt-[33px] pb-[33px] lg:pl-[50px] pl-2 lg:pr-[50px] pr-2">
                                            <span v-if="Array.isArray(cell)">
                                                <ul>
                                                    <li v-for="(item, itemIndex) in cell" :key="itemIndex"
                                                        class="leading-4 mb-[27px] ">{{ item }}</li>
                                                </ul>
                                            </span>
                                            <span v-else>{{ cell }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="mt-16 lg:w-4/6 w-full">
                                <div v-for="(info, index) in infoData" :key="index" class="flex items-center mt-5">
                                    <IconAsteriskSimple class="min-w-7 min-h-7" />
                                    <h2 class="text-black text-base font-medium leading-[26.88px] ml-3">
                                        {{ info.whichFerry }}
                                    </h2>
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
import IconAsteriskSimple from "../components/icons/IconAsteriskSimple.vue";
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue';
import { ref } from 'vue'

const tableHeaders = [
    ["Gün", "Kuşadası Kalkış", "Samosa Kalkış"]
];

const tableData = [
    ["4 Kasım - Cumartesi", ["Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00"], "Samos Vathy - 17:00"],
    ["4 Kasım - Cumartesi", ["Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00"], "Samos Vathy - 17:00"],
    ["4 Kasım - Cumartesi", ["Kuşadası - 09:00", "Kuşadası - 09:00"], "Samos Vathy - 17:00"],
];


const infoData = ref([
    { whichFerry: 'Alttaki Samos’a feribot bileti ücretlerine Kuşadası ve Samos liman vergileri dahildir.' },
    { whichFerry: 'Samos adasına seyahatiniz için gerekli olan en az altı ay geçerli bir pasaport ve Schengen vizesi olup vize konusunda dilerseniz firmamız sizlere yardımcıolmaktanmutluluk duyacaktır.' },
]);
</script>

<style scoped></style>