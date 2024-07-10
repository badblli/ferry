<template>
     <section>
          <div class="w-full bg-slate-200 flex flex-col items-center">
               <div class="text-black text-[42px] font-medium font-display tracking-wide mt-[100px] mb-7">{{ item.title }}</div>
               <div class="w-full text-center text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                    {{ item.subtitle }}
               </div>
               <div class="mt-[107px] flex flex-col lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
                    <div class="flex flex-row flex-wrap justify-center">
                         <div v-for="(category, index) in props.item.blog_category_definitions" :key="index" class="category-item">
                              <!-- <CategorieSlider :title="category.title" :imageUrl="category.imageUrl" /> -->
                              <div class="p-3 pr-5 m-2 flex flex-row rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                                   <img class="w-[66px] h-[66px] rounded-full ml-[17px]" :src="getImage(category.img.url)" alt="Slide Image" />
                                   <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">{{ category.category }}</div>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="mt-[89px] mb-[119px] flex flex-row">
                    <div class="w-full text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                         {{ item.subElement }}
                    </div>
                    <div class="flex md:flex-row flex-col">
                         <router-link :to="{ path: item.subRouterUrl }">
                              <div class="flex flex-row">
                                   <div class="text-gray-800 flex flex-row w-36 ml-5 text-base font-medium font-display leading-[24.86px] tracking-tight">
                                        {{ item.subRouter }}
                                   </div>
                                   <div class="flex items-center justify-center w-7 h-7 p-1 flex-shrink-0 rounded-full bg-gray-800 cursor-pointer">
                                        <IconFooter />
                                   </div>
                              </div>
                         </router-link>
                    </div>
               </div>
          </div>
     </section>
</template>

<script setup lang="ts">
import IconFooter from '@/components/icons/IconFooter.vue'
import { getImage } from '@/utils/globalHelper'

interface categoriesImg {
     id: Number
     name: string
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

interface blog_category_definitions {
     id: number
     title: string
     img: categoriesImg
}

const props = defineProps({
     item: {
          type: Object as () => {
               id: number
               blog_category_definitions: blog_category_definitions[]
               subElement: string
               subRouter: string
               subRouterUrl: string
               subtitle: string
               title: string // Added comma here
          },
          required: true
     }
})
</script>
