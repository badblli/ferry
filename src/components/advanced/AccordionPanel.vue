<template>
     <div class="border-2 rounded-2xl shadow-sm bg-white">
          <button :aria-controls="'accordion-content-' + ariaTitle" :id="'accordion-control-' + ariaTitle" @click.prevent="togglePanel" class="w-full border-b-2 font-semibold flex flex-row items-center justify-between">
               <div class="flex flex-row items-center justify-center">
                    <span class="ml-5 mb-2 mt-3 p-4 bg-neutral-100 rounded-full">
                         <component :is="title2" />
                    </span>
                    <span class="ml-5">
                         {{ title }}
                    </span>
               </div>
               <div class="flex flex-row">
                    <div class="flex flex-row">
                         <span v-if="!showPanel"> {{ name }}&nbsp; </span>
                         <span v-if="!showPanel">
                              {{ surname }}
                         </span>
                    </div>
                    <div v-if="!showPanel">
                         <span class="py-[3px] px-2 text-black text-[15px] font-medium font-display mx-7 bg-slate-200 rounded-lg">
                              {{ updateBtn }}
                         </span>
                    </div>
                    <div class="mr-12">
                         <span class="rotate-180" v-if="showPanel">
                              <IconAccordionActiveArrow />
                         </span>
                         <span class="material-icons" v-else>
                              <IconAccordionArrow />
                         </span>
                    </div>
               </div>
          </button>
          <div :aria-hidden="!showPanel" :id="'content-' + ariaTitle" class="p-4" v-if="showPanel">
               <slot></slot>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconAccordionActiveArrow from '../icons/IconAccordionActiveArrow.vue'
import IconAccordionArrow from '../icons/IconAccordionArrow.vue'

const props = defineProps({
     id: { type: Number, required: false },
     title: { type: String, required: false },
     title2: { type: [String, Object], required: false },
     ariaTitle: { type: String, required: false },
     name: { type: String, required: false },
     surname: { type: String, required: false },
     updateBtn: { type: String, required: false }
})

const showPanel = ref(false)

const togglePanel = () => {
     showPanel.value = !showPanel.value
}
</script>

<style>
.rotate-180 {
     transform: rotate(180deg);
}
</style>