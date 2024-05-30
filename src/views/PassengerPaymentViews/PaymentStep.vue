<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[223px] bg-slate-200" />
        <div class="relative top-[-11rem] w-full lg:px-[100px] px-0 md:px-16 sm:px-8 centered-w">
            <div class="flex lg:flex-row flex-col justify-between items-center mb-10">
                <div class="flex flex-row justify-center items-center gap-5 ">
                    <div class="w-[52px] h-[52px] origin-top-left opacity-75 bg-white rounded-full flex justify-center items-center cursor-pointer"
                        @click="navigateToPassenger">
                        <IconArrowPaymentL />
                    </div>
                    <div class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide">
                        Ödeme Adımı
                    </div>
                </div>
                <div v-if="!paymentSuccess" class="flex flex-row justify-center items-center mr-2 ml-9">
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
            <div>
                <div className=" bg-neutral-100 rounded-[20px] p-5">
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="lg:w-3/5 w-full">
                            <div v-if="paymentSuccess" class="bg-white rounded-2xl p-3 text-blue-900 mb-3">
                                <PaymentSuccess />
                            </div>
                            <div v-else class="hs-accordion-group">
                                <div class="hs-accordion active items-centers rounded-xl bg-white mb-4 last:mb-[46px]"
                                    id="hs-basic-heading-one">
                                    <button
                                        class="hs-accordion-toggle inline-flex flex-row justify-between w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-black disabled:opacity-50 disabled:pointer-events-none"
                                        aria-controls="hs-basic-collapse-one">
                                        <div class="flex flex-row items-center justify-between w-full">
                                            <div class="flex flex-row items-center">
                                                <div
                                                    class="text-black text-lg font-semibold font-['Plus Jakarta Sans'] ml-[40px] py-[35px]">
                                                    Faturalandırma
                                                </div>
                                            </div>
                                            <div class="flex flex-row">
                                                <div class="items-center flex pl-1 mr-6">
                                                    <IconAccordionActiveArrow
                                                        class="hs-accordion-active:block hidden" />
                                                    <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    <div id="hs-basic-collapse-one"
                                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-basic-heading-one">
                                        <div class="flex flex-col">
                                            <nav class="mt-2 flex overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
                                                aria-label="Tabs" role="tablist">
                                                <button type="button"
                                                    class="hs-tab-active:font-medium hs-tab-active:border-blue-700 hs-tab-active:text-blue-700 pb-[23px] px-1 border-b border-transparent whitespace-nowrap text-neutral-400 text-base font-medium hover:text-blue-600 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active"
                                                    id="horizontal-scroll-tab-item-1"
                                                    data-hs-tab="#horizontal-scroll-tab-preview"
                                                    aria-controls="horizontal-scroll-tab-preview" role="tab">
                                                    <div class="mx-[46px]">
                                                        Bireysel Fatura
                                                    </div>
                                                </button>
                                                <button type="button"
                                                    class="hs-tab-active:font-medium hs-tab-active:border-blue-700 hs-tab-active:text-blue-700 pb-[23px] px-1 border-b border-transparent whitespace-nowrap text-neutral-400 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                                                    id="horizontal-scroll-tab-item-2"
                                                    data-hs-tab="#horizontal-scroll-tab-2"
                                                    aria-controls="horizontal-scroll-tab-2" role="tab">
                                                    <div class="mx-[46px] ">
                                                        Kurumsal Fatura
                                                    </div>
                                                </button>
                                            </nav>
                                            <div class="mt-[65px] ml-10">
                                                <div id="horizontal-scroll-tab-preview" role="tabpanel"
                                                    aria-labelledby="horizontal-scroll-tab-item-1">
                                                    <PaymentTab :fakeData="fakeData"
                                                        @passengerSelected="handlePassengerSelected" />
                                                </div>
                                                <div id="horizontal-scroll-tab-2" class="hidden" role="tabpanel"
                                                    aria-labelledby="horizontal-scroll-tab-item-2">
                                                    <PaymentTab2 :fakeData="fakeData2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="hs-accordion items-centers rounded-xl bg-white mb-4 last:mb-[46px]"
                                    id="hs-basic-heading-two">
                                    <button
                                        class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                                        aria-controls="hs-basic-collapse-two">
                                        <div class="flex flex-row items-center justify-between w-full">
                                            <div class="flex flex-row items-center">
                                                <div
                                                    class="text-black text-lg font-semibold font-['Plus Jakarta Sans'] ml-[40px] py-[35px]">
                                                    Ödeme
                                                </div>
                                            </div>
                                            <div class="flex flex-row">
                                                <div class="items-center flex pl-1 mr-6">
                                                    <IconAccordionActiveArrow
                                                        class="hs-accordion-active:block hidden" />
                                                    <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    <div id="hs-basic-collapse-two"
                                        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-basic-heading-two">
                                        <div class="flex flex-col">
                                            <nav class="mt-2 flex overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
                                                aria-label="Tabs" role="tablist">
                                                <button type="button"
                                                    class="hs-tab-active:font-medium hs-tab-active:border-blue-700 hs-tab-active:text-blue-700 pb-[23px] px-1 border-b border-transparent whitespace-nowrap text-neutral-400 text-base font-medium hover:text-blue-600 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active"
                                                    id="horizontal-scroll-tab-item-1"
                                                    data-hs-tab="#horizontal-scroll-tab-preview"
                                                    aria-controls="horizontal-scroll-tab-preview" role="tab">
                                                    <div class="mx-[46px]">
                                                        Kredi Kartı ile Ödeme
                                                    </div>
                                                </button>
                                            </nav>
                                            <div class="mt-[58px] ml-10">
                                                <div id="horizontal-scroll-tab-preview" role="tabpanel"
                                                    aria-labelledby="horizontal-scroll-tab-item-1">
                                                    <CreditCartTab :fakeData="fakeCreditCart" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-2/5 w-full rounded-[20px]">
                            <div>
                                <div v-for="(item, index) in fakeData" :key="index"
                                    class="bg-white p-[30px] rounded-[20px]">
                                    <h2
                                        class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mt-[10px] mb-[31px] ml-[10px]">
                                        Sipariş Özetiniz
                                    </h2>
                                    <div class="rounded-xl border border-zinc-300">
                                        <div class="flex flex-col justify-between px-[30px] pt-[27px] pb-[13px]">
                                            <div class="flex flex-row justify-between">
                                                <div
                                                    class="text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                                    Kuşadası -
                                                    Samos Bileti</div>
                                                <div>
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.33948 13.6536C8.08642 13.4005 8.08642 12.9902 8.33948 12.7372L14.2045 6.87213C14.4576 6.61907 14.8679 6.61907 15.1209 6.87213L20.986 12.7372C21.239 12.9902 21.239 13.4005 20.986 13.6536C20.7329 13.9066 20.3226 13.9066 20.0696 13.6536L15.3107 8.89475V21.9929C15.3107 22.3508 15.0206 22.6409 14.6627 22.6409C14.3049 22.6409 14.0147 22.3508 14.0147 21.9929L14.0147 8.89475L9.25589 13.6536C9.00283 13.9066 8.59254 13.9066 8.33948 13.6536Z"
                                                            fill="black" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div v-if="newData.Departure?.AdultSummary !== null" class="flex flex-row justify-between mb-[31px] mt-10">
                                                <p
                                                    class="text-neutral-700 text-base font-normal font-['Plus Jakarta Sans']">
                                                    Yetişkin Yolcu
                                                </p>
                                                <p
                                                    class="text-right text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                                    {{ newData.Departure?.AdultSummary }}</p>
                                            </div>
                                            <div v-if="newData.Departure?.ChildSummary !== null" class="flex flex-row justify-between mb-[31px]">
                                                <p
                                                    class="text-neutral-700 text-base font-normal font-['Plus Jakarta Sans']">
                                                    Çocuk Yolcu
                                                </p>
                                                <p
                                                    class="text-right text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                                    {{ newData.Departure?.ChildSummary }}</p>
                                            </div>
                                            <div v-if="newData.Departure?.InfantSummary !== null" class="flex flex-row justify-between mb-[41px]">
                                                <p
                                                    class="text-neutral-700 text-base font-normal font-['Plus Jakarta Sans']">
                                                    Bebek Yolcu
                                                </p>
                                                <p
                                                    class="text-right text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                                    {{ newData.Departure?.InfantSummary }}</p>
                                            </div>
                                        </div>
                                        <div class="w-full h-[1px] origin-top-left border border-zinc-300">
                                        </div>
                                        <div class="flex flex-col justify-between px-[30px] pt-[31px] pb-10">
                                            <div class="flex flex-row justify-between">
                                                <div
                                                    class="text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                                    Yolculuk Bilgileri</div>
                                                <div>
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.33948 13.6536C8.08642 13.4005 8.08642 12.9902 8.33948 12.7372L14.2045 6.87213C14.4576 6.61907 14.8679 6.61907 15.1209 6.87213L20.986 12.7372C21.239 12.9902 21.239 13.4005 20.986 13.6536C20.7329 13.9066 20.3226 13.9066 20.0696 13.6536L15.3107 8.89475V21.9929C15.3107 22.3508 15.0206 22.6409 14.6627 22.6409C14.3049 22.6409 14.0147 22.3508 14.0147 21.9929L14.0147 8.89475L9.25589 13.6536C9.00283 13.9066 8.59254 13.9066 8.33948 13.6536Z"
                                                            fill="black" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="flex flex-row justify-between mb-[31px] mt-10">
                                                <p
                                                    class="text-neutral-700 text-base font-normal font-['Plus Jakarta Sans']">
                                                    Gidiş Tarihi
                                                </p>
                                                <p
                                                    class="text-right text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                                    {{ formatDate(newData.Departure?.DepartureDate) }}</p>
                                            </div>
                                            <div class="flex flex-row justify-between mb-[31px]">
                                                <p
                                                    class="text-neutral-700 text-base font-normal font-['Plus Jakarta Sans']">
                                                    Dönüş Tarihi
                                                </p>
                                                <p
                                                    class="text-right text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                                    {{ formatDate(newData.Return?.DepartureDate) }}</p>
                                            </div>
                                            <div class="flex flex-row justify-between mb-[41px]">
                                                <p
                                                    class="text-neutral-700 text-base font-normal font-['Plus Jakarta Sans']">
                                                    Kalkış Limanı
                                                </p>
                                                <p
                                                    class="text-right text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                                    {{ departureDataRef }}</p>
                                            </div>
                                            <div class="flex flex-row justify-between mb-[41px]">
                                                <p
                                                    class="text-neutral-700 text-base font-normal font-['Plus Jakarta Sans']">
                                                    Varış Limanı
                                                </p>
                                                <p
                                                    class="text-right text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                                    {{ returnDataRef }}</p>
                                            </div>
                                        </div>
                                        <div v-if="!paymentSuccess"
                                            class="w-full h-[1px] origin-top-left border border-zinc-300">
                                        </div>
                                        <div v-if="!paymentSuccess"
                                            class="flex flex-row items-center justify-between px-[30px] py-9">
                                            <div class="text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                                Kazanılacak Mil Puan</div>
                                            <div
                                                class="text-right text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                                                5 puan</div>
                                        </div>
                                    </div>
                                    <div v-if="!paymentSuccess"
                                        class="w-full flex flex-row items-center justify-between px-[30px] bg-slate-200 mt-[10px] rounded-2xl">
                                        <div class="text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                            Mil Puanım: 45
                                        </div>
                                        <div>
                                            <div
                                                class="px-5 py-2 my-5 bg-white rounded-lg border text-center text-black text-base font-medium font-display cursor-pointer">
                                                Kullan
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="paymentSuccess" class="flex flex-row mt-[41px] mb-4">
                                        <div
                                            class="w-[60px] h-[60px] bg-slate-200 rounded-full flex flex-row justify-center items-center">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M26 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V14.3462C4 25.5487 13.4775 29.2638 15.375 29.8937C15.7801 30.0324 16.2199 30.0324 16.625 29.8937C18.525 29.2625 28 25.5475 28 14.345V7C28 6.46957 27.7893 5.96086 27.4142 5.58579C27.0391 5.21071 26.5304 5 26 5ZM26 14.3488C26 24.1512 17.7075 27.4263 16 27.9963C14.3088 27.4338 6 24.1613 6 14.3488V7H26V14.3488ZM15 17V12C15 11.7348 15.1054 11.4804 15.2929 11.2929C15.4804 11.1054 15.7348 11 16 11C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17ZM14.5 21.5C14.5 21.2033 14.588 20.9133 14.7528 20.6666C14.9176 20.42 15.1519 20.2277 15.426 20.1142C15.7001 20.0007 16.0017 19.9709 16.2926 20.0288C16.5836 20.0867 16.8509 20.2296 17.0607 20.4393C17.2704 20.6491 17.4133 20.9164 17.4712 21.2074C17.5291 21.4983 17.4993 21.7999 17.3858 22.074C17.2723 22.3481 17.08 22.5824 16.8334 22.7472C16.5867 22.912 16.2967 23 16 23C15.6022 23 15.2206 22.842 14.9393 22.5607C14.658 22.2794 14.5 21.8978 14.5 21.5Z"
                                                    fill="#1F2A37" />
                                            </svg>
                                        </div>
                                        <div class="flex flex-col ml-[19px]">
                                            <div class="text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                                İptal
                                                ve İade İşlemi</div>
                                            <div
                                                class="w-full text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] leading-snug tracking-tight">
                                                Faturalama sırasında kaydettiğimiz yolcu bilgilerini seçerek fatura
                                                bilgilerini otomatik doldurabilirsiniz.</div>
                                        </div>
                                    </div>
                                    <div v-if="!paymentSuccess"
                                        class="flex flex-row items-center justify-between mt-8 mb-[5px]">
                                        <div class="text-neutral-700 text-lg font-normal font-['Plus Jakarta Sans']">
                                            Toplam
                                            Ödenmesi Gereken</div>
                                        <div class="flex flex-col">
                                            <span
                                                class="text-right text-black text-[22px] font-semibold font-['Plus Jakarta Sans'">
                                                3260TL
                                            </span>
                                            <span
                                                class="text-neutral-500 text-[10px] font-semibold font-['Plus Jakarta Sans'] tracking-wider">KDV
                                                DAHİL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!paymentSuccess">
                                <div class="flex flex-row items-center justify-end mt-7 opacity-40">
                                    <span
                                        class="] bg-white rounded-lg border px-4 py-4 flex flex-row just items-center">
                                        Hesabımı Oluştur
                                        <div class="flex">
                                            <input v-model="accountState" @change="handleAccountState" type="checkbox"
                                                class="cursor-pointer ml-3 shrink-0 mt-0.5 border-gray-400 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                id="hs-default-checkbox">
                                        </div>
                                    </span>
                                    <button @click="postData"
                                        class="rounded-lg border px-5 py-4 bg-blue-700 text-white ml-3">
                                        x TL Şimdi Öde
                                    </button>
                              
                                    <!-- <div class="cursor-pointer" @click="showModal">
                                        deneme
                                    </div> -->
                                    <div>
                                        <!-- {{ modal.showModalState.value }} -->
                                        <Teleport to="#target">
                                            <div v-if="showModalState"
                                                class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 opacity-40 w-36 h-36  m-auto overflow-y-hidden">
                                                <div class=" bg-gray-100 z-60">
                                                    MODAL AÇ MODAL AÇ
                                                </div>
                                                <div @click="closeModal">
                                                    CLOSE MODAL MODAL
                                                </div>
                                            </div>
                                        </Teleport>
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
// @ts-ignore
import IconArrowPaymentL from '@/components/icons/IconArrowPaymentL.vue'
import IconAccordionActiveArrow from '@/components/icons/IconAccordionActiveArrow.vue'
import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue'
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue'
import PaymentTab from './components/PaymentTab.vue'
import PaymentSuccess from './PaymentSuccess.vue'
import { useRouter } from "vue-router";
import CreditCartTab from './components/CreditCartTab.vue'
import { computed, ref, Teleport, onMounted } from "vue";
import { useModal } from '../../compasable/useModal'
import PaymentTab2 from './components/PaymentTab2.vue'
import { useTripStore } from '@/stores/tripStore'
import { useAccordionsStore } from '@/stores/accordions'


