<script setup lang="ts"></script>

<template>
  <div class="max-w-sm">
    <div class="flex mb-2">
      <div class="flex-1">
        <input
          type="password"
          id="hs-strong-password-with-indicator-and-hint"
          class="
            py-3
            px-4
            block
            w-full
            border-gray-200
            rounded-md
            text-sm
            focus:border-blue-500 focus:ring-blue-500
            disabled:opacity-50 disabled:pointer-events-none
            dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
          "
          placeholder="Enter password"
        />
        <div
          id="hs-strong-password"
          data-hs-strong-password='{
            "target": "#hs-strong-password-with-indicator-and-hint",
            "hints": "#hs-strong-password-hints",
            "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1"
          }'
          class="flex mt-2 -mx-1"
        ></div>
      </div>
    </div>

    <div id="hs-strong-password-hints" class="mb-3">
      <div>
        <span class="text-sm text-gray-800 dark:text-gray-200">Level:</span>
        <span
          data-hs-strong-password-hints-weakness-text='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
          class="text-sm font-semibold text-gray-800 dark:text-gray-200"
        ></span>
      </div>

      <h4 class="my-2 text-sm font-semibold text-gray-800 dark:text-white">
        Your password must contain:
      </h4>

      <ul class="space-y-1 text-sm text-gray-500">
        <li
          data-hs-strong-password-hints-rule-text="min-length"
          class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
        >
          <span class="hidden" data-check>
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span data-uncheck>
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
          </span>
          Minimum number of characters is 6.
        </li>
        <li
          data-hs-strong-password-hints-rule-text="lowercase"
          class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
        >
          <span class="hidden" data-check>
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span data-uncheck>
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
          </span>
          Should contain lowercase.
        </li>
        <li
          data-hs-strong-password-hints-rule-text="uppercase"
          class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
        >
          <span class="hidden" data-check>
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span data-uncheck>
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
          </span>
          Should contain uppercase.
        </li>
        <li
          data-hs-strong-password-hints-rule-text="numbers"
          class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
        >
          <span class="hidden" data-check>
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span data-uncheck>
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
          </span>
          Should contain numbers.
        </li>
        <li
          data-hs-strong-password-hints-rule-text="special-characters"
          class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
        >
          <span class="hidden" data-check>
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span data-uncheck>
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
          </span>
          Should contain special characters.
        </li>
      </ul>
    </div>
  </div>
</template>
