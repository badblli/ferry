<template>
     <div class="flex border-b border-neutral-200 mb-10">
          <input v-model="modelValue" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder" :type="type" :placeholder="placeholder" :aria-label="ariaLabel" autocomplete="new-password" maxlength="3" />
          <div data-hs-overlay="#hs-vertically-centered-modal" class="flex-shrink-0 text-sm text-white flex w-[99px] h-[39px] cursor-pointer" type="button">
               <div class="text-right text-neutral-700 text-base font-normal font-['Plus Jakarta Sans'] tracking-tight">
                    {{ info }}
               </div>
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
          required: false
     },
     modelValue: {
          type: String,
          default: ''
     }
})

const emit = defineEmits(['update:modelValue'])
const modelValue = ref(props.modelValue)

watch(modelValue, (newValue) => {
     emit('update:modelValue', newValue)
})
</script>

<style scoped></style>
