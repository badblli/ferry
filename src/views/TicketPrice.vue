<template>
     <div class="flex flex-col justify-center items-center m-auto relative">
          <div class="w-full h-[223px] bg-slate-200"></div>
          <div class="relative top-[-11rem] w-full lg:px-[100px] px-0 md:px-16 sm:px-8 centered-w">
               <h1 class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide mb-14 md:pl-0">
                    {{ pageTitle }}
               </h1>
               <div class="w-full mx-auto bg-neutral-100 rounded-[20px] p-4">
                    <div class="flex flex-col overflow-x-auto">
                         <div class="md:p-8 p-0">
                              <div class="flex flex-row items-center">
                                   <IconAsteriskSimple />
                                   <h2 class="text-black text-base font-medium h-7 ml-3 md:mb-0 mb-2">
                                        {{ whichFerry }}
                                   </h2>
                              </div>
                              <div class="flex flex-col md:flex-row justify-start mt-5">
                                   <div @click="togglePickerModal" class="relative">
                                        <div ref="datepicker" class="py-5 flex flex-col mb-2 md:mb-0 justify-center bg-white rounded-xl border cursor-pointer">
                                             <div class="text-black text-base font-medium font-display tracking-tight ml-[24px] mr-[24px] pointer-events-none">Hangi tarihlerde gitmek istersin?</div>
                                             <div class="text-black text-base font-light font-display tracking-tight ml-[24px] mr-[24px] pointer-events-none">
                                                  {{ selectedDatesLabel }}
                                             </div>
                                        </div>
                                   </div>
                                   <div @click="toggleDropdown2" class="py-3 flex flex-col justify-center bg-white rounded-xl border md:ml-[15px] cursor-pointer">
                                        <div>
                                             <button class="flex flex-row justify-between items-center mr-[15px]">
                                                  <div class="flex flex-col mb-[3px] mr-[100px]">
                                                       <div class="text-black text-start font-medium font-display tracking-tight ml-[24px]">Rota Seçin</div>
                                                       <div class="text-black text-base font-light font-display tracking-tight ml-[24px]">
                                                            {{ baseRoute?.BaseRouteName }}
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <IconArrowDownBlack />
                                                  </div>
                                             </button>
                                             <transition name="dropdown">
                                                  <div v-show="isOpen2" class="absolute min-w-60 z-50 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200">
                                                       <a v-for="(route, index) in baseRouteList" :key="index" @click="changeBaseRoute(route)" class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
                                                            {{ route.BaseRouteName }}
                                                       </a>
                                                  </div>
                                             </transition>
                                        </div>
                                   </div>
                              </div>
                              <div class="mt-8 mb-[80px] rounded-2xl rounded-b-lg">
                                   <div class="bg-white pt-6 pb-4 md:pl-10 pl-4 rounded-t-lg text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                                        {{ tableTitle }}
                                   </div>

                                   <table v-if="formattedTableData && formattedTableData.length > 0" className="relative w-full bg-white">
                                        <thead>
                                             <tr v-for="(header, index) in tableHeaders" :key="index" class="mt-[14px] md:pl-[50px] md:ml-16 m-4 flex flex-row justify-between items-center text-black text-lg font-semibold leading-loose rounded-lg">
                                                  <th v-for="(label, labelIndex) in header" :key="labelIndex" class="w-full flex">
                                                       {{ label }}
                                                  </th>
                                             </tr>
                                        </thead>
                                        <tbody class="">
                                             <tr v-for="(row, index) in formattedTableData" :key="index" class="md:ml-16 md:mr-16 mb:mb-16 m-4 flex flex-row justify-between text-black text-lg font-normal leading-loose border border-neutral-200 rounded-lg [&>*:nth-last-child(1)]:border-none">
                                                  <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="w-full flex justify-center items-center border-r border-neutral-300 pt-[33px] pb-[33px] lg:pl-[50px] pl-2 lg:pr-[50px] pr-2">
                                                       <span v-if="Array.isArray(cell)">
                                                            <ul>
                                                                 <li v-for="(item, itemIndex) in cell" :key="itemIndex" class="leading-4 mb-[27px]">{{ item }}</li>
                                                            </ul>
                                                       </span>
                                                       <span v-else>{{ cell }}</span>
                                                  </td>
                                             </tr>
                                        </tbody>
                                   </table>

                                   <div v-if="formattedTableData && formattedTableData.length > 0" class="mt-16 lg:w-4/6 w-full">
                                        <div v-for="(info, index) in infoData" :key="index" class="flex items-center mt-5">
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
import { ref, onMounted, computed, watch } from 'vue'
import IconAsteriskSimple from '../components/icons/IconAsteriskSimple.vue'
import Litepicker from 'litepicker'
import { useI18n } from 'vue-i18n'
import { fetchData, formatDateToString, getApi } from '@/utils/globalHelper'

