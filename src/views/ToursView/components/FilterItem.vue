<template>
  <div>
    <div class="w-full bg-white left-card-border flex flex-col justify-between items-start mt-3">
      <div class="p-5 flex flex-col h-full w-full justify-between">
        <div class="mb-4 left-card-title w-full flex flex-row">{{ title }}</div>
        <ul>
          <li v-for="(item, index) in displayedItems" :key="index" class="flex flex-row justify-between mb-4">
            {{ item.item }}
            <input type="checkbox" :value="item.id"
              class="w-5 h-5 bg-gray-200 rounded-[5px] border-none cursor-pointer custom-checkbox">
          </li>
        </ul>
      </div>
      <div v-if="displayedItems.length > 3" @click="toggleShowMore"
        class="bg-slate-200 w-full py-4 items-center justify-center flex rounded-xl cursor-pointer">
        {{ showMore ? 'Daha Az Göster' : `+${remainingItemsCount} Daha Fazla` }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  displayedItems: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const showMore = ref(false);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

const remainingItemsCount = computed(() => {
  return props.displayedItems.length > 3 ? props.displayedItems.length - 3 : 0;
});
</script>
