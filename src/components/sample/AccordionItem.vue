<script setup lang="ts">
</script>

<template>
  <div class="hs-accordion-group">
    <div class="hs-accordion active" id="hs-basic-heading-one">
      <button
        class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
        aria-controls="hs-basic-collapse-one">
        <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M5 12h14" />
        </svg>
        Accordion #1
      </button>
      <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-one">
        <p class="text-gray-800 dark:text-gray-200">
          <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as well as
          the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>

    <div class="hs-accordion" id="hs-basic-heading-two">
      <button
        class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
        aria-controls="hs-basic-collapse-two">
        <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M5 12h14" />
        </svg>
        Accordion #2
      </button>
      <div id="hs-basic-collapse-two"
        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-two">
        <p class="text-gray-800 dark:text-gray-200">
          <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as well as
          the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>

    <div class="hs-accordion" id="hs-basic-heading-three">
      <button
        class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
        aria-controls="hs-basic-collapse-three">
        <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M5 12h14" />
        </svg>
        Accordion #3
      </button>
      <div id="hs-basic-collapse-three"
        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-three">
        <p class="text-gray-800 dark:text-gray-200">
          <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These classes control the overall appearance, as well as
          the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>
  </div>
</template>
