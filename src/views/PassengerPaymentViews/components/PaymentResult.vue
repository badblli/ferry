<template>
     <div class="flex flex-col items-center justify-center h-screen">
          <h1 class="text-4xl font-bold mb-4 text-green-500" v-if="paymentStatus === 'Approved'">Payment Success</h1>
          <h1 class="text-4xl font-bold mb-4 text-red-500" v-if="paymentStatus === 'Failed'">Payment Failed</h1>
     </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const route = useRouter()
const paymentStatus = ref(new URLSearchParams(window.location.search).get('Status'))

onMounted(() => {
     if (paymentStatus.value) {
          console.log('paymentStatus onmounted:', paymentStatus.value)
          window.parent.postMessage({ type: 'updatePaymentStatus', status: paymentStatus.value }, '*')
     } else {
          route.push('/')
     }
})
</script>

<style scoped>
/* Add your component styles here */
</style>
