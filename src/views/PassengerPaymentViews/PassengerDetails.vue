<template>
     <div class="flex flex-col justify-center items-center m-auto relative">
          <div class="w-full h-[223px] bg-slate-200" />
          <div class="relative top-[-11rem] w-full lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
               <div class="flex lg:flex-row flex-col justify-between items-center mb-9">
                    <div class="flex flex-row justify-center items-center">
                         <div class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide">Kuşadası
                         </div>
                         <div
                              class="w-[52px] h-[52px] opacity-75 bg-white rounded-full flex justify-center items-center mx-[33px]">
                              <IconsArrowsLeftRight />
                         </div>
                         <div class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide">Samosa
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
                                        41TL</div>
                              </div>
                              <IconArrowDownBlack class="ml-[20px]" />
                         </div>
                    </div>
               </div>
               <div>
                    <div className=" bg-neutral-100 rounded-[20px] p-4">
                         <div class="flex md:flex-row flex-col justify-between">
                              <div
                                   class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mt-5">
                                   Yolcu ve İletişim Bilgileri</div>
                              <div class="hs-dropdown relative inline-flex [--auto-close:outside]">
                                   <p
                                        class="text-black text-lg font-medium font-display items-center justify-center mt-4 mr-[14px] p-5 bg-white rounded-lg border px-6 py-2 flex flex-row cursor-pointer">
                                        Yeni yolcu ekle</p>
                                   <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 duration hidden z-10 transition-[margin,opacity] opacity-0 duration-300 w-[277px] h-[239px] bg-white rounded-xl border py-6 px-4"
                                        aria-labelledby="hs-dropdown-slideup-animation">
                                        <div @click="addNewPassenger" class="bg-white space-y-3">
                                             <div v-for="(item, index) in ages" :key="index"
                                                  class="w-full h-[57px] rounded-lg flex flex-row items-center justify-center cursor-pointer gap-[60px] hover:bg-slate-200 transition-all duration-300">
                                                  <div
                                                       class="text-black text-base font-medium font-display tracking-tight">
                                                       {{ item.title }}
                                                  </div>
                                                  <div
                                                       class="text-right text-black text-base font-light font-display tracking-tight">
                                                       {{ item.age }}
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="hs-accordion-group">
                              <div v-for="accordion in accordions" :key="accordion"
                                   class="hs-accordion items-centers rounded-xl mb-5 bg-white first:mt-8"
                                   id="hs-active-bordered-heading-one">
                                   <button
                                        class="hs-accordion-toggle inline-flex flex-row justify-between py-3 md:px-[25px] px-1 w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-black disabled:opacity-50 disabled:pointer-events-none"
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
                                                  <div
                                                       class="text-black sm:text-lg text-base font-semibold font-['Plus Jakarta Sans'] ml-[20px]">
                                                       {{ accordion.title }}
                                                  </div>
                                             </div>
                                             <div class="flex flex-row">
                                                  <span
                                                       class="hs-accordion-active:hidden mr-2 text-right items-center justify-center flex text-black text-base font-normal font-display tracking-tight">
                                                       {{ accordion.name }}&nbsp;{{ accordion.surname }} </span>
                                                  <span
                                                       class="hs-accordion-active:hidden hidden md:block px-[6px] text-black text-[15px] font-medium font-display md:mx-7 mx-0 bg-slate-200 rounded-lg">
                                                       Bilgileri Güncelle </span>
                                                  <div class="items-center flex pl-1 md:mr-7 mr-1">
                                                       <IconAccordionActiveArrow
                                                            class="hs-accordion-active:block hidden" />
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
                                                  <form class="w-full max-w-sm md:ml-[83px] ml-2">
                                                       <div class="flex border-b border-neutral-200 mb-10">
                                                            <input v-model="accordion.name"
                                                                 class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                                                                 type="type" placeholder="Name" />
                                                            <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]"
                                                                 type="button"></div>
                                                       </div>
                                                       <div class="flex border-b border-neutral-200 mb-10">
                                                            <input v-model="accordion.surname"
                                                                 class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                                                                 type="type" placeholder="Surname" />
                                                            <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]"
                                                                 type="button"></div>
                                                       </div>
                                                       <div class="flex border-b border-neutral-200 mb-10">
                                                            <input v-model="accordion.email"
                                                                 class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                                                                 type="type" placeholder="E-mail" />
                                                            <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]"
                                                                 type="button"></div>
                                                       </div>
                                                       <vue-tel-input v-model="accordion.tel"
                                                            v-bind="bindProps"></vue-tel-input>
                                                       <div class="flex border-b border-neutral-200 mb-10">
                                                            <input v-model="accordion.birthDate" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4" type="text" placeholder="gg/aa/yyyy" @input="formatDate(accordion)" />
                                                            <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]"
                                                                 type="button"></div>
                                                       </div>
                                                       <div class="flex border-b border-neutral-200 mb-10">
                                                            <input v-model="accordion.nation"
                                                                 class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                                                                 type="type" placeholder="Nation" />
                                                            <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]"
                                                                 type="button"></div>
                                                       </div>
                                                       <div class="flex border-b border-neutral-200 mb-10">
                                                            <input v-model="accordion.passport"
                                                                 class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                                                                 type="type" placeholder="Passport" />
                                                            <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]"
                                                                 type="button"></div>
                                                       </div>
                                                       <div class="flex border-b border-neutral-200 mb-10">
                                                            <input v-model="accordion.id"
                                                                 class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                                                                 type="type" placeholder="id" />
                                                            <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]"
                                                                 type="button"></div>
                                                       </div>
                                                  </form>
                                             </div>
                                             <div class="px-5 flex flex-row items-center justify-end">
                                                  <div
                                                       class="flex flex-row rounded-lg border border-gray-300 py-4 px-5 text-center text-black text-base font-medium font-['Plus Jakarta Sans']">
                                                       <div class="mr-4">Ana Yolcu Olarak Ayarla</div>
                                                       <div @click="setPrimary(index)">
                                                            <input v-model="accordion.isPrimary" type="checkbox"
                                                                 id="hs-xs-switch"
                                                                 class="relative w-[35px] h-[21px] bg-stone-300 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 before:inline-block before:w-4 before:h-4 before:bg-white checked:before:bg-white :translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200" />
                                                       </div>
                                                  </div>
                                                  <div
                                                       class="text-center text-black text-base font-medium font-display ml-8 cursor-pointer">
                                                       Temizle</div>
                                                  <div class="flex flex-col">
                                                       <button :class="buttonClass(accordion)"
                                                            @click="saveAllPassenger(accordion)"
                                                            class="bg-slate-200 rounded-lg border py-4 px-12 text-center text-black text-base font-medium font-display ml-8 cursor-pointer">
                                                            {{ buttonText(accordion) }}
                                                       </button>
                                                       <div class="ml-8 mt-2 text-gray-500"
                                                            v-if="accordion.showBtnWarning">
                                                            *Alanlar
                                                            doldurulmalıdır.
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="mt-16 mb-7 w-full">
                              <div class="flex md:flex-row flex-col justify-between items-center mt-5">
                                   <div class="flex md:flex-row flex-col items-center">
                                        <div class="flex">
                                             <IconAsteriskSimple />
                                             <h2 class="text-black text-base font-medium leading-[26.88px] ml-3">Vize
                                                  işlemlerinizi tamamladan lütfen biletinizi almayınız. Detaylı bilgi ve
                                                  destek için bize ulaşabilirsiniz.</h2>
                                        </div>
                                        <div
                                             class="flex flex-row ml-6 md:mt-0 mt-5 justify-center items-center bg-white py-[7px] pl-4 pr-[3px] rounded-full cursor-pointer">
                                             <div class="text-black text-base font-medium font-display mr-4">Destek AL
                                             </div>
                                             <div
                                                  class="w-[35px] h-[35px] relative flex-col rounded-full flex bg-slate-100 justify-center items-center">
                                                  <IconArrowUpRight2 />
                                             </div>
                                        </div>
                                   </div>
                                   <div class="flex flex-col">
                                        <div
                                             class="py-5 px-8 ml-5 md:mt-0 mt-5 bg-blue-700 rounded-lg border cursor-pointer">
                                             <div @click="navigateToPassenger"
                                                  class="flex items-center justify-center text-center text-white text-base font-medium font-display">
                                                  Faturanlandırmaya Git</div>
                                        </div>
                                        <p v-if="showWarning" class="ml-6 mt-2 text-gray-500">*Alanlar
                                             doldurulmalıdır.</p>
                                        <p v-if="showEmptyAccordionError" class="ml-6 mt-2 text-gray-500">*Alan
                                             Eklenmelidir.</p>
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
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import IconsArrowsLeftRight from '@/components/icons/IconsArrowsLeftRight.vue'
import IconAccordionActiveArrow from '@/components/icons/IconAccordionActiveArrow.vue'
import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue'
import IconPersonSimpleRun from '@/components/icons/IconPersonSimpleRun.vue'
import IconAsteriskSimple from '@/components/icons/IconAsteriskSimple.vue'
import IconArrowUpRight2 from '@/components/icons/IconArrowUpRight2.vue'
// // import InputBasic from '../PassengerPaymentViews/components/InputBasic.vue'
// import InputBirth from '../PassengerPaymentViews/components/InputBirth.vue'
// import InputPhone from '../PassengerPaymentViews/components/InputPhone.vue'
import IconBaby from '@/components/icons/IconBaby.vue'
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue'
import { useRouter } from 'vue-router'
import { ref, watchEffect, computed } from 'vue'
import { onMounted } from 'vue'
import { useTripStore } from '@/stores/tripStore'
import { useAccordionsStore } from '@/stores/accordions'
const showWarning = ref(false)
const showEmptyAccordionError = ref(false)
const formattedBirthValue = ref('')
import AccordionPanel from '@/components/advanced/AccordionPanel.vue';

