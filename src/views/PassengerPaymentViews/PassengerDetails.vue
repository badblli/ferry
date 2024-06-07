<template>
     <div class="flex flex-col justify-center items-center m-auto relative">
          <div class="w-full h-[223px] bg-slate-200" />
          <div class="relative top-[-11rem] w-full lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
               <div class="flex lg:flex-row flex-col justify-between items-center mb-9">
                    <div class="flex flex-row justify-center items-center">
                         <div class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide">{{ from }}</div>
                         <div class="w-[52px] h-[52px] opacity-75 bg-white rounded-full flex justify-center items-center mx-[33px]">
                              <IconsArrowsLeftRight />
                         </div>
                         <div class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide">{{ to }}</div>
                    </div>
                    <div class="flex flex-row items-center">
                         <div class="h-[37px] bg-white rounded-lg border flex justify-center items-center py-[7px] px-5 cursor-pointer">
                              <div class="text-black text-lg font-medium font-display ml-1">{{ passengerHeader?.searchTicket }}</div>
                              <IconArrowDownBlack />
                         </div>
                         <div class="flex flex-row justify-center items-center mr-2 ml-9">
                              <div class="flex flex-col">
                                   <div class="text-black text-base font-medium font-display">{{ passengerHeader?.cost }}</div>
                                   <div class="text-black text-[32px] font-medium font-['Plus Jakarta Sans'] items-end flex flex-row justify-end">41TL</div>
                              </div>
                              <IconArrowDownBlack class="ml-[20px]" />
                         </div>
                    </div>
               </div>
               <div>
                    <div className=" bg-neutral-100 rounded-[20px] p-4">
                         <div class="flex md:flex-row flex-col justify-between">
                              <div class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mt-5">
                                   {{ passengerDetails?.passengerInformation }}
                              </div>
                              <div class="relative inline-flex">
                                   <p @click="toggleDropdown" class="text-black text-lg font-medium font-display items-center justify-center mt-4 mb-8 mr-[14px] p-5 bg-white rounded-lg border px-6 py-2 flex flex-row cursor-pointer">
                                        {{ passengerDetails?.addPassenger }}
                                   </p>

                                   <div v-show="isOpen" class="z-10 absolute mt-20 duration-300 w-[277px] h-[239px] bg-white rounded-xl border py-6 px-4">
                                        <div class="bg-white space-y-3">
                                             <div v-for="(item, index) in passengerDetails?.passengerType" :key="index" @click="handleClick(item.typeId)" class="w-full h-[57px] rounded-lg flex flex-row items-center justify-center cursor-pointer gap-[60px] hover:bg-slate-200 transition-all duration-300">
                                                  <div class="text-black text-base font-medium font-display tracking-tight">
                                                       {{ item.type }}
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div>
                              <transition name="fade">
                                   <div v-show="isOpen2">
                                        <div class="w-[458px] h-[443px] bg-white rounded-xl border fixed inset-0 m-auto z-[999] flex flex-col">
                                             <div class="flex flex-row justify-center mx-auto mt-14">
                                                  <div class="w-[95px] h-[95px] bg-slate-200 rounded-full flex justify-center items-center">
                                                       <IconPersonSimpleRun />
                                                  </div>
                                                  <div class="w-[95px] h-[95px] bg-slate-300 rounded-full flex justify-center items-center -translate-x-9">
                                                       <IconPersonSimpleRun />
                                                  </div>
                                             </div>
                                             <div>
                                                  <!-- <span class="flex flex-row justify-center mt-7">
                                                       Seçtiğiniz tarihler doğrultusunda<br />
                                                       yolcu, çocuk olarak<br />değişecek ve fiyatlandırmayı<br />güncelleyecektir.
                                                  </span> -->
                                                  <span class="flex flex-row justify-center items-center mx-auto mt-7 ml-10">{{ changePassengerTypeModal?.text }}</span>
                                             </div>
                                             <div class="w-[222px] h-[53px] bg-slate-200 rounded-lg border flex flex-row justify-center items-center mx-auto mt-12 cursor-pointer" @click="confirmChange(accordion_idchange)">{{ changePassengerTypeModal?.ConfirmBtn }}</div>
                                             <div class="w-[200px] mx-auto text-center text-black text-base font-medium font-display mt-7 cursor-pointer" @click="cancelChange">{{ changePassengerTypeModal?.CancelBtn }}</div>
                                        </div>
                                   </div>
                              </transition>
                              <transition name="fade">
                                   <div v-show="isOpen3">
                                        <div class="w-[458px] h-[343px] bg-white rounded-xl border fixed inset-0 m-auto z-[999] flex flex-col">
                                             <div class="flex flex-row justify-center mx-auto mt-14">
                                                  <div class="w-[95px] h-[95px] bg-slate-200 rounded-full flex justify-center items-center">
                                                       <IconPersonSimpleRun />
                                                  </div>
                                                  <div class="w-[95px] h-[95px] bg-slate-300 rounded-full flex justify-center items-center -translate-x-9">
                                                       <IconPersonSimpleRun />
                                                  </div>
                                             </div>
                                             <div>
                                                  <span v-html="alertModal?.text" class="flex flex-row justify-center mt-7"> </span>
                                             </div>
                                             <div class="text-center text-black text-base font-medium font-display mt-7 bg-blue-100 w-16 mx-auto p-2 cursor-pointer" @click="cancelChange2">{{ alertModal?.CancelBtn }}</div>
                                        </div>
                                   </div>
                              </transition>
                              <div v-for="(accordion, index) in accordions" :key="index" class="items-centers rounded-xl bg-white mb-2">
                                   <div class="w-full overflow-hidden transition-[height] duration-300">
                                        <div class="flex flex-col">
                                             <AccordionPanel :id="accordion.id" :ariaTitle="'contact'" :title2="getTitle2(accordion)" :title="getTitle(accordion)" :name="accordion.name" :surname="accordion.surname" :updateBtn="passengerDetails?.passengers[0].updateInformation">
                                                  <div class="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-7 px-5 mt-[67px] mb-24">
                                                       <form class="w-full max-w-sm md:ml-[83px] ml-2">
                                                            <div class="flex border-b border-neutral-200 mb-10">
                                                                 <input v-model="accordion.name" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4" type="type" :placeholder="passengerDetails?.passengers[0].name" />
                                                                 <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button"></div>
                                                            </div>
                                                            <div class="flex border-b border-neutral-200 mb-10">
                                                                 <input v-model="accordion.surname" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4" type="type" :placeholder="passengerDetails?.passengers[0].surname" />
                                                                 <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button"></div>
                                                            </div>
                                                            <div class="flex border-b border-neutral-200 mb-10">
                                                                 <input v-model="accordion.email" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4" type="type" :placeholder="passengerDetails?.passengers[0].email" />
                                                                 <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button"></div>
                                                            </div>
                                                            <vue-tel-input v-model="accordion.tel" v-bind="bindProps"></vue-tel-input>
                                                            <div class="flex border-b border-neutral-200 mb-10">
                                                                 <input v-model="accordion.birthDate" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4" type="text" :placeholder="passengerDetails?.passengers[0].birth" @input="formatDate(accordion)" />
                                                                 <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button"></div>
                                                            </div>
                                                            <div class="flex border-b border-neutral-200 mb-10">
                                                                 <select v-model="accordion.nation" name="nation" :id="'nation-' + index" class="cursor-pointer w-full h-12 appearance-none bg-transparent border-none text-gray-700 leading-tight focus:outline-none focus:border-none focus:ring-0 border-transparent pb-5 custom-placeholder pl-4" @change="logValue('Selected Nation:', accordion.nation)">
                                                                      <option disabled value="" selected>{{ passengerDetails.passengers[0].nation }}</option>
                                                                      <option v-for="(data, idx) in countryList" :key="idx" :value="data.Name" class="option-style">
                                                                           {{ data?.Name }}
                                                                      </option>
                                                                 </select>
                                                            </div>
                                                            <div class="flex border-b border-neutral-200 mb-10">
                                                                 <input v-model="accordion.passport" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4" type="type" :placeholder="passengerDetails?.passengers[0].passport" />
                                                                 <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button"></div>
                                                            </div>
                                                            <div class="flex border-b border-neutral-200 mb-10">
                                                                 <input v-model="accordion.id" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4" type="type" :placeholder="passengerDetails?.passengers[0].passenderId" />
                                                                 <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button"></div>
                                                            </div>
                                                       </form>
                                                  </div>
                                                  <div class="px-5 flex flex-row items-center justify-end">
                                                       <div class="flex flex-row rounded-lg border border-gray-300 py-4 px-5 text-center text-black text-base font-medium font-['Plus Jakarta Sans']">
                                                            <div class="mr-4">{{ passengerDetails.passengers[0].mailPassenger }}</div>
                                                            <div @click="setPrimary(index)">
                                                                 <input
                                                                      v-model="accordion.isPrimary"
                                                                      type="checkbox"
                                                                      class="relative w-[35px] h-[21px] bg-stone-300 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 before:inline-block before:w-4 before:h-4 before:bg-white checked:before:bg-white :translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
                                                                 />
                                                            </div>
                                                       </div>
                                                       <!-- @click="handleAccordionClick(accordion)" -->
                                                       <div class="text-center text-black text-base font-medium font-display ml-8 cursor-pointer">
                                                            {{ passengerDetails.passengers[0].clear }}
                                                       </div>
                                                       <div class="flex flex-col">
                                                            <button :class="buttonClass(accordion)" @click="saveAllPassenger(accordion)" class="bg-slate-200 rounded-lg border py-4 px-12 text-center text-black text-base font-medium font-display ml-8 cursor-pointer">
                                                                 {{ buttonText(accordion) }}
                                                            </button>
                                                            <div class="ml-8 mt-2 text-gray-500" v-if="accordion.showBtnWarning">*Alanlar doldurulmalıdır.</div>
                                                       </div>
                                                  </div>
                                             </AccordionPanel>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="mt-16 mb-7 w-full">
                              <div class="flex md:flex-row flex-col justify-between items-center mt-5">
                                   <div class="flex md:flex-row flex-col items-center">
                                        <div class="flex">
                                             <IconAsteriskSimple />
                                             <h2 class="text-black text-base font-medium leading-[26.88px] ml-3">{{ passengerDetails?.note }}.</h2>
                                        </div>
                                        <div class="flex flex-row ml-6 md:mt-0 mt-5 justify-center items-center bg-white py-[7px] pl-4 pr-[3px] rounded-full cursor-pointer">
                                             <div class="text-black text-base font-medium font-display mr-4">{{ passengerDetails?.supportBtn }}</div>
                                             <div class="w-[35px] h-[35px] relative flex-col rounded-full flex bg-slate-100 justify-center items-center">
                                                  <IconArrowUpRight2 />
                                             </div>
                                        </div>
                                   </div>
                                   <div class="flex flex-col">
                                        <div class="py-5 px-8 ml-5 md:mt-0 mt-5 bg-blue-700 rounded-lg border cursor-pointer">
                                             <div @click="navigateToPassenger" class="flex items-center justify-center text-center text-white text-base font-medium font-display">
                                                  {{ passengerDetails?.billingBtn }}
                                             </div>
                                        </div>
                                        <p v-if="showWarning" class="ml-6 mt-2 text-gray-500">{{ passengerDetails?.requiredField }}</p>
                                        <p v-if="showEmptyAccordionError" class="ml-6 mt-2 text-gray-500">{{ passengerDetails?.requiredField }}.</p>
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
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
import { useI18n } from 'vue-i18n'
// import IconAccordionActiveArrow from '@/components/icons/IconAccordionActiveArrow.vue'
// import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue'
// import IconPersonSimpleRun from '@/components/icons/IconPersonSimpleRun.vue'
import IconAsteriskSimple from '@/components/icons/IconAsteriskSimple.vue'
import IconArrowUpRight2 from '@/components/icons/IconArrowUpRight2.vue'
// // import InputBasic from '../PassengerPaymentViews/components/InputBasic.vue'
// import InputBirth from '../PassengerPaymentViews/components/InputBirth.vue'
// import InputPhone from '../PassengerPaymentViews/components/InputPhone.vue'
import IconBaby from '@/components/icons/IconBaby.vue'
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue'
import IconsArrowsLeftRight from '@/components/icons/IconsArrowsLeftRight.vue'
import { useRouter } from 'vue-router'
import { ref, watchEffect, computed, reactive, watch } from 'vue'
import { onMounted } from 'vue'
import { useTripStore } from '@/stores/tripStore'
import { useAccordionsStore } from '@/stores/accordions'
const showWarning = ref(false)
const showEmptyAccordionError = ref(false)

