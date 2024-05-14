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
          <div v-for="passenger in newInvoices" :key="passenger.id || `temp-${index}`"
               @click="selectPassenger(passenger, index)" class="flex flex-row flex-wrap">
               <div :class="isSelectedClass(passenger)"
                    class="mr-[10px] m-1 py-[13px] pl-[14px] pr-[14px] rounded-lg border flex flex-row items-center justify-center cursor-pointer">
                    <div class="text-base font-medium font-['Plus Jakarta Sans'] mr-[17px]">{{ passenger.invoiceName }}&nbsp;{{
                         passenger.invoiceSurname }}</div>
                    <div>
                         <IconCheck />
                    </div>
               </div>
          </div>
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
                    <div class="flex border-b border-neutral-200 mb-10">
                         <input v-model="tcModel"
                              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                              type="type" placeholder="TC" />
                         <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button">
                         </div>
                    </div>
                    <vue-tel-input v-model="telModel" mode="international"></vue-tel-input>
                    <div class="flex border-b border-neutral-200 mb-10">
                         <input v-model="addressModel"
                              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder pl-4"
                              type="type" placeholder="Address" />
                         <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button">
                         </div>
                    </div>
               </form>
          </div>
     </div>
     <div class="flex flex-row justify-end mr-9 mb-[34px]">
          <div class="flex flex-col">
               <button @click="saveInvoice" class="w-[222px] h-[53px] rounded-lg bg-blue-500 border ">
                    <div class="text-center text-white text-lg font-medium font-display"> {{ buttonText }} </div>
               </button>
               <div class="ml-8 mt-2 text-gray-500" v-if="invoice.showBtnWarning">*Alanlar doldurulmalıdır.</div>
          </div>
     </div>
     <div class="flex flex-row justify-end mr-9 mb-[34px]" @click="postData">
          POST DATA USAGE
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
import { ref, onMounted, computed, defineProps } from 'vue'
import { useAccordionsStore } from '@/stores/accordions'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import { useTripStore } from '@/stores/tripStore'
import { callPostApi } from '@/utils/globalHelper'
import p from '@/utils/pathConfig'
import envConfig from '../../../utils/config'

const companyID = ref<string | null>(null);
const allTurist = ref<any>([])
const invoiceDetail = ref<any>(null);

const SaleChannelName = envConfig.SaleChannelName || ''
console.log(SaleChannelName, 'SaleChannelName')

const applicationName = ref(p.Product)
const controllerName = ref('Product')
const name = ref('NewReservation')

const tripStore = useTripStore()
const stored = useAccordionsStore()
const storedInvoices = ref<any>([])
const newInvoices = ref<any>([])
const accountState = ref<boolean>(false);
const ferryTravelType = ref(0);
const priceGroup = ref(0);
const agencyID = ref(0);
const saleChannelID = ref(0);
const priceGroupID = ref(0);
// const postArrivalData = ref<any>(null);
const journeyID = ref<any>(null);

const touristList = ref([
     {
          name: null,
          surname: null,
          birthDate: null,
          gender: null,
          genderName: null,
          nationalityID: null,
          nationalityName: null,
          identityNumber: null,
          passportNumber: null,
          email: null,
          phone: null,
          passportValidDate: null,
          visaValidDate: null
     }
]);
const ferryList = ref([
     {
          journeyID: null,
          journeyTravelDirection: null,
          price: null,
          currencyID: null
     }
]);

const router = useRouter();
onBeforeRouteLeave((to, from, next) => {
     // Reset the Pinia store when the route changes
     stored.$reset();
     next();
});

// const props = defineProps({
//     paymentSuccess: Boolean // props for receiving paymentSuccess from parent component
// })

defineProps<{
     fakeData: {
          title: string
     },
}>()

