<template>
    <div id="splide" class="splide" ref="splideRef">
      <div class="splide__track">
        <ul class="splide__list">
          <li v-for="(item, index) in items" :key="index" class="splide__slide">
            <slot :item="item" :index="index"></slot>
          </li>
        </ul>
      </div>
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev" type="button" aria-label="Go to last slide">
          <IconChevronRight />
        </button>
        <button class="splide__arrow splide__arrow--next" type="button" aria-label="Next slide">
          <div>
            <IconChevronRight />
          </div>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Splide from '@splidejs/splide';
  
  const props = defineProps({
    items: {
      type: Array,
      required: true
    }
  });
  
  const splideRef = ref(null);
  
  onMounted(() => {
    new Splide(splideRef.value).mount();
  });
  </script>
  
  <style>
  /* Import Splide's CSS or customize it here */
  @import '@splidejs/splide/dist/css/splide.min.css';
  </style>
  