import IconPersonSimpleRun from '@/components/icons/IconPersonSimpleRun.vue'
import IconArrowPaymentL from '@/components/icons/IconArrowPaymentL.vue'
const formattedBirthValue = ref('')
import AccordionPanel from '@/components/advanced/AccordionPanel.vue'
import { getApi, fetchData } from '@/utils/globalHelper'
const applicationName = ref(p.Product)
const controllerName = ref('Keydefinition')
const name = ref('CountryList')

import p from '@/utils/pathConfig'

const { locale } = useI18n()

const convertNewlinesToBr = (text: string) => {
     console.log(text, 'convertNewlinesToBr')
     // \n karakterlerini <br> etiketlerine çevir
     if (text) {
          return text.replace(/\n/g, '<br>')
     } else {
          return ''
     }
}
const getTitle = (accordion: any) => {
     console.log(accordion, 'getTitle', accordion._id)
     switch (accordion._id) {
          case 1:
               return passengerDetails.value?.passengers[accordion._id - 1].type
          case 2:
               return passengerDetails.value?.passengers[accordion._id - 1].type
          case 3:
               return passengerDetails.value?.passengers[accordion._id - 1].type
          default:
               return 'Passenger'
     }
}

// const clearForm = () => {

// }

const resetForm = (accordion: any) => {
     accordion.name = ''
     accordion.surname = ''
     accordion.email = ''
     accordion.tel = ''
     accordion.birthDate = ''
     accordion.nation = ''
     accordion.passport = ''
     accordion.id = ''
}

