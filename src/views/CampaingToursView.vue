<template>
    <div class="flex flex-col lg:px-28 md:px-16 sm:px-8">
        <section>
            <ol class="flex items-center whitespace-nowrap mt-[30px]" aria-label="Breadcrumb">
                <li class="inline-flex items-center">
                    <a class="mr-[6px] opacity-60 text-black text-base font-normal font-['Plus Jakarta Sans'] tracking-tight"
                        href="#">
                        Anasayfa
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g id="Chevron - Down" opacity="0.6">
                            <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303Z"
                                fill="black" />
                        </g>
                    </svg>
                </li>
                <li class="ml-[6px] text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight"
                    aria-current="page">
                    Turlar
                </li>
            </ol>
            <div>
                <div class="mt-[39px] flex flex-row justify-between">
                    <div class="text-black text-4xl font-semibold font-['Plus Jakarta Sans']">Samos’a gidince
                        yemeniz<br />gereken 10 başlangıç</div>
                    <div class="flex flex-row">
                        <div
                            class="w-[77px] h-[77px] bg-white rounded-full border border-neutral-200 ml-[15px] justify-center items-center flex cursor-pointer">
                            <IconAa />
                        </div>
                        <div
                            class="w-[77px] h-[77px] bg-white rounded-full border border-neutral-200 ml-[15px] justify-center items-center flex cursor-pointer">
                            <IconLinkSimple />
                        </div>
                        <div
                            class="w-[77px] h-[77px] bg-white rounded-full border border-neutral-200 ml-[15px] justify-center items-center flex cursor-pointer">
                            <IconShare />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="mb-16 md:mb-[104px] mt-[60px]">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-5">
                        <div class="space-y-[70px]">
                            <div class="cursor-pointer">
                                <img class="w-full h-[295px] object-cover rounded-xl"
                                    src="https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Image Description">
                            </div>
                        </div>
                        <div class="space-y-[70px]">
                            <div class="cursor-pointer">
                                <img class="w-full h-[295px] object-cover rounded-xl"
                                    src="https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Image Description">
                            </div>
                        </div>
                        <div class="space-y-[70px]">
                            <div class="cursor-pointer">
                                <img class="w-full h-[295px] object-cover rounded-xl"
                                    src="https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Image Description">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div class="w-3/4">
                    <div>
                        <div v-for="(item, index) in contentData" :key="index">
                            <div
                                class="text-black text-xl font-semibold font-['Plus Jakarta Sans'] leading-9 md:mb-[43px] mb-5">
                                {{ item.title }}
                            </div>
                            <div class="mb-7 md:mb-[60px]">
                                <span
                                    class="text-black text-lg font-normal leading-loose font-['Plus Jakarta Sans'] md:mb-[43px] mb-5">
                                    {{ item.text }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div v-for="(item, index) in campaignData" :key="index">
                        <div
                            class="text-black text-xl font-semibold font-['Plus Jakarta Sans'] leading-9 md:mb-[43px] mb-5">
                            {{ item.title }}
                        </div>
                        <div class="mb-7 md:mb-[60px]">
                            <span
                                class="text-black text-lg font-normal leading-loose font-['Plus Jakarta Sans'] md:mb-[43px] mb-5">
                                {{ item.text }}
                            </span>
                        </div>
                    </div>
                    <div v-for="(item, index) in vacationDate" :key="index">
                        <div
                            class="text-black text-xl font-semibold font-['Plus Jakarta Sans'] leading-9 md:mb-[43px] mb-5">
                            {{ item.title }}
                        </div>
                        <div class="mb-7 md:mb-[60px]">
                            <span
                                class="text-black text-lg font-normal leading-loose font-['Plus Jakarta Sans'] md:mb-[43px] mb-5">
                                {{ item.text }}
                            </span>
                        </div>
                    </div>
                    <div
                        class=" text-black text-[28px] font-medium font-['Plus Jakarta Sans'] leading-[43.23px] md:mb-[43px] mb-5">
                        Kampanya Koşulları :</div>
                    <div class="mb-7 md:mb-[60px]">
                    </div>
                    <div v-for="(item, index) in textArray" :key="index"
                        class="text-black text-lg font-normal font-['Plus Jakarta Sans'] leading-loose">
                        {{ commonText }} {{ item }}
                    </div>
                </div>
                <div class="w-1/4">
                    <div class="flex flex-row justify-end items-end">
                        <div class="hs-dropdown relative inline-flex [--auto-close:outside]">
                            <button @click="toggleDropdown" type="button"
                                class="hs-dropdown-toggle z-50 -left-4 top-6 relative w-[84px] h-[29px] bg-white rounded-[46px] border border-neutral-200 text-center text-black text-sm font-semibold font-['Plus Jakarta Sans'] leading-[18.12px]">
                                {{ isOpen ? 'Open' : 'Close' }}
                            </button>
                            <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 duration hidden z-10 transition-[margin,opacity] opacity-0 duration-300 w-[278px] h-[300px] bg-white rounded-xl border border-neutral-200"
                                aria-labelledby="hs-dropdown-slideup-animation">
                                <div class="flex flex-col justify-center items-center mt-5 mx-8">
                                    <div class="cursor-pointer">
                                        <div
                                            class="w-[200px] h-[63px] bg-slate-50 text-black rounded-lg border flex justify-center items-center mt-[24px]">
                                            <div class="text-center text-black text-base  font-display">
                                                <p class="font-light">
                                                    Geçerlilik Tarihi
                                                </p>
                                                <p>
                                                    01-30 Kasım arası
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cursor-pointer">
                                        <div
                                            class="w-[200px] h-[63px] bg-slate-50 text-black rounded-lg border flex justify-center items-center mt-[24px]">
                                            <div class="text-center text-black text-base font-medium font-display">
                                                <p class="font-light">
                                                    Satış Tarihi
                                                </p>
                                                <p>
                                                    20-30 Ekim arası
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cursor-pointer">
                                        <div
                                            class="w-[200px] h-[53px] bg-blue-500 text-white rounded-lg border flex justify-center items-center mt-[24px]">
                                            <div class="text-center text-white text-base font-medium font-display">
                                                Şimdi Bilet Al</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full md:w-10/12">
            <div class="mb-16">
                <div class="mt-12 md:mt-28 md:mb-16 mb-7">
                    <h1
                        class="text-black text-[42px] font-bold font-['Plus Jakarta Sans'] tracking-wide mb-5  md:mb-[45px]">
                        Tur Programı</h1>
                    <p class="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[17.06px]">1 gece
                        2
                        günü kapsayan bu turun<br /> programı aşağıdaki gibidir.</p>
                </div>
                <div>
                    <div class="hs-accordion-group">
                        <div v-for="(accordion, index) in accordions" :key="index"
                            class="hs-accordion hs-accordion-active:border-blue-700 border border-transparent rounded-xl mb-[24px]"
                            id="hs-active-bordered-heading-one">
                            <button
                                class="hs-accordion-toggle hs-accordion-active:text-blue-700 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-start text-black px-11 disabled:opacity-50 disabled:pointer-events-none"
                                aria-controls="hs-basic-active-bordered-collapse-one">
                                {{ accordion.title }}
                                <div class="flex flex-row justify-center items-center ">
                                    <span
                                        class="flex flex-row justify-end text-sm rounded-md mr-[18px] my-4 py-3 px-6 bg-slate-200 hs-accordion-active:bg-white">
                                        GÜN {{ index + 1 }} </span>
                                    <IconAccordionActiveArrow class="hs-accordion-active:block hidden" />
                                    <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                </div>
                            </button>
                            <div id="hs-basic-active-bordered-collapse-one"
                                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-active-bordered-heading-one">
                                <div class="pb-4 px-11 justify-center items-center flex flex-row">
                                    <p class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-7">
                                        <br />
                                        {{ accordion.body }}
                                        <br />
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border pl-10 rounded-[20px] mb-[30px]">
                <div class="bg-white">
                    <div>
                        <h1 class="text-black text-[42px] font-medium font-display tracking-wide pt-[74px] pb-[37px]">
                            Dahil Olan Servisler</h1>
                        <p
                            class="mb-[53px] text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                            Altta yer alan servislerin hepsi satın<br />aldığınız turun içindedir.
                        </p>
                    </div>
                    <ul>
                        <li v-for="(item, index) in travelItems" :key="index">
                            {{ item }}
                            <div class="w-full md:w-[567px] mt-[35px] mb-[35px] half-pixel origin-top-left border border-neutral-300"
                                :class="{ 'border-none': index === travelItems.length - 1 }" />
                        </li>
                    </ul>
                    <div>
                        <div class="flex flex-row mt-10 md:mt-20 mb-9 md:mb-[89px]">
                            <IconAsteriskSimple />
                            <h2
                                class="ml-4 w-80 md:w-[500px]  text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight">
                                Dahil olan servisler ile ilgili soru işaretleriniz var ise blog yazılarımızı
                                okuyabilir ya
                                da destek alabilirsiniz.</h2>
                            <div
                                class="flex flex-row justify-center items-center bg-white py-[7px] pl-4 pr-[3px] rounded-full cursor-pointer">
                                <div class="text-black text-base font-medium font-display mr-4">Destek AL
                                </div>
                                <div
                                    class="w-[35px] h-[35px] relative flex-col rounded-full flex bg-slate-100 justify-center items-center">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.2" d="M19.3589 6.45703V16.727L9.08887 6.45703H19.3589Z"
                                            fill="black" />
                                        <path
                                            d="M19.3592 5.66699H9.08915C8.93281 5.66687 8.77995 5.71314 8.64992 5.79993C8.5199 5.88673 8.41854 6.01016 8.3587 6.15459C8.29885 6.29902 8.28321 6.45796 8.31374 6.61128C8.34428 6.76461 8.41962 6.90543 8.53022 7.01592L13.1073 11.592L6.16023 18.5381C6.08683 18.6115 6.0286 18.6986 5.98888 18.7945C5.94916 18.8904 5.92871 18.9932 5.92871 19.097C5.92871 19.2008 5.94916 19.3036 5.98888 19.3995C6.0286 19.4954 6.08683 19.5825 6.16023 19.6559C6.23362 19.7293 6.32076 19.7875 6.41666 19.8273C6.51256 19.867 6.61535 19.8874 6.71915 19.8874C6.82295 19.8874 6.92574 19.867 7.02164 19.8273C7.11754 19.7875 7.20468 19.7293 7.27808 19.6559L14.2242 12.7089L18.8002 17.2859C18.9107 17.3965 19.0515 17.4719 19.2049 17.5024C19.3582 17.5329 19.5171 17.5173 19.6616 17.4574C19.806 17.3976 19.9294 17.2962 20.0162 17.1662C20.103 17.0362 20.1493 16.8833 20.1492 16.727V6.45699C20.1492 6.24747 20.0659 6.04653 19.9178 5.89838C19.7696 5.75022 19.5687 5.66699 19.3592 5.66699ZM18.5692 14.8201L14.7831 11.0341L10.996 7.24699H18.5692V14.8201Z"
                                            fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border pl-10 bg-slate-200 mb-[30px] rounded-[20px]">
                <div>
                    <div>
                        <h1 class="text-black text-[42px] font-medium font-display tracking-wide pt-[74px] pb-[37px]">
                            Dahil Olmayan Servisler</h1>
                        <p
                            class="mb-[53px] text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                            Altta yer alan servislerin hepsi satın<br />aldığınız turun içindedir.
                        </p>
                    </div>
                    <ul>
                        <li v-for="(item, index) in travelItems" :key="index">
                            {{ item }}
                            <div class="w-full md:w-[567px] mt-[35px] mb-[35px] half-pixel origin-top-left border border-neutral-300"
                                :class="{ 'border-none': index === travelItems.length - 1 }" />
                        </li>
                    </ul>
                    <div>
                        <div class="flex flex-row mt-10 md:mt-20 mb-9 md:mb-[89px]">
                            <IconAsteriskSimple />
                            <h2
                                class="ml-4 w-80 md:w-[500px]  text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight">
                                Dahil olan servisler ile ilgili soru işaretleriniz var ise blog yazılarımızı
                                okuyabilir ya
                                da destek alabilirsiniz.</h2>
                            <div
                                class="flex flex-row justify-center items-center bg-white py-[7px] pl-4 pr-[3px] rounded-full cursor-pointer">
                                <div class="text-black text-base font-medium font-display mr-4 ">Destek AL
                                </div>
                                <div
                                    class="w-[35px] h-[35px] relative flex-col rounded-full flex bg-slate-100 justify-center items-center">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.2" d="M19.3589 6.45703V16.727L9.08887 6.45703H19.3589Z"
                                            fill="black" />
                                        <path
                                            d="M19.3592 5.66699H9.08915C8.93281 5.66687 8.77995 5.71314 8.64992 5.79993C8.5199 5.88673 8.41854 6.01016 8.3587 6.15459C8.29885 6.29902 8.28321 6.45796 8.31374 6.61128C8.34428 6.76461 8.41962 6.90543 8.53022 7.01592L13.1073 11.592L6.16023 18.5381C6.08683 18.6115 6.0286 18.6986 5.98888 18.7945C5.94916 18.8904 5.92871 18.9932 5.92871 19.097C5.92871 19.2008 5.94916 19.3036 5.98888 19.3995C6.0286 19.4954 6.08683 19.5825 6.16023 19.6559C6.23362 19.7293 6.32076 19.7875 6.41666 19.8273C6.51256 19.867 6.61535 19.8874 6.71915 19.8874C6.82295 19.8874 6.92574 19.867 7.02164 19.8273C7.11754 19.7875 7.20468 19.7293 7.27808 19.6559L14.2242 12.7089L18.8002 17.2859C18.9107 17.3965 19.0515 17.4719 19.2049 17.5024C19.3582 17.5329 19.5171 17.5173 19.6616 17.4574C19.806 17.3976 19.9294 17.2962 20.0162 17.1662C20.103 17.0362 20.1493 16.8833 20.1492 16.727V6.45699C20.1492 6.24747 20.0659 6.04653 19.9178 5.89838C19.7696 5.75022 19.5687 5.66699 19.3592 5.66699ZM18.5692 14.8201L14.7831 11.0341L10.996 7.24699H18.5692V14.8201Z"
                                            fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border px-10 bg-white mb-[30px] rounded-[20px]">
                <div>
                    <div>
                        <h1 class="text-black text-[42px] font-medium font-display tracking-wide pt-[74px] pb-[37px]">
                            Fiyatlar</h1>
                        <p
                            class="mb-[53px] text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                            Önümüzdeki tarihlerde uygun olan oteller <br /> listelenmektedir.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center m-auto relative">
                    <div className="w-full mx-auto rounded-[20px]">
                        <div className="flex flex-col overflow-x-auto">
                            <div>
                                <table className="relative bg-white mb-8 rounded-2xl w-full">
                                    <thead>
                                        <tr v-for="(header, index) in tableHeaders" :key="index"
                                            class="flex flex-row mb-[23px] justify-between items-center text-black text-lg font-normal rounded-lg">
                                            <th v-for="(label, labelIndex) in header" :key="labelIndex"
                                                class=" w-full flex">{{
                                                    label }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, index) in tableData" :key="index"
                                            className="flex flex-row justify-between text-black text-lg font-normal border border-neutral-200 rounded-lg mb-[10px]">
                                            <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                                className="w-full pt-8 pb-8 pl-8">
                                                {{ cell }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- <div class="flex flex-row justify-between">
        <div class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] tracking-wide">
            Yolcu ve İletişim Bilgileri
        </div>
        <div class="hs-dropdown [--auto-close:outside]">
            <div id="hs-dropdown-default"
                class="hs-dropdown-toggle bg-white rounded-lg border px-6 py-2 flex flex-row cursor-pointer">
                <p class="text-black text-lg font-medium font-display items-center justify-center mr-[14px]">
                    Yeni yolcu ekle
                </p>
                <div class="flex justify-center items-center">
                    <IconPlus />
                </div>
            </div>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                aria-labelledby="hs-dropdown-default">
                <div class="w-[277px] h-[239px] bg-white rounded-xl border -left-0"></div>
            </div>
        </div>
    </div> -->
    <div class="hs-dropdown [--auto-close:outside]">
                            <div
                                class="hs-dropdown-menu hs-dropdown-open:opacity-100 duration hidden z-10 transition-[margin,opacity] opacity-0 duration-300" aria-labelledby="hs-dropdown-slideup-animation">
                                <p
                                    class="text-black text-lg font-medium font-display items-center justify-center mr-[14px] p-5 bg-white rounded-lg border px-6 py-2 flex flex-row cursor-pointer">
                                    Yeni yolcu ekle
                                </p>
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 duration hidden z-10 transition-[margin,opacity] opacity-0 duration-300 w-[277px] h-[239px] bg-white rounded-xl border py-6 px-4" aria-labelledby="hs-dropdown-slideup-animation">
                                    <div class="bg-white space-y-3">
                                        <div
                                            class="w-full h-[57px] bg-slate-200 rounded-lg flex flex-row items-center justify-center gap-[60px]">
                                            <div class="text-black text-base font-medium font-display tracking-tight">
                                                Yetişkin Ekle</div>
                                            <div
                                                class="text-right text-black text-base font-light font-display tracking-tight">
                                                +12 yaş</div>
                                        </div>
                                        <div
                                            class="w-full h-[57px] bg-slate-200 rounded-lg flex flex-row items-center justify-center gap-[60px]">
                                            <div class="text-black text-base font-medium font-display tracking-tight">
                                                Çocuk Ekle</div>
                                            <div
                                                class="text-right text-black text-base font-light font-display tracking-tight">
                                                6-12 yaş</div>
                                        </div>
                                        <div
                                            class="w-full h-[57px] bg-slate-200 rounded-lg flex flex-row items-center justify-center gap-[60px]">
                                            <div class="text-black text-base font-medium font-display tracking-tight">
                                                Bebek Ekle</div>
                                            <div
                                                class="text-right text-black text-base font-light font-display tracking-tight">
                                                0-5 yaş</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
</template>

<script setup lang="ts">
import IconAa from '@/components/icons/IconAa.vue';
import IconLinkSimple from '@/components/icons/IconLinkSimple.vue';
import IconShare from '@/components/icons/IconShare.vue';
import IconAccordionActiveArrow from '@/components/icons/IconAccordionActiveArrow.vue';
import IconAsteriskSimple from '@/components/icons/IconAsteriskSimple.vue';
import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue';
import { ref } from 'vue';

const isOpen = ref(true);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const accordions = ref([
    {
        title: '1. Gün : Kuşadası - Samos', body: 'Sabah 07:30da Kuşadası Meander ofisinde check-in ve pasaport işlemlerinizin ardın dan saat 09:00da Samosa harekt ediyor ve 10:15de varıyorsunuz. Vaktinizi Adanon güzel köşelerini keşfederek geçirebilirsiniz.', active: true
    },
    {
        title: '2. Gün : Samos Tarihi Yerleri Keşfetme',
        body: 'Sabah 09:00da otelden hareketle Samosun tarihi zenginlikleriyle dolu bölgelerini gezmeye başlıyoruz.Arkeolojik alanlarda rehber eşliğinde antik kalıntıları keşfedecek ve tarihi atmosferin tadını çıkaracaksınız.Tur sonrasında öğle yemeği için yöresel lezzetleri deneyebilirsiniz.',
        active: true
    },

    {
        title: '3. Gün : Samos Plajları ve Deniz Keyfi',
        body: 'Bugün Samosun muhteşem plajlarında unutulmaz bir gün geçireceksiniz.Sabah serbest zaman ile başlayacak ve adanın kristal berraklığındaki sularında serinleyebileceksiniz.Akşam saatlerinde grupla buluşup günün deniz keyfini paylaşabilirsiniz.',
        active: true
    },
    {
        title: '4. Gün : Samos Lezzet Yolculuğu ve Akşam Keyfi',
        body: 'Gününüzü Samosun eşsiz lezzetleriyle taçlandırın! Sabah serbest zamanın ardından adanın meşhur restoranlarında geleneksel yemekleri tatma şansı bulabilirsiniz.Akşam saatlerinde ise grupla birlikte Samosun eğlenceli atmosferinde keyifli bir akşam geçirebilirsiniz.',
        active: true
    }
]);

const travelItems = ref([
    'Kuş Adası / Samos gidiş-dönüş feribot bileti',
    'Kuşadası Samos liman vergileri',
    '1 Gece oda/kahvaltı konaklama',
    'Türsab zorunlu seyahat sigortası',
]);

const contentData = [
    {
        title: 'Kampanya Teklifi :',
        text:
            "2 Kasım 2023 – 30 Kasım 2023 tarihleri arasında yolculuğa 24 saat kalana kadar biletleme sırasında veya yolculuk öncesi https://samosaferibot.com linki üzerinden yapılan paket tur siparişlerinde geçerli %30’a varan indirimler sizi bekliyor."
    }
];

const campaignData = [
    {
        title: 'Kampanya Tarihi ve Süresi :',
        text: 'Kampanyadan yararlanabilmek için 2 Kasım 2023 - 30 Kasım 2023 (Türkiye yerel saatine göre 2 Kasım 2023 saat 00.01’den itibaren 30 Kasım 2023 saat 23:59’a kadar uçuş öncesi yemek siparişinin verildiği koşulda geçerlidir) tarihleri arasında uçuşunuzdan 24 saat öncesine kadardır.'
    }
]

const vacationDate = [
    {
        title: 'Seyahat Tarihi',
        text: '2 Kasım 2023 saat 00.01’den itibaren yapılacak olan ve yolculuk öncesi konaklama yapabilecek tüm yolcularımızda geçerlidir.'
    }
]

const commonText = '·';
const textArray = ref<string[]>([
    `Kampanya, uçuş öncesi yemek siparişi hizmeti sağlanan yurtiçi, KKTC ve yurtdışı uçuşlarda, yalnızca uçuştan 24 saat kalana kadar yapılacak olan yemek siparişlerinde geçerlidir.`,
    `Kampanyadan uçuş bileti olan herkes yararlanabilir, katılım için Pegasus BolBol üyesi olunması gerekmemektedir.`,
    `Kampanya kapsamında, uçuş öncesi yemek siparişlerinde %30’a varan indirimler uygulanmaktadır. İndirim oranları ilgili hatlar veya her bir yemek için farklılık gösterebilmektedir. Uçuş öncesi sipariş sırasında belirtilen fiyatlar indirimli fiyatlardır.`,
]);

const tableHeaders = [
    ["Otel", "Tarih Aralığı", "Kişi Başı", "İlave Yatak", "Tek Kişi", "Çocuk", "Bebek"]
];

const tableData = [
    ["Samosa City Hotel", "01-30 Kasım", "39TL", "39TL", "39TL", "Bebek 0TL", "Çocuk 39TL"],
    ["Samosa City Hotel", "01-30 Kasım", "39TL", "39TL", "39TL", "Bebek 0TL", "Çocuk 39TL"],
    ["Samosa City Hotel", "01-30 Kasım", "39TL", "39TL", "39TL", "Bebek 0TL", "Çocuk 39TL"],
    ["Samosa City Hotel", "01-30 Kasım", "39TL", "39TL", "39TL", "Bebek 0TL", "Çocuk 39TL"],
];

</script>

<style scoped></style>