const bindProps = {
     autoFormat: false,
     disabledFetchingCountry: false,
     enabledFlags: true,
     dropdownOptions: {
          showDialCodeInSelection: true,
          showDialCodeInList: true,
          showFlags: true,
     },
     inputOptions: {
          maxlength: 16,
          placeholder: "Tel",
     },
     mode: "international",
     validCharactersOnly: true,
};

const setPrimary = (index: any) => {
     accordions.value.forEach((accordion: any, i: any) => {
          return accordion.isPrimary = i === index
     })
}

const buttonText = (accordion: any) => {
     if (accordion.isLoading) return 'Loading...';
     if (accordion.isComplete) return 'OK';
     return 'Yolcuyu Kaydet';
};

const buttonClass = (accordion: any) => {
     let baseClass = 'rounded-lg border py-4 px-12 text-center text-base font-medium font-display ml-8 cursor-pointer';
     if (accordion.isComplete) {
          baseClass += ' bg-green-500'; // Başarılı kayıt sonrası yeşil
     } else {
          baseClass += ' bg-slate-200'; // Normal durum
     }
     return baseClass;
};

const store = useAccordionsStore()

const saveAllPassenger = async (accordion: any) => {
     console.log(accordion, 'accordion');
     accordion.isLoading = true;
     accordion.isComplete = false;
     accordion.showBtnWarning = false; // Uyarı durumu başlangıçta false olarak ayarlanır

     // İlgili accordion için tüm alanların kontrolü
     const isAllFieldsFilled = accordion.name && accordion.surname && accordion.email &&
          accordion.tel && accordion.nation && accordion.passport && accordion.id;

     if (!isAllFieldsFilled) {
          accordion.showBtnWarning = true; // Eksik alan varsa yalnızca bu accordion için uyarı göster
          console.log('Tüm gerekli alanlar doldurulmalıdır.');
          accordion.isLoading = false;
          return; // Eksik alanlar varsa işlemi durdur
     }

     try {
          await new Promise(resolve => setTimeout(resolve, 1000)); // Simülasyon için bekleme
          store.setAccordionData(accordion.id, accordion);
          console.log("setAdultPassenger çağrılıyor:", accordion);
          store.setAdultPassenger(accordion.id, accordion);
          accordion.isComplete = true;
          console.log("Kayıt işlemi gerçekleştirildi");
     } catch (error) {
          console.error("Kaydetme hatası:", error);
     } finally {
          accordion.isLoading = false;
     }
};