const departureDataRef = ref(null);
const returnDataRef = ref(null);

import newSignUp from '../../../src/components/advanced/newSıgnInModal.vue';
// import { useModal } from '@/compasable/useModal'
// const modal = useModal();

const selectedPassengerFromChild = ref(null);

// Method to handle the passenger selected event
const handlePassengerSelected = (passenger: any) => {
    selectedPassengerFromChild.value = passenger;
    console.log('Passenger selected in parent:', passenger);
};

import { getQueryApi } from '@/utils/globalHelper'

interface Passenger {
    id?: string;
    invoiceType?: null,
    invoiceName: string;
    invoiceSurname: string;
    invoiceCompanyName?: string;
    invoiceTCKNo?: string;
    invoiceAddress?: string;
    invoiceTaxOffice?: string;
    invoiceTaxNumber?: string;
}

///
import { callPostApi } from '@/utils/globalHelper'
import p from '@/utils/pathConfig'
import envConfig from '../../utils/config'

const allTurist = ref<any>([])
const calculateReservationDeparture = ref<any>([])
const calculateReservationArrival = ref<any>([])
const calculateReservationTripParams = ref<any>([])
const companyID = ref<string | null>(null);
const SaleChannelName = envConfig.SaleChannelName || ''
console.log(SaleChannelName, 'SaleChannelName')
const tripStore = useTripStore()
const stored = useAccordionsStore()
const applicationName = ref(p.Product)
const controllerName = ref('Product')
const name = ref('CalculateReservationFerryPrice')
const name2 = ref('NewReservation')
const { showModalState, showModal, closeModal } = useModal();
// const storedInvoices = ref<any>([])
// const accountState = ref<boolean>(false);
const ferryTravelType = ref(0);
// const priceGroup = ref(0);
const agencyID = ref(0);
// const saleChannelID = ref(0);
const priceGroupID = ref(0);