const handleAccordionClick = (accordion: any) => {
     resetForm(accordion)
     // Any other logic to handle accordion click can go here
}

const handleClick = (_id: any) => {
     console.log('Clicked item ID:', _id)

     // Add the new accordion item
     accordions.value.push({
          title: 'Passenger',
          age: 'Passenger',
          _id: _id
     })
}

const getTitle2 = (accordion: any) => {
     switch (accordion._id) {
          case 1:
               return IconPersonSimpleRun
          case 2:
               return IconPersonSimpleRun
          case 3:
               return IconBaby
          default:
               return IconArrowPaymentL
     }
}

const isOpen = ref(false)
const toggleDropdown = () => {
     isOpen.value = !isOpen.value
}

const accordions = ref<any[]>([])
const countryList = ref<string | null>(null)

const logValue = (label: any, value: any) => {
     console.log(label, value)
}

const bindProps = {
     autoFormat: false,
     disabledFetchingCountry: false,
     enabledFlags: true,
     dropdownOptions: {
          showDialCodeInSelection: true,
          showDialCodeInList: true,
          showFlags: true
     },
     inputOptions: {
          maxlength: 16,
          placeholder: 'Tel'
     },
     mode: 'international',
     validCharactersOnly: true
}

const setPrimary = (index: any) => {
     accordions.value.forEach((accordion: any, i: any) => {
          return (accordion.isPrimary = i === index)
     })
}

