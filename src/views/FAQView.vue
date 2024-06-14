<template>
    <div class="w-full h-[145px] bg-slate-200 flex flex-col justify-center items-center">
        <div class="relative w-full lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
            <h1 class="text-black text-4xl font-medium font-display tracking-wide my-auto flex items-center">
                Sıkça Sorulan Sorular
            </h1>
        </div>
    </div>
    <div class=" text-black text-lg font-normal leading-loose mt-12 pl-5 md:pl-0 centered-w">
        <div class="flex flex-col justify-center items-center m-auto relative">
            <div class="w-full">
                <div
                    class="flex flex-col md:flex-row w-full justify-between lg:px-28 md:px-16 sm:px-8 items-center mt-[50px] mb-10 md:mb-40">
                    <div class=" text-black text-2xl font-medium font-['Plus Jakarta Sans'] leading-[37.06px] ">
                        Sadece
                        soruları okumak yetmez. Samos’a <br /> ait tüm bilgilerin yer aldığı kanalımızı
                        inceleyibilirsin.</div>
                    <div class="flex md:flex-row flex-col justify-center md:items-center cursor-pointer">
                        <div class="flex flex-row md:mr-12 mr-2 md:mt-0 mt-5">
                            <div
                                class="text-gray-700 text-base font-medium font-display leading-[24.86px] tracking-tight mr-1">
                                Youtube Kanalımıza Gidin</div>
                            <div class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex">
                                <div class="w-5 h-5 relative flex-col justify-start items-start flex">
                                    <ArrowUpRightWhite />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row justify-center items-center">
                            <div class="w-[178px] h-[121px] bg-gray-500 rounded-2xl items-center justify-center flex">
                                <IconPlay />
                            </div>
                            <IconEllips2077 class="-left-36 relative -z-50" />
                        </div>
                    </div>
                </div>
                <div class="w-full mb-12 md:mb-44 relative lg:px-28 md:px-16 sm:px-8">
                    <div>
                        <h1 class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[37.06px] mb-9">
                            Genel Bilgiler</h1>
                        <div class="hs-accordion-group">
                            <div v-for="(accordion, index) in accordions" :key="index"
                                class="hs-accordion hs-accordion-active:border-blue-600 border border-transparent rounded-xl mb-[24px]"
                                id="hs-active-bordered-heading-one">
                                <button
                                    class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center py-8 gap-x-3 w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-start text-black px-5 disabled:opacity-50 disabled:pointer-events-none"
                                    aria-controls="hs-basic-active-bordered-collapse-one">
                                    {{ accordion.title }}
                                    <IconAccordionActiveArrow class="hs-accordion-active:block hidden" />
                                    <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                </button>
                                <div id="hs-basic-active-bordered-collapse-one"
                                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="hs-active-bordered-heading-one">
                                    <div class="pb-4 px-5 justify-center items-center flex flex-row">
                                        <p
                                            class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-7">
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
                        <div
                            class="flex flex-row justify-center items-center text-black text-lg font-medium font-['Plus Jakarta Display'] mr-1 cursor-pointer">
                            <h2>Daha fazla soru</h2>
                            <div>
                                <IconArrowDownBlack />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full mb-12 md:mb-44 relative lg:px-28 md:px-16 sm:px-8">
                    <div>
                        <h1 class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[37.06px] mb-9">
                            Vize</h1>
                        <div class="hs-accordion-group">
                            <div v-for="(accordion, index) in accordions" :key="index"
                                class="hs-accordion hs-accordion-active:border-blue-600 border border-transparent rounded-xl mb-[24px]"
                                id="hs-active-bordered-heading-one">
                                <button
                                    class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center py-8 gap-x-3 w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-start text-black px-5 disabled:opacity-50 disabled:pointer-events-none"
                                    aria-controls="hs-basic-active-bordered-collapse-one">
                                    {{ accordion.title }}
                                    <IconAccordionActiveArrow class="hs-accordion-active:block hidden" />
                                    <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                </button>
                                <div id="hs-basic-active-bordered-collapse-one"
                                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="hs-active-bordered-heading-one">
                                    <div class="pb-4 px-5 justify-center items-center flex flex-row">
                                        <p
                                            class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-7">
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
                        <div
                            class="flex flex-row justify-center items-center text-black text-lg font-medium font-display mr-1 cursor-pointer">
                            <h2>Daha fazla soru</h2>
                            <div>
                                <IconArrowDownBlack />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full mb-12 md:mb-44 relative lg:px-28 md:px-16 sm:px-8">
                    <div>
                        <h1 class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[37.06px] mb-9">
                            Paket Turlar</h1>
                        <div class="hs-accordion-group">
                            <div v-for="(accordion, index) in accordions" :key="index"
                                class="hs-accordion hs-accordion-active:border-blue-600 border border-transparent rounded-xl mb-[24px]"
                                id="hs-active-bordered-heading-one">
                                <button
                                    class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center py-8 gap-x-3 w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-start text-black px-5 disabled:opacity-50 disabled:pointer-events-none"
                                    aria-controls="hs-basic-active-bordered-collapse-one">
                                    {{ accordion.title }}
                                    <IconAccordionActiveArrow class="hs-accordion-active:block hidden" />
                                    <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                </button>
                                <div id="hs-basic-active-bordered-collapse-one"
                                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="hs-active-bordered-heading-one">
                                    <div class="pb-4 px-5 justify-center items-center flex flex-row">
                                        <p
                                            class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-7">
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
                        <div
                            class="flex flex-row justify-center items-center text-black text-lg font-medium font-display mr-1 cursor-pointer">
                            <h2>Daha fazla soru</h2>
                            <div>
                                <IconArrowDownBlack />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ArrowUpRightWhite from '../components/icons/IconArrowUpRightWhite.vue'
import IconEllips2077 from '../components/icons/IconEllips2077.vue'
import IconPlay from '../components/icons/IconPlay.vue'
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue';
import IconAccordionActiveArrow from '@/components/icons/IconAccordionActiveArrow.vue';
import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue';

const accordions = ref([
    {
        title: 'Samos a turlar ne zaman başlar', body: 'Sabah 07:30’da Kuşadası Meander Travel ofisinde check-in ve pasaport işlemlerinizin ardından saat 09:00’da Samos’a hareket ediyor ve 10:15de varıyorsunuz.Vaktinizi adanın güzel köşelerini keşfederek geçirebilirsiniz.', active: true
    },
    {
        title: 'Vize işlemlerinde yapılması gerekenler nelerdir?', body: 'Sabah 07:30’da Kuşadası Meander Travel ofisinde check-in ve pasaport işlemlerinizin ardından saat 09:00’da Samos’a hareket ediyor ve 10:15de varıyorsunuz.Vaktinizi adanın güzel köşelerini keşfederek geçirebilirsiniz.', active: true
    },
    {
        title: 'Bilet almadan önce sizinle iletişim kurabilir miyim?', body: 'Sabah 07:30’da Kuşadası Meander Travel ofisinde check-in ve pasaport işlemlerinizin ardından saat 09:00’da Samos’a hareket ediyor ve 10:15de varıyorsunuz.Vaktinizi adanın güzel köşelerini keşfederek geçirebilirsiniz.', active: true
    },
    {
        title: 'Sadece Samos adasına mı bilet alabiliyorum?', body: 'Sabah 07:30’da Kuşadası Meander Travel ofisinde check-in ve pasaport işlemlerinizin ardından saat 09:00’da Samos’a hareket ediyor ve 10:15de varıyorsunuz.Vaktinizi adanın güzel köşelerini keşfederek geçirebilirsiniz.', active: true
    },
]);


</script>

<style scoped></style>