const combinedData = ref([]);
const newData = ref([]);
const paxListJSON = ref([]);// const postArrivalData = ref<any>(null);
// const journeyID = ref<any>(null);

interface TripParams {
    FerryTravelType?: number;
    PriceGroupID?: number;
    AgencyID?: number;
}

const ferryList = ref([
    {
        journeyID: null,
        journeyTravelDirection: null,
        price: null,
        currencyID: null
    }
]);

const postData = async () => {
    let params;
    const { FerryTravelType, PriceGroupID, AgencyID } = tripStore.getTripParams as TripParams;
    params = {
        ferryTravelType: FerryTravelType,
        agencyID: AgencyID,
        saleChannelID: 1,
        priceGroupID: PriceGroupID,
        touristList: tripStore.touristList,
        ferryList: tripStore.ferryList2,
        // invoiceDetail: selectedPassenger.value //PROP DRİLLİNG HERE!
        // invoiceDetail: 0
        invoiceDetail: tripStore.invoiceDetail
    }
    console.log(params, 'params from payment stepparams from payment step OLDU LA');
    try {
          const response = await callPostApi(applicationName.value, controllerName.value, name2.value, params)
          console.log(response, 'responseVARMI')
          if (response && response.data.status === 1) {
              paymentSuccess.value = true;
          } else {
               console.error('Unexpected response status:', response?.data?.status)
          }
     } catch (error) {
          console.error('An error occurred:', error)
     }
}

