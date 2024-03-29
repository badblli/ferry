<template>
     <div class="flex flex-col justify-center items-center m-auto relative">
          <div class="w-full h-[223px] bg-slate-200" />
          <div class="relative top-[-11rem] w-full lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
               <div v-if="tripReverseArData.length > 0" class="flex lg:flex-row flex-col justify-between">
                    <div class="flex flex-row">
                         <div
                              class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide lg:mb-14 mb-5">
                              <div v-for="(item, index) in tripFilterReverseArData" :key="index">
                                   {{ item.RouteName }}
                              </div>
                         </div>
                    </div>
                    <div class="flex flex-row md:mb-0 mb-2">
                         <div class="h-[37px] bg-white rounded-lg border flex justify-center items-center p-1">
                              <div class="text-black text-lg font-medium font-display ml-1">Feribot Bileti Ara</div>
                              <IconArrowDownBlack />
                         </div>
                    </div>
               </div>
               <div v-else class="flex lg:flex-row flex-col justify-between">
                    <div class="flex flex-row">
                         <div
                              class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide lg:mb-14 mb-5">
                              Samos</div>
                         <div
                              class="w-[52px] h-[52px] md:mb-0 mb-5 opacity-75 bg-white rounded-full flex justify-center items-center mx-[33px]">
                              <IconsArrowsLeftRight />
                         </div>
                         <div
                              class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide md:mb-14 mb-5">
                              Vathy</div>
                    </div>
                    <div class="flex flex-row md:mb-0 mb-2">
                         <div class="h-[37px] bg-white rounded-lg border flex justify-center items-center p-1">
                              <div class="text-black text-lg font-medium font-display ml-1">Feribot Bileti Ara</div>
                              <IconArrowDownBlack />
                         </div>
                         <div
                              class="h-[37px] bg-white rounded-lg border flex justify-center items-center p-1 ml-[10px]">
                              <div class="text-black text-lg font-medium font-display ml-1">Sırala</div>
                              <IconArrowDownBlack />
                         </div>
                    </div>
               </div>
               <div>
                    <div className=" bg-neutral-100 rounded-[20px] p-4 ">
                         <div class=" mx-12 mt-8 mb-8 flex flex-row items-center justify-between">
                              <div class="flex flex-row items-center">
                                   <div class="w-[63px] h-[63px] bg-white rounded-full">
                                        <IconGroupFerrry />
                                   </div>
                                   <div class="text-black text-2xl font-medium font-display tracking-wide ml-5">
                                        Samos to Vathy, November 22</div>
                              </div>
                              <div
                                   class="h-[37px] w-32 bg-white rounded-lg border flex justify-start items-center p-1 ml-[10px]">
                                   <div class="text-black text-lg font-medium font-display ml-4 mr-5">Sırala</div>
                                   <IconArrowDownBlack />
                              </div>
                         </div>
                         <div v-if="selectedDepartureData.length > 0">
                              <div v-for="(item, index) in selectedDepartureData" :key="index">
                                   <div
                                        class="flex flex-col md:flex-row md:justify-between bg-white mb-[15px] p-3 rounded-2xl lg:mx-12 md:mx-6 mx-3">
                                        <div class="flex sm:flex-row flex-col justify-between">
                                             <img class="w-[100px] h-[100px] rounded-xl mr-6"
                                                  src="../../assets/EmbeddedImages/meander.jpg" alt="meander" />
                                             <div class="mt-3 mr-5 lg:mr-[75px]">
                                                  <p class="text-black text-base font-medium font-display mb-2">Firma
                                                       adı</p>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ item.CompanyName }}
                                                  </p>
                                             </div>
                                             <div class="mt-3 mr-5 lg:mr-[75px]">
                                                  <p class="text-black text-base font-medium font-display">Kalkış</p>
                                                  <div class="flex flex-row">
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                            {{ queryFormatDate(item.DepartureDetail.JourneyDate) }}
                                                       </p>
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight ml-1">
                                                            {{ item.DepartureDetail.JourneyTime }}
                                                       </p>
                                                  </div>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ item.DepartureDetail.SeaportName }}
                                                  </p>
                                             </div>
                                             <div class="mt-3 mr-5 lg:mr-[75px]">
                                                  <p class="text-black text-base font-medium font-display">Varış</p>
                                                  <div class="flex flex-row">
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                            {{ queryFormatDate(item.ArrivalDetail.JourneyDate) }}
                                                       </p>
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight ml-1">
                                                            {{ item.ArrivalDetail.JourneyTime }}
                                                       </p>
                                                  </div>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ item.ArrivalDetail.SeaportName }}
                                                  </p>
                                             </div>
                                        </div>
                                        <div v-if="!selectedDepartureData"
                                             class="flex flex-row justify-center items-center mr-2 md:my-0 my-5">
                                             <div
                                                  class="text-right text-black text-[28px] font-medium font-['Plus Jakarta Sans']">
                                                  {{ item.Price }}
                                             </div>
                                             <button @click="logSelectedData(item)"
                                                  class="bg-slate-200 rounded-lg border py-2 px-7 ml-8 text-center text-black text-base font-medium font-display hover:bg-neutral-200">Seç</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div v-else>

                              <div className="pt-1">
                                   <div className="flex flex-row items-center gap-5 lg:mx-12 md:mx-6 mx-3 mb-[22px]">
                                        <div id="splide" class="splide" ref="splideRef">
                                             <div class="splide__track">
                                                  <ul class="splide__list">
                                                       <li v-for="(item, index) in tripReverseData" :key="index"
                                                            class="splide__slide">
                                                            <div
                                                                 class="text-center text-black text-lg font-medium font-display">
                                                                 {{ item.TravelDateString }}</div>
                                                            <div
                                                                 class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                                 {{ item.BestPrice }}€
                                                            </div>
                                                       </li>
                                                  </ul>
                                             </div>
                                             <div class="splide__arrows">
                                                  <button class="splide__arrow splide__arrow--prev" type="button"
                                                       aria-controls="mobile-testim-carousel-track"
                                                       aria-label="Go to last slide">
                                                       <IconArrowRight />
                                                  </button>
                                                  <button class="splide__arrow splide__arrow--next" type="button"
                                                       aria-controls="mobile-testim-carousel-track"
                                                       aria-label="Next slide">
                                                       <IconArrowRight />
                                                  </button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div v-for="(item, index) in tripFilterReverseData" :key="index"
                                   class="flex flex-col md:flex-row md:justify-between bg-white mb-[15px] p-3 rounded-2xl lg:mx-12 md:mx-6 mx-3">
                                   <div class="flex sm:flex-row flex-col justify-between">
                                        <img class="w-[100px] h-[100px] rounded-xl mr-6"
                                             src="../../assets/EmbeddedImages/meander.jpg" alt="meander" />
                                        <div class="mt-3 mr-5 lg:mr-[75px]">
                                             <p class="text-black text-base font-medium font-display mb-2">Firma adı</p>
                                             <p
                                                  class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                  {{ item.FerryName }}
                                             </p>
                                        </div>
                                        <div class="mt-3 mr-5 lg:mr-[75px]">
                                             <p class="text-black text-base font-medium font-display">Kalkış</p>
                                             <div class="flex flex-row">
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ queryFormatDate(item.DepartureDetail.JourneyDate) }}
                                                  </p>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight ml-1">
                                                       {{ item.DepartureDetail.JourneyTime }}
                                                  </p>
                                             </div>
                                             <p
                                                  class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                  {{ item.DepartureDetail.SeaportName }}
                                             </p>
                                        </div>
                                        <div class="mt-3 mr-5 lg:mr-[75px]">
                                             <p class="text-black text-base font-medium font-display">Varış</p>
                                             <div class="flex flex-row">
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ queryFormatDate(item.ArrivalDetail.JourneyDate) }}
                                                  </p>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight ml-1">
                                                       {{ item.ArrivalDetail.JourneyTime }}
                                                  </p>
                                             </div>
                                             <p
                                                  class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                  {{ item.ArrivalDetail.SeaportName }}
                                             </p>
                                        </div>
                                   </div>
                                   <div class="flex flex-row justify-center items-center mr-2 md:my-0 my-5">
                                        <div
                                             class="text-right text-black text-[28px] font-medium font-['Plus Jakarta Sans']">
                                             {{ item.Price }}€</div>
                                        <button @click="logSelectedData(item)"
                                             class="bg-slate-200 rounded-lg border py-2 px-7 ml-8 text-center text-black text-base font-medium font-display hover:bg-neutral-200">Seç</button>
                                   </div>
                              </div>
                              <div
                                   class="md:mt-14 mt-7 md:mb-20 mb-10 flex flex-row justify-center items-center text-black text-base font-medium font-display bg-white p-3 w-48 rounded-full m-auto">
                                   Daha fazla
                                   <div class="ml-2">
                                        <IconArrowDownBlack />
                                   </div>
                              </div>
                         </div>
                         <!-- Arrival Date -->
                         <!-- Arrival Date -->
                         <!-- Arrival Date -->
                         <!-- Arrival Date -->
                         <div v-if="selectedArrivalData.length > 0">
                              <div class=" mx-12 mt-8 mb-8 flex flex-row items-center ">
                                   <div class="w-[63px] h-[63px] bg-white rounded-full">
                                        <IconGroupFerrry />
                                   </div>
                                   <div class="text-black text-2xl font-medium font-display tracking-wide ml-5">
                                        Samos to Vathy, November 27</div>
                              </div>
                              <div v-for="(item, index) in selectedArrivalData" :key="index">
                                   <div
                                        class="flex flex-col md:flex-row md:justify-between bg-white mb-[15px] p-3 rounded-2xl lg:mx-12 md:mx-6 mx-3">
                                        <div class="flex sm:flex-row flex-col justify-between">
                                             <img class="w-[100px] h-[100px] rounded-xl mr-6"
                                                  src="../../assets/EmbeddedImages/meander.jpg" alt="meander" />
                                             <div class="mt-3 mr-5 lg:mr-[75px]">
                                                  <p class="text-black text-base font-medium font-display mb-2">Firma
                                                       adı</p>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ item.FerryName }}
                                                  </p>
                                             </div>
                                             <div class="mt-3 mr-5 lg:mr-[75px]">
                                                  <p class="text-black text-base font-medium font-display">Kalkış</p>
                                                  <div class="flex flex-row">
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                            {{ queryFormatDate(item.DepartureDetail.JourneyDate) }}
                                                       </p>
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight ml-1">
                                                            {{ item.DepartureDetail.JourneyTime }}
                                                       </p>
                                                  </div>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ item.DepartureDetail.SeaportName }}
                                                  </p>
                                             </div>
                                             <div class="mt-3 mr-5 lg:mr-[75px]">
                                                  <p class="text-black text-base font-medium font-display">Varış</p>
                                                  <div class="flex flex-row">
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                            {{ queryFormatDate(item.ArrivalDetail.JourneyDate) }}
                                                       </p>
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight ml-1">
                                                            {{ item.ArrivalDetail.JourneyTime }}
                                                       </p>
                                                  </div>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ item.ArrivalDetail.SeaportName }}
                                                  </p>
                                             </div>
                                        </div>
                                        <div v-if="!selectedDepartureData"
                                             class="flex flex-row justify-center items-center mr-2 md:my-0 my-5">
                                             <div
                                                  class="text-right text-black text-[28px] font-medium font-['Plus Jakarta Sans']">
                                                  {{ item.Price }}
                                             </div>
                                             <button @click="logSelectedData(item)"
                                                  class="bg-slate-200 rounded-lg border py-2 px-7 ml-8 text-center text-black text-base font-medium font-display hover:bg-neutral-200">Seç</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div v-else>
                              <div class="mx-12 mt-8 mb-8 flex flex-row items-center">
                                   <div class="w-[63px] h-[63px] bg-white rounded-full">
                                        <IconGroupFerrry />
                                   </div>
                                   <div class="text-black text-2xl font-medium font-display tracking-wide ml-5">
                                        Samos to Vathy, November 27</div>
                              </div>
                              <div v-if="tripReverseArData.length > 0">
                                   <div className="pt-1">
                                        <div
                                             className="flex flex-row items-center gap-5 lg:mx-12 md:mx-6 mx-3 mb-[22px]">
                                             <div id="splide" class="splide" ref="splideRef2">
                                                  <div class="splide__track">
                                                       <ul class="splide__list">
                                                            <li v-for="(item, index) in tripReverseArData" :key="index"
                                                                 class="splide__slide">
                                                                 <div
                                                                      class="text-center text-black text-lg font-medium font-display">
                                                                      {{ item.TravelDateString }}</div>
                                                                 <div
                                                                      class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                                      {{ item.BestPrice }}€
                                                                 </div>
                                                            </li>
                                                       </ul>
                                                  </div>
                                                  <div class="splide__arrows">
                                                       <button class="splide__arrow splide__arrow--prev" type="button"
                                                            aria-controls="mobile-testim-carousel-track"
                                                            aria-label="Go to last slide">
                                                            <IconArrowRight />
                                                       </button>
                                                       <button class="splide__arrow splide__arrow--next" type="button"
                                                            aria-controls="mobile-testim-carousel-track"
                                                            aria-label="Next slide">
                                                            <IconArrowRight />
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div v-for="(item, index) in tripFilterReverseArData" :key="index"
                                        class="flex flex-col md:flex-row md:justify-between bg-white mb-[15px] p-3 rounded-2xl lg:mx-12 md:mx-6 mx-3">
                                        <div class="flex sm:flex-row flex-col justify-between">
                                             <img class="w-[100px] h-[100px] rounded-xl mr-6"
                                                  src="../../assets/EmbeddedImages/meander.jpg" alt="meander" />
                                             <div class="mt-3 mr-5 lg:mr-[75px]">
                                                  <p class="text-black text-base font-medium font-display mb-2">Firma
                                                       adı</p>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ item.FerryName }}
                                                  </p>
                                             </div>
                                             <div class="mt-3 mr-5 lg:mr-[75px]">
                                                  <p class="text-black text-base font-medium font-display">Kalkış</p>
                                                  <div class="flex flex-row">
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                            {{ queryFormatDate(item.DepartureDetail.JourneyDate) }}
                                                       </p>
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight ml-1">
                                                            {{ item.DepartureDetail.JourneyTime }}
                                                       </p>
                                                  </div>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ item.DepartureDetail.SeaportName }}
                                                  </p>
                                             </div>
                                             <div class="mt-3 mr-5 lg:mr-[75px]">
                                                  <p class="text-black text-base font-medium font-display">Varış</p>
                                                  <div class="flex flex-row">
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                            {{ queryFormatDate(item.ArrivalDetail.JourneyDate) }}
                                                       </p>
                                                       <p
                                                            class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight ml-1">
                                                            {{ item.ArrivalDetail.JourneyTime }}
                                                       </p>
                                                  </div>
                                                  <p
                                                       class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                       {{ item.ArrivalDetail.SeaportName }}
                                                  </p>
                                             </div>
                                        </div>
                                        <div class="flex flex-row justify-center items-center mr-2 md:my-0 my-5">
                                             <div
                                                  class="text-right text-black text-[28px] font-medium font-['Plus Jakarta Sans']">
                                                  {{ item.Price }}€</div>
                                             <button @click="logSelectedArrivalData(item)"
                                                  class="bg-slate-200 rounded-lg border py-2 px-7 ml-8 text-center text-black text-base font-medium font-display hover:bg-neutral-200">Seç</button>
                                        </div>
                                   </div>
                                   <div
                                        class="md:mt-14 mt-7 md:mb-20 mb-10 flex flex-row justify-center items-center text-black text-base font-medium font-display bg-white p-3 w-48 rounded-full m-auto">
                                        Daha fazla
                                        <div class="ml-2">
                                             <IconArrowDownBlack />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="mt-20 flex flex-row justify-end cursor-pointer">
                    <div
                         class="w-[222px] h-[53px] bg-blue-700 rounded-lg border opacity-25 flex flex-row items-center justify-center">
                         <div class="text-center text-white text-base font-medium font-display">Devam
                              et</div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