const buttonText = (accordion: any) => {
     if (accordion.isLoading) return 'Loading...'
     if (accordion.isComplete) return 'OK'
     return passengerDetails.value?.passengers[0].save
}

const buttonClass = (accordion: any) => {
     let baseClass = 'rounded-lg border py-4 px-12 text-center text-base font-medium font-display ml-8 cursor-pointer'
     if (accordion.isComplete) {
          baseClass += ' bg-green-500'
     } else {
          baseClass += ' bg-slate-200'
     }
     return baseClass
}

const store = useAccordionsStore()
const isOpen2 = ref(false)
const isOpen3 = ref(false)

const accordion_idchange = ref()

const saveAllPassenger = async (accordion: any) => {
     accordion_idchange.value = accordion
     console.log(accordion, 'saveallpassenger accordion')
     accordion.isLoading = true
     accordion.isComplete = false
     accordion.showBtnWarning = false

     const isAllFieldsFilled = accordion.name && accordion.surname && accordion.email && accordion.tel && accordion.nation && accordion.passport && accordion.id && accordion.birthDate

     if (!isAllFieldsFilled) {
          accordion.showBtnWarning = true
          console.log('Tüm gerekli alanlar doldurulmalıdır.')
          accordion.isLoading = false
          return
     }

     try {
          const calculatedId = formatDate(accordion)
          if (calculatedId === null) {
               console.error('Failed to calculate new _id due to invalid birthDate')
               accordion.isLoading = false
               return
          }

          console.log(calculatedId, 'calculatedId')

          if (accordion._id !== calculatedId) {
               isOpen2.value = true // Show confirmation prompt
               console.log('isopen2 value 2 inside save all passenger')
               accordion.isLoading = false
               return
          }

          await new Promise((resolve) => setTimeout(resolve, 1000))
          store.setAccordionData(accordion.id, accordion)
          console.log('setAdultPassenger çağrılıyor:', accordion)
          store.setAdultPassenger(accordion.id, accordion)
          accordion.isComplete = true
          console.log('Kayıt işlemi gerçekleştirildi')
     } catch (error) {
          console.error('Kaydetme hatası:', error)
     } finally {
          accordion.isLoading = false
     }
}

