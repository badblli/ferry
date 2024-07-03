<template>
     {{ phone }}
     <VueTelInput v-model="phone" @validate="onPhoneInput" v-bind="bindProps" />
     <!-- Select -->
     <select
          id="hs-select-temporary"
          data-hs-select='{
      "placeholder": "Select assignee",
      "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-neutral-200\" data-title></span></button>",
      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
      "dropdownClasses": "mt-2 max-h-72 p-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
      "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
      "optionTemplate": "<div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div><div class=\"hs-selected:font-semibold text-sm text-gray-800 dark:text-neutral-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-blue-600\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>",
      "extraMarkup": "<div id=\"hs-select-temporary-toggle-icon\" class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
    }'
          class="hidden"
     >
          <option value="">Choose</option>
          <option>Name</option>
          <option>Email address</option>
          <option>Description</option>
          <option>User ID</option>
     </select>
     <!-- End Select -->

     <div class="flex flex-wrap gap-2">
          <button type="button" id="destroy" class="py-1 px-2 text-sm font-medium rounded-md border border-red-400 bg-red-100 dark:bg-red-800/25 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-600/50">Destroy Select</button>
          <button type="button" id="reinit" class="py-1 px-2 text-sm font-medium rounded-md border border-gray-400 bg-gray-100 text-gray-600 dark:bg-neutral-800/25 dark:border-neutral-500 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-600/50" disabled="">Reinitialize Select</button>
     </div>

     eğw eğw
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

const max = ref(null)

const bindProps = ref({
     autoFormat: true,
     disabledFetchingCountry: false,
     enabledFlags: true,
     dropdownOptions: {
          showDialCodeInSelection: true,
          showDialCodeInList: true,
          showFlags: true,
          showSearchBox: true
     },
     inputOptions: {
          maxlength: max.value,
          placeholder: 'Tel'
     },
     mode: 'international',
     validCharactersOnly: true
})

const phone = ref()
const isPhoneValid = ref(false)
const onPhoneInput = (value) => {
     console.log(value)
     if (value.valid == true) {
          bindProps.value.inputOptions.maxlength = value.formatted.length
          console.log('valid', max.value, bindProps.value)
     }
}
</script>
