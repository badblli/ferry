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
    :data-hs-overlay="`#${contentId}`"
  >
    Open offcanvas
  </button>

  <div
    :id="contentId"
    class="
      hs-overlay
      hs-overlay-open:translate-x-0
      -translate-x-full
      fixed
      top-0
      start-0
      transition-all
      duration-300
      transform
      h-full
      max-w-xs
      w-full w-full
      z-[60]
      bg-white
      border-e
      dark:bg-gray-800 dark:border-gray-700
      hidden
    "
    tabindex="-1"
  >
    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
      <h3 class="font-bold text-gray-800 dark:text-white">{{ title }}</h3>
      <button
        type="button"
        class="
          flex
          justify-center
          items-center
          w-7
          h-7
          text-sm
          font-semibold
          rounded-full
          border border-transparent
          text-gray-800
          hover:bg-gray-100
          disabled:opacity-50 disabled:pointer-events-none
          dark:text-white
          dark:hover:bg-gray-700
          dark:focus:outline-none
          dark:focus:ring-1
          dark:focus:ring-gray-600
        "
        :data-hs-overlay="`#${contentId}`"
      >
        <span class="sr-only">Close modal</span>
        <svg
          class="flex-shrink-0 w-4 h-4"
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
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
    <div class="p-4">
      <p class="text-gray-800 dark:text-gray-400">
        {{ content }}
      </p>
    </div>
  </div>
</template>
