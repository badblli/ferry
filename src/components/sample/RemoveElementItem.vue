<script setup lang="ts">
defineProps<{
  contentId: string
}>()
</script>

<template>
  <div
    :id="contentId"
    class="
      flex flex-col
      bg-white
      border
      shadow-sm
      rounded-xl
      dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]
    "
  >
    <div
      class="
        inline-flex
        justify-between
        items-center
        bg-gray-100
        border-b
        rounded-t-xl
        py-3
        px-4
        md:py-4 md:px-5
        dark:bg-gray-800 dark:border-gray-700
      "
    >
      <h3 class="font-semibold text-gray-800 dark:text-white">Remove element card</h3>
      <button
        type="button"
        class="
          inline-flex
          justify-center
          items-center
          h-4
          w-4
          rounded-lg
          text-gray-400
          hover:text-gray-500
          focus:outline-none
          focus:ring-2
          focus:ring-gray-400
          focus:ring-offset-2
          focus:ring-offset-white
          text-sm
          dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800
        "
        :data-hs-remove-element="`#${contentId}`"
      >
        <span class="sr-only">Close</span>
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
    <div class="text-center p-4 md:py-10 md:px-5">
      <svg
        class="w-20 h-auto mx-auto"
        width="51"
        height="49"
        viewBox="0 0 51 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.1044 1.13135L49.5 21L32.0892 31L26.2611 25.0569L18.5223 29.2171L4 15L27.6443 0.813437C28.4389 0.336639 29.4571 0.468208 30.1044 1.13135Z"
          class="fill-gray-400 dark:fill-white"
          fill="currentColor"
        />
        <path
          d="M5.34439 15.5099L18.344 28.6964C18.6636 29.0205 19.1616 29.088 19.5558 28.8606L25.8654 25.2212C26.2677 24.9892 26.7768 25.0647 27.0945 25.4034L31.8521 30.4769C32.1787 30.8252 32.706 30.894 33.1111 30.6412L48.2909 21.1655C48.9922 20.7277 49.8917 21.2817 49.8163 22.105L47.5402 46.9576C47.4882 47.5254 46.9727 47.9349 46.4078 47.857L1.95761 41.7284C1.42357 41.6548 1.04401 41.1711 1.0995 40.6349L3.63757 16.1091C3.72459 15.2682 4.75092 14.908 5.34439 15.5099Z"
          class="stroke-gray-400 dark:stroke-white"
          stroke="currentColor"
          stroke-linecap="round"
        />
        <path
          d="M5 38L15 31"
          class="stroke-gray-400 dark:stroke-white"
          stroke="currentColor"
          stroke-linecap="round"
        />
        <path
          d="M36 34L43 43"
          class="stroke-gray-400 dark:stroke-white"
          stroke="currentColor"
          stroke-linecap="round"
        />
      </svg>
      <h3 class="mt-5 font-bold text-gray-800 dark:text-white">No new emails</h3>
      <p class="text-sm text-gray-500 dark:text-gray-500">
        Looks like you haven't received any emails.
      </p>
    </div>
  </div>
</template>
