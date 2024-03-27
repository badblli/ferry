<template>
  <div class="flex flex-col justify-center items-center m-auto relative">
    <div class="w-full">
      <SliderWithThumbnails />
      <MainTitleCard v-for="(item, index) in secondSectionData" :key="index" :item="item" />
      <MainTourCard v-for="(item, index) in thirdSectionData" :key="index" :item="item" />
      <HomeCardSplide v-for="(item, index) in fourthSectionData" :key="index" :item="item" />
      <MainCategories v-for="(item, index) in fifthSectionData" :key="index" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import SliderWithThumbnails from './components/SliderWithThumbnails.vue'
import HomeCardSplide from './components/HomeCardSplide.vue'
import MainTourCard from './components/MainTourCard.vue'
import MainTitleCard from './components/MainTitleCard.vue'
import MainCategories from './components/MainCategories.vue'
import { fetchData } from '@/utils/globalHelper'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const firstSectionData = ref([])
const secondSectionData = ref([])
const thirdSectionData = ref([])
const fourthSectionData = ref([])
const fifthSectionData = ref([])

const getHome = async () => {
  try {
    let filters = {
      saleChannel: 'Samosa',
      pageName: 'Home'
    }

    // const res = await fetchData('pages', 'en', filters)
    const res = await fetchData('pages', locale.value.toLowerCase(), filters);

    if (res) {
      let data = res.data[0].layout
      firstSectionData.value = data.filter((x: any) => x.__component === 'home-page.home-page')
      secondSectionData.value = data.filter((x: any) => x.__component === 'home-page.title-card')
      thirdSectionData.value = data.filter((x: any) => x.__component === 'home-page.tour-card')
      fourthSectionData.value = data.filter((x: any) => x.__component === 'home-page.card-splide')
      fifthSectionData.value = data.filter((x: any) => x.__component === 'home-page.categories')
    }
  } catch (error) {
    console.error('Hata:', error)
  }
}

watch(locale, (newLocale, oldLocale) => {
  if (newLocale!== oldLocale) {
    console.log(newLocale, 'new', oldLocale, 'old')
    getHome()
  }
})

onMounted(async () => {
  await getHome()
})
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
.category-item:nth-child(9n + 1),
.category-item:nth-child(9n + 2),
.category-item:nth-child(9n + 3),
.category-item:nth-child(9n + 4) {
  flex-basis: calc((100% - 50px * 3) / 4);
}

/* 3 ardışık öğe */
.category-item:nth-child(9n + 5),
.category-item:nth-child(9n + 6),
.category-item:nth-child(9n + 7) {
  flex-basis: calc((100% - 50px * 2) / 3);
}

/* 2 ardışık öğe */
.category-item:nth-child(9n + 8),
.category-item:nth-child(9n + 9) {
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

  .category-item:nth-child(9n + 1),
  .category-item:nth-child(9n + 2),
  .category-item:nth-child(9n + 3),
  .category-item:nth-child(9n + 4) {
    flex-basis: calc((100%));
  }

  /* 3 ardışık öğe */
  .category-item:nth-child(9n + 5),
  .category-item:nth-child(9n + 6),
  .category-item:nth-child(9n + 7) {
    flex-basis: calc((100%));
  }

  /* 2 ardışık öğe */
  .category-item:nth-child(9n + 8),
  .category-item:nth-child(9n + 9) {
    flex-basis: calc((100%));
  }
}
</style>
