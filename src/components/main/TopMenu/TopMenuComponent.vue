<template>
     <div v-if="topMenu.links?.length > 0" ref="menu">
          <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full h-[60px] bg-blue-700 text-sm py-4">
               <nav class="centered-w w-full mx-auto sm:flex sm:items-center sm:justify-between lg:px-[100px] px-2 md:px-16 sm:px-8" aria-label="Global">
                    <div class="lg:flex hidden items-center justify-between">
                         <a class="flex-none opacity-80 text-[15px] font-medium text-white z-10" href="#">{{ topMenu.title }}</a>
                    </div>
                    <div id="navbar-with-mega-menu" class="hs-collapse justify-center my-auto overflow-hidden transition-all duration-300 basis-full grow sm:block">
                         <div class="flex gap-5 items-center sm:flex-row sm:items-center lg:justify-end sm:mt-0 md:pl-0 pl-5">
                              <router-link v-for="(item, index) in topMenu.links" :key="index" :to="item.href" class="text-sm font-semibold">
                                   {{ item.label }}
                              </router-link>
                              <div ref="dropdown">
                                   <button @click="toggleDropdown" type="button" class="flex flex-row justify-center items-center">
                                        <span class="text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight cursor-pointer mr-[9px]">
                                             {{ selectedLanguage }}
                                        </span>
                                        <IconArrowWhite />
                                   </button>
                                   <transition name="dropdown">
                                        <div v-show="isOpen" id="lang" class="absolute z-50 top-12 w-64 bg-white rounded-xl border transition-[opacity,margin] duration-300 mt-2 min-w-[15rem] p-7">
                                             <a v-for="(language, langIndex) in languages" :key="langIndex" @click="updateCurrentLanguage(language)" class="cursor-pointer flex items-center gap-x-3.5 py-[9px] px-[14px] mb-[9px] text-black text-base font-medium font-display tracking-tight rounded-lg hover:bg-slate-200 focus:outline-none">
                                                  {{ language.name }}
                                             </a>
                                        </div>
                                   </transition>
                              </div>
                         </div>
                    </div>
               </nav>
          </header>
     </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import IconArrowWhite from '../../icons/IconArrowWhite.vue'

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

const props = defineProps<{
     topMenu: TopMenuData
     languages: Language[]
     selectedLanguage: string
     tabView: any
}>()

const isOpen = ref(false)
const menu = ref(null)
const dropdown = ref(null)

const toggleDropdown = () => {
     isOpen.value = !isOpen.value
}

const { locale } = useI18n()

const updateCurrentLanguage = (language: Language) => {
     props.selectedLanguage = language.name
     locale.value = language.code
     localStorage.setItem('selectedLanguage', JSON.stringify({ name: language.name, code: language.code }))
}

const handleClickOutside = (event: MouseEvent) => {
     if (menu.value && !menu.value.contains(event.target) && dropdown.value && !dropdown.value.contains(event.target)) {
          isOpen.value = false
     }
}

onMounted(() => {
     document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
     document.removeEventListener('click', handleClickOutside)
})
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

.dropdown-enter-active,
.dropdown-leave-active {
     transition:
          opacity 0.3s,
          transform 0.3s;
}
.dropdown-enter-from,
.dropdown-leave-to {
     opacity: 0;
     transform: translateY(-10px);
}
.dropdown-enter-to,
.dropdown-leave-from {
     opacity: 1;
     transform: translateY(0);
}
</style>
