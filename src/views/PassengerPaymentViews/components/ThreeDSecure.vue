<script setup lang="ts">
import { defineEmits, ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
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

// watch(
//      () => paymentParams.value,
//      (newValue, oldValue) => {
//           if (newValue) {
//                paymentParams.value = newValue;
//                console.log('paymentStatus changed:', paymentParams.value)
//                props.onPaymentStatusUpdate(paymentParams.value)
//           }
//      },
//      { deep: true }
// );

watch(
     () => paymentStatus.value,
     (newValue, oldValue) => {
          if (newValue) {
               console.log('paymentStatus watch changed:', paymentParams.value)
               setTimeout(() => {
                    paymentParams.value = paymentStatus.value
                    console.log('settimeout:', paymentParams.value)
                    window.parent.location.href = '/payment?paymentstatus=true'
               }, 5000)
          }
     },
     { deep: true }
)

onMounted(() => {
     if (paymentStatus.value === 'Approved') {
          console.log('paymentStatus onmounted changed:', paymentParams.value)
          setTimeout(() => {
               paymentParams.value = paymentStatus.value
               console.log('settimeout:', paymentParams.value)
               window.parent.location.href = '/paymentsuccess'
          }, 5000)
     }
})
</script>

<template>
     <div>
          <!-- Modal -->

          <div class="flex flex-col items-center justify-center h-screen">
               <h1 class="text-4xl font-bold mb-4 text-green-500" v-if="paymentStatus === 'Approved'">Payment Success</h1>
               <h1 class="text-4xl font-bold mb-4 text-red-500" v-else>Payment Failed</h1>
          </div>
     </div>
</template>