interface Passenger {
     id: string;
     invoiceType: 0,
     invoiceName: string;
     invoiceSurname: string;
     invoiceMailAddress: string;
     invoicePhoneNumber?: string;
     invoiceCompanyName?: string;
     invoiceTCKNo?: string;
     invoiceAddress?: string;
     invoiceTaxOffice?: string;
     invoiceTaxNumber?: string;
}

interface TripParams {
     FerryTravelType?: number;
     PriceGroupID?: number;
     AgencyID?: number;
}

// onMounted(() => {
//      console.log('page is onmounted')
//      storedPassengers.value = stored.getAccordionData
//      console.log(storedPassengers.value, 'accordion data is here!')
// })

onMounted(() => {
     if (stored.getPassengerData.length === 0) {
          router.push('/')
     } else {
          const adults = stored.getPassengerData.filter((passenger) => passenger.age === 'yetişkin');
          allTurist.value = stored.getPassengerData;
          allTurist.value = stored.getPassengerData.map(passenger => ({
               name: passenger.name,
               surname: passenger.surname,
               birthDate: passenger.birth, //birhdate eklememişim ekleyeceğim.
               // gender: passenger.gender, //title ile aynı isim olabilir?
               genderName: passenger.title,
               nationalityID: passenger.id,
               nationalityName: passenger.nation,
               // identityNumber: passenger.identityNumber, //identityNumber bende yok
               passportNumber: passenger.passport, //pasaport var
               email: passenger.email,
               phone: passenger.tel, //phone eklememişim ekleyeceğim
               // passportValidDate: passenger.passportValidDate, //bende passaport girişi yok
               // visaValidDate: passenger.visaValidDate, //bende vize girişi yok
          }));
          const departureDat2a = tripStore.getDepartureData;
          console.log(departureDat2a, 'departure dataaaaaaaaaaaaaaaaaaaaa');
          ferryList.value = departureDat2a.map((ferryList: any) => ({
               journeyID: ferryList.JourneyID,
               journeyTravelDirection: ferryList.FerryTravelType,
               price: ferryList.Price,
               currencyID: ferryList.CurrencyID,
          }));
          console.log(ferryList.value, 'ferryList.value')
          // console.log(stored.getPassengerData, 'allturistallturistallturistallturist')
          // console.log(adults, 'adults')
          const filteredAdults = adults.map((adult) => ({
               invoiceType: 0,
               invoiceName: adult.name,
               invoiceSurname: adult.surname,
               invoiceMailAddress: adult.email,
               invoicePhoneNumber: adult.tel,
               invoiceTCKNo: adult.id,
               invoiceAddress: adult.address,
          }));
          console.log(filteredAdults, 'filteredAdults')
          newInvoices.value.push(...filteredAdults);
          console.log(...filteredAdults, '...filteredAdults');
          const departureData = tripStore.getDepartureData;
          const arrivalData = tripStore.getArrivalData;
          const postArrivalData = tripStore.getArrivalData;
          const allTrip = tripStore.getFerryList
          console.log(allTrip, 'allTrip')
          console.log(postArrivalData, 'postArrivalData')
          console.log(departureData, 'departureData')
          const getTripParams = tripStore.getTripParams;
          console.log(getTripParams, 'getTripParams');
          const { FerryTravelType, PriceGroupID, AgencyID } = tripStore.getTripParams as TripParams;
          ferryTravelType.value = FerryTravelType ?? 0;
          priceGroupID.value = PriceGroupID ?? 0;
          agencyID.value = AgencyID ?? 0;
          companyID.value = arrivalData[0].CompanyID;
          console.log(stored.getPassengerData, 'stored.getPassengerData')
          // console.log(stored.getAccordionData, 'Filtered accordion data is here!');
          // console.log(agencyID.value, 'agencyID.value')
          // console.log(FerryTravelType, 'FerryTravelType')
          // console.log(getTripParams, 'getTripParamsgetTripParamsgetTripParams');
          // console.log(FerryTravelType, 'FerryTravelType', PriceGroup, 'PriceGroup', AgencyID, 'AgencyID')
          // console.log(arrivalData[0].CompanyID, 'arrivalData');
     }
})

