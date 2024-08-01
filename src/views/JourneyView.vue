<template>
     <!-- <DatePicker /> -->
     <div class="flex flex-col justify-center items-center m-auto relative">
          <div class="w-full h-[223px] bg-slate-200" />
          <div class="relative top-[-11rem] w-full lg:px-[100px] px-0 md:px-16 sm:px-8 centered-w">
               <div class="flex flex-col md:flex-row justify-between">
                    <h1 class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide md:mb-14 mb-5">
                         {{ pageTitle }}
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
                                   <div @click="togglePickerModal" class="relative">
                                        <div ref="datepicker"
                                             class="py-5 flex flex-col mb-2 md:mb-0 justify-center bg-white rounded-xl border cursor-pointer">
                                             <div
                                                  class="text-black text-base font-medium font-display tracking-tight ml-[24px] mr-[24px] pointer-events-none">
                                                  Hangi tarihlerde gitmek istersin?</div>
                                             <div
                                                  class="text-black text-base font-light font-display tracking-tight ml-[24px] mr-[24px] pointer-events-none">
                                                  {{ selectedDatesLabel }}
                                                  <!-- {{ selectedDates.start }} {{ selectedDates.end }} -->
                                             </div>
                                        </div>
                                   </div>
                                   <div @click="toggleDropdown2"
                                        class="py-3 flex flex-col justify-center bg-white rounded-xl border md:ml-[15px] cursor-pointer">
                                        <div>
                                             <button class="flex flex-row justify-between items-center mr-[15px]">
                                                  <div class="flex flex-col mb-[3px] mr-[100px]">
                                                       <div
                                                            class="text-black text-start font-medium font-display tracking-tight ml-[24px]">
                                                            Rota Seçin</div>
                                                       <div
                                                            class="text-black text-base font-light font-display tracking-tight ml-[24px]">
                                                            {{ baseRoute?.BaseRouteName }}
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <IconArrowDownBlack />
                                                  </div>
                                             </button>
                                             <transition name="dropdown">
                                                  <div v-show="isOpen2"
                                                       class="absolute min-w-60 z-50 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200">
                                                       <a v-for="(route, index) in baseRouteList" :key="index"
                                                            @click="changeBaseRoute(route)"
                                                            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                            href="#">
                                                            {{ route.BaseRouteName }}
                                                       </a>
                                                  </div>
                                             </transition>
                                        </div>
                                   </div>
                              </div>

                              <div class="mt-8 mb-[80px] rounded-2xl rounded-b-lg">
                                   <div
                                        class="bg-white pt-6 pb-4 pl-10 rounded-t-lg text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                                        {{ tableTitle }}
                                   </div>
                                   <table v-if="formattedTableData && formattedTableData.length > 0"
                                        class="relative w-full bg-white">
                                        <thead>
                                             <tr v-for="(header, index) in tableHeaders" :key="index"
                                                  class="mt-[64px] md:pl-[50px] first:md:ml-16 md:ml-20 m-4 flex flex-row justify-between items-center text-black text-lg font-semibold leading-loose rounded-lg"
                                                  :class="[index === 0 ? 'mb:mb-16' : 'mb:mb-20']">
                                                  <th v-for="(label, labelIndex) in header" :key="labelIndex"
                                                  class="first:ml-0 ml-8 last:ml-0"
                                                       :class="[labelIndex === 0 ? 'w-1/2' : 'w-full', 'flex']">
                                                       {{ label }}
                                                  </th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr v-for="(row, index) in formattedTableData" :key="index"
                                                  class="md:ml-16 md:mr-16 mb:mb-16 m-4 flex flex-row justify-between text-black text-lg font-normal border border-neutral-200 rounded-lg [&>*:nth-last-child(1)]:border-none">
                                                  <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                                       :class="[cellIndex === 0 ? 'w-1/2' : 'w-full', 'border-r border-neutral-300 pt-[33px] pb-[33px] lg:pl-[40px] pl-2 lg:pr-[40px] pr-2']">
                                                       <span v-if="Array.isArray(cell)">
                                                            <ul>
                                                                 <li v-for="(item, itemIndex) in cell" :key="itemIndex"
                                                                      class="leading-6 mb-[27px]">{{ item }}</li>
                                                            </ul>
                                                       </span>
                                                       <span class="leading-6" v-else>{{ cell }}</span>
                                                  </td>
                                             </tr>
                                        </tbody>
                                   </table>
                                   <div v-if="formattedTableData && formattedTableData.length > 0"
                                        class="mt-16 lg:w-4/6 w-full">
                                        <div v-for="(info, index) in infoData" :key="index"
                                             class="flex items-center mt-5">
                                             <h2 class="text-black text-base font-medium leading-[26.88px] ml-3">
                                                  {{ info }}
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
import IconAsteriskSimple from '../components/icons/IconAsteriskSimple.vue'
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { getApi } from '@/utils/globalHelper'
import p from '@/utils/pathConfig'
import { fetchData, formatDateToString } from '@/utils/globalHelper'
import Litepicker from 'litepicker'
const { locale } = useI18n()
const tableHeaders = ref([])
// const journey = ref([])
const tableData = ref([])
// const pageTitle = ref('')
const tableTitle = ref('')

