<template>
     <div class="flex border-b border-neutral-200 mb-10">
          <input v-model="formattedDate" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder" :type="type" :placeholder="placeholder" :aria-label="ariaLabel" />
          <div data-hs-overlay="#hs-vertically-centered-modal-InputBirth" class="flex-shrink-0 text-sm text-white flex w-[79px] h-[39px] cursor-pointer" type="button">
               <div class="text-right text-neutral-700 text-base font-normal font-['Plus Jakarta Sans'] tracking-tight">{{ info }}</div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'

const props = defineProps({
     type: {
          type: String,
          default: 'text'
     },
     placeholder: {
          type: String,
          required: true
     },
     info: {
          type: String,
          required: true
     },
     ariaLabel: {
          type: String,
          required: true
     }
})

const formattedDate = ref('')

watch(formattedDate, (newValue, oldValue) => {
     const maxLength = 5
     const separatorIndex = newValue.indexOf('/')

     if (newValue.length > maxLength) {
          formattedDate.value = oldValue
          return
     }

     if (newValue.length === 2 && newValue.length > oldValue.length) {
          formattedDate.value += '/'
     }

     if (newValue.length === 5 && newValue.length > oldValue.length && separatorIndex !== 2) {
          formattedDate.value = oldValue
          return
     }
})
</script>

<style scoped></style>
