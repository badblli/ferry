<script setup lang="ts">
defineProps<{
  contentId: string
  title: string
  content: string
}>()
</script>

<template>
  <button
    type="button"
    class="
      hs-collapse-toggle
      py-3
      px-4
      inline-flex
      items-center
      gap-x-2
      text-sm
      font-semibold
      rounded-lg
      border border-transparent
      bg-blue-600
      text-white
      hover:bg-blue-700
      disabled:opacity-50 disabled:pointer-events-none
      dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    "
    :data-hs-collapse="`#${contentId}`"
  >
    {{ title }}
    <svg
      class="hs-collapse-open:rotate-180 flex-shrink-0 w-4 h-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
  <div
    :id="contentId"
    class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
  >
    <div class="mt-5">
      <p class="text-gray-500 dark:text-gray-400">{{ content }}</p>
    </div>
  </div>
</template>
