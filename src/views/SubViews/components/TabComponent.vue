<template>
  <div class="mt-[75px] mb-16">
    <div class="flex flex-row justify-center items-center mb-6">
      <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal mr-3">
        {{ from }}
      </div>
      <ArrowCircleUpRight />
      <div>
        <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal ml-3">
          {{ to }}
        </div>
      </div>
    </div>
    <div>
      <div class="text-center text-slate-800 text-5xl font-bold font-['Plus Jakarta Sans'] leading-[48px]">
        {{ contentTitle }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  from: String,
  to: String,
  contentTitle: String
});
</script>
