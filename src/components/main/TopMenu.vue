<template>
  <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full h-[60px] bg-blue-700 text-sm py-4">
    <nav class="w-full mx-auto sm:flex sm:items-center sm:justify-between lg:px-28 md:px-16 sm:px-8" aria-label="Global">
      <div class="flex items-center justify-between">
        <a class="flex-none opacity-80 text-[15px] font-medium text-white z-10" href="#">{{ message }}</a>
        <div
          class="absolute translate-x-[450px] top-1/2 -translate-y-1/2 w-44 h-44 bg-blue-600 rounded-full flex items-center justify-center ml-[-35px]">
          <span class="text-white font-bold text-[15px]">{{ buttonText }}</span>
          <IconTopMenu />
        </div>
        <div class="sm:hidden">
          <button type="button"
            class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-whiteshadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-collapse="#navbar-with-mega-menu" aria-controls="navbar-with-mega-menu"
            aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-with-mega-menu"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <a :href="item.link" v-for="(item, index) in navItems" :key="index"
            class="text-sm font-semibold dark:focus:outline-none dark:focus:ring-1">{{ item.text }}</a>
          <div class="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-slideup-animation" type="button"
              class=" hs-dropdown-toggle flex flex-row justify-center items-center mr-2">
              <span
                class="text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight cursor-pointer mr-[9px]">{{
                  currentLanguage }}</span>
              <IconArrowWhite />
            </button>
            <div
              class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-64 bg-white rounded-xl border transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mt-2 min-w-[15rem] p-7"
              aria-labelledby="hs-dropdown-slideup-animation">
              <a v-for="(language, langIndex) in languages" :key="langIndex" @click="updateCurrentLanguage(language.name)"
                class="flex items-center gap-x-3.5 py-[9px] px-[14px] mb-[9px] text-black text-base font-medium font-['Plus Jakarta Display'] tracking-tight rounded-lg hover:bg-slate-200 focus:outline-none">{{
                  language.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '../../stores/auth';
import IconTopMenu from "../icons/IconTopMenu.vue";
import IconArrowWhite from "../icons/IconArrowWhite.vue";

const userStore = useUserStore();

const message =
  "Samos’ta artık bir araban var. Günlük kiralık aracın sadece 30€!";
const buttonText = "Daha Fazla Bilgi";
const navItems = [
  { text: "Kampanyalarımız", link: "#", items: [] },
  { text: "Ferry Destek", link: "#", items: [] },
];

const languages = [
  { name: "Turkish", link: "#" },
  { name: "English", link: "#" },
  { name: "Greek", link: "#" },
  { name: "Russian", link: "#" },
  { name: "German", link: "#" },
];

const selectedLanguage = ref(userStore.selectedLanguage);

const updateCurrentLanguage = (language: string) => {
  selectedLanguage.value = language;
  userStore.updateLanguage(language);
};

const currentLanguage = selectedLanguage;

onMounted(() => {
  selectedLanguage.value = localStorage.getItem('selectedLanguage') || 'Turkish';
  userStore.updateLanguage(selectedLanguage.value);
});
</script>

<style scoped>
header {
  background-color: #2149d5;
  color: #fff;
}
</style>
