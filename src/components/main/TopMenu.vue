<template>
  <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full h-[60px] bg-blue-700 text-sm py-4">
    <nav class="w-full mx-auto sm:flex sm:items-center sm:justify-between lg:px-28 md:px-16 sm:px-8" aria-label="Global">
      <div class="lg:flex hidden items-center justify-between">
        <a class="flex-none opacity-80 text-[15px] font-medium text-white z-10" href="#">{{ message }}</a>
        <!-- <div
          class="absolute translate-x-[450px] top-1/2 -translate-y-1/2 w-44 h-44 bg-blue-600 rounded-full flex items-center justify-center ml-[-35px] ">
          <span class="text-white font-bold text-[15px]">{{ buttonText }}</span>
          <IconTopMenu />
        </div> -->
      </div>
      <div id="navbar-with-mega-menu"
        class="hs-collapse justify-center my-auto overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="flex gap-5 items-center sm:flex-row sm:items-center lg:justify-end sm:mt-0 md:pl-0 pl-5">
          <router-link v-for="(item, index) in topNavbarRoutes" :key="index" :to="item.to" class="text-sm font-semibold"
            href="#">
            {{ item.text }}
          </router-link>
          <div class="hs-dropdown relative inline-flex">
            <button id="hs-dropdown-slideup-animation" type="button"
              class=" hs-dropdown-toggle flex flex-row justify-center items-center mr-2">
              <span
                class="text-white text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight cursor-pointer mr-[9px]">{{
                  currentLanguage }}</span>
              <IconArrowWhite />
            </button>
            <div
              class="hs-dropdown-menu w-64 bg-white rounded-xl border transition-[opacity,margin] duration hs-dropdown-open:opacity-100 hidden z-10  opacity-0 duration-300 mt-2 min-w-[15rem] p-7"
              aria-labelledby="hs-dropdown-slideup-animation">
              <a v-for="(language, langIndex) in languages" :key="langIndex" @click="updateCurrentLanguage(language.name)"
                class="cursor-pointer flex items-center gap-x-3.5 py-[9px] px-[14px] mb-[9px] text-black text-base font-medium font-display tracking-tight rounded-lg hover:bg-slate-200 focus:outline-none">{{
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
// import IconTopMenu from "../icons/IconTopMenu.vue";
import IconArrowWhite from "../icons/IconArrowWhite.vue";

const topNavbarRoutes = [
  { text: "Kampanyalarımız", link: "#", to: "/campaign" },
  { text: "Ferry Destek", link: "#", to: "/contact" },
];

const userStore = useUserStore();

const message =
  "Samos’ta artık bir araban var. Günlük kiralık aracın sadece 30€!";
// const buttonText = "Daha Fazla Bilgi";

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
