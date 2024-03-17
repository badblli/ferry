<template>
  <div class="flex flex-col justify-center items-center m-auto relative ">
    <div class="w-full ">
      <div class="lg:px-[100px] px-2 md:px-16 sm:px-8 relative centered-w">
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
            class="w-full] text-center text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
            Marzipan sweet roll gingerbread oat cake cheesecake pie. Pie macaroon sweet liquorice topping.</div>
          <div class="mt-[107px] flex flex-col lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
            <div class="flex flex-row flex-wrap justify-center ">
              <div v-for="(category, index) in fakeData1" :key="index" class="category-item">
                <CategorieSlider :title="category.title" />
              </div>
            </div>
          </div>
          <div class="mt-[89px] mb-[119px] flex flex-row">
            <div class="w-full text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
              Ve daha fazlası için blog yazılarımızı okuyun.</div>
            <div class="flex md:flex-row flex-col">
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
import SliderWithThumbnails from './components/SliderWithThumbnails.vue';
import IconFooter from '@/components/icons/IconFooter.vue';
import HomeCardSplide from './components/HomeCardSplide.vue';
import MainTourCard from './components/MainTourCard.vue';
// import HomeToursCard from './components/HomeToursCard.vue';
import MainTitleCard from './components/MainTitleCard.vue';
import CategorieSlider from '../../components/advanced/CategorieSlider.vue';

const fakeData1 = [
  { id: 1, title: 'Kategori 1' },
  { id: 2, title: 'Kategori 2' },
  { id: 3, title: 'Kategori 3' },
  { id: 4, title: 'Kategori 4' },
  { id: 5, title: 'Kategori 5' },
  { id: 6, title: 'Kategori 6' },
  { id: 7, title: 'Kategori 7' },
  { id: 8, title: 'Kategori 8' },
  { id: 9, title: 'Kategori 9' },
];

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

.category-item {
  flex: 1 0 auto;
  max-width: calc((100% - 40px) / 4);
  height: 90px;
  margin: 10px;
}

/* 4 ardışık öğe */
.category-item:nth-child(9n+1),
.category-item:nth-child(9n+2),
.category-item:nth-child(9n+3),
.category-item:nth-child(9n+4) {
  flex-basis: calc((100% - 50px * 3) / 4);
}

/* 3 ardışık öğe */
.category-item:nth-child(9n+5),
.category-item:nth-child(9n+6),
.category-item:nth-child(9n+7) {
  flex-basis: calc((100% - 50px * 2) / 3);
}

/* 2 ardışık öğe */
.category-item:nth-child(9n+8),
.category-item:nth-child(9n+9) {
  flex-basis: calc((100% - 30px) / 2);
}

@media screen and (max-width: 1190px) {

  /* For screens with a maximum width of 768px */
  /* Set all category items to take full width */
  .category-item {
    flex-basis: 100%;
    /* Full width */
    max-width: 100%;
    /* Full width */
  }

  .category-item:nth-child(9n+1),
  .category-item:nth-child(9n+2),
  .category-item:nth-child(9n+3),
  .category-item:nth-child(9n+4) {
    flex-basis: calc((100%));
  }

  /* 3 ardışık öğe */
  .category-item:nth-child(9n+5),
  .category-item:nth-child(9n+6),
  .category-item:nth-child(9n+7) {
    flex-basis: calc((100%));
  }

  /* 2 ardışık öğe */
  .category-item:nth-child(9n+8),
  .category-item:nth-child(9n+9) {
    flex-basis: calc((100%));
  }
}
</style>