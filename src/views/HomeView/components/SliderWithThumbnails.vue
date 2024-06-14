<template>
     <div v-show="mainHomeSplide.img?.length > 0">
          <div class="lg:px-[100px] px-2 md:px-16 sm:px-8 relative centered-w">
               <div
                    class="lg:absolute block lg:flex flex-row lg:w-[502px] w-full lg:p-0 p-1 lg:mt-0 mt-1 z-20 lg:bg-white bg-slate-200 top-9 left-36 rounded-2xl">
                    <div class="flex flex-col justify-center lg:ml-[35px] ml-5 lg:mt-[32px] mt-3 lg:mb-[31px] mb-3">
                         <p
                              class="text-black lg:text-base text-sm font-semibold font-['Plus Jakarta Sans'] leading-[18.46px] tracking-[2.96px] lg:mb-[17px] mb-2">
                              {{ mainHomeSplide.title }}
                         </p>
                         <div class="flex flex-row justify-between">
                              <p
                                   class="text-black lg:text-[32px] text-sm lg:font-bold font-sans font-['Plus Jakarta Sans'] lg:leading-[36.93px] leading-4 tracking-wide">
                                   {{ mainHomeSplide.subtitle }}
                                   <span class="lg:hidden flex flex-row justify-start items-start font-bold mt-1"> €30
                                   </span>
                              </p>
                              <div class="items-end flex">
                                   <button
                                        class="flex flex-row justify-evenly items-center mx-2 w-[125px] h-[32px] lg:bg-slate-200 bg-white rounded-lg mr-[33px] text-black text-[15px] font-medium font-display">
                                        {{ mainHomeSplide.btnText }}
                                        <IconArrowUpRight />
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div>
                         <div
                              class="bg-white w-[86px] h-[86px] lg:flex hidden flex-row justify-center items-center rounded-full z-50 lg:absolute lg:right-0 lg:translate-x-10 lg:translate-y-5">
                              <p
                                   class="text-center text-stone-800 text-2xl font-bold font-['Plus Jakarta Sans'] bg-slate-200 w-[73px] h-[73px] rounded-full flex flex-row justify-center items-center">
                                   {{ mainHomeSplide.price }}
                              </p>
                         </div>
                    </div>
               </div>
               <div class="flex flex-col">
                    <div id="main-slider" class="splide">
                         <div class="splide__track">
                              <ul class="splide__list">
                                   <li class="splide__slide" v-for="(image, index) in mainHomeSplide.img"
                                        :key="`image-${index}`">
                                        <img :src="getImage(image.url)" alt="Slide Image" />
                                        <div>{{ image.title }}</div>
                                   </li>
                                   <li class="splide__slide" v-for="(image, index) in mainHomeSplide.img"
                                        :key="`image-${index}`">
                                        <img :src="getImage(image.url)" alt="Slide Image" />
                                        <div>{{ image.title }}</div>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div id="thumbnail-slider" class="splide">
                         <div class="splide__track">
                              <ul class="splide__list">
                                   <li class="splide__slide" v-for="(image, index) in mainHomeSplide.img"
                                        :key="`image-${index}`">
                                        <img :src="getImage(image.url)" alt="Slide Image" />
                                        <div>{{ image.title }}</div>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
               <form class="md:relative md:max-w-[798px] hidden md:block mx-auto -translate-y-72 md:z-50 z-40">
                    <div class="flex flex-row">
                         <div :class="{ 'bg-slate-200': showTrue, 'bg-white': !showTrue }"
                              class="bg-slate-200 mr-[5px] py-3 px-9 rounded-t-xl cursor-pointer">
                              <span @click="showTrue = false"
                                   class="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">{{
                                        mainHomeSplide.search?.SearchFerryTicket?.title }}</span>
                         </div>
                         <div :class="{ 'bg-slate-200': !showTrue, 'bg-white': showTrue }"
                              class="mr-4 bg-slate-200 py-3 px-9 rounded-t-xl text-white cursor-pointer">
                              <span @click="showTrue = true"
                                   class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">
                                   {{ mainHomeSplide.search?.SearchReservation?.reservationNo }} </span>
                         </div>
                    </div>

                    <div class="bg-white rounded-b-xl rounded-tr-xl flex justify-between items-center">
                         <div class="flex flex-row items-center w-full" v-show="!showTrue">
                              
                              <div class="hs-dropdown flex flex-row items-center justify-between ml-7">

                                   <button id="hs-dropdown-with-dividers" type="button"
                                        class="cursor-pointer flex flex-col justify-start">
                                        <div class="text-black text-base font-medium font-display tracking-tight">{{
                                             mainHomeSplide.search?.SearchFerryTicket?.from }}</div>
                                        <div
                                             class="text-black text-base font-light font-display tracking-tight overflow-hidden whitespace-nowrap truncate w-20 text-start">
                                             {{ _fromWhere?.TownName }}
                                        </div>
                                   </button>

                                   <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                        aria-labelledby="hs-dropdown-with-dividers">
                                        <div class="flex flex-col w-[277px] p-5">
                                             <div class="flex flex-col">
                                                  <div @click="updateFromWhere(i)" v-for="(i, index) in fromWhereObject"
                                                       :key="index"
                                                       :class="{ 'bg-slate-200': _fromWhere !== null && typeof _fromWhere === 'object' && isEqual(i, _fromWhere) }"
                                                       class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                       <a
                                                            class="text-black text-base font-medium font-display tracking-tight">{{
                                                            i.TownName }}</a>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="pl-7 py-6 flex flex-row cursor-pointer">
                                             <div
                                                  class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mr-[17px]">
                                                  Samos Turlarını Keşfet</div>
                                             <div
                                                  class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex">
                                                  <IconFooter />
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div @click="toggleDataPlacement"
                                   class="bg-gray-200 rounded-full flex flex-row justify-center items-center p-[7px] ml-[26px] cursor-pointer">
                                   <IconArrowsLeftRight />
                              </div>

                              <div class="hs-dropdown flex flex-row items-center">
                                   <button id="hs-dropdown-with-dividers-2" type="button"
                                        class="cursor-pointer flex flex-col justify-start ml-[21px]">
                                        <div class="text-black text-base font-medium font-display tracking-tight">{{
                                             mainHomeSplide.search?.SearchFerryTicket?.to }}</div>
                                        <div
                                             class="w-24 overflow-hidden whitespace-nowrap truncate text-black text-base font-light font-display tracking-tight text-start">
                                             {{ _toWhere?.TownName }}
                                        </div>
                                   </button>
                                   <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                        aria-labelledby="hs-dropdown-with-dividers-2">
                                        <div class="flex flex-col w-[277px] p-5">
                                             <div class="flex flex-col" v-if="toWhereObject.length === 0">
                                                  <div class="flex flex-col">
                                                       <div class="flex flex-col">
                                                            <div
                                                                 class="text-black text-base font-medium font-display tracking-tight">
                                                                 Gidiş Seçiniz</div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="flex flex-col" v-else>
                                                  <div class="flex flex-col">
                                                       <div @click="updateToWhere(i)"
                                                            v-for="(i, index) in toWhereObject" :key="index"
                                                            :class="{ 'bg-slate-200': _toWhere !== null && typeof _toWhere === 'object' && isEqual(i, _toWhere) }"
                                                            class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                            <a
                                                                 class="text-black text-base font-medium font-display tracking-tight">{{
                                                                 i.TownName }}</a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div class="h-14 border-l border-zinc-300 ml-3"></div>

                              <div class="hs-dropdown flex flex-row items-center">
                                   <button id="hs-dropdown-with-dividers-3" type="button"
                                        class="cursor-pointer text-start ml-7">
                                        <div class="text-black text-base font-medium font-display tracking-tight">{{
                                             mainHomeSplide.search?.SearchFerryTicket.ticketType }}</div>
                                        <div
                                             class="text-black text-base font-light font-display tracking-tight overflow-hidden whitespace-nowrap truncate w-24">
                                             {{ _roundTrip?.Name }}
                                        </div>
                                   </button>
                                   <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                        aria-labelledby="hs-dropdown-with-dividers-3">
                                        <div class="flex flex-col w-[277px] p-5">
                                             <div @click="updateToTrip(i)" v-for="(i, index) in travelObject"
                                                  :key="index"
                                                  :class="{ 'bg-slate-200': _roundTrip !== null && typeof _roundTrip === 'object' && isEqualTrip(i, _roundTrip) }"
                                                  class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                  <a
                                                       class="text-black text-base font-medium font-display tracking-tight">{{
                                                       i.Name }}</a>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div class="h-14 border-l border-zinc-300 ml-3"></div>

                              <div class="flex flex-row items-center ml-7">
                                   <div class="cursor-pointer flex flex-col">
                                        <span @click="togglePickerModal"
                                             class="overflow-hidden whitespace-nowrap truncate w-28 text-black text-base font-medium font-display tracking-tight">{{
                                             _roundTrip?.Name }}</span>
                                        <span class="text-black text-base font-light font-display tracking-tight">
                                             {{ formattedDateToShow }}
                                        </span>
                                   </div>
                                   <div v-show="litepickerModalVisible" id="container"
                                        class="w-full h-full -bottom-32 left-0 absolute">
                                        <div id="litepicker">
                                             <div
                                                  class="absolute z-50 border-b-[1px] custom-border-color mt-5 pb-5 w-full">
                                                  <span
                                                       class="ml-12 text-zinc-700 text-lg font-semibold font-sans flex flex-row items-center">
                                                       {{ formattedValue }}
                                                       <span v-if="formattedValue2" class="mx-2"> - </span>
                                                       {{ formattedValue2 }}
                                                  </span>
                                             </div>
                                        </div>
                                        <div @click="togglePickerModal"
                                             class="relative bottom-14 right-0 ml-12 mb-2 bg-slate-100 w-12 items-center justify-center p-2 rounded-2xl cursor-pointer">
                                             <p class="text-stone-800">Seç</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="h-14 border-l border-zinc-300"></div>
                              <div class="dropdown ml-7">
                                   <button @click="toggleDropdown" type="button" class="cursor-pointer">
                                        <div
                                             class="text-start text-black text-base font-medium font-display tracking-tight">
                                             {{ mainHomeSplide.search?.SearchFerryTicket.passengers }}
                                        </div>
                                        <div class="text-black text-base font-light font-display tracking-tight">
                                             {{ mainHomeSplide.search?.SearchFerryTicket.choosePerson }}:

                                             <span class="ml-1 justify-end fixed font-thin text-base">
                                                  {{ totalPassengerCount }}
                                             </span>
                                        </div>
                                   </button>
                                   <div v-show="isOpen"
                                        class="absolute min-w-60 bg-white w-[369px] shadow-md rounded-lg mt-2 divide-y divide-gray-200">
                                        <div class="flex flex-col mt-[37px] ml-6">
                                             <!-- {{ mainHomeSplide.search?.SearchFerryTicket.PassengerType }} -->
                                             <div v-for="(i, index) in mainHomeSplide.search?.SearchFerryTicket.PassengerType"
                                                  :key="index"
                                                  class="flex flex-row mb-[46px] last:mb-9 justify-between items-center">
                                                  <div class="flex flex-row">
                                                       <div
                                                            class="text-black text-base font-medium font-display tracking-tight">
                                                            {{ i.TypeName }}
                                                       </div>
                                                  </div>
                                                  <div class="mr-4 flex flex-row justify-center items-center">
                                                       <span @click="decreaseCount(index)" class="mx-2 cursor-pointer">
                                                            <IconMinus />
                                                       </span>
                                                       <div
                                                            class="text-black text-[22px] font-normal font-display tracking-wide">
                                                            {{ passenger[index].count }}
                                                       </div>
                                                       <span @click="increaseCount(index)" class="mx-2 cursor-pointer">
                                                            <IconPlus />
                                                       </span>
                                                  </div>
                                             </div>
                                             <!-- <button id="hs-dropdown-auto-close-false" type="button"
                                                  class="w-[353px] h-[53px] bg-blue-700 rounded-lg border flex flex-row justify-center items-center mb-5 cursor-pointer">
                                                  <div class="text-white text-base font-medium font-display">{{
                                                       mainHomeSplide.search?.SearchFerryTicket.submitBtn }}</div>
                                             </button> -->
                                        </div>
                                   </div>
                              </div>
                              <div :class="cursorClass" @click="navigateToSecondPage"
                                   class="bg-slate-200 rounded-full justify-center items-center p-[17px] m-[11px] ml-10">
                                   <IconSearchNormal />
                              </div>
                         </div>
                         <div v-show="showTrue">
                              <div class="flex flex-row justify-between items-center ml-5 mx-auto">
                                   <SliderReservationInputs placeholder="PNR Sorgula" ariaLabel="Rezervasyon Sorgula"
                                        type="text" class="mr-3 flex flex-row justify-center items-center" />
                                   <SliderReservationInputs placeholder="Rezervasyon Sorgula"
                                        ariaLabel="Rezervasyon Sorgula" type="text"
                                        class="mr-3 flex flex-row justify-center items-center" />
                                   <div class="bg-slate-200 rounded-full cursor-pointer p-[17px] m-[11px]">
                                        <IconSearchNormal />
                                   </div>
                              </div>
                         </div>
                    </div>
               </form>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import IconSearchNormal from '@/components/icons/IconSearchNormal.vue'