const applicationName = ref(p.Product)

const controllerName = ref('Product')
const controllerName2 = ref('Keydefinition')

const name = ref('SearchFerryJourneyList')
const name2 = ref('BaseRouteList')

const isOpen2 = ref(false)
const toggleDropdown2 = () => {
     isOpen2.value = !isOpen2.value
}

const litepickerModalVisible = ref(false)
const togglePickerModal = () => {
     litepickerModalVisible.value = !litepickerModalVisible.value
}
// const tableHeaders = [
//     ["Gün", "Kuşadası Kalkış", "Samosa Kalkış"]
// ];

// const tableData = [
//     ["4 Kasım - Cumartesi", ["Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00"], "Samos Vathy - 17:00"],
//     ["4 Kasım - Cumartesi", ["Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00"], "Samos Vathy - 17:00"],
//     ["4 Kasım - Cumartesi", ["Kuşadası - 09:00", "Kuşadası - 09:00"], "Samos Vathy - 17:00"],
// ];

// const infoData = ref([])

interface JourneyNote {
     text: string
}

interface JourneyPage {
     __component: string
     journeyTable: any // journeyTable için doğru tipi belirtin
     notes: JourneyNote[]
}

interface PageData {
     layout: JourneyPage[]
     pageTitle: string
}

interface FetchResponse {
     data: PageData[]
}
interface Route {
     DepartureTownID: number
     ArrivalTownID: number
     BaseRouteName: string
}

const baseRoute = ref<Route | null>(null)
const datepicker = ref(null)
const selectedDates = ref({
     start: '',
     end: ''
})
const selectedDatesLabel = computed(() => {
     if (datepicker.value) {
          return selectedDates.value.start && selectedDates.value.end ? `${formatDateToString(selectedDates.value.start)} - ${formatDateToString(selectedDates.value.end)}` : 'Tarih aralığı seçin'
     } else {
          return `${selectedDates.value.start} ${selectedDates.value.end}`
     }
})
// Reactive variables with appropriate initial values
const journey = ref<JourneyPage | null>(null)
const infoData = ref<string[]>([])
const pageTitle = ref<string>('')
const journeyList = ref<any>([])
const baseRouteList = ref<any>([])
const formattedTableData = ref<any>([])

