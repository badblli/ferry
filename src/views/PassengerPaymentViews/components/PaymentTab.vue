<template>
     <div class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mb-[34px]">
          {{ fakeData.title }}
     </div>
     <div
          class="w-full text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight mb-[34px]">
          Faturalama işlemi için yetişkin kullanıcılardan altta seçim yapabilirsiniz.</div>
     <div class="flex flex-row flex-wrap m-1">
          <div>
               <div
                    class="mr-[10px] py-[13px] pl-[14px] pr-[11px] bg-white rounded-lg border border-stone-300 flex flex-row items-center justify-center cursor-pointer">
                    <div @click="clearForm" class="text-black  text-base font-medium font-['Plus Jakarta Sans'] mr-7">
                         Yeni Fatura Girişi</div>
                    <div>
                         <IconPlus />
                    </div>
               </div>
          </div>

          <div v-for="passenger in storedInvoices" :key="passenger.id || `temp-${index}`"
               @click="selectPassenger(passenger, index)" class="flex flex-row flex-wrap">
               <div :class="isSelectedClass(passenger)"
                    class="mr-[10px] m-1 py-[13px] pl-[14px] pr-[14px] rounded-lg border flex flex-row items-center justify-center cursor-pointer">
                    <div class=" text-base font-medium font-['Plus Jakarta Sans'] mr-[17px]">{{ passenger.name
                         }}&nbsp;{{ passenger.surname }}</div>
                    <div>
                         <IconCheck />
                    </div>
               </div>
          </div>
          <!-- <div v-for="passenger in newInvoices" :key="passenger.id || `temp-${index}`"
          @click="selectPassenger(passenger, index)" class="flex flex-row flex-wrap">
               <div :class="isSelectedClass(passenger)"
                    class="mr-[10px] m-1 py-[13px] pl-[14px] pr-[14px] rounded-lg border flex flex-row items-center justify-center cursor-pointer">
                    <div class=" text-base font-medium font-['Plus Jakarta Sans'] mr-[17px]">{{ passenger.name
                         }}&nbsp;{{ passenger.surname }}</div>
                    <div>
                         <IconCheck />
                    </div>
               </div>
          </div> -->
          <!-- <div :class="isSelectedClass(passenger)"
                    class="mr-[10px] m-1 py-[13px] pl-[14px] pr-[14px] rounded-lg border flex flex-row items-center justify-center cursor-pointer">
                    <div class=" text-base font-medium font-['Plus Jakarta Sans'] mr-[17px]">{{ passenger.name
                         }}&nbsp;{{ passenger.surname }}</div>
                    <div>
                         <IconCheck />
                    </div>
               </div> -->
     </div>
     <div class="mt-[70px]">
          <div class="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-7 mt-[67px]">
               <form class="w-full max-w-sm md:ml-10 ml-2">
                    <div class="flex border-b border-neutral-200 mb-10">
                         <input v-model="nameModel"
                              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                              type="type" placeholder="Name" />
                         <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button">
                         </div>
                    </div>
                    <div class="flex border-b border-neutral-200 mb-10">
                         <input v-model="surnameModel"
                              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                              type="type" placeholder="Surname" />
                         <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button">
                         </div>
                    </div>
                    <div class="flex border-b border-neutral-200 mb-10">
                         <input v-model="emailModel"
                              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                              type="type" placeholder="E-mail" />
                         <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button">
                         </div>
                    </div>
                    <vue-tel-input v-model="telModel" mode="international"></vue-tel-input>
                    <div class="flex border-b border-neutral-200 mb-10">
                         <input v-model="birthModel"
                              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                              type="type" placeholder="01/12/2000" />
                         <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button">
                         </div>
                    </div>
                    <div class="flex border-b border-neutral-200 mb-10">
                         <input v-model="nationModel"
                              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                              type="type" placeholder="Nation" />
                         <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button">
                         </div>
                    </div>
                    <div class="flex border-b border-neutral-200 mb-10">
                         <input v-model="passportModel"
                              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                              type="type" placeholder="Passport" />
                         <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button">
                         </div>
                    </div>
                    <div class="flex border-b border-neutral-200 mb-10">
                         <input v-model="idModel"
                              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                              type="type" placeholder="id" />
                         <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button">
                         </div>
                    </div>
               </form>
          </div>
     </div>
     <div class="flex flex-row justify-end mr-9 mb-[34px]">
          <div class="flex flex-col">
               <button @click="saveInvoice" class="w-[222px] h-[53px] bg-blue-700 rounded-lg border">
                    <div class="text-center text-white text-lg font-medium font-display">Bilgileri Kaydet</div>
               </button>
               <div class="ml-8 mt-2 text-gray-500" v-if="invoice.showBtnWarning">*Alanlardoldurulmalıdır.</div>
          </div>
     </div>
</template>

<script setup lang="ts">
import InputBasic from './InputBasic.vue'
import InputBirth from './InputBirth.vue'
// import InputPhone from './InputPhone.vue';
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import { ref, onMounted, computed } from 'vue'
import { useAccordionsStore } from '@/stores/accordions'
// import { useTripStore } from '@/stores/tripStore'
// const tripStore = useTripStore()
const stored = useAccordionsStore()
const storedInvoices = ref<any>([])

