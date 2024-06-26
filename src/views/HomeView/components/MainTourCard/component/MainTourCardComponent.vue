<template>
     <router-link :to="{ path: item.btnLink }" class="flex flex-col md:flex-row gap-5 md:mb-[120px] mb-20">
          <div v-for="(tour, index) in item.Tours" :key="index" class="max-w-[400px] h-[510px] rounded-xl border border-gray-200 mt-12 hover:bg-slate-100 transition delay-[10ms] cursor-pointer">
               <div class="rounded-xl m-5 bg-blue-400">
                    <img :src="getImage(tour.img.url)" :alt="tour.img.name" class="object-fill w-full flip-horizontal rounded-xl" />
               </div>

               <div class="px-5 pt-2">
                    <div>
                         <div class="text-black text-[23px] font-semibold font-['Plus Jakarta Sans'] tracking-wide pb-[38px]">
                              {{ tour.duration }}
                         </div>
                         <div class="text-black text-base font-normal font-display leading-snug tracking-tight">
                              {{ tour.description }}
                         </div>
                         <div class="flex flex-row w-full items-center justify-between text-right text-black text-lg font-medium font-display leading-[18px] tracking-tight mt-7">
                              <span>
                                   {{ tour.price }}
                              </span>
                              <span>
                                   <div class="flex flex-row items-center justify-center p-5 bg-white rounded-full">
                                        <IconShare2 />
                                   </div>
                              </span>
                         </div>
                    </div>
               </div>
          </div>
     </router-link>
</template>

<script setup>
import { defineProps } from 'vue'
import IconShare2 from '@/components/icons/IconShare2.vue'
import { getApi, getImage } from '@/utils/globalHelper'

const props = defineProps({
     item: {
          type: Object,
          required: true,
          default: () => ({
               btnLink: '',
               Tours: []
          })
     }
})
</script>