const postData = async () => {
     // console.log(applicationName.value, 'applicationName', controllerName.value, 'controllerName', name.value, 'nameValue', params, 'params')
     let params;
     params = {
          ferryTravelType: ferryTravelType.value,
          agencyID: agencyID.value,
          saleChannelID: 1,
          priceGroupID: priceGroupID.value,
          touristList: allTurist.value,
          ferryList: ferryList.value,
          invoiceDetail: selectedPassenger.value
     }
     callPostApi(applicationName.value, controllerName.value, name.value, params)
          .then((response: any) => {
               if (response.status === 1) {
                    console && console.log(response.data);
               }
          })
          .catch((error) => {
               console.error('An error occurred:', error)
          })
}

// const buttonStyleClass = computed((any:any) => {
//     if (invoice.value.isComplete) {
//         return 'bg-yellow-500'; // Kayıt başarılı ise sarı renk
//     } else {
//         return 'bg-blue-700'; // Diğer durumlarda mavi renk
//     }
// });

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

     const isAllFieldsFilled = nameModel.value && surnameModel.value && emailModel.value && telModel.value && addressModel.value;
     if (!isAllFieldsFilled) {
          invoice.value.showBtnWarning = true;
          invoice.value.isLoading = false;
          return;
     }

     try {
          await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay

          const invoiceData = {
               invoiceName: nameModel.value,
               invoiceSurname: surnameModel.value,
               invoiceMailAddress: emailModel.value,
               invoicePhoneNumber: telModel.value,
               invoiceTCKNo: tcModel.value,
               invoiceAddress: addressModel.value,
          };

          const isDuplicate = newInvoices.value.some((passenger: any) =>
               passenger.invoiceName === invoiceData.invoiceName &&
               passenger.invoiceSurname === invoiceData.invoiceSurname &&
               passenger.invoiceMailAddress === invoiceData.invoiceMailAddress &&
               passenger.invoicePhoneNumber === invoiceData.invoicePhoneNumber &&
               passenger.invoiceAddress === invoiceData.invoiceAddress
          );

          // console.log(newInvoices.value, 'newInvoices')

          if (!isDuplicate) {
               newInvoices.value.push(invoiceData);
               invoice.value.isComplete = true;
               console.log(newInvoices.value, 'newInvoices')
               // Reset `isComplete` after 1 second
               setTimeout(() => {
                    invoice.value.isComplete = false;
               }, 1000);
          } else {
               console.log("Duplicate invoice detected, not saving.");
          }
     } catch (error) {
          console.error("Error saving invoice:", error);
     } finally {
          invoice.value.isLoading = false;
     }
};

const buttonText = computed(() => {
     if (invoice.value.isLoading) {
          return 'Bilgiler Kaydediliyor';
     } else if (invoice.value.isComplete) {
          return 'Bilgiler Kaydedildi';
     } else {
          return 'Bilgileri Kaydet';
     }
});

const clearForm = () => {
     selectedPassenger.value = { id: null, name: '', surname: '', email: '', birthdate: '', nation: '', passport: '' };
};

const nameModel = computed({
     get: () => selectedPassenger.value?.invoiceName || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.invoiceName = newValue;
     }
});

const surnameModel = computed({
     get: () => selectedPassenger.value?.invoiceSurname || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.invoiceSurname = newValue;
     }
});

const emailModel = computed({
     get: () => selectedPassenger.value?.invoiceMailAddress || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.invoiceMailAddress = newValue;
     }
});

// const telModel = ref('');

const telModel = computed({
     get: () => selectedPassenger.value ? selectedPassenger.value.invoicePhoneNumber : '',
     set: (newValue) => {
          if (!selectedPassenger.value) {
               selectedPassenger.value = { invoicePhoneNumber: newValue }; // İlk kez değer atanıyor
          } else {
               selectedPassenger.value.invoicePhoneNumber = newValue;
          }
     }
});

