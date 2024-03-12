<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[223px] bg-slate-200" />
        <div class="relative top-[-11rem] w-full lg:px-[100px] px-16 md:px-16 sm:px-8 centered-w">
            <div class="flex lg:flex-row flex-col justify-between items-center mb-9">
                <div class="flex flex-row justify-center items-center">
                    <div class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide">
                        Kuşadası
                    </div>
                    <div
                        class="w-[52px] h-[52px] opacity-75 bg-white rounded-full flex justify-center items-center mx-[33px]">
                        <IconsArrowsLeftRight />
                    </div>
                    <div class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide">
                        Samosa
                    </div>
                </div>
                <div class="flex flex-row items-center">
                    <div
                        class="h-[37px] bg-white rounded-lg border flex justify-center items-center py-[7px] px-5 cursor-pointer">
                        <div class="text-black text-lg font-medium font-display ml-1">Yeni Bilet Ara</div>
                        <IconArrowDownBlack />
                    </div>
                    <div class="flex flex-row justify-center items-center mr-2 ml-9">
                        <div class="flex flex-col">
                            <div class="text-black text-base font-medium font-display">Ödenecek Tutar</div>
                            <div
                                class="text-black text-[32px] font-medium font-['Plus Jakarta Sans'] items-end flex flex-row justify-end">
                                41TL
                            </div>
                        </div>
                        <IconArrowDownBlack class="ml-[20px]" />
                    </div>
                </div>
            </div>
            <div>
                <div className=" bg-neutral-100 rounded-[20px] p-4">
                    <div class="flex flex-row justify-between">
                        <div class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mt-5 ">
                            Yolcu ve İletişim Bilgileri
                        </div>
                        <div class="hs-dropdown relative inline-flex [--auto-close:outside]">
                            <p
                                class="text-black text-lg font-medium font-display items-center justify-center mt-4 mr-[14px] p-5 bg-white rounded-lg border px-6 py-2 flex flex-row cursor-pointer">
                                Yeni yolcu ekle
                            </p>
                            <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 duration hidden z-10 transition-[margin,opacity] opacity-0 duration-300 w-[277px] h-[239px] bg-white rounded-xl border py-6 px-4"
                                aria-labelledby="hs-dropdown-slideup-animation">
                                <div class="bg-white space-y-3">
                                    <div v-for="(item, index) in ages" :key="index"
                                        class="w-full h-[57px] rounded-lg flex flex-row items-center justify-center cursor-pointer gap-[60px] hover:bg-slate-200 transition-all duration-300">
                                        <div class="text-black text-base font-medium font-display tracking-tight">
                                            {{ item.title }}
                                        </div>
                                        <div class="text-right text-black text-base font-light font-display tracking-tight">
                                            {{ item.age }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hs-accordion-group">
                        <div v-for="(accordion, index) in accordions" :key="index"
                            class="hs-accordion items-centers rounded-xl mb-5 bg-white first:mt-8"
                            id="hs-active-bordered-heading-one">
                            <button
                                class="hs-accordion-toggle inline-flex flex-row justify-between py-3 px-[25px] w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-black disabled:opacity-50 disabled:pointer-events-none"
                                aria-controls="hs-basic-active-bordered-collapse-one">
                                <div class="flex flex-row items-center justify-between w-full">
                                    <div class="flex flex-row items-center">
                                        <div v-if="accordion.age === 'yetişkin'"
                                            class="w-[60px] h-[60px] bg-neutral-100 rounded-full flex justify-center items-center">
                                            <IconPersonSimpleRun />
                                        </div>
                                        <div v-else
                                            class="w-[60px] h-[60px] bg-neutral-100 rounded-full flex justify-center items-center">
                                            <IconBaby />
                                        </div>
                                        <div class="text-black text-lg font-semibold font-['Plus Jakarta Sans'] ml-[20px]">
                                            {{ accordion.title }}
                                        </div>
                                    </div>
                                    <div class="flex flex-row">
                                        <span
                                            class="hs-accordion-active:hidden text-right items-center justify-center flex text-black text-base font-normal font-display tracking-tight">
                                            Yaman Baturalp
                                        </span>
                                        <span
                                            class="hs-accordion-active:hidden px-[6px] text-black text-[15px] font-medium font-display mx-7 bg-slate-200 rounded-lg">
                                            Bilgileri Güncelle
                                        </span>
                                        <div class="items-center flex pl-1 mr-7">
                                            <IconAccordionActiveArrow class="hs-accordion-active:block hidden" />
                                            <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <div id="hs-basic-active-bordered-collapse-one"
                                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-active-bordered-heading-one">
                                <div class="pb-4 mb-10 flex flex-col">
                                    <div class="w-full h-[1px] border border-gray-200"></div>
                                    <div
                                        class="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-7 px-5 mt-[67px] mb-24">
                                        <form class="w-full max-w-sm ml-[83px] ">
                                            <InputBasic placeholder="İsim *" ariaLabel="Full name" />
                                            <InputBasic placeholder="Soyisim *" ariaLabel="Full name" />
                                            <InputBasic placeholder="E-Posta Adresiniz" ariaLabel="E-posta" />
                                            <InputPhone placeholder="Telefon" ariaLabel="Phone" />
                                            <InputBirth placeholder="Doğum Tarihiniz" ariaLabel="Birth" />
                                            <InputBasic placeholder="Uyruğunuzu Seçin" ariaLabel="years" />
                                            <InputBasic placeholder="Pasaport numaranızı girin" ariaLabel="Pasaport" />
                                            <InputBasic placeholder="T.C Numaranızı girin" ariaLabel="TC" />
                                        </form>
                                    </div>
                                    <div class="px-5 flex flex-row items-center justify-end">
                                        <div
                                            class="flex flex-row rounded-lg border border-gray-300 py-4 px-5 text-center text-black text-base font-medium font-['Plus Jakarta Sans']">
                                            <div class="mr-4">Ana Yolcu Olarak Ayarla</div>
                                            <div>
                                                <input type="checkbox" id="hs-xs-switch"
                                                    class="relative w-[35px] h-[21px] bg-stone-300 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 before:inline-block before:w-4 before:h-4 before:bg-white checked:before:bg-white :translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200" />
                                            </div>
                                        </div>
                                        <div
                                            class="text-center text-black text-base font-medium font-display ml-8 cursor-pointer">
                                            Temizle
                                        </div>
                                        <div
                                            class="bg-slate-200 rounded-lg border py-4 px-12 text-center text-black text-base font-medium font-display ml-8 cursor-pointer">
                                            Yolcuyu Kaydet
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-16 mb-7 w-full">
                        <div class="flex flex-row justify-between items-center mt-5">
                            <div class="flex flex-row items-center">
                                <IconAsteriskSimple class="min-w-7 min-h-7" />
                                <h2 class="text-black text-base font-medium leading-[26.88px] ml-3">
                                    Vize işlemlerinizi tamamladan lütfen biletinizi almayınız. Detaylı bilgi ve destek
                                    için bize ulaşabilirsiniz.
                                </h2>
                                <div
                                    class="flex flex-row ml-6 justify-center items-center bg-white py-[7px] pl-4 pr-[3px] rounded-full cursor-pointer">
                                    <div class="text-black text-base font-medium font-display mr-4">Destek AL</div>
                                    <div
                                        class="w-[35px] h-[35px] relative flex-col rounded-full flex bg-slate-100 justify-center items-center">
                                        <IconArrowUpRight2 />
                                    </div>
                                </div>
                            </div>
                            <div class="py-5 px-8 ml-5 bg-blue-700 rounded-lg border cursor-pointer">
                                <div @click="navigateToPassenger"
                                    class="flex items-center justify-center text-center text-white text-base font-medium font-display">
                                    Faturanlandırmaya Git
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
// @ts-ignore
import IconsArrowsLeftRight from '@/components/icons/IconsArrowsLeftRight.vue'
import IconAccordionActiveArrow from '@/components/icons/IconAccordionActiveArrow.vue'
import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue'
import IconPersonSimpleRun from '@/components/icons/IconPersonSimpleRun.vue'
import IconAsteriskSimple from '@/components/icons/IconAsteriskSimple.vue'
import IconArrowUpRight2 from '@/components/icons/IconArrowUpRight2.vue'
import InputBasic from '../PassengerPaymentViews/components/InputBasic.vue'
import InputBirth from '../PassengerPaymentViews/components/InputBirth.vue'
import InputPhone from '../PassengerPaymentViews/components/InputPhone.vue'
import IconBaby from '@/components/icons/IconBaby.vue'
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue'
import { useRouter } from "vue-router";
import { ref } from 'vue'

interface AgeItem {
    title: string;
    age: string;
}

interface Accordion {
    title: string;
    active: boolean;
    age: string;
}

const accordions = ref<Accordion[]>([
    {
        title: '1. Yetişkin Yolcu',
        active: true,
        age: 'yetişkin',
    },
    {
        title: '1. Bebek Yolcu',
        active: true,
        age: 'bebek',
    },
    {
        title: '1. Yetişkin Yolcu',
        active: true,
        age: 'yetişkin'
    }
]);

const ages = ref<AgeItem[]>([
    { title: 'Yetişkin Ekle', age: '+12 yaş' },
    { title: 'Çocuk Ekle', age: '6-12 yaş' },
    { title: 'Bebek Ekle', age: '0-5 yaş' }
]);

const router = useRouter();
const navigateToPassenger = () => {
    router.push('/payment');
};

</script>

<style scoped></style>