import IconArrowsLeftRight from '@/components/icons/IconArrowsLeftRight.vue'
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue'
import IconFooter from '@/components/icons/IconFooter.vue'
import SliderReservationInputs from './SliderReservationInputs.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconMinus from '@/components/icons/IconMinus.vue'
import Litepicker from 'litepicker'
import { getApi } from '@/utils/globalHelper'
import p from '@/utils/pathConfig'
import { fetchData } from '@/utils/globalHelper'
import { getImage } from '@/utils/globalHelper'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useTripStore } from '../../../stores/tripStore'

const tripStore = useTripStore()
interface searchReservation {
     id: number
     passengerName: string
     reservationNo: string
}

interface passengerType {
     id: number
     TypeName: string
}

interface searchFerryTicket {
     from: string
     id: number
     passenger: string
     roundTrip: string
     ticketType: string
     title: string
     to: string
     PassengerType: passengerType[]
}

interface MainSliderData {
     btnLink: string
     btnText: string
     id: number
     img: Img[]
     price: string
     search: search
     subtitle: string
     title: string
}

interface Passenger {
     age: string
     price: string
     count: number
     id: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter()
const { locale } = useI18n()
const applicationName = ref(p.Product)
const controllerName = ref('Keydefinition')
const name = ref('SearchTownList')
const travelName = ref('FerryTravelTypeList')
const litepickerModalVisible = ref(false)
// const passengerModalVisible = ref(false)
const showTrue = ref(false)
const fromWhereData = ref([])
const fromWhereObject = ref<any[]>([])
const toWhereData = ref([])
const toWhereObject = ref<any[]>([])
const travelData = ref([])
const travelObject = ref<any[]>([])
const departureTownId = ref<string | null>(null)
const arrivalTownId = ref<string | null>(null)
// const ferryTravelId = ref<string | null>(null)
const queryDate = {
     formattedDepartureDate: ref<string | null>(null),
     formattedArrivalDate: ref<string | null>(null)
}
const date = {
     formattedDate: ref<string | null>(null),
     formattedDate2: ref<string | null>(null)
}
const mainHomeSplide = ref<MainSliderData | any>([])
const AdultCount: Passenger = { id: 'adult', age: 'Yetişkin', price: '€41', count: 0 }
const ChildCount: Passenger = { id: 'child', age: 'Çocuk', price: '€31', count: 0 }
const InfantCount: Passenger = { id: 'infant', age: 'Bebek', price: '€0', count: 0 }
const passenger = ref<Passenger[]>([AdultCount, ChildCount, InfantCount])
const _fromWhere = ref<{ TownName: string; TownID: string } | null>(null)
const _toWhere = ref<{ TownName: string; TownID: string } | null>(null)
const _roundTrip = ref<{ Name: string; ID: number } | null>(null)

const togglePickerModal = () => {
     litepickerModalVisible.value = !litepickerModalVisible.value
}

// const togglePassengerModal = () => {
//      passengerModalVisible.value = !passengerModalVisible.value
// }

const isOpen = ref(false)
const toggleDropdown = () => {
     isOpen.value = !isOpen.value
}

const formatDate = (dateInstance: string): string => {
     const date = new Date(dateInstance)
     if (isNaN(date.getTime())) {
          console.error('Invalid date for formatting')
          return '' // Geçersiz tarih için boş string döndür veya başka bir hata yönetimi yap
     }
     const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' }
     return date.toLocaleDateString(locale.value.toLowerCase().toString(), options)
}

const queryFormatDate = (dateInstance: string): string => {
     const date = new Date(dateInstance)
     if (isNaN(date.getTime())) {
          console.error('Invalid date for formatting')
          return '' // Geçersiz tarih için boş string döndür veya başka bir hata yönetimi yap
     }
     const year = date.getFullYear()
     const month = ('0' + (date.getMonth() + 1)).slice(-2)
     const day = ('0' + date.getDate()).slice(-2)
     return `${year}-${month}-${day}`
}

let picker: Litepicker | null = null
let currentSingleMode: boolean | null = null

console.log(locale.value.toLowerCase().toString(), 'locale.value.toLowerCase().toString()')

function createOrUpdateLitepicker(singleMode: boolean) {
     console.log(singleMode, 'singleMode')
     const element = document.getElementById('litepicker')
     if (element instanceof HTMLElement) {
          if (!picker || currentSingleMode !== singleMode) {
               currentSingleMode = singleMode
               if (picker) {
                    picker.destroy()
               }
               picker = new Litepicker({
                    element: element,
                    singleMode: singleMode,
                    numberOfMonths: 2,
                    lang: locale.value.toLowerCase().toString(),
                    autoRefresh: true,
                    inlineMode: true
               })

               picker.on('selected', (date1, date2) => {
                    // Tarih seçimi yapıldığında, tarihleri kontrol edip formatlayalım
                    if (date1.dateInstance && !isNaN(new Date(date1.dateInstance).getTime())) {
                         const selectedDate1 = new Date(date1.dateInstance)
                         console.log(selectedDate1, 'selectedDate1 inside picker on')
                         const today = new Date()

                         if (singleMode) {
                              date.formattedDate2.value = null // Tekli moddaysa ikinci tarihi sıfırlayalım
                              console.log('formattedDate2 value is null in singleMode')
                         }

                         if (!singleMode && date2.dateInstance && !isNaN(new Date(date2.dateInstance).getTime())) {
                              const selectedDate2 = new Date(date2.dateInstance)
                              console.log(selectedDate2, 'selectedDate2 inside picker on')

                              if (selectedDate1 >= today && selectedDate2 >= today) {
                                   // Her iki tarih de bugün veya gelecekteyse formatlayıp kaydedelim
                                   date.formattedDate.value = formatDate(date1.dateInstance)
                                   date.formattedDate2.value = formatDate(date2.dateInstance)
                                   queryDate.formattedDepartureDate.value = queryFormatDate(date1.dateInstance)
                                   queryDate.formattedArrivalDate.value = queryFormatDate(date2.dateInstance)
                                   console.log(queryDate.formattedDepartureDate.value, 'formattedDepartureDate')
                                   console.log(queryDate.formattedArrivalDate.value, 'formattedArrivalDate')
                                   console.log('Both dates are set in doubleMode')
                              }
                         } else if (singleMode && selectedDate1 >= today) {
                              // Tekli modda ve seçilen tarih bugün veya gelecekteyse formatlayıp kaydedelim
                              date.formattedDate.value = formatDate(date1.dateInstance)
                              queryDate.formattedDepartureDate.value = queryFormatDate(date1.dateInstance)
                              console.log('Date is set in singleMode')
                         }
                    } else {
                         console.error('Invalid date selection')
                         // Geçersiz tarih seçimi durumunda, belki bir hata mesajı gösterilebilir
                    }
               })
          } else {
               picker.setDateRange(null, null)
               picker.setOptions({ singleMode: singleMode })
          }
     } else {
          console.error("Litepicker element not found. Make sure you have an element with id 'litepicker' in your HTML.")
     }
}

function updateToTrip(value: { Name: string; ID: number }) {
     _roundTrip.value = value
     console.log(_roundTrip.value.ID, 'roundTrip.VALUE')
     fetchFromWhere()

     // Yeni singleMode değerini hesapla
     const newSingleMode = value.ID !== 1
     console.log(newSingleMode, 'newSingleMode is here')

     // singleMode değeri değiştiyse, Litepicker'ı güncelle
     if (currentSingleMode !== newSingleMode) {
          console.log('singleMode has changed. Updating Litepicker...')
          createOrUpdateLitepicker(newSingleMode)

          // Güncelleme yapıldıktan sonra, mevcut singleMode değerini yeni değerle güncelle
          currentSingleMode = newSingleMode
     } else {
          console.log('singleMode has not changed. No need to update Litepicker.')
     }
}

function updateFromWhere(value: { TownName: string; TownID: string }) {
     console.log(value.TownID)
     departureTownId.value = value.TownID.toString()
     console.log(departureTownId.value, 'departureTownId.VALUE')
     fetchToWhere(departureTownId.value)
     _fromWhere.value = value
     console.log(_fromWhere.value, 'fromWhere.VALUE')
}

function updateToWhere(value: { TownName: string; TownID: string }) {
     _toWhere.value = value
     arrivalTownId.value = value.TownID.toString()
     console.log(arrivalTownId.value, 'arrivalTownId.VALUE')
     console.log(_toWhere.value, 'toWhere.VALUE')
}

function isEqual(obj1: { TownName: string; TownID: string }, obj2: { TownName: string; TownID: string }) {
     return obj1 !== null && obj2 !== null && obj1.TownName === obj2.TownName && obj1.TownID === obj2.TownID
}

function isEqualTrip(obj1: { Name: string }, obj2: { Name: string }) {
     return obj1 !== null && obj2 !== null && obj1.Name === obj2.Name
}

const increaseCount = (index: number) => {
     if (passenger.value[index]) {
          passenger.value[index].count++
          console.log(`Passenger count increased for ${passenger.value[index].age}. New count: ${passenger.value[index].count}`)
          console.log(`Total passenger count: ${totalCount()}`)
     }
}

const decreaseCount = (index: number) => {
     if (passenger.value[index] && passenger.value[index].count > 0) {
          passenger.value[index].count--
          console.log(`Passenger count decreased for ${passenger.value[index].age}. New count: ${passenger.value[index].count}`)
          console.log(`Total passenger count: ${totalCount()}`)
          console.log(passenger.value[index], 'index')
     }
}

const totalCount = () => {
     return passenger.value.reduce((total, current) => total + current.count, 0)
}

const toggleDataPlacement = () => {
     const temp = _fromWhere.value
     _fromWhere.value = _toWhere.value
     _toWhere.value = temp
}

let main: Splide
let thumbnails: Splide

const goToSlide = (index: number) => {
     main.go(index)
     console.log(index, 'index')
}

const getHomeSpide = async () => {
     try {
          let filters = {
               pageName: 'Home'
          }

          const res = await fetchData('pages', locale.value.toLowerCase(), filters)
          if (res) {
               let data = res.data[0].layout
               mainHomeSplide.value = data.find((x: any) => x.__component === 'home-page.home-page')
               console.log(mainHomeSplide, 'mainHomeSplidemainHomeSplidemainHomeSplide')
               initializeSplide()
          }
     } catch (error) {
          return
     }
}

const initializeSplide = () => {
     main = new Splide('#main-slider', {
          type: 'slide',
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true
     }).mount()

     thumbnails = new Splide('#thumbnail-slider', {
          rewind: true,
          fixedWidth: 211,
          isNavigation: true,
          gap: 10,
          pagination: false,
          cover: true,
          arrows: false,
          dragMinThreshold: {
               mouse: 4,
               touch: 10
          },
          breakpoints: {
               1140: {
                    fixedWidth: 136,
                    fixedHeight: 78
               },
               840: {
                    fixedWidth: 126,
                    fixedHeight: 58
               },
               640: {
                    fixedWidth: 96,
                    fixedHeight: 58
               }
          }
     }).mount()

     thumbnails.on('click', (slide) => {
          goToSlide(slide.index)
     })

     main.on('moved', (newIndex) => {
          thumbnails.go(newIndex)
     })
}

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getHomeSpide()
     }
})

