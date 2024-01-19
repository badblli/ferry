<script setup lang="ts">
defineProps<{
  groupId: string
}>()
</script>

<template>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
      <button
        type="button"
        class="
          hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600
          py-4
          px-1
          inline-flex
          items-center
          gap-x-2
          border-b-2 border-transparent
          text-sm
          whitespace-nowrap
          text-gray-500
          hover:text-blue-600
          focus:outline-none focus:text-blue-600
          disabled:opacity-50 disabled:pointer-events-none
          dark:text-gray-400 dark:hover:text-blue-500
          active
        "
        :id="`tabs-item-${groupId}-1`"
        :data-hs-tab="`#tabs-${groupId}-1`"
        :aria-controls="`tabs-${groupId}-1`"
        role="tab"
      >
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
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Tab 1
      </button>
      <button
        type="button"
        class="
          hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600
          py-4
          px-1
          inline-flex
          items-center
          gap-x-2
          border-b-2 border-transparent
          text-sm
          whitespace-nowrap
          text-gray-500
          hover:text-blue-600
          focus:outline-none focus:text-blue-600
          disabled:opacity-50 disabled:pointer-events-none
          dark:text-gray-400 dark:hover:text-blue-500
        "
        :id="`tabs-item-${groupId}-2`"
        :data-hs-tab="`#tabs-${groupId}-2`"
        :aria-controls="`tabs-${groupId}-2`"
        role="tab"
      >
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
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
        Tab 2
      </button>
      <button
        type="button"
        class="
          hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600
          py-4
          px-1
          inline-flex
          items-center
          gap-x-2
          border-b-2 border-transparent
          text-sm
          whitespace-nowrap
          text-gray-500
          hover:text-blue-600
          focus:outline-none focus:text-blue-600
          disabled:opacity-50 disabled:pointer-events-none
          dark:text-gray-400 dark:hover:text-blue-500
        "
        :id="`tabs-item-${groupId}-3`"
        :data-hs-tab="`#tabs-${groupId}-3`"
        :aria-controls="`tabs-${groupId}-3`"
        role="tab"
      >
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
          <path
            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
          />
          <circle cx="12" cy="12" r="3" />
        </svg>
        Tab 3
      </button>
    </nav>
  </div>

  <div class="mt-3">
    <div :id="`tabs-${groupId}-1`" role="tabpanel" :aria-labelledby="`tabs-item-${groupId}-1`">
      <p class="text-gray-500 dark:text-gray-400">
        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab
        body.
      </p>
    </div>
    <div
      :id="`tabs-${groupId}-2`"
      class="hidden"
      role="tabpanel"
      :aria-labelledby="`tabs-item-${groupId}-2`"
    >
      <p class="text-gray-500 dark:text-gray-400">
        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">second</em> item's
        tab body.
      </p>
    </div>
    <div
      :id="`tabs-${groupId}-3`"
      class="hidden"
      role="tabpanel"
      :aria-labelledby="`tabs-item-${groupId}-3`"
    >
      <p class="text-gray-500 dark:text-gray-400">
        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab
        body.
      </p>
    </div>
  </div>
</template>