const getSelected = tripStore.getSelected;
console.log(getSelected, 'params from payment step');
const accountState = ref<boolean>(false);
const accountStateArray = ref<any>([]);
const store = useAccordionsStore()

const handleAccountState = () => {
    const obj = JSON.stringify(accountState.value)
    accountStateArray.value = [obj];
    console.log(accountStateArray.value, 'OBJ')
    store.setAccountState(obj)
    const deneme = store.getAccountState
    console.log(deneme, 'DENEME');
}

interface Data {
    title: string;
}

const router = useRouter();
const navigateToPassenger = () => {
    router.push('/tickets/passenger');
};

const paymentSuccess = ref(false);

const fakeData: Data = {
    title: "Bireysel Fatura Bilgileri",
};

const fakeData2: Data = {
    title: "Kurumsal Fatura Bilgileri",
}

const fakeCreditCart: Data = {
    title: "Ödemenizi bu sayfa üzerinden güvenli bir şekilde yapabilirsiniz. 3D Secure aktif olarak kullanabilirisiniz.",
}

function formatDate(dateString: any) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}.${month}.${year}`
}

function formatDate2(dateString: any) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

onMounted(() => {
    if (stored.getPassengerData.length === 0) {
        router.push('/')
    } else {
        const departureData = tripStore.getDepartureData;
        console.log(departureData, 'departureDatadepartureDatadepartureData');
        const arrivalData = tripStore.getArrivalData;
        console.log(arrivalData, 'arrivalData');

        const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage') || '{}');
        console.log(selectedLanguage, 'selectedLanguage');

        const LanguageID = selectedLanguage.code || '';

        calculateReservationArrival.value = arrivalData.map((arrival: any) => ({
            ReturnDate: formatDate2(arrival.DepartureDetail.JourneyDate),
            ArrivalSeaportID: arrival.DepartureDetail.SeaportID,
            ReturnJourneyID: arrival.JourneyID
        }));

        calculateReservationDeparture.value = departureData.map((departure: any) => ({
            FerryID: departure.FerryID,
            DepartureDate: formatDate2(departure.DepartureDetail.JourneyDate),
            DepartureJourneyID: departure.JourneyID,
            RouteID: departure.RouteID,
            CurrencyID: departure.CurrencyID,
            DepartureSeaportID: departure.DepartureDetail.SeaportID,
        }));

        const tripStoreParams = tripStore.getTripParams;
        console.log(tripStoreParams, 'tripStoreParamstripStoreParamstripStoreParamstripStoreParams');

        const storeAccordiong = store.getAccordionData;
        console.log(storeAccordiong, 'storeAccordionstoreAccordionstoreAccordion')

        calculateReservationTripParams.value = [{
            AdultCount: tripStoreParams.AdultCount,
            InfantCount: tripStoreParams.InfantCount,
            ChildCount: tripStoreParams.ChildCount,
            AgencyID: tripStoreParams.AgencyID,
            FerryTravelType: tripStoreParams.FerryTravelType,
            PriceGroupID: tripStoreParams.PriceGroupID,
            SaleChannelID: 1,
        }];

        paxListJSON.value = storeAccordiong.map((stored: any, index) => ({
            ID: index + 1,
            birthDate: formatDate2(stored.birthDate),
        }));

        const paxList = JSON.stringify(paxListJSON.value);
        console.log(paxList, 'paxList');

        const combinedObject = {
            LanguageID,
            paxList,
            ...calculateReservationArrival.value[0],
            ...calculateReservationDeparture.value[0],
            ...calculateReservationTripParams.value[0]
        };

        combinedData.value = combinedObject;

        console.log(combinedData.value, 'combinedData');
        console.log(calculateReservationArrival.value, 'calculateReservationArrival.value');
        console.log(calculateReservationDeparture.value, 'calculateReservationDeparture.value');
        console.log(calculateReservationTripParams.value, 'calculateReservationTripParams');

        const fetchApi = async () => {
            let params = combinedData.value
            getQueryApi(applicationName.value, controllerName.value, name.value, params).then((response: any) => {
                if (response.data.status == 1) {
                    const fetchFromWhereData = response.data.result
                    newData.value = JSON.parse(fetchFromWhereData)
                    console.log(newData.value, 'newValue.value');
                    departureDataRef.value = newData.value.Departure.DeparturePortName;
                    returnDataRef.value = newData.value.Return.DeparturePortName;
                }
            })
        }
        fetchApi();
    }
});

</script>

<style scoped></style>