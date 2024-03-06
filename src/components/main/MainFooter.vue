<template>
  <div class="w-full h-[172px] bg-slate-200 flex justify-evenly items-center grid-cols-4 ">
    <div class="text-center text-black text-lg font-medium lg:m-0 m-2">
      {{ footerContactText }}
    </div>
    <div className="flex flex-row justify-evenly items-center cursor-pointer lg:m-0 m-2"
      data-hs-overlay="#hs-vertically-centered-modal">
      <span className="mr-3">İletişime Geç</span>
      <div class="flex items-center justify-center w-7 h-7 p-1 flex-shrink-0 rounded-full bg-gray-800">
        <IconFooter />
      </div>
      <ContactModal />
    </div>
  </div>
  <footer class="bg-white text-black p-8 centered-w">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10 md:gap-0 xl:gap-0">
      <div className="sm:hidden md:hidden lg:hidden xl:block 2xl:block">
        <!-- for first column and space -->
      </div>
      <div>
        <div class="text-lg font-bold mb-4 flex">
          <IconMainSamosa />
          <div>
            <span className="text-black text-2xl font-bold font-display tracking-wide">samosa</span>
            <span className="text-black text-2xl font-normal font-display">feribot</span>
          </div>
        </div>
        <ul>
          <li>
            <div className="mb-8">
              <div className="text-black text-sm font-normal font-display">
                Copyright © 2022. SamosaFeribot. All rights reserved.
              </div>
            </div>
          </li>
          <li>
            <div class="text-black text-2xl font-normal font-display leading-loose mb-2">Abone ol,
              kampanya<br />kaçırma!</div>
          </li>
          <li>
            <form class="w-full max-w-sm">
              <div class="flex items-center border-b border-gray-200">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text" placeholder="Email Address" aria-label="Full name">
                <button
                  class="flex-shrink-0 bg-slate-200 text-sm text-white flex justify-center items-center w-[50px] h-[50px] rounded-full"
                  type="button">
                  <IconArrow />
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
      <div className="sm:hidden md:hidden lg:hidden xl:block 2xl:block">
        <!-- for first column and space -->
      </div>
      <div>
        <div class="text-black text-lg font-medium font-display mb-5">Samosa Feribot</div>
        <div v-for="(item, index ) in footerCol" :key="index" className="mb-5">
          <a :href="item.link" class="text-zinc-600 text-sm font-normal font-display">{{
            item.text
          }}</a>
        </div>
      </div>
      <div>
        <div class="text-black text-lg font-medium font-display mb-5">Hakkımızda</div>
        <div v-for="(item, index ) in footerSecCol" :key="index" className="mb-5">
          <a :href="item.link" class="text-zinc-600 text-sm font-normal font-display">{{
            item.text
          }}</a>
        </div>
      </div>
      <div>
        <div class="text-black text-lg font-medium font-display mb-5">Turlar</div>
        <div v-for="(item, index ) in footerThrdCol" :key="index" className="mb-5">
          <a :href="item.link" class="text-zinc-600 text-sm font-normal font-display">{{
            item.text
          }}</a>
        </div>
        <div className="flex cursor-pointer">
          <a className="mb-5 mr-3 text-black text-base font-medium  tracking-tight">
            Diğer Turlar
          </a>
          <div className="pt-1">
            <IconArrowUpRight />
          </div>
        </div>
      </div>
      <div>
        <div class="w-[50px] h-[50px] relative">
          <div @click="toTop" class="w-[50px] h-[50px] left-0 top-0 absolute bg-slate-200 rounded-[25px] cursor-pointer">
            <IconArrowTop />
          </div>
          <div class="origin-top-left -rotate-90 w-5 h-5 left-[14.81px] top-[35.50px] absolute">
          </div>
        </div>
      </div>
      <div>
        <div className="sm:hidden md:hidden lg:hidden xl:block 2xl:block">
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconFooter from '../icons/IconFooter.vue';
import IconMainSamosa from '../icons/IconMainSamosa.vue';
import IconArrowTop from '../icons/IconArrowTop.vue';
import IconArrow from '../icons/IconArrow.vue';
import IconArrowUpRight from '../icons/IconArrowUpRight.vue';
import ContactModal from '../advanced/ContactModal.vue';

// const currentYear = ref(new Date().getFullYear());
const footerContactText =
  'SamosaFeribot destek hizmetlerinden faydalanmak ve hızlı bilet almak için bize ulaşın.';

const footerCol = ref([
  { text: 'Kullanım Koşulları', link: '#', items: [] },
  { text: 'Gizlilik Politikası', link: '#', items: [] },
  { text: 'İptal Koşulları', link: '#', items: [] },
  { text: 'Misafir Kuralları', link: '#', items: [] },
  { text: 'Rezervasyon Rehberi', link: '#', items: [] },
]);

const footerSecCol = ref([
  { text: 'Hikayemiz', link: '#', items: [] },
  { text: 'SamosFeribot\'a Ulaş', link: '#', items: [] },
  { text: 'Blog', link: '#', items: [] },
  { text: 'S.S.S.', link: '#', items: [] },
  { text: 'Rezervasyon Rehberi', link: '#', items: [] },
]);

const footerThrdCol = ref([
  { text: 'Sakız Adası Turu', link: '#', items: [] },
  { text: 'Mikanos Adası Turu', link: '#', items: [] },
  { text: 'Rodos Adası Turu', link: '#', items: [] },
  { text: 'Samos Adası Turu', link: '#', items: [] },
]);

const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
</script>