onMounted(async () => {
     await getHomeSpide()
     initializeSplide()
})

const formattedDateToShow = computed(() => {
     // Üç tarihin tamamı mevcut olduğunda
     // Yalnızca ilk iki tarih mevcut olduğunda
     if (date.formattedDate.value && date.formattedDate2.value) {
          console.log('first if')
          return `${date.formattedDate.value} - ${date.formattedDate2.value}`
     }
     // Yalnızca ilk tarih mevcut olduğunda
     else if (date.formattedDate.value) {
          console.log('else first if')
          return date.formattedDate.value
     } else {
          console.log('last if')
          return 'Tarih Seçiniz'
     }
})

const formattedValue = computed(() => {
     if (date.formattedDate.value) {
          // console.log('first formattedValue date is here')
          return date.formattedDate.value
     } else {
          return 'Tarih Seçiniz'
     }
})

const formattedValue2 = computed(() => {
     if (date.formattedDate2.value) {
          // console.log('first formattedValue date is here')
          return date.formattedDate2.value
     } else {
          return ''
     }
})

const cursorClass = computed(() => {
     return _fromWhere.value && _toWhere.value && _roundTrip.value && date.formattedDate.value && passenger.value[0]?.count > 0 ? 'cursor-pointer' : 'cursor-not-allowed bg-slate-50'
})