const confirmChange = (accordion: any) => {
     try {
          const countId1 = accordions.value.filter((item) => item._id === 1).length

          // Eğer accordion'ın _id değeri 1 ise ve sadece bir adet varsa uyarı ver
          if (accordion._id === 1 && countId1 === 1) {
               isOpen3.value = true
               isOpen2.value = false
          } else {
               if (!accordion) {
                    console.error('Accordion object is undefined')
                    return
               }

               console.log(accordion, 'confirmChange accordion')

               if (!accordion.birthDate) {
                    console.error('Accordion birthDate is undefined')
                    return
               }

               console.log('Accordion before formatting:', JSON.stringify(accordion))
               console.log('Before formatting date:', accordion.birthDate)

               const calculatedId = formatDate(accordion)

               if (calculatedId === null) {
                    console.error('Failed to calculate new _id due to invalid birthDate')
                    return
               }

               console.log('Calculated ID:', calculatedId)
               console.log('Current accordion._id:', accordion._id)

               if (accordion._id != calculatedId) {
                    console.log(`Updating accordion._id from ${accordion._id} to ${calculatedId}`)
                    accordion._id = calculatedId // Update _id with the new calculatedId
                    store.setAccordionData(accordion.id, accordion) // Update the accordion data
                    console.log('Accordion data updated with new _id:', JSON.stringify(accordion))
               } else {
                    console.log('No update needed, calculatedId matches current _id')
               }

               isOpen2.value = false
               console.log('Accordion data processed successfully.')
          }
     } catch (error) {
          console.error('Error in confirmChange:', error)
     }
}

const cancelChange = () => {
     isOpen2.value = false
}

const cancelChange2 = () => {
     isOpen3.value = false
}

const tripStore = useTripStore()