const applicationName = ref('Product')
const controllerName = ref('Product')
const controllerName2 = ref('Keydefinition')
const name = ref('GetFerryPriceTable')
const name2 = ref('BaseRouteList')

const litepickerModalVisible = ref(false)
const togglePickerModal = () => {
     litepickerModalVisible.value = !litepickerModalVisible.value
}

const { locale } = useI18n()
const priceList = ref<any[]>([])
const tableHeaders = ref<any[]>([])
const formattedTableData = ref<any[]>([])
const pageTitle = ref('')
// const tableTitle = ref('')
const whichFerry = ref('')
const baseRouteList = ref<any[]>([])
const baseRoute = ref<any>(null)
const datepicker = ref(null)
const selectedDates = ref({
     start: '',
     end: ''
})

const tableTitle = computed(() => {
     return formattedTableData.value && formattedTableData.value.length > 0 ? priceList.value[0].RouteName : 'Sefer Seçiniz'
})

const selectedDatesLabel = computed(() => {
     if (datepicker.value) {
          return selectedDates.value.start && selectedDates.value.end ? `${formatDateToString(selectedDates.value.start)} - ${formatDateToString(selectedDates.value.end)}` : 'Tarih aralığı seçin'
     } else {
          return `${selectedDates.value.start} ${selectedDates.value.end}`
     }
})

const changeBaseRoute = (route: any) => {
     baseRoute.value = route
}

const formatPrices = (data: any[]): any[] => {
     // Boş bir dizi oluşturup, formattedTableData'ya atıyoruz
     const formattedData = data.map((item) => {
          const prices = JSON.parse(item.Prices)

          return {
               // RouteName: item.RouteName,
               CompanyName: item.CompanyName,
               // CurrencyName: prices.CurrencyName || '',
               AdultPrice: prices.AdultPrice > 0 ? `${prices.AdultPrice} €` : '',
               ChildPrice: prices.ChildPrice > 0 ? `${prices.ChildPrice} €` : 'free',
               InfantPrice: prices.InfantPrice > 0 ? `${prices.InfantPrice} €` : 'free'
          }
     })

     // formattedTableData dizisini günceller

     formattedTableData.value = formattedData

     // Aynı zamanda formatlanmış verileri döndürüyoruz
     return formattedData
}

let ticketPrice = ref<any | null>(null)
const getTicketPrice = async () => {
     try {
          let filters = {
               pageName: 'Price'
          }

          const res = await fetchData('pages', locale.value.toLowerCase(), filters)
          if (res) {
               let data = res.data[0].layout
               ticketPrice.value = data.find((x: any) => x.__component === 'price-page.price-page')
               whichFerry.value = ticketPrice.value.whichFerry
               pageTitle.value = res.data[0].pageTitle
               initilizaTableData(ticketPrice.value.PriceTable)
               console.log(ticketPrice.value, 'ticketPriceticketPriceticketPriceticketPriceticketPrice')
          }
     } catch (error) {
          console.error('Hata:', error)
     }
}

const initilizaTableData = (data: any) => {
     let table = data[0]
     console.log(table, 'tableeeeee')

     tableHeaders.value = [table.headers.map((header: any) => header.text)]
     console.log(tableHeaders.value, 'TABLE HEADERS')

     // let rows = table.rows.map((row: any) => row.row.map((row: any) => row.text))
     // console.log(rows, 'ROWS')
     // tableData.value = rows
     // console.log(tableData.value, 'TABLE DATA')
}

const getBaseRouteList = async () => {
     const params = {}
     getApi(applicationName.value, controllerName2.value, name2.value, params).then((response: any) => {
          if (response.data.status == 1) {
               baseRouteList.value = JSON.parse(response.data.result)
          }
     })
}
const getTicketPriceList = async () => {
     let params = {
          DepartureTownID: baseRoute.value?.DepartureTownID,
          ArrivalTownID: baseRoute.value?.ArrivalTownID,
          BeginDate: selectedDates.value.start,
          EndDate: selectedDates.value.end
     }
     getApi(applicationName.value, controllerName.value, name.value, params, true).then((response: any) => {
          if (response.data.status == 1) {
               priceList.value = JSON.parse(response.data.result)
               getTicketPrice()
               formatPrices(priceList.value)
          }
     })
}

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getTicketPriceList()
     }
})
watch(
     [baseRoute, selectedDates],
     async () => {
          if (baseRoute.value && baseRoute.value.DepartureTownID && baseRoute.value.ArrivalTownID && selectedDates.value && selectedDates.value.start && selectedDates.value.end) {
               getTicketPriceList()
          }
     },
     { immediate: true }
)
const isOpen2 = ref(false)
const toggleDropdown2 = () => {
     isOpen2.value = !isOpen2.value
}

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
          minDate: today,
          maxDate: maxDate,
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
     await getTicketPrice()
     await getBaseRouteList()
})
</script>