const isClickable = computed(() => {
     return _fromWhere.value && _toWhere.value && _roundTrip.value && date.formattedDate.value && passenger.value[0]?.count > 0
})

const totalPassengerCount = computed(() => {
     const count = totalCount()
     return count > 0 ? count : null
})

const fetchFromWhere = async () => {
     let params = {
          RouteType: 1,
          DepartureTownID: 0
     }
     getApi(applicationName.value, controllerName.value, name.value, params).then((response: any) => {
          if (response.data.status == 1) {
               const fetchFromWhereData = response.data.result
               fromWhereData.value = JSON.parse(fetchFromWhereData)
               fromWhereObject.value = fromWhereData.value
               // console.log(fromWhereObject.value, 'toWhereObject is here')
               // console.log(fromWhereData.value, 'fromWhereData.value')
               // console.log(departureTownId.value, 'DepartureTownId.value is here')
          }
     })
}

const fetchToWhere = async (departureTownIdValue: string | null) => {
     let params = {
          RouteType: 2,
          DepartureTownID: departureTownIdValue
     }
     getApi(applicationName.value, controllerName.value, name.value, params).then((response: any) => {
          if (response.data.status == 1) {
               const fetchtoWhereData = response.data.result
               toWhereData.value = JSON.parse(fetchtoWhereData)
               toWhereObject.value = toWhereData.value
               // console.log(toWhereData.value, 'toWhereDataValue')
               // console.log(toWhereObject.value, 'toWhereObject')
          }
     })
}

