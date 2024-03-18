<template>
    <div
        class="p-3 pr-5 m-2 flex flex-row rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
        <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image" :src="imageUrl" />
        <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">{{ title }}</div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { title, imageUrl } = defineProps({
    title: {
        type: String,
        default: "Categories"
    },
    imageUrl: {
        type: String,
        default: "https://via.placeholder.com/66x66"
    }
});
</script>

<style></style>