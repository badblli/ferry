<template>
     <div class="flex flex-col items-center justify-center h-screen">
          <h1 class="text-4xl font-bold mb-4 text-green-500" v-if="paymentStatus === 'Approved'">Payment Success</h1>
          <h1 class="text-4xl font-bold mb-4 text-red-500" v-else>Payment Failed</h1>
     </div>
</template>

<script lang="ts">
import { defineEmits, watch, ref } from 'vue'

const paymentStatus = ref(new URLSearchParams(window.location.search).get('Status'))

const emit = defineEmits(['updatePaymentStatus'])

watch(
    () => paymentStatus.value,
    (newValue, oldValue) => {
        if (newValue) {
            //const data = JSON.parse(newValue);
            paymentStatus.value = newValue;
            console.log('paymentStatus changed:', paymentStatus.value)
            emit('updatePaymentStatus', paymentStatus.value)
        }
    },
    { deep: true }
);
</script>

<style scoped>
/* Add your component styles here */
</style>