const fetchTravelType = async () => {
     getApi(applicationName.value, controllerName.value, travelName.value).then((response: any) => {
          if (response.data.status == 1) {
               const travelTypeData = response.data.result
               // console.log(travelTypeData, 'travelTypeData')
               travelData.value = JSON.parse(travelTypeData)
               travelObject.value = travelData.value
               // console.log(travelData.value, 'travelObject')
               // console.log(travelObject.value, 'travelObject')
          }
     })
}

onMounted(() => {
     fetchFromWhere()
     fetchTravelType()
})
const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage') || '{}')
const languageName = selectedLanguage.code || ''

function navigateToSecondPage() {
     if (!isClickable.value) return

     tripStore.setFromTo(_fromWhere.value.TownName, _toWhere.value.TownName)
     // router.push metodunu kullanarak belirli bir rota adı ve sorgu parametreleri ile yönlendirme yapın
     const adultCount = passenger.value.find((p: any) => p.id === 'adult')?.count || 0
     const childCount = passenger.value.find((p: any) => p.id === 'child')?.count || 0
     const infantCount = passenger.value.find((p: any) => p.id === 'infant')?.count || 0
     router.push({
          name: 'tickets',
          query: {
               FromTownID: departureTownId.value,
               ToTownID: arrivalTownId.value,
               DepartureDate: queryDate.formattedDepartureDate.value,
               ReturnDate: queryDate.formattedArrivalDate.value,
               AdultCount: adultCount,
               ChildCount: childCount,
               InfantCount: infantCount,
               AgencyID: 1,
               PriceGroupID: 1,
               FerryTravelType: _roundTrip.value!.ID,
               // SaleChannelID: 1,
               LanguageIsoCode: languageName
          }
     })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

@keyframes pulse-bg {
     0% {
          background-color: #f1f1f1;
     }

     50% {
          background-color: #d0d0d0;
     }

     100% {
          background-color: #f1f1f1;
     }
}

.loading-splide {
     max-width: 1240px;
     height: 620px;
     background-color: rgb(241, 243, 247);
     animation: pulse-bg 1s infinite;
}

.custom-border-color {
     border-bottom: 1px solid rgb(231, 231, 231);
}

#litepicker {
     display: inline-block !important;
     position: relative !important;
}