const getJourney = async () => {
     try {
          let filters = {
               pageName: 'Journey'
          }

          const res: FetchResponse | null = await fetchData('pages', locale.value.toLowerCase(), filters)
          if (res) {
               let data = res.data[0].layout
               let journeyPage = data.find((x: JourneyPage) => x.__component === 'journey-page.journey-page')

               if (journeyPage) {
                    journey.value = journeyPage
                    console.log(journey.value.journeyTable, 'JOURNEY')
                    infoData.value = journey.value.notes.map((x: JourneyNote) => x.text)
                    pageTitle.value = res.data[0].pageTitle
                    initilizaTableData(journey.value.journeyTable)
                    console.log(journey.value, 'journeyjourneyjourneyjourneyjourney')
               } else {
                    console.error('Journey page component not found')
               }
          }
     } catch (error) {
          console.error('Hata:', error)
     }
}
const formatJourneys = (data) => {
     formattedTableData.value = []
     data.Journeys.forEach((journey) => {
          let departureStrings = journey.Departures.map((dep) => dep.JourneyString)
          let returnString = journey.Returns[0].JourneyString

          let formattedJourney = [journey.JourneyDateString, departureStrings.length === 1 ? departureStrings[0] : departureStrings, returnString]
          console.log(formattedJourney, 'formattedJourney')
          formattedTableData.value.push(formattedJourney)
     })
     console.log(formattedTableData.value, 'formattedData')
}
const getJourneyList = async () => {
     let params = {
          DepartureTownID: baseRoute.value?.DepartureTownID,
          ArrivalTownID: baseRoute.value?.ArrivalTownID,
          BeginDate: selectedDates.value.start,
          EndDate: selectedDates.value.end
     }
     getApi(applicationName.value, controllerName.value, name.value, params, true).then((response: any) => {
          if (response.data.status == 1) {
               journeyList.value = JSON.parse(response.data.result)
               getJourney()
               formatJourneys(journeyList.value)
          }
     })
}

const getBaseRouteList = async () => {
     let params = {}
     getApi(applicationName.value, controllerName2.value, name2.value, params).then((response: any) => {
          if (response.data.status == 1) {
               baseRouteList.value = JSON.parse(response.data.result)
          }
     })
}

watch(
     [baseRoute, selectedDates],
     async () => {
          if (baseRoute.value && baseRoute.value.DepartureTownID && baseRoute.value.ArrivalTownID && selectedDates.value && selectedDates.value.start && selectedDates.value.end) {
               getJourneyList()
          }
     },
     { immediate: true }
)

const changeBaseRoute = (route: Route) => {
     baseRoute.value = route
     console.log('changeBaseRoute')
}

const initilizaTableData = (data: any) => {
     let table = data
     console.log(table, 'tableeeeee')
     tableTitle.value = tableTitle.value = formattedTableData.value && formattedTableData.value.length > 0 ? `${journeyList.value.DepartureCaption} - ${journeyList.value.ReturnCaption} ` + table.tableTitle : 'Sefer Seçiniz'

     tableHeaders.value = [[table.headers[0].text, journeyList.value.DepartureCaption, journeyList.value.ReturnCaption]]
     // tableHeaders.value = [table.headers.map((header) => header.text)]
     // console.log(tableHeaders.value, 'TABLE HEADERS')
     // let rows = table.rows.map((row) =>
     //      row.row.map((item) => {
     //           console.log(item, 'ıtemla')
     //           if (item.text.includes(',')) {
     //                return item.text.split(', ').map((s) => s.trim())
     //           }
     //           return item.text
     //      })
     // )

     // console.log(rows, 'ROWS')
     // tableData.value = rows
     // console.log(tableData.value, 'TABLE DATA')
}

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getJourney()
     }
})

const configureDatePicker = () => {
     const today = new Date()
     today.setDate(today.getDate() - 1)

     const maxDate = new Date(today)
     maxDate.setMonth(maxDate.getMonth() + 1)

     const picker = new Litepicker({
          element: datepicker.value,
          singleMode: false,
          format: 'YYYY-MM-DD',
          autoApply: true,
          startDate: today,
          setup: (picker) => {
               // picker.on('show', () => {
               //      picker.setDateRange(today, null)
               // })

               picker.on('selected', (startDate, endDate) => {
                    selectedDates.value.start = startDate.format('YYYY-MM-DD')
                    selectedDates.value.end = endDate.format('YYYY-MM-DD')
               })
          }
     })
}

onMounted(async () => {
     configureDatePicker()
     await getJourney()
     getBaseRouteList()
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
     transition:
          opacity 0.3s,
          transform 0.3s;
}

.dropdown-enter-from,
.dropdown-leave-to {
     opacity: 0;
     transform: translateY(-10px);
}

.dropdown-enter-to,
.dropdown-leave-from {
     opacity: 1;
     transform: translateY(0);
}
</style>
