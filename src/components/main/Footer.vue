<template>
  <div class="w-full h-[172px] bg-slate-200 flex justify-evenly items-center grid-cols-4">
    <div class="text-center text-black text-lg font-medium font-['Plus Jakarta Sans']">
      {{ footerContactText }}
    </div>
    <div className="flex flex-row justify-evenly items-center">
      <span className="mr-3">İletişime Geç </span>
      <div class="flex items-center justify-center w-7 h-7 p-1 flex-shrink-0 rounded-full bg-gray-800">
        <IconFooter />
      </div>
    </div>
  </div>
  <footer class="bg-white text-black p-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10">
      <div className="sm:hidden md:hidden lg:hidden xl:block 2xl:block">
        <!-- for first column and space -->
      </div>
      <div>
        <div class="text-lg font-bold mb-4 flex">
          <IconMainSamosa />
          <div>
            <span className="text-black text-2xl font-bold font-['Plus Jakarta Display'] tracking-wide">samosa</span>
            <span className="text-black text-2xl font-normal font-['Plus Jakarta">feribot</span>
          </div>
        </div>
        <ul>
          <li>
            <div className="mb-8">
              <div className="text-black text-sm font-normal font-['Plus Jakarta Display']">
                Copyright © 2022. SamosaFeribot. All rights reserved.
              </div>
            </div>
          </li>
          <li>
            <div class="text-black text-2xl font-normal font-['Plus Jakarta Display'] leading-loose mb-2">Abone ol,
              kampanya<br />kaçırma!</div>
          </li>
          <li>
            <form class="w-full max-w-sm">
              <div class="flex items-center border-b border-gray-200">
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text" placeholder="Email Address" aria-label="Full name">
                <button class="flex-shrink-0 bg-slate-200 text-sm text-white py-4 px-4 rounded-full" type="button">
                  Icon
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
      <div>
        <div class="text-black text-lg font-medium font-['Plus Jakarta Display'] mb-5">Samosa Feribot</div>
        <div v-for="(item, index ) in footerCol" :key="index" className="mb-5">
          <a :href="item.link" class="text-zinc-600 text-sm font-normal font-['Plus Jakarta Display']">{{
            item.text
          }}</a>
        </div>
      </div>
      <div>
        <div class="text-black text-lg font-medium font-['Plus Jakarta Display'] mb-5">Hakkımızda</div>
        <div v-for="(item, index ) in footerSecCol" :key="index" className="mb-5">
          <a :href="item.link" class="text-zinc-600 text-sm font-normal font-['Plus Jakarta Display']">{{
            item.text
          }}</a>
        </div>
      </div>
      <div>
        <div class="text-black text-lg font-medium font-['Plus Jakarta Display'] mb-5">Turlar</div>
        <div v-for="(item, index ) in footerThrdCol" :key="index" className="mb-5">
          <a :href="item.link" class="text-zinc-600 text-sm font-normal font-['Plus Jakarta Display']">{{
            item.text
          }}</a>
        </div>
        <a className="mb-5 text-black text-base font-medium font-['Plus Jakarta Sans'] tracking-tight cursor-pointer">
          Diğer Turlar
        </a>
      </div>
      <div>
        <div class="w-[50px] h-[50px] relative">
          <div class="w-[50px] h-[50px] left-0 top-0 absolute bg-slate-200 rounded-[25px]"></div>
          <div class="origin-top-left -rotate-90 w-5 h-5 left-[14.81px] top-[35.50px] absolute">
          </div>
        </div>
      </div>
      <div>
        <div className="sm:hidden md:hidden lg:hidden xl:block 2xl:block">
          <!-- for last column and space -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconFooter from "../icons/IconFooter.vue";
import IconMainSamosa from "../icons/IconMainSamosa.vue";
import IconAnotherTour from "../icons/IconAnotherTour.vue"

export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      footerContactText:
        "SamosaFeribot destek hizmetlerinden faydalanmak ve hızlı bilet almak için bize ulaşın.",
      footerCol: [
        { text: "Kullanım Koşulları", link: "#", items: [] },
        { text: "Gizlilik Politikası", link: "#", items: [] },
        { text: "İptal Koşulları", link: "#", items: [] },
        { text: "Misafir Kuralları", link: "#", items: [] },
        { text: "Rezervasyon Rehberi", link: "#", items: [] },
      ],
      footerSecCol: [
        { text: "Hikayemiz", link: "#", items: [] },
        { text: "SamosFeribot'a Ulaş", link: "#", items: [] },
        { text: "Blog", link: "#", items: [] },
        { text: "S.S.S.", link: "#", items: [] },
        { text: "Rezervasyon Rehberi", link: "#", items: [] },
      ],
      footerThrdCol: [
        { text: "Sakız Adası Turu", link: "#", items: [] },
        { text: "Mikanos Adası Turu", link: "#", items: [] },
        { text: "Rodos Adası Turu", link: "#", items: [] },
        { text: "Samos Adası Turu", link: "#", items: [] },
      ],
    };
  },
  components: {
    IconFooter,
    IconMainSamosa,
    IconAnotherTour
  },
};
</script>