const from = ref(tripStore.from)
const to = ref(tripStore.to)

const storedTripParams = ref<any>([])
const storedDepartureData = ref<any>([])
const storedArrivalData = ref<any>([])
const storedGetterAccordions = ref<any>([])

const fetchSelectOptions = async () => {
     getApi(applicationName.value, controllerName.value, name.value).then((response: any) => {
          if (response.data.status == 1) {
               const countryData = response.data.result
               // console.log(travelTypeData, 'travelTypeData')
               countryList.value = JSON.parse(countryData)
               console.log(countryList, 'countryList')
               // travelObject.value = travelData.value
               // console.log(travelData.value, 'travelObject')
               // console.log(travelObject.value, 'travelObject')
          }
     })
}

interface PassengerHeader {
     searchTicket: string
     cost: string
}

interface PassengerType {
     id: number
     type: string
     age: string
     typeId: number
}

interface Passenger {
     id: number
     type: string
     updateInformation: string
     name: string
     surname: string
     email: string
     phone: string
     birth: string
     nation: string
     passport: string
     passenderId: string
     mailPassenger: string
     clear: string
     save: string
}

interface PassengerDetail {
     id: number
     __component: string
     passengerInformation: string
     addPassenger: string
     note: string
     supportBtn: string
     billingBtn: string
     passengerType: PassengerType[]
     passengers: Passenger[]
     requiredField: string
}

interface ChangePassengerTypeModal {
     text: string
     ConfirmBtn: string
     CancelBtn: string
}

interface AlertModal {
     text: string
     CancelBtn: string
}

const passengerHeader = ref<PassengerHeader | null>(null)
const passengerDetails = ref<PassengerDetail | null>(null)
const changePassengerTypeModal = ref<ChangePassengerTypeModal | null>(null)
const alertModal = ref<AlertModal | null>(null)
const getPassengersPage = async () => {
     try {
          let filters = {
               pageName: 'Passenger'
          }

          // const res = await fetchData('pages', 'en', filters)
          const res = await fetchData('pages', locale.value.toLowerCase(), filters)

          if (res) {
               let data = res.data[0].layout
               console.log(data, 'data')
               if (data) {
                    passengerHeader.value = data.find((x: any) => x.__component === 'passenger-page.passenger-page')
                    passengerDetails.value = data.find((x: any) => x.__component === 'passenger-page.passenger-detail')
                    changePassengerTypeModal.value = data.find((x: any) => x.__component === 'passenger-page.change-passenger-change-modal')
                    alertModal.value = data.find((x: any) => x.__component === 'shared.alert-modal')
               }
          }
     } catch (error) {
          console.error('Hata:', error)
     }
}

onMounted(() => {
     getPassengersPage()
     storedTripParams.value = tripStore.getTripParams
     storedDepartureData.value = tripStore.getDepartureData
     storedArrivalData.value = tripStore.getArrivalData
     storedGetterAccordions.value = store.getTripParams
     console.log(storedTripParams.value.AdultCount, 'tripStore.getTripParams')
     console.log(storedDepartureData.value, 'tripStore.getDepartureData')
     console.log(storedArrivalData.value, 'tripStore.getArrivalData'), console.log(storedGetterAccordions.value, 'tripStore.getTripParams'), fetchSelectOptions()
})

interface AgeItem {
     title: string
     age: string
     _id: number
}

// const ages = ref<AgeItem[]>([
//      { title: ' Ekle', age: '+12 yaş', _id: 1 },
//      { title: 'Çocuk Ekle', age: '6-12 yaş', _id: 2 },
//      { title: 'Bebek Ekle', age: '0-5 yaş', _id: 3 }
// ])

const router = useRouter()

