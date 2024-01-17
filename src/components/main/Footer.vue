<template>
  <div class="w-full h-[172px] bg-slate-200 flex justify-evenly items-center">
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
  <footer className="bg-white flex justify-between">
    <div className="m-32">
      <div className="flex items-center">
        <IconMainSamosa />
        <div>
          <span className="text-black text-2xl font-bold font-['Plus Jakarta Display'] tracking-wide">samosa</span>
          <span className="text-black text-2xl font-normal font-['Plus Jakarta">feribot</span>
        </div>
      </div>
      <div className="text-black text-sm font-normal font-['Plus Jakarta Display']">
        Copyright © 2022. SamosaFeribot. All rights reserved.
      </div>
      <div class="text-black text-2xl font-normal font-['Plus Jakarta Display'] leading-loose">Abone ol,
        kampanya<br />kaçırma!</div>
      <div>email input will be here</div>
    </div>
    <div className="m-32">
      <div class="text-black text-lg font-medium font-['Plus Jakarta Display'] mb-5">Samosa Feribot</div>
      <div v-for="(item, index ) in footerCol" :key="index" className="mb-5">
        <a :href="item.link" class="text-zinc-600 text-sm font-normal font-['Plus Jakarta Display']">{{
          item.text
        }}</a>
      </div>
    </div>
    <div className="m-32">
      <div class="text-black text-lg font-medium font-['Plus Jakarta Display'] mb-5">Hakkımızda</div>
      <div v-for="(item, index ) in footerSecCol" :key="index" className="mb-5">
        <a :href="item.link" class="text-zinc-600 text-sm font-normal font-['Plus Jakarta Display']">{{
          item.text
        }}</a>
      </div>
    </div>
    <div className="m-32">
      <div class="text-black text-lg font-medium font-['Plus Jakarta Display'] mb-5">Turlar</div>
      <div v-for="(item, index ) in footerThrdCol" :key="index" className="mb-5">
        <a :href="item.link" class="text-zinc-600 text-sm font-normal font-['Plus Jakarta Display']">{{
          item.text
        }}</a>
      </div>
      <div className="flex items-center justify-center ">
        <div className="text-black text-base font-medium font-['Plus Jakarta Sans'] tracking-tight">
          Diğer Turlar
        </div>
        <IconMainSamosa />
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
