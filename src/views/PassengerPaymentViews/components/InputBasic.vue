<!-- <template>
    <div :class="borderClass" class="flex border-b mb-10">
        <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder"
            :type="type" :placeholder="placeholder" :aria-label="ariaLabel" />
        <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button"></div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        required: true
    },
    ariaLabel: {
        type: String,
        required: true
    }
});

const route = useRoute();
const borderClass = computed(() => ({
    'border-neutral-200': route.path !== '/payment',
    'border-black': route.path === '/payment'
}));
</script>
  
<style scoped></style> -->

<template>
     <div class="flex border-b border-neutral-200 mb-10">
          <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none border-transparent h-5 custom-placeholder" :placeholder="placeholder" :type="type" :aria-label="ariaLabel" v-model="modelValue" />
          <div class="flex-shrink-0 bg-white text-sm text-white flex w-[39px] h-[39px]" type="button"></div>
     </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
     type: {
          type: String,
          default: 'text'
     },
     placeholder: {
          type: String,
          required: true
     },
     ariaLabel: {
          type: String,
          required: false
     },
     modelValue: {
          type: String,
          default: ''
     }
})

const emit = defineEmits(['update:modelValue'])
const modelValue = ref(props.modelValue)

watch(modelValue, (newValue) => {
     emit('update:modelValue', newValue)
})

// let model = ref("")

// const emit = defineEmits(['change'])

// const handleChange = () => {
//     emit('change', model.value)
// }
</script>

<style scoped></style>
