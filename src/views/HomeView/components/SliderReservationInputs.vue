<template>
    <div class="flex border-b border-neutral-200">
        <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder "
            :type="type" :placeholder="placeholder" :aria-label="ariaLabel" />
        <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px] my-[11px]" type="button"></div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        required: true
    },
    ariaLabel: {
        type: String,
        required: true
    }
});
    
</script>
  
<style scoped></style>