const tripStore = useTripStore()
const storedTripParams = ref<any>([])
const storedDepartureData = ref<any>([])
const storedArrivalData = ref<any>([])
const storedGetterAccordions = ref<any>([])

onMounted(() => {
     storedTripParams.value = tripStore.getTripParams
     storedDepartureData.value = tripStore.getDepartureData
     storedArrivalData.value = tripStore.getArrivalData
     storedGetterAccordions.value = store.getTripParams
     console.log(storedTripParams.value.AdultCount, 'tripStore.getTripParams')
     console.log(storedDepartureData.value, 'tripStore.getDepartureData')
     console.log(storedArrivalData.value, 'tripStore.getArrivalData'),
          console.log(storedGetterAccordions.value, 'tripStore.getTripParams');
})

interface AgeItem {
     title: string
     age: string
}

const ages = ref<AgeItem[]>([
     { title: 'Yetişkin Ekle', age: '+12 yaş' },
     { title: 'Çocuk Ekle', age: '6-12 yaş' },
     { title: 'Bebek Ekle', age: '0-5 yaş' }
])

const router = useRouter()

const navigateToPassenger = () => {
     // Tüm accordion'lar için gerekli alanların doldurulmuş ve kaydedilmiş olduğunu kontrol et
     if (accordions.value.length > 0) {
          const isAllCompleteAndSaved = accordions.value.every((accordion: any) =>
               accordion.isComplete &&
               accordion.name && accordion.surname && accordion.email &&
               accordion.tel && accordion.nation && accordion.passport && accordion.id
          );

          if (isAllCompleteAndSaved) {
               showWarning.value = false; // Eğer her şey tamamsa, uyarı gösterme
               router.push('/payment'); // Tüm accordionlar uygun şekilde tamamlandıysa ödeme sayfasına yönlendir
          } else {
               showWarning.value = true; // Eğer tüm accordionlar uygun şekilde tamamlanmamışsa uyarı göster
               console.log('Tüm yolcuların bilgileri tam olarak doldurulmalı ve kaydedilmelidir.');
          }
     } else {
          showEmptyAccordionError.value = true;
     }
}

