<template>
     <section class="lg:px-[100px] px-2 md:px-16 sm:px-8 md:-translate-y-12 centered-w">
          <div class="relative w-full h-[494px] rounded-xl flex flex-col justify-between mb-10">
               <div class="absolute bottom-0 z-10 bg-white md:max-w-[551px] md:h-[466px] p-7 md:ml-4 md:mb-4 m-3 rounded-xl flex flex-col justify-between">
                    <div class="flex flex-col">
                         <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[18.46px] tracking-[2.96px] mb-[22px]">
                              {{ item && item.campaignTitle }}
                         </div>
                         <div class="text-black lg:text-[42px] text-3xl font-bold font-['Plus Jakarta Sans'] leading-[48.47px] tracking-wide flex flex-row">
                              {{ item && item.company }}
                         </div>
                    </div>
                    <div class="flex flex-row cursor-pointer h-9">
                         <div class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mb-[31px] mr-[10px]">
                              {{ item && item.buttonText }}
                         </div>
                         <div class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex">
                              <IconFooter />
                         </div>
                    </div>
               </div>
               <img :src="getImage(item.toursImage.url)" alt="asd" class="object-fill w-full h-full rounded-xl flip-horizontal" />
          </div>
          <div class="flex flex-col md:flex-row gap-5">
               <div class="w-full flex flex-col custom-radiel-gradient h-[450px] rounded-xl pl-10 pt-10 overflow-hidden relative cursor-pointer">
                    <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[18.46px] tracking-[2.96px] mb-[14px]">
                         {{ item && item.visaTitle }}
                    </div>
                    <div class="text-black w-72 text-[38px] font-bold font-['Plus Jakarta Sans'] leading-[43.85px] tracking-wide">
                         {{ item && item.visaDescription }}
                    </div>
                    <img src="/src/assets/EmbeddedImages/mainPageTicketImage.png" alt="Visa" class="flip-horizontal absolute h-[650px] max-w-[850px] left-[180px] -top-3 -bottom-48 custom-z" />
                    <div class="container">
                         <div class="a"></div>
                    </div>
               </div>
               <div class="relative w-full rounded-xl flex flex-col justify-between mb-10">
                    <div class="absolute bottom-0 z-10 bg-white md:w-2/3 w-full p-7 md:ml-4 md:mb-4 rounded-xl">
                         <div class="flex flex-col justify-between h-full">
                              <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[18.46px] tracking-[2.96px] mb-4">
                                   {{ item && item.toursTitle }}
                              </div>
                              <div class="text-black text-[38px] font-bold font-['Plus Jakarta Sans'] leading-[43.85px] tracking-wide mb-[34px]">
                                   {{ item && item.toursDescription }}
                              </div>
                              <div class="flex flex-row w-[125px] bg-slate-200 pb-[7px] pl-3 pt-[6px] pr-[7px] rounded-lg cursor-pointer">
                                   <div class="text-black text-[15px] font-medium font-display rounded-md mr-[14px]">{{ item && item.toursButton }}Tüm Turlar</div>
                                   <!-- IconArrowUpRight -->
                                   <IconArrowUpRight />
                              </div>
                         </div>
                    </div>

                    <img :src="getImage(item.toursImage.url)" alt="item-image" class="object-fill w-full h-[450px] rounded-xl flip-horizontal" />
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { getImage } from '@/utils/globalHelper'
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue'
import IconFooter from '@/components/icons/IconFooter.vue'
// import mainPageTicketImage from '../../../assets/EmbeddedImages/mainPageTicketImage.png';

const props = defineProps({
     item: {
          type: Object as () => {
               campaignTitle: string
               company: string
               buttonText: string
               campaignImage: string
               visaTitle: string
               visaDescription: string
               toursTitle: string
               toursDescription: string
               toursImage: {
                    id: Number
                    name: String
                    alternativeText: string | null
                    caption: string | null
                    width: Number
                    height: Number
                    formats: any
                    hash: string
                    ext: string
                    mime: string
                    size: Number
                    url: string
                    previewUrl: string | null
                    provider: string
                    provider_metadata: any | null
                    createdAt: string
                    updatedAt: string
               }
               toursButton: string
          },
          required: true
     }
})
</script>

<style>
.container {
     width: 718px;
     height: 718px;
     display: flex;
     flex-shrink: 0;
     justify-content: center;
     align-items: center;
     background-color: transparent;
     border-radius: 50%;
     position: relative;
     left: -100px;
     bottom: -65px;
     z-index: 1;
}

.a {
     --circle-radius: 75%;
     /* changed as percent value */
     border-radius: 718px;
     height: 100%;
     width: 100%;
     --mask: radial-gradient(circle farthest-side at center center, transparent var(--circle-radius), #000 calc(var(--circle-radius) + 2px) 100%) 50% 50%/100% 100% no-repeat;
     -webkit-mask: var(--mask);
     mask: var(--mask);
     background: rgba(0, 0, 0, 0.05);
     z-index: 1;
}

.custom-z {
     z-index: 998;
}

.custom-radiel-gradient {
     background: rgb(199, 233, 231);
     background: linear-gradient(90deg, rgba(199, 233, 231, 1) 0%, rgba(243, 237, 228, 1) 50%, rgba(212, 199, 233, 1) 100%);
}
</style>