const navigateToPassenger = () => {
     if (accordions.value.length > 0) {
          const isAllCompleteAndSaved = accordions.value.every((accordion) => {
               //   formatDate(accordion); // Yaşı ve _id'yi güncelle
               return accordion.isComplete && accordion.name && accordion.surname && accordion.email && accordion.tel && accordion.nation && accordion.passport && accordion.id
          })

          if (isAllCompleteAndSaved) {
               showWarning.value = false
               router.push('/payment')
          } else {
               showWarning.value = true
               console.log('Tüm yolcuların bilgileri tam olarak doldurulmalı ve kaydedilmelidir.')
          }
     } else {
          showEmptyAccordionError.value = true
     }
}
watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getPassengersPage()
     }
})
watchEffect(() => {
     if (storedTripParams.value.AdultCount !== undefined) {
          const newAccordions = []

          for (let i = 0; i < storedTripParams.value.AdultCount; i++) {
               newAccordions.push({ _id: 1 })
          }

          for (let i = 0; i < storedTripParams.value.ChildCount; i++) {
               newAccordions.push({ _id: 2 })
          }

          for (let i = 0; i < storedTripParams.value.InfantCount; i++) {
               newAccordions.push({ _id: 3 })
          }

          accordions.value = newAccordions
     }
})

const formatDate = (accordion: any) => {
     try {
          if (!accordion.birthDate) {
               console.error('birthDate is undefined')
               return null
          }

          console.log('Initial birthDate:', accordion.birthDate)

          let birth = accordion.birthDate ? accordion.birthDate.replace(/\D/g, '') : ''
          console.log('After removing non-digits:', birth)

          if (birth.length > 2) {
               birth = birth.substring(0, 2) + '/' + birth.substring(2)
               console.log('After adding first slash:', birth)
          }
          if (birth.length > 5) {
               birth = birth.substring(0, 5) + '/' + birth.substring(5, 9)
               console.log('After adding second slash:', birth)
          }
          accordion.birthDate = birth

          // Ensure birth date string is in the format 'DD/MM/YYYY'
          const parts = birth.split('/')
          if (parts.length !== 3 || parts[0].length !== 2 || parts[1].length !== 2 || parts[2].length !== 4) {
               throw new Error(`Invalid birthDate format: ${birth}`)
          }

          const birthDate = new Date(parts.reverse().join('-'))
          console.log('Birth date object:', birthDate)

          if (isNaN(birthDate.getTime())) {
               throw new Error(`Invalid birthDate after conversion: ${birth}`)
          }

          const today = new Date()
          let age = today.getFullYear() - birthDate.getFullYear()
          const monthDiff = today.getMonth() - birthDate.getMonth()
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
               age--
          }
          console.log('Calculated age:', age)

          let calculatedId
          if (age > 12) {
               calculatedId = 1
          } else if (age > 5) {
               calculatedId = 2
          } else {
               calculatedId = 3
          }
          console.log('Calculated ID:', calculatedId)

          return calculatedId
     } catch (error) {
          console.error('Error in formatDate:', error.message)
          return null
     }
}

import { onBeforeUnmount } from 'vue'
const current_url = window.location.pathname

// this function will work only when you do reload.
window.onbeforeunload = function () {
     localStorage.setItem('page', current_url) // Store the page URL
}

// After first redirection and due to bounce effect will come back to current page.
let initialLoad = true

// Function to handle page unload logic
function handleUnload() {
     localStorage.setItem('page', window.location.pathname)
}

onMounted(() => {
     // Attach the beforeunload event listener
     window.onbeforeunload = handleUnload

     // Check for redirection on initial load (if necessary)
     if (localStorage.getItem('page') === window.location.pathname) {
          localStorage.removeItem('page')
          router.push('/') // Replace with your desired redirect path
     }
})

onBeforeUnmount(() => {
     // Remove the beforeunload event listener on component unmount
     window.onbeforeunload = null
})
</script>

<style>
select option {
     border: 1px solid #d1d5db;
     /* Tailwind's neutral-200 color for the border */
     background: transparent;
     /* No background color */
     color: #000000;
     /* Black text color */
     text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
     /* Optional text shadow */
}

.fade-enter-active,
.fade-leave-active {
     transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */ {
     opacity: 0;
}
</style>
