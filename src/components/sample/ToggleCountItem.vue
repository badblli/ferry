<script setup lang="ts">
defineProps<{
  groupId: string
}>()
</script>

<template>
  <div class="flex justify-end mb-3">
    <div :id="groupId" class="p-0.5 inline-block bg-gray-100 rounded-lg dark:bg-gray-700">
      <label :for="`${groupId}-monthly`" class="relative inline-block py-2 px-3">
        <span
          class="
            inline-block
            relative
            z-10
            text-sm
            font-medium
            text-gray-800
            cursor-pointer
            dark:text-gray-200
          "
        >
          Monthly
        </span>
        <input
          :id="`${groupId}-monthly`"
          :name="groupId"
          type="radio"
          class="
            absolute
            top-0
            end-0
            w-full
            h-full
            border-transparent
            bg-transparent bg-none
            text-transparent
            rounded-lg
            cursor-pointer
            before:absolute before:inset-0 before:w-full before:h-full before:rounded-lg
            focus:ring-offset-0
            checked:before:bg-white checked:before:shadow-sm checked:bg-none
            focus:ring-transparent
            dark:checked:before:bg-gray-800 dark:focus:ring-offset-transparent
          "
        />
      </label>
      <label :for="`${groupId}-annual`" class="relative inline-block py-2 px-3">
        <span
          class="
            inline-block
            relative
            z-10
            text-sm
            font-medium
            text-gray-800
            cursor-pointer
            dark:text-gray-200
          "
        >
          Annual
        </span>
        <input
          :id="`${groupId}-annual`"
          :name="groupId"
          type="radio"
          class="
            absolute
            top-0
            end-0
            w-full
            h-full
            border-transparent
            bg-transparent bg-none
            text-transparent
            rounded-lg
            cursor-pointer
            before:absolute before:inset-0 before:w-full before:h-full before:rounded-lg
            focus:ring-offset-0
            checked:before:bg-white checked:before:shadow-sm checked:bg-none
            focus:ring-transparent
            dark:checked:before:bg-gray-800 dark:focus:ring-offset-transparent
          "
          checked
        />
      </label>
    </div>
  </div>

  <div
    class="grid grid-cols-3 lg:items-center border border-gray-200 rounded-xl dark:border-gray-700"
  >
    <div class="flex flex-col p-4">
      <h4 class="text-gray-800 mb-1 dark:text-gray-200">Startup</h4>
      <div class="flex gap-x-1">
        <span class="text-xl font-normal text-gray-800 dark:text-gray-200">$</span>
        <p
          :data-hs-toggle-count="`{
            &quot;target&quot;: &quot;#${groupId}&quot;,
            &quot;min&quot;: 19,
            &quot;max&quot;: 29
          }`"
          class="text-gray-800 font-semibold text-3xl dark:text-gray-200"
        >
          19
        </p>
      </div>
    </div>

    <div class="flex flex-col p-4">
      <div class="flex justify-between">
        <h4 class="text-gray-800 mb-1 dark:text-gray-200">Team</h4>
      </div>
      <div class="flex gap-x-1">
        <span class="text-xl font-normal text-gray-800 dark:text-gray-200">$</span>
        <p
          :data-hs-toggle-count="`{
            &quot;target&quot;: &quot;#${groupId}&quot;,
            &quot;min&quot;: 89,
            &quot;max&quot;: 99
          }`"
          class="text-gray-800 font-semibold text-3xl dark:text-gray-200"
        >
          89
        </p>
      </div>
    </div>

    <div class="flex flex-col p-4">
      <h4 class="text-gray-800 mb-1 dark:text-gray-200">Enterprise</h4>
      <div class="flex gap-x-1">
        <span class="text-xl font-normal text-gray-800 dark:text-gray-200">$</span>
        <p
          :data-hs-toggle-count="`{
            &quot;target&quot;: &quot;#${groupId}&quot;,
            &quot;min&quot;: 129,
            &quot;max&quot;: 149
          }`"
          class="text-gray-800 font-semibold text-3xl dark:text-gray-200"
        >
          129
        </p>
      </div>
    </div>
  </div>
</template>
