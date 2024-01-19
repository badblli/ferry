<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-3 gap-y-4 gap-x-2 max-w-[15rem] mx-auto">
    <div class="col-start-2 text-center">
      <div class="hs-tooltip inline-block">
        <button
          type="button"
          class="
            hs-tooltip-toggle
            w-10
            h-10
            inline-flex
            justify-center
            items-center
            gap-2
            rounded-full
            bg-gray-50
            border border-gray-200
            text-gray-600
            hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-white/[.05]
            dark:hover:border-white/[.1]
            dark:hover:text-white
          "
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
            <path d="m18 15-6-6-6 6" />
          </svg>
          <span
            class="
              hs-tooltip-content
              hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible
              opacity-0
              transition-opacity
              inline-block
              absolute
              invisible
              z-10
              py-1
              px-2
              bg-gray-900
              text-xs
              font-medium
              text-white
              rounded
              shadow-sm
              dark:bg-slate-700
            "
            role="tooltip"
          >
            Tooltip on top
          </span>
        </button>
      </div>
    </div>

    <div class="col-start-1 text-end">
      <div class="hs-tooltip inline-block [--placement:left]">
        <button
          type="button"
          class="
            hs-tooltip-toggle
            w-10
            h-10
            inline-flex
            justify-center
            items-center
            gap-2
            rounded-full
            bg-gray-50
            border border-gray-200
            text-gray-600
            hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-white/[.05]
            dark:hover:border-white/[.1]
            dark:hover:text-white
          "
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
          <span
            class="
              hs-tooltip-content
              hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible
              opacity-0
              transition-opacity
              inline-block
              absolute
              invisible
              z-10
              py-1
              px-2
              bg-gray-900
              text-xs
              font-medium
              text-white
              rounded
              shadow-sm
              dark:bg-slate-700
            "
            role="tooltip"
          >
            Tooltip on left
          </span>
        </button>
      </div>
    </div>

    <div class="col-start-3">
      <div class="hs-tooltip inline-block [--placement:right]">
        <button
          type="button"
          class="
            hs-tooltip-toggle
            w-10
            h-10
            inline-flex
            justify-center
            items-center
            gap-2
            rounded-full
            bg-gray-50
            border border-gray-200
            text-gray-600
            hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-white/[.05]
            dark:hover:border-white/[.1]
            dark:hover:text-white
          "
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
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span
            class="
              hs-tooltip-content
              hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible
              opacity-0
              transition-opacity
              inline-block
              absolute
              invisible
              z-10
              py-1
              px-2
              bg-gray-900
              text-xs
              font-medium
              text-white
              rounded
              shadow-sm
              dark:bg-slate-700
            "
            role="tooltip"
          >
            Tooltip on right
          </span>
        </button>
      </div>
    </div>

    <div class="col-start-2 text-center">
      <div class="hs-tooltip inline-block [--placement:bottom]">
        <button
          type="button"
          class="
            hs-tooltip-toggle
            w-10
            h-10
            inline-flex
            justify-center
            items-center
            gap-2
            rounded-full
            bg-gray-50
            border border-gray-200
            text-gray-600
            hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-gray-400
            dark:hover:bg-white/[.05]
            dark:hover:border-white/[.1]
            dark:hover:text-white
          "
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
            <path d="m6 9 6 6 6-6" />
          </svg>
          <span
            class="
              hs-tooltip-content
              hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible
              opacity-0
              transition-opacity
              inline-block
              absolute
              invisible
              z-10
              py-1
              px-2
              bg-gray-900
              text-xs
              font-medium
              text-white
              rounded
              shadow-sm
              dark:bg-slate-700
            "
            role="tooltip"
          >
            Tooltip on bottom
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
