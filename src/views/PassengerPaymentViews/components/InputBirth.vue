<template>
    <div class="flex border-b border-neutral-200 mb-10">
      <input
        v-model="formattedDate"
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder"
        :type="type"
        :placeholder="placeholder"
        :aria-label="ariaLabel"
      />
      <div
        data-hs-overlay="#hs-vertically-centered-modal-InputBirth"
        class="flex-shrink-0  text-sm text-white flex w-[79px] h-[39px] cursor-pointer"
        type="button"
      >
        <div class="text-right text-neutral-700 text-base font-normal font-['Plus Jakarta Sans'] tracking-tight">
          gün/ay/yıl
        </div>
        <InputBirthModal />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref, watch } from 'vue';
  import InputBirthModal from '@/components/advanced/InputBirthModal.vue';
  
  const props = defineProps({
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: true,
    },
    ariaLabel: {
      type: String,
      required: true,
    },
  });
  
  const formattedDate = ref('');
  
  watch(formattedDate, (newValue, oldValue) => {
    if (newValue.length === 2 || newValue.length === 5) {
      if (newValue.length > oldValue.length) {
        formattedDate.value += '/';
      } else {
        formattedDate.value = newValue.substring(0, newValue.length - 1);
      }
    }
  });
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  