.splide {
     padding: 10px 0;
     display: flex;
     flex-direction: row;
     width: 100%;
}

.splide__list {
     display: flex;
     align-items: center;
     width: 100%;
     flex-direction: row;
}

#thumbnail-slider .splide__list {
     display: flex;
     align-items: center;
     width: 100%;
     flex-direction: row;
     justify-content: center;
}

#thumbnail-slider .splide__slide {
     width: 211px;
     height: 106px;
}

.splide__slide {
     opacity: 0.3;
}

.splide__slide.is-active {
     opacity: 1;
}

.splide__track--nav>.splide__list>.splide__slide.is-active {
     border: none !important;
}

.splide__arrow {
     transform: none;
     border-radius: unset;
     opacity: 0.9;
}

.splide__arrow svg {
     fill: #000;
     height: 2em;
     width: 4em;
}

.h-75 {
     height: 75% !important;
}

.h-25 {
     height: 25% !important;
}

.margin-center {
     display: flex;
     flex-direction: row;
     justify-self: center;
}

.splide.splide__arrow {
     background: white;
}

.splide__arrow.splide__arrow--prev:disabled {
     opacity: 1;
     background: transparent;
}

.splide__arrow.splide__arrow--prev {
     height: full;
     top: 40px;
     left: -3rem;
     opacity: 1;
     background: transparent;
}