interface Passenger {
     id: string;
     name: string;
     surname: string;
     email: string;
     birth: string;
     nation: string;
     passport: string;
     tel: string;
     age?: string;
}

// onMounted(() => {
//      console.log('page is onmounted')
//      storedPassengers.value = stored.getAccordionData
//      console.log(storedPassengers.value, 'accordion data is here!')
// })

onMounted(() => {
     storedInvoices.value = stored.getPassengerData.filter((passenger: any) => passenger.age === 'yetişkin');
     console.log(stored.getAccordionData, 'Filtered accordion data is here!Filtered accordion data is here!Filtered accordion data is here!Filtered accordion data is here!Filtered accordion data is here!Filtered accordion data is here!Filtered accordion data is here!Filtered accordion data is here!Filtered accordion data is here!Filtered accordion data is here!');
});

// onMounted(() => {
// console.log(stored.getPassengerData, 'STORED GET PASSENGER DATA');
//     storedPassengers.value = stored.getPassengerData.filter((passenger: any) => passenger.age === 'yetişkin');
//     console.log(storedPassengers.value, 'Filtered accordion data is here!');
// });

const invoice = ref({
     isLoading: false,
     isComplete: false,
     showBtnWarning: false
});

const saveInvoice = async () => {
     invoice.value.isLoading = true;
     invoice.value.isComplete = false;
     invoice.value.showBtnWarning = false;

     const isAllFieldsFilled = nameModel.value && surnameModel.value && emailModel.value && telModel.value && nationModel.value && passportModel.value && idModel.value;
     console.log(isAllFieldsFilled, 'isAllFieldsFilled is here btw')
     if (!isAllFieldsFilled) {
          invoice.value.showBtnWarning = true;
          console.log('Tüm gerekli alanlar doldurulmalıdır.');
          invoice.value.isLoading = false;
          return;
     }

     try {
          await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
          // Convert id to number as expected by the store functions
          let defaultAge = "yetişkin"
          const invoiceData = {
               name: nameModel.value,
               surname: surnameModel.value,
               email: emailModel.value,
               tel: telModel.value,
               nation: nationModel.value,
               passport: passportModel.value,
               id: parseInt(idModel.value, 10),
               age: defaultAge,
          };
          //stored.setAccordionData(invoiceData.id, invoiceData);
          console.log("setAdultPassenger çağrılıyor:", invoiceData);
          stored.setAdultPassenger(invoiceData.id, invoiceData);
          storedInvoices.value.push(invoiceData);  // Assuming this is where you want to add the new invoice
          invoice.value.isComplete = true;
          console.log("Kayıt işlemi gerçekleştirildi");
     } catch (error) {
          console.error("Kaydetme hatası:", error);
     } finally {
          invoice.value.isLoading = false;
     }
     const deneme = stored.getPassengerData;
     console.log(deneme, 'deneme');
}

const clearForm = () => {
     selectedPassenger.value = { id: null, name: '', surname: '', email: '', birthdate: '', nation: '', passport: '' };
};

const nameModel = computed({
     get: () => selectedPassenger.value?.name || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.name = newValue;
     }
});

const surnameModel = computed({
     get: () => selectedPassenger.value?.surname || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.surname = newValue;
     }
});

const emailModel = computed({
     get: () => selectedPassenger.value?.email || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.email = newValue;
     }
});

const telModel = computed({
     get: () => selectedPassenger.value?.tel || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.tel = newValue;
     }
});

const birthModel = computed({
     get: () => selectedPassenger.value?.birth || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.birth = newValue;
     }
});

const nationModel = computed({
     get: () => selectedPassenger.value?.nation || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.nation = newValue;
     }
});

const passportModel = computed({
     get: () => selectedPassenger.value?.passport || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.passport = newValue;
     }
});

const idModel = computed({
     get: () => selectedPassenger.value?.id || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.id = newValue;
     }
});

const isSelectedClass = (passenger: any) => {
     return selectedPassenger.value && passenger.id === selectedPassenger.value.id ? 'bg-blue-500 text-white' : 'bg-white';
};

defineProps<{
     fakeData: {
          title: string
     }
}>()

const selectedPassenger = ref<Passenger | null>(null);
const selectPassenger = (passenger: Passenger, index: any) => {
     selectedPassenger.value = passenger;
     console.log(`Passenger selected at index ${index}:`, passenger);
};
// const store = useAccordionsStore()
// const storedData = ref<any>(null) // Boş dizi yerine null kullanılabilir, eğer başlangıç değeri olarak bir şey atanmayacaksa.

// onMounted(() => {
//     console.log(store.$state, 'store state on mounted');
//     storedData.value = store.getAccordionData;
//     console.log(storedData.value, 'stored data after fetchingtored data after fetchingtored data after fetchingtored data after fetchingtored data after fetchingtored data after fetchingtored data after fetchingtored data after fetchingtored data after fetchingtored data after fetchingtored data after fetching');
// });
</script>

<style scoped></style>
