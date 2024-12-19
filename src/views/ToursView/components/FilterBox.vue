<template>
  <div
    :class="['h-full custom-z bg-white overflow-y-auto sm:overflow-hidden inset-0 sm:inset-auto fixed sm:relative', { hidden: !isVisible }]">
    <div class="bg-neutral-100 flex flex-row justify-center items-center py-6 md:px-14 px-1 rounded-xl cursor-pointer">
      <div class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Tüm Filtreleri Temizle</div>
    </div>
    <!-- First Box -->

    <FilterItem
        v-for="(items, index) in filterItems"
        :key="index"
        :title="items.title"
        :displayedItems="items.displayedItems"
        :fakeDataLength="items.fakeDataLength"
        :showMore="items.showMore"
        :toggleShowMore="items.toggleShowMore"
        :countItem="items.countItem"
      />
    <!-- Second Box -->

  </div>
</template>

<script setup>
import FilterItem from "./FilterItem.vue"
import { defineProps } from 'vue';

</script>

<style scoped>
/* Add your styles here */
</style>