.splide__arrow.splide__arrow--next {
     height: full;
     top: 40px;
     right: -3rem;
     opacity: 1;
     background: transparent;
}

.splide__arrow.splide__arrow--next:disabled {
     opacity: 1;
     background: transparent;
}

.splide {
     padding: 10px 0;
     display: flex;
     flex-direction: row;
     width: 100%;
}

.splide__list {
     display: flex;
     width: 100%;
     flex-direction: row;
}

.splide__track {
     width: 100%;
}

.splide__slide {
     height: 81px;
     display: block;
     width: 100%;
     background-color: rgb(248 250 252);
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 361px;
     height: 81px;
     flex-shrink: 0;
     border-radius: 20px;
}

.splide__slide div {
     opacity: 0.6;
}

.splide__slide.is-active div {
     opacity: 1;
}

.splide__slide.is-active {
     transform: scale(1);
     filter: grayscale(40%);
     /* background-color: rgba(0, 0, 0, 0.2); */
     opacity: 1;
}

.splide__arrow {
     transform: none;
     border-radius: unset;
     opacity: 0.9;
}

.splide__arrow svg {
     fill: #000;
     height: 5em;
     width: 5rem;
}

@media (max-width: 1024px) {
     .splide__arrow.splide__arrow--prev {
          height: full;
          top: 40px;
          left: -2rem;
          opacity: 1;
          background: transparent;
     }

     .splide__arrow.splide__arrow--next {
          height: full;
          top: 40px;
          right: -2rem;
          opacity: 1;
          background: transparent;
     }
}

.custom-radiel-gradient {
     background: rgb(255, 255, 255);
     background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(233, 238, 245, 1) 35%, rgba(255, 255, 255, 1) 100%);
}
</style>