const addNewPassenger = () => {
     // Assuming a basic example where you just add generic passenger details
     accordions.value.push({
          title: 'Bilinmiyor',
          age: 'Bilinmiyor' // or you can dynamically set age based on input or other criteria
     });
}

const accordions = ref<any[]>([]);
// storedTripParams'da bir değişiklik olduğunda accordions'u güncelle
watchEffect(() => {
     if (storedTripParams.value.AdultCount !== undefined) {
          const newAccordions = []

          for (let i = 0; i < storedTripParams.value.AdultCount; i++) {
               newAccordions.push({ title: `Yetişkin ${i + 1}`, age: 'yetişkin' })
          }

          for (let i = 0; i < storedTripParams.value.ChildCount; i++) {
               newAccordions.push({ title: `Çocuk ${i + 1}`, age: 'çocuk' })
          }

          for (let i = 0; i < storedTripParams.value.InfantCount; i++) {
               newAccordions.push({ title: `Bebek ${i + 1}`, age: 'bebek' })
          }

          accordions.value = newAccordions
     }
})

window.onbeforeunload = function () {
     return "Data will be lost if you leave the page, are you sure?";
};

const formattedBirth = ref('');

// const formatDate = () => {
//   formattedBirth.value = formattedBirth.value.replace(/\D/g, '').replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
// };

const formatDate = (accordion) => {
     let birth = accordion.birthDate.replace(/\D/g, '');
     if (birth.length > 2) {
          birth = birth.substring(0, 2) + '/' + birth.substring(2);
     }
     if (birth.length > 5) {
          birth = birth.substring(0, 5) + '/' + birth.substring(5);
     }
     accordion.birthDate = birth;
};

// let timeout = null;

// const redirecting = ref(false);

// window.addEventListener('beforeunload', (event) => {
//      if (!redirecting.value) {
//           event.preventDefault();
//           redirecting.value = true;
//           setTimeout(() => {
//                window.location.href = '/';
//           }, 0);
//           event.returnValue = 'You have unsaved data. Are you sure you want to leave?';
//      }
// });

// window.addEventListener('unload', () => {
//   if (performance.navigation.type === 1) {
//     // Yeniden yükleme tıklanırsa
//     redirecting.value = true;
//     window.location.href = '/';
//   }
// });

// window.addEventListener('load', () => {
//   if (performance.navigation.type === 1) {
//     // Yeniden yükleme tıklanırsa
//     redirecting.value = true;
//     window.location.href = '/';
//   }
// });


</script>

<style>
/* .vue-tel-input {
     border: none,

} */
</style>