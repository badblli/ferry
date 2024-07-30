<template>
     <div class="flex flex-col w-full lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
          <ol class="flex items-center whitespace-nowrap mt-[30px] pl-5 md:pl-0" aria-label="Breadcrumb">
               <li class="inline-flex items-center">
                    <a class="mr-[6px] opacity-60 text-black text-base font-normal font-['Plus Jakarta Sans'] tracking-tight" href="#"> Anasayfa </a>
                    <IconChevronRight />
               </li>
               <li class="ml-[6px] text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight" aria-current="page">{{ term.title }}</li>
          </ol>
          <div class="w-full">
               <div class="mt-[39px] mb-[10px] flex flex-row justify-between">
                    <div class="text-black text-4xl font-semibold font-['Plus Jakarta Sans'] pl-5 md:pl-0">{{ term.title }}</div>
                    <!-- <div class="flex flex-col md:flex-row">
                         <div class="w-[77px] h-[77px] bg-white rounded-full border border-neutral-200 ml-[15px] justify-center items-center flex cursor-pointer">
                              <IconAa />
                         </div>
                         <div class="w-[77px] h-[77px] bg-white rounded-full border border-neutral-200 ml-[15px] justify-center items-center flex cursor-pointer">
                              <IconLinkSimple />
                         </div>
                         <div class="w-[77px] h-[77px] bg-white rounded-full border border-neutral-200 ml-[15px] justify-center items-center flex cursor-pointer">
                              <IconShare />
                         </div>
                    </div> -->
               </div>
          </div>
          <div v-if="term?.images" class="w-full">
               <div class="mb-16 md:mb-[104px] mt-[60px]">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-5">
                         <div v-for="(image, index) in term?.images" :key="index" class="space-y-[70px]">
                              <div class="cursor-pointer">
                                   <img class="w-full h-[295px] object-cover rounded-xl" :src="getImage(image.url)" :alt="image.name" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div class="flex flex-row px-5 md:px-0">
               <div class="prose w-full" v-html="term.content"></div>
          </div>
     </div>
</template>

<script setup lang="ts">
import IconAa from '@/components/icons/IconAa.vue'
import IconLinkSimple from '@/components/icons/IconLinkSimple.vue'
import IconShare from '@/components/icons/IconShare.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import { findOne, getImage } from '@/utils/globalHelper'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// const routerData = JSON.parse(router.currentRoute.value.params)
// console.log(routerData, 'router.currentRoute.value.params')
const { locale } = useI18n()

const isOpen = ref(true)

const toggleDropdown = () => {
     isOpen.value = !isOpen.value
}

const termSlug = computed(() => {
     return router.currentRoute.value.params.slug
})

const term = ref([])

const getTermPage = async () => {
     try {
          console.log(termSlug.value, 'termSlug')
          let filters = {
               slug: termSlug.value
          }
          const res = await findOne('term-of-use-pages', locale.value.toLowerCase(), filters)
          // console.log(locale.value.toLowerCase(), 'locale value to lowercase main navbar');
          if (res) {
               term.value = res.data[0]
          }
     } catch (error) {
          return
     }
}

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getTermPage()
     }
})

watch(termSlug, (newSlug, oldSlug) => {
     if (newSlug !== oldSlug) {
          console.log(newSlug, 'new', oldSlug, 'old')
          getTermPage()
     }
})

onMounted(async () => {
     await getTermPage() // Veriyi asenkron bir şekilde yükleyin
})
</script>

<style scoped></style>