// const formattedTelModel = computed(() => {
//      return telModel.value;
// })

// const telModel = computed({
//     get: () => selectedPassenger.value?.tel || '',  // Null ise boş bir dize döndür
//     set: (newValue) => {
//         console.log(newValue, 'new value');

//         // Yeni değer boş değilse veya selectedPassenger.value null değilse,
//         // selectedPassenger.value.tel özelliğine yeni değeri ata
//         if (selectedPassenger.value !== null && newValue !== '') {
//             selectedPassenger.value.tel = newValue;
//         }

//         // Kontrol amaçlı olarak konsola yazdır
//         console.log(selectedPassenger.value && selectedPassenger.value.tel);
//     }
// });

// const birthModel = computed({
//      get: () => selectedPassenger.value?.birth || '',  // Fallback to an empty string if null
//      set: (newValue) => {
//           if (selectedPassenger.value) selectedPassenger.value.birth = newValue;
//      }
// });

// const nationModel = computed({
//      get: () => selectedPassenger.value?.nation || '',  // Fallback to an empty string if null
//      set: (newValue) => {
//           if (selectedPassenger.value) selectedPassenger.value.nation = newValue;
//      }
// });

// const passportModel = computed({
//      get: () => selectedPassenger.value?.passport || '',  // Fallback to an empty string if null
//      set: (newValue) => {
//           if (selectedPassenger.value) selectedPassenger.value.passport = newValue;
//      }
// });

const tcModel = computed({
     get: () => selectedPassenger.value?.invoiceTCKNo || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.invoiceTCKNo = newValue;
     }
});

const addressModel = computed({
     get: () => selectedPassenger.value?.invoiceAddress || '',  // Fallback to an empty string if null
     set: (newValue) => {
          if (selectedPassenger.value) selectedPassenger.value.invoiceAddress = newValue;
     }
});

const isSelectedClass = (passenger: any) => {
     if (!selectedPassenger.value) return 'bg-white';

     // Seçilen yolcunun tüm özelliklerini kontrol edin
     const isSelected =
          passenger.invoiceName === selectedPassenger.value.invoiceName &&
          passenger.invoiceSurname === selectedPassenger.value.invoiceSurname;

     return isSelected ? 'bg-blue-500 text-white' : 'bg-white';
};

// const isSelectedClass = (passenger: any) => {
//      return selectedPassenger.value && passenger.id === selectedPassenger.value.id ? 'bg-blue-500 text-white' : 'bg-white';
// };
const selectedPassenger = ref<Passenger | null>(null);
const selectPassenger = (passenger: Passenger, index: any) => {
     selectedPassenger.value = passenger;
     console.log(`Passenger selected at index ${index}:`, passenger);
};
</script>

<style scoped>
.vue-tel-input {
     border-radius: 3px;
     display: flex;
     /* border: 1px solid #bbb; */
     text-align: left;
}

.vue-tel-input input {
     border-radius: 3px;
     display: flex;
     /* border: 1px solid #bbb; */
     text-align: left;
}

.vue-tel-input:focus-within {
     box-shadow: none;
     border: 2px solid #FB9678;
}

.custom-class {
     border-radius: 3px;
     display: flex;
     border: none;
     text-align: left;
}

.input-phone-container .vue-tel-input {
     border: none;
     height: 100%;
     width: 100%;

     &:focus-within {
          box-shadow: none;
     }

     .vti__dropdown {
          &.disabled {
               cursor: auto;
               background-color: initial;
          }
     }

     .vti__dropdown-list {
          height: 100%;
     }
}

/* .vti__dropdown-list {
    z-index: 1;
    padding: 0;
    margin: 0;
    text-align: left;
    list-style: none;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
     left: -1px;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 390px;
} */
</style>