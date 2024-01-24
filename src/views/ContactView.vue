<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[145px] bg-slate-200 flex flex-col justify-center items-center">
            <div class="relative w-full lg:px-28 md:px-16 sm:px-8">
                <h1
                    class="text-black text-4xl font-medium font-['Plus Jakarta Display'] tracking-wide my-auto flex items-center">
                    İletişim
                </h1>
            </div>
        </div>
        <div class="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-how-it-works" type="button" @click="openModal"
                class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                Actions
                <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16"
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>
            <div :class="{ 'hidden': !isDropdownOpen }" v-show="isDropdownOpen" class="hs-dropdown-menu">
                class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 hidden z-10 transition-[margin,opacity] opacity-0
                duration-300 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border
                dark:border-gray-700 dark:divide-gray-700"
                aria-labelledby="hs-dropdown-how-it-works">
                <a class="focus:ring-2 focus:ring-blue-500" href="newsletter.html">
                    Newsletter
                </a> <a class="focus:ring-2 focus:ring-blue-500" href="newsletter.html">
                    Newsletter
                </a> <a class="focus:ring-2 focus:ring-blue-500" href="newsletter.html">
                    Newsletter
                </a> <a class="focus:ring-2 focus:ring-blue-500" href="newsletter.html">
                    Newsletter
                </a>
            </div>
        </div>
        <div className="w-full">
            <div class="w-full flex flex-col justify-center items-center">
                <div class="relative w-full lg:px-28 md:px-16 sm:px-8">
                    <div class="my-auto mt-[50px] flex flex-row justify-center flex-wrap">
                        <div
                            class="w-[400px] h-[179px] bg-white rounded-xl border border-neutral-200 flex items-center justify-between mr-5">
                            <div class="pl-7">
                                <div class="w-[77px] h-[77px] bg-slate-200 rounded-full flex justify-center items-center">
                                    <IconPhoneIncoming />
                                </div>
                            </div>
                            <div className="pl-[47px]">
                                <div class="w-[202px] text-black text-2xl font-semibold  leading-[31.06px] pb-[22px]">
                                    Telefon ile iletişime geçin.
                                </div>
                                <div>
                                    <div
                                        class="w-[142px] h-[39px] rounded-lg border border-stone-300 flex items-center justify-center">
                                        <div
                                            class="text-center items-center text-black text-base font-medium font-['Plus Jakarta Display']">
                                            Hemen ara</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="w-[400px] h-[179px] bg-white rounded-xl border border-neutral-200 flex items-center justify-between mr-5">
                            <div class="pl-7">
                                <div class="w-[77px] h-[77px] bg-slate-200 rounded-full flex justify-center items-center">
                                    <IconWhatsapp />
                                </div>
                            </div>
                            <div className="pl-[47px]">
                                <div class="w-[202px] text-black text-2xl font-semibold  leading-[31.06px] pb-[22px]">
                                    Whatsapp ile iletişime geçin.
                                </div>
                                <div>
                                    <div
                                        class="w-[142px] h-[39px] rounded-lg border border-stone-300 flex items-center justify-center">
                                        <div
                                            class="text-center items-center text-black text-base font-medium font-['Plus Jakarta Display']">
                                            Tıkla Konuş</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="w-[400px] h-[179px] bg-white rounded-xl border border-neutral-200 flex items-center justify-between mr-5">
                            <div class="pl-7">
                                <div class="w-[77px] h-[77px] bg-slate-200 rounded-full flex justify-center items-center">
                                    <IconHouseSimple />
                                </div>
                            </div>
                            <div className="pl-[47px]">
                                <div class="w-[202px] text-black text-2xl font-semibold  leading-[31.06px] pb-[22px]">
                                    Doğrudan ofise gelerek.
                                </div>
                                <div>
                                    <div
                                        class="w-[142px] h-[39px] rounded-lg border border-stone-300 flex items-center justify-center">
                                        <div
                                            class="text-center items-center text-black text-base font-medium font-['Plus Jakarta Display']">
                                            Adres Tarifi Al</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" flex mt-32 md:mt-20 sm:mt-8 lg:px-24 md:px-16 sm:px-8 justify-center mb-24">
                        <div class="flex justify-center">
                            <div class="max-w-[409px] text-black text-2xl font-medium  leading-[37.06px] mr-24">
                                Tüm sorularınız, ve işlemleriniz için bizimle iletişime geçin, en kısa <br />sürede size
                                doğru
                                çözüm için <br /> yardım edelim.
                            </div>
                            <div class="w-96">
                                <form class="w-full max-w-sm">
                                    <div class="flex items-center border-b border-gray-200 mb-5">
                                        <input
                                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                            type="text" placeholder="İsim Soyisim *" aria-label="Full name">
                                        <div class="flex-shrink-0 bg-white text-sm text-white flex justify-center items-center  w-[50px] h-[50px]"
                                            type="button">
                                        </div>
                                    </div>
                                    <div class="flex items-center border-b border-gray-200 mb-5">
                                        <input
                                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-white"
                                            type="text" placeholder="E-Posta Adresiniz" aria-label="Full name" />
                                        <div class="flex-shrink-0 bg-white text-sm text-white flex justify-center items-center  w-[50px] h-[50px]"
                                            type="button">
                                        </div>
                                    </div>
                                    <div class="flex items-center border-b border-gray-200 mb-8">
                                        <input
                                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-white"
                                            type="text" placeholder="Konu,sorunu ya da mesajınızı yazın.."
                                            aria-label="Full name" />
                                        <div
                                            class="flex justify-center items-center  w-[72px] h-[60px]  rounded-full text-black text-[10px] font-bold  leading-[10.21px] tracking-wide">
                                            MAX 200
                                        </div>
                                    </div>
                                    <div class="flex flex-row justify-end">
                                        <button
                                            class="px-8 text-center text-black text-base font-medium font-['Plus Jakarta Display'] tracking-tight">Temizle</button>
                                        <button
                                            class="w-[222px] h-[53px] bg-slate-200 rounded-lg border text-center text-black text-base font-medium font-['Plus Jakarta Display'] tracking-tight">Mesajı
                                            Gönder</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import IconAsteriskSimple from "../components/icons/IconAsteriskSimple.vue";
// import IconMainSamosa from "../components/icons/IconMainSamosa.vue";
import IconPhoneIncoming from "../components/icons/IconPhoneIncoming.vue";
import IconWhatsapp from "../components/icons/IconWhatsapp.vue";
import IconHouseSimple from "@/components/icons/IconHouseSimple.vue";
import { ref } from "vue";

// const name = 'HomeView';

// const tableHeaders = ref([
//     ["Bilet Tipi", "Yetişkin", "Çocuk 6-11", "Çocuk 6-11"]
// ]);

// const tableData = ref([
//     ["Tek Yön", "39TL", "39TL", "39TL"],
//     ["Tek Yön", "39TL", "39TL", "39TL"],
//     ["Tek Yön", "39TL", "39TL", "39TL"]
// ]);

// const whichFerry = ref("Alttaki Samos’a feribot bileti ücretlerine Kuşadası ve Samos liman vergileri dahildir.");

const isDropdownOpen = ref(false);

const openModal = () => {
    isDropdownOpen.value = true;
};

const closeModal = () => {
    isDropdownOpen.value = false;
};
</script>
  
<style scoped></style>