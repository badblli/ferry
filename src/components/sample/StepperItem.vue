<script setup lang="ts"></script>

<template>
  <div data-hs-stepper>
    <ul class="relative flex flex-row gap-x-2">
      <li
        class="flex items-center gap-x-2 shrink basis-0 flex-1 group active"
        data-hs-stepper-nav-item='{
          "index": 1,
          "isOptional": true
        }'
      >
        <span
          class="
            min-w-[28px] min-h-[28px]
            group
            inline-flex
            items-center
            text-xs
            align-middle
            focus:outline-none
            disabled:opacity-50 disabled:pointer-events-none
          "
        >
          <span
            class="
              w-7
              h-7
              flex
              justify-center
              items-center
              flex-shrink-0
              bg-gray-100
              font-medium
              text-gray-800
              rounded-full
              group-focus:bg-gray-200
              dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600
              hs-stepper-active:bg-blue-600 hs-stepper-active:text-white
              hs-stepper-success:bg-blue-600 hs-stepper-success:text-white
              hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600
            "
          >
            <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
            <svg
              class="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span
            class="
              ms-2
              text-sm
              font-medium
              text-gray-800
              group-focus:text-gray-500
              dark:text-white dark:group-focus:text-gray-400
            "
          >
            Step
          </span>
        </span>
        <div
          class="
            w-full
            h-px
            flex-1
            bg-gray-200
            group-last:hidden
            dark:bg-blue-500
            hs-stepper-success:bg-blue-600
            hs-stepper-completed:bg-teal-600
          "
        ></div>
      </li>

      <li
        class="flex items-center gap-x-2 shrink basis-0 flex-1 group"
        data-hs-stepper-nav-item='{
          "index": 2,
          "isOptional": true
        }'
      >
        <span
          class="
            min-w-[28px] min-h-[28px]
            group
            inline-flex
            items-center
            text-xs
            align-middle
            focus:outline-none
            disabled:opacity-50 disabled:pointer-events-none
          "
        >
          <span
            class="
              w-7
              h-7
              flex
              justify-center
              items-center
              flex-shrink-0
              bg-gray-100
              font-medium
              text-gray-800
              rounded-full
              group-focus:bg-gray-200
              dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600
              hs-stepper-active:bg-blue-600 hs-stepper-active:text-white
              hs-stepper-success:bg-blue-600 hs-stepper-success:text-white
              hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600
            "
          >
            <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
            <svg
              class="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span
            class="
              ms-2
              text-sm
              font-medium
              text-gray-800
              group-focus:text-gray-500
              dark:text-white dark:group-focus:text-gray-400
            "
          >
            Step
          </span>
        </span>
        <div
          class="
            w-full
            h-px
            flex-1
            bg-gray-200
            group-last:hidden
            dark:bg-gray-700
            hs-stepper-success:bg-blue-600
            hs-stepper-completed:bg-teal-600
          "
        ></div>
      </li>

      <li
        class="flex items-center gap-x-2 shrink basis-0 flex-1 group"
        data-hs-stepper-nav-item='{
          "index": 3
        }'
      >
        <span
          class="
            min-w-[28px] min-h-[28px]
            group
            inline-flex
            items-center
            text-xs
            align-middle
            focus:outline-none
            disabled:opacity-50 disabled:pointer-events-none
          "
        >
          <span
            class="
              w-7
              h-7
              flex
              justify-center
              items-center
              flex-shrink-0
              bg-gray-100
              font-medium
              text-gray-800
              rounded-full
              group-focus:bg-gray-200
              dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600
              hs-stepper-active:bg-blue-600 hs-stepper-active:text-white
              hs-stepper-success:bg-blue-600 hs-stepper-success:text-white
              hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600
            "
          >
            <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
            <svg
              class="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span
            class="
              ms-2
              text-sm
              font-medium
              text-gray-800
              group-focus:text-gray-500
              dark:text-white dark:group-focus:text-gray-400
            "
          >
            Step
          </span>
        </span>
        <div
          class="
            w-full
            h-px
            flex-1
            bg-gray-200
            group-last:hidden
            dark:bg-gray-700
            hs-stepper-success:bg-blue-600
            hs-stepper-completed:bg-teal-600
          "
        ></div>
      </li>
    </ul>

    <div class="mt-5 sm:mt-8">
      <div
        data-hs-stepper-content-item='{
          "index": 1
        }'
        style="display: none"
      >
        <div
          class="
            p-4
            h-48
            bg-gray-50
            flex
            justify-center
            items-center
            border border-dashed border-gray-200
            rounded-xl
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <h3 class="text-gray-500">First content</h3>
        </div>
      </div>

      <div
        data-hs-stepper-content-item='{
          "index": 2
        }'
        style="display: none"
      >
        <div
          class="
            p-4
            h-48
            bg-gray-50
            flex
            justify-center
            items-center
            border border-dashed border-gray-200
            rounded-xl
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <h3 class="text-gray-500">Second content</h3>
        </div>
      </div>

      <div
        data-hs-stepper-content-item='{
          "index": 3
        }'
        style="display: none"
      >
        <div
          class="
            p-4
            h-48
            bg-gray-50
            flex
            justify-center
            items-center
            border border-dashed border-gray-200
            rounded-xl
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <h3 class="text-gray-500">Third content</h3>
        </div>
      </div>

      <div
        data-hs-stepper-content-item='{
          "isFinal": true
        }'
      >
        <div
          class="
            p-4
            h-48
            bg-gray-50
            flex
            justify-center
            items-center
            border border-dashed border-gray-200
            rounded-xl
          "
        >
          <h3 class="text-gray-500">Final content</h3>
        </div>
      </div>

      <div class="mt-5 flex justify-between items-center gap-x-2">
        <button
          type="button"
          class="
            py-2
            px-3
            inline-flex
            items-center
            gap-x-1
            text-sm
            font-medium
            rounded-lg
            border border-gray-200
            bg-white
            text-gray-800
            shadow-sm
            hover:bg-gray-50
            disabled:opacity-50 disabled:pointer-events-none
          "
          data-hs-stepper-back-btn
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back
        </button>
        <button
          type="button"
          class="
            py-2
            px-3
            inline-flex
            items-center
            gap-x-1
            text-sm
            font-semibold
            rounded-lg
            border border-transparent
            bg-blue-600
            text-white
            hover:bg-blue-700
            disabled:opacity-50 disabled:pointer-events-none
          "
          data-hs-stepper-skip-btn
          style="display: none"
        >
          Skip
        </button>
        <button
          type="button"
          class="
            py-2
            px-3
            inline-flex
            items-center
            gap-x-1
            text-sm
            font-semibold
            rounded-lg
            border border-transparent
            bg-blue-600
            text-white
            hover:bg-blue-700
            disabled:opacity-50 disabled:pointer-events-none
          "
          data-hs-stepper-next-btn
        >
          Next
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
        <button
          type="button"
          class="
            py-2
            px-3
            inline-flex
            items-center
            gap-x-1
            text-sm
            font-semibold
            rounded-lg
            border border-transparent
            bg-blue-600
            text-white
            hover:bg-blue-700
            disabled:opacity-50 disabled:pointer-events-none
          "
          data-hs-stepper-finish-btn
          style="display: none"
        >
          Finish
        </button>
        <button
          type="reset"
          class="
            py-2
            px-3
            inline-flex
            items-center
            gap-x-1
            text-sm
            font-semibold
            rounded-lg
            border border-transparent
            bg-blue-600
            text-white
            hover:bg-blue-700
            disabled:opacity-50 disabled:pointer-events-none
          "
          data-hs-stepper-reset-btn
          style="display: none"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>
