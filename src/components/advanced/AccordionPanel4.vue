<template>
    <div :class="[borderClass, 'border rounded-2xl shadow-sm bg-white']">
        <button :aria-controls="'accordion-content-' + ariaTitle" :id="'accordion-control-' + ariaTitle"
            @click.prevent="handleToggle" class="w-full font-semibold flex flex-row items-center justify-between sm:py-8 py-6">
            <div class="flex flex-row items-center justify-center">
                <span v-if="title2" class="ml-5 mb-2 mt-3 p-4 bg-neutral-100 rounded-full">
                    <component :is="title2" />
                </span>
                <h3 :class="isOpen ? 'text-[#2149d5]' : ''" class="ml-11 text-start">
                    {{ title }}
                </h3>
            </div>
            <div class="flex flex-row">
                <div class="flex flex-row">
                    <span v-if="!isOpen"> {{ name }}&nbsp; </span>
                    <span v-if="!isOpen">
                        {{ surname }}
                    </span>
                </div>
                <div v-if="!isOpen && updateBtn">
                    <span
                        class="py-[3px] px-2 text-black text-[15px] font-medium font-display mx-7 bg-slate-200 rounded-lg">
                        {{ updateBtn }}
                    </span>
                </div>
                <div class="mr-12">
                    <span class="rotate-180" v-if="isOpen">
                        <IconAccordionActiveArrow />
                    </span>
                    <span class="material-icons" v-else>
                        <IconAccordionArrow />
                    </span>
                </div>
            </div>
        </button>
        <div :aria-hidden="!isOpen" :id="'content-' + ariaTitle"
            :class="['mx-7 custom-ease overflow-hidden', isOpen ? 'max-h-[300px] h-auto' : 'max-h-0']">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import IconAccordionActiveArrow from '../icons/IconAccordionActiveArrow.vue'
import IconAccordionArrow from '../icons/IconAccordionArrow.vue'
import AccordionPanel4 from '@/components/advanced/AccordionPanel4.vue';

const props = defineProps({
    id: { type: Number, required: false },
    title: { type: String, required: false },
    title2: { type: [String, Object], required: false },
    ariaTitle: { type: String, required: false },
    name: { type: String, required: false },
    surname: { type: String, required: false },
    updateBtn: { type: String, required: false },
    borderState: { type: Boolean, required: false, default: false },
    isOpen: { type: Boolean, required: true }
})

const emit = defineEmits(['toggle'])

const handleToggle = () => {
    emit('toggle');
}

const borderClass = computed(() => {
    if (props.borderState) {
        return props.isOpen ? 'border-[#2249D6]' : 'border-[#D0D0D0]'
    }
    return ''
})
</script>

<style>
.rotate-180 {
    transform: rotate(180deg);
}

.custom-ease {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>