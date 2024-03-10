<template>
  <div class="flex flex-col justify-center items-center m-auto relative ">
    <div class="w-full ">
      <div class="lg:px-28 md:px-16 sm:px-8 relative centered-w">
        <SliderWithThumbnails />
      </div>
      <MainTitleCard :item="item" v-for="(item, index) in fakeData" :key="index" />
      <MainTourCard />
      <HomeCardSplide />
      <section>
        <div class="w-full bg-slate-200 flex flex-col items-center mb-[120px]">
          <div class=" text-black text-[42px] font-medium font-display tracking-wide mt-[100px] mb-7">Samos
            Adasında<br />neler yapabilirim?</div>
          <div
            class="w-[534px] text-center text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
            Marzipan sweet roll gingerbread oat cake cheesecake pie. Pie macaroon sweet liquorice topping.</div>
          <div class="mt-[107px] flex flex-col centered-w">
            <div class="flex flex-row flex-wrap justify-center">
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
            </div>
            <div class="flex flex-row flex-wrap justify-center">
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
            </div>
            <div class="flex flex-row justify-center flex-wrap ">
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
            </div>
          </div>
          <div class="mt-[89px] mb-[119px] flex flex-row">
            <div class="w-[333px] text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
              Ve daha fazlası için blog yazılarımızı okuyun.</div>
            <div class="flex flex-row">
              <div class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mr-3">
                Samos’u
                Keşfet
              </div>
              <div
                class="flex items-center justify-center w-7 h-7 p-1 flex-shrink-0 rounded-full bg-gray-800 cursor-pointer">
                <IconFooter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import SliderWithThumbnails from '@/components/advanced/SliderWithThumbnails.vue';
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue';
import IconShare2 from '@/components/icons/IconShare2.vue';
import IconFooter from '@/components/icons/IconFooter.vue';
import HomeCardSplide from './components/HomeCardSplide.vue';
import MainTourCard from './components/MainTourCard.vue';
// import HomeToursCard from './components/HomeToursCard.vue';
import MainTitleCard from './components/MainTitleCard.vue';

// campaignTitle: String,
//         campaignDescription: String,
//         campaignImage: String,
//         buttonText: String,
//         visaTitle: String,
//         visaDescription: String,
//         toursTitle: String,
//         toursDescription: String,
//         toursButton: String,
//         toursImage: String

const fakeData = [
  {
    campaignTitle: 'Kampanya',
    company: 'Kasım’da Kuşadası Samos Feribot Bileti €30! Her Cumartesi ve Pazar.',
    campaignImage: 'https://via.placeholder.com/100x100',
    buttonText: 'Tüm Turları Keşfet',
    visaTitle: '1 Günde Vize',
    visaDescription: 'Schengen Vizenizi Biz Alalım',
    toursTitle: 'Samos Turları',
    toursDescription: 'Türkçe Rehberli Samos Turu €25',
    toursButtonText: 'Tüm Turlar',
    toursImage: 'https://via.placeholder.com/100x100'
  },
];


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