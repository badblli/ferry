<script setup lang="ts">
import { defineEmits, ref, watch, onMounted } from 'vue'


const props = defineProps({
     iframeHTML: {
          type: String,
          required: false,
          default: null
        },
     onPaymentStatusUpdate: {
          type: Function,
          required: true
     }
})

const hasContent = ref(false)
if (props.iframeHTML) {
     hasContent.value = true
}

const emit = defineEmits(['closeModal', 'updatePaymentStatus'])

const closeModal = () => {
     console.log('closeModal')
     // Perform any necessary actions before closing the modal
     // Emit the 'closeModal' event to notify the parent component
     emit('closeModal')
     console.log('paymentParams.value:', paymentParams.value)
     updatePaymentStatus(paymentParams.value)
     props.onPaymentStatusUpdate(paymentParams.value)
     emit('updatePaymentStatus', paymentParams.value)
}
const updatePaymentStatus = (status: any) => {
     console.log('updatePaymentStatus:', status)
     emit('updatePaymentStatus', status)
}
const paymentStatus = ref(new URLSearchParams(window.location.search).get('Status'))


const paymentParams = ref(null)

watch(
     () => paymentParams.value,
     (newValue, oldValue) => {
          if (newValue) {
               paymentParams.value = newValue;
               console.log('paymentStatus changed:', paymentParams.value)
               props.onPaymentStatusUpdate(paymentParams.value)
          }
     },
     { deep: true }
);

watch(
     () => paymentStatus.value,
     (newValue, oldValue) => {
          if (newValue) {
               paymentParams.value = newValue;
               console.log('paymentStatus changed:', paymentParams.value)
               props.onPaymentStatusUpdate(paymentParams.value)
          }
     },
     { deep: true }
);

onMounted(() => {
     if (paymentStatus.value) {
          paymentParams.value = paymentStatus.value;
          console.log('paymentParams:', paymentParams.value)
          props.onPaymentStatusUpdate(paymentParams.value)
     }
})
</script>

<template>
     <div v-if="iframeHTML">
          <!-- Modal -->
          <transition enter-active-class="transition-opacity duration-200" leave-active-class="transition-opacity duration-200" enter-class="opacity-0" leave-class="opacity-100">
               <div v-if="iframeHTML" class="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
                    <div class="fixed inset-0 bg-gray-500 opacity-75" aria-hidden="true" @click="closeModal"></div>
                    <div @click.self="closeModal" class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full sm:w-full md:w-3/4 lg:w-1/2 flex flex-col">
                         <div class="w-full">
                              <div class="mr-5 flex justify-end cursor-pointer" @click="closeModal">
                                   <div class="w-[65px] h-[65px] bg-neutral-100 rounded-full flex flex-row justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                             <g id="vuesax/outline/add">
                                                  <g id="add">
                                                       <path id="Vector" d="M20.7128 21.7726L12.2275 13.2873C11.9376 12.9974 11.9376 12.5165 12.2275 12.2266C12.5174 11.9367 12.9982 11.9367 13.2881 12.2266L21.7734 20.7119C22.0633 21.0018 22.0633 21.4826 21.7734 21.7726C21.4835 22.0625 21.0027 22.0625 20.7128 21.7726Z" fill="#2B2B33" />
                                                       <path id="Vector_2" d="M12.2266 21.7726C11.9367 21.4826 11.9367 21.0018 12.2266 20.7119L20.7119 12.2266C21.0018 11.9367 21.4826 11.9367 21.7725 12.2266C22.0624 12.5165 22.0624 12.9974 21.7725 13.2873L13.2872 21.7726C12.9973 22.0625 12.5165 22.0625 12.2266 21.7726Z" fill="#2B2B33" />
                                                  </g>
                                             </g>
                                        </svg>
                                   </div>
                              </div>
                              <iframe :srcdoc="iframeHTML" class="w-full h-auto" frameborder="0" style="min-height: 450px; max-height: 100%"></iframe>
                         </div>
                    </div>
               </div>
          </transition>
     </div>
     <div v-else>
          <!-- Modal -->

          <div class="flex flex-col items-center justify-center h-screen">
               <h1 class="text-4xl font-bold mb-4 text-green-500" v-if="paymentStatus === 'Approved'">Payment Success</h1>
               <h1 class="text-4xl font-bold mb-4 text-red-500" v-else>Payment Failed</h1>
          </div>
     </div>
</template>
