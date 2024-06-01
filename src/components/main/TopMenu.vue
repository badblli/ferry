<template>
     <div v-if="topMenu.links?.length > 0">
          <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full h-[60px] bg-blue-700 text-sm py-4">
               <nav class="centered-w w-full mx-auto sm:flex sm:items-center sm:justify-between lg:px-[100px] px-2 md:px-16 sm:px-8" aria-label="Global">
                    <div class="lg:flex hidden items-center justify-between">
                         <a class="flex-none opacity-80 text-[15px] font-medium text-white z-10" href="#">{{ topMenu.title }}</a>
                         <!-- <div
          class="absolute translate-x-[450px] top-1/2 -translate-y-1/2 w-44 h-44 bg-blue-600 rounded-full flex items-center justify-center ml-[-35px] ">
          <span class="text-white font-bold text-[15px]">{{ buttonText }}</span>
          <IconTopMenu />
        </div> -->
                    </div>
                    <div id="navbar-with-mega-menu" class="hs-collapse justify-center my-auto overflow-hidden transition-all duration-300 basis-full grow sm:block">
                         <div class="flex gap-5 items-center sm:flex-row sm:items-center lg:justify-end sm:mt-0 md:pl-0 pl-5">
                              <router-link v-for="(item, index) in topMenu.links" :key="index" :to="item.href" class="text-sm font-semibold">
                                   {{ item.label }}
                              </router-link>
                              <div class="hs-dropdown relative inline-flex">
                                   <button id="hs-dropdown-slideup-animation" type="button" class="hs-dropdown-toggle flex flex-row justify-center items-center">
                                        <span class="text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight cursor-pointer mr-[9px]">{{ selectedLanguage }}</span>
                                        <IconArrowWhite />
                                   </button>

                                   <div id="lang" class="hs-dropdown-menu w-64 bg-white rounded-xl border transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hidden z-10 opacity-0 duration-300 mt-2 min-w-[15rem] p-7" aria-labelledby="hs-dropdown-slideup-animation">
                                        <a v-for="(language, langIndex) in languages" :key="langIndex" @click="updateCurrentLanguage(language)" class="cursor-pointer flex items-center gap-x-3.5 py-[9px] px-[14px] mb-[9px] text-black text-base font-medium font-display tracking-tight rounded-lg hover:bg-slate-200 focus:outline-none">{{ language.name }}</a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </nav>
          </header>
     </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/auth'
import { useLanguageStore } from '@/stores/language'
// import IconTopMenu from "../icons/IconTopMenu.vue";
import IconArrowWhite from '../icons/IconArrowWhite.vue'
import { onMounted, ref, watch } from 'vue'
import { fetchData } from '@/utils/globalHelper'
import { useI18n } from 'vue-i18n'

interface Language {
     code: string
     name: string
}

interface Links {
     href: string
     id: number
     isExternal: boolean
     label: string
     target: string
}

interface TopMenuData {
     id: number
     links: Links[]
     title: string
}

const { locale } = useI18n()
const topMenu = ref<TopMenuData | any>([])
const languages = ref<Language[]>([])
const langStore = useLanguageStore()

const getTopMenu = async () => {
     try {
          let filters = {
               pageName: 'Home'
          }

          const res = await fetchData('pages', locale.value.toLowerCase(), filters)

          // console.log(locale.value.toLowerCase(), 'locale value to lowercase')

          if (res) {
               let data = res.data[0].layout
               // console.log(data, 'dataaaaaaaaaaaaaaaaa')

               topMenu.value = data.find((x: any) => x.__component === 'global.top-menu')
               languages.value = langStore.languages.map((item: { code: string; name: string }) => ({
                    code: item.code.toUpperCase(),
                    name: item.name.replace(/ \([^)]*\)/, '')
               }))
               console.log(topMenu.value, 'topMenu section is here!!!!!')
               // console.log(languages.value, 'languages section is here!!!!!')
               // console.log(langStore.languages, 'langstore language section is here!!!!!')
          }
     } catch (error) {
          console.error('Hata:', error)
     }
}

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          // console.log(newLocale, 'new', oldLocale, 'old')
          getTopMenu()
     }
})

onMounted(() => {
     const storedLanguage = localStorage.getItem('selectedLanguage')
     const userLangCode = storedLanguage ? JSON.parse(storedLanguage).code : 'TR'
     selectedLanguage.value = userLangCode
     locale.value = userLangCode // Set the locale to the language code as well
     // console.log(selectedLanguage.value, 'current language code: ')
     selectedLanguage.value = storedLanguage ? JSON.parse(storedLanguage).name : 'Turkish'
     // console.log(selectedLanguage.value, 'current language: ')
})

const userStore = useUserStore()
const selectedLanguage = ref(userStore.selectedLanguage)

// console.log(selectedLanguage, 'selected!!!!!!!!!!!')

const updateCurrentLanguage = (language: Language) => {
     selectedLanguage.value = language.name
     locale.value = language.code
     userStore.updateLanguage(language.name)
     localStorage.setItem('selectedLanguage', JSON.stringify({ name: language.name, code: language.code }))
}
</script>

<style scoped>
header {
     background-color: #2149d5;
     color: #fff;
}

.loading-navbar {
     animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
     0% {
          background-color: #f1f1f1;
     }

     50% {
          background-color: #e7e7e7;
     }

     100% {
          background-color: #f1f1f1;
     }
}
</style>