// @ts-ignore
import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import IconsArrowsLeftRight from '@/components/icons/IconsArrowsLeftRight.vue'
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconGroupFerrry from '@/components/icons/IconGroupFerrry.vue'

import { getQueryApi } from '@/utils/globalHelper'
import { useRoute } from 'vue-router'
import p from '@/utils/pathConfig'
import { onMounted, ref, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
const applicationName = ref(p.Product)
const controllerName = ref('Product')
const name = ref('SearchFerry')
const { locale } = useI18n()
const route = useRoute()
// import { useTemporaryStore } from '../../stores/temporaryTicket.ts';
// do not clean
// const store = useTemporaryStore();
// const selectedItem = ref(null);
// do not clean
// const selectItem = (item: any) => {
//     selectedItem.value = item;
//     store.setSelectedItem(item);
//     localStorage.setItem('selectedItem', JSON.stringify(item));
// };
// do not clean
const tripData = ref<TripDataItem[] | any>([])
const tripReverseData = ref<TripDataItem[] | any>([])
const tripReverseDepartureData = ref<TripDataItem[] | any>([])
const tripReverseArData = ref<TripDataItem[] | any>([])
const tripReverseArrivalData = ref<TripDataItem[] | any>([])
// filtered
const tripFilterReverseData = ref<TripDataItem[] | any>([])
const tripFilterReverseArData = ref<TripDataItem[] | any>([])
const selectedDepartureData = ref<TripDataItem[] | any>([])
const selectedArrivalData = ref<TripDataItem[] | any>([])
// filtered

const logSelectedData = (item: any) => {
     console.log('Tıklanan Butondaki Veriler:')
     console.log(item)
     selectedDepartureData.value.push(item)
     console.log(selectedDepartureData, 'Tıklanan Butondaki Veriler objesi array')
}

const logSelectedArrivalData = (item: any) => {
     console.log('Tıklanan Butondaki Veriler:')
     console.log(item)
     selectedArrivalData.value.push(item)
     console.log(selectedArrivalData, 'Tıklanan Butondaki Veriler objesi array')
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

interface DepartureValidDates {
     TravelDate: string
     TravelDateString: string
     BestPrice: number
}

interface ArrivalDate {
     JourneyDate: string
     JourneyTime: string
     SeaportID: number
     SeaportName: string
}

interface DepartureDetail {
     JourneyDate: string
     JourneyTime: string
     SeaportID: number
     SeaportName: string
}

interface Departures {
     Allotment: number
     ArrivalDate: ArrivalDate
     CompanyID: number
     CompanyName: string
     CurrencyID: number
     CurrencyName: null
     Departure: string
     DepartureDetail: DepartureDetail
     FerryID: number
     FerryName: string
     FerryTravelType: number
     FerryTravelTypeName: null
     JourneyID: number
     JourneyNumber: string
     Price: number
     RouteId: number
     RouteName: string
}

interface ReturnValidDates {
     TravelDate: string
     TravelDateString: string
     BestPrice: number
}

interface Return {
     Allotment: number
     ArrivalDate: ArrivalDate
     CompanyID: number
     CompanyName: string
     CurrencyID: number
     CurrencyName: null
     Departure: string
     DepartureDetail: DepartureDetail
     FerryID: number
     FerryName: string
     FerryTravelType: number
     FerryTravelTypeName: null
     JourneyID: number
     JourneyNumber: string
     Price: number
     RouteId: number
     RouteName: string
}

interface TripDataItem {
     DepartureValidDates: DepartureValidDates[]
     Departures: Departures[]
     ReturnValidDates: ReturnValidDates[]
     Return: Return[]
}

const splideRef = ref<string | HTMLElement>('')
const splideRef2 = ref<string | HTMLElement>('')
const initializeSplide = () => {
     nextTick(() => {
          if (splideRef.value) {
               // splideRef'in bir değeri olduğundan emin ol
               const splide = new Splide(splideRef.value, {
                    type: 'slide',
                    perPage: 3,
                    perMove: 1,
                    arrows: true,
                    pagination: false,
                    gap: '1rem',
                    focus: 'center',
                    interval: 3000,
                    breakpoints: {
                         1380: {
                              perPage: 4
                         },
                         1140: {
                              perPage: 3
                         },
                         840: {
                              perPage: 2
                         },
                         580: {
                              perPage: 1
                         }
                    }
               }).mount()

               const processActiveSlide = () => {
                    const activeSlideIndex = splide.index
                    const activeSlideContent = tripReverseDepartureData.value[activeSlideIndex].DepartureDetail.JourneyDate
                    console.log(activeSlideContent, 'activeSlideContent is hereactiveSlideContent is hereactiveSlideContent is hereactiveSlideContent is hereactiveSlideContent is hereactiveSlideContent is hereactiveSlideContent is here!')
                    console.log(activeSlideIndex, 'activeSlideIndex')
                    console.log(tripReverseDepartureData, 'tripReverseDepartureDatatripReverseDepartureData')
                    tripFilterReverseData.value = tripReverseDepartureData.value.filter((x: any) => {
                         // console.log(x, 'hello')
                         // console.log(x.DepartureDetail.JourneyDate, 'is ggoona be filer')
                         return x.DepartureDetail.JourneyDate === activeSlideContent
                    })
                    console.log(tripFilterReverseData.value, 'Filtered Data! is ERROR BTW BTW')
               }

               // İlk render'da işlemi manuel olarak çağır
               processActiveSlide()

               // Slayt değişikliğinde işlemi tekrar çağır
               splide.on('moved', processActiveSlide)
          }
     })
}
const initializeSplide2 = () => {
     nextTick(() => {
          if (splideRef2.value) {
               // splideRef'in bir değeri olduğundan emin ol
               const splide = new Splide(splideRef2.value, {
                    type: 'slide',
                    perPage: 3,
                    perMove: 1,
                    arrows: true,
                    pagination: false,
                    gap: '1rem',
                    focus: 'center',
                    interval: 3000,
                    breakpoints: {
                         1380: {
                              perPage: 4
                         },
                         1140: {
                              perPage: 3
                         },
                         840: {
                              perPage: 2
                         },
                         580: {
                              perPage: 1
                         }
                    }
               }).mount()

               const processActiveSlide = () => {
                    const activeSlideIndex = splide.index
                    const activeSlideContent = tripReverseArrivalData.value[activeSlideIndex].ArrivalDetail.JourneyDate
                    console.log(activeSlideContent, 'activeSlideContent is here!')

                    console.log(activeSlideIndex, 'activeSlideIndex')
                    tripFilterReverseArData.value = tripReverseArrivalData.value.filter((x: any) => {
                         console.log(x, 'hello2');
                         // console.log(x.ArrivalDetail.JourneyDate, 'is gonna be filter')
                         return x.ArrivalDetail.JourneyDate === activeSlideContent
                    })
                    console.log(tripFilterReverseArData.value, 'tripFilterReverseArData - ARRİVAL ARRİVAL')
               }
               processActiveSlide()
               splide.on('moved', processActiveSlide)
          }
     })
}

const fetchData = async () => {
     let params = {
          FromTownID: route.query.FromTownID,
          ToTownID: route.query.ToTownID,
          DepartureDate: route.query.DepartureDate,
          ArrivalDate: route.query.ArrivalDate,
          AdultCount: route.query.AdultCount,
          ChildCount: route.query.ChildCount,
          InfantCount: route.query.InfantCount
     }
     getQueryApi(applicationName.value, controllerName.value, name.value, params)
          .then((response: any) => {
               if (response.data.status == 1) {
                    const fetchTripDatas = response.data.result
                    tripData.value = JSON.parse(fetchTripDatas)
                    tripReverseData.value = tripData.value.DepartureValidDates ? tripData.value.DepartureValidDates.reverse() : []
                    tripReverseDepartureData.value = tripData.value.Departures ? tripData.value.Departures.reverse() : []
                    tripReverseArData.value = tripData.value.ReturnValidDates ? tripData.value.ReturnValidDates.reverse() : []
                    tripReverseArrivalData.value = tripData.value.Returns ? tripData.value.Returns.reverse() : []
                    console.log(tripReverseArData, 'tripReverse arrival is here new xxxxxxxxxxxxxxxxx');
                    console.log(tripReverseDepartureData, 'tripReverseDepartureDatatripReverseDepartureDatatripReverseDepartureDatatripReverseDepartureDatatripReverseDepartureDatatripReverseDepartureDatatripReverseDepartureDatatripReverseDepartureDatatripReverseDepartureDatatripReverseDepartureData')
                    console.log(tripData, 'tripData')
                    console.log(tripReverseArrivalData, 'tripReverseArrival2tripReverseArrival2tripReverseArrival2tripReverseArrival2tripReverseArrival2tripReverseArrival2')

                    initializeSplide()
                    initializeSplide2()
               }
          })
          .catch((error) => {
               console.error('An error occurred:', error)
          })
}

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          // console.log(newLocale, 'new', oldLocale, 'old')
          fetchData()
     }
})

onMounted(async () => {
     await fetchData()
     initializeSplide()
     initializeSplide2()
})
</script>

<style scoped>
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

.splide__slide.is-active {
     transform: scale(1);
     filter: grayscale(100%);
     background-color: white;
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
     filter: grayscale(100%);
     background-color: white;
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
</style>
