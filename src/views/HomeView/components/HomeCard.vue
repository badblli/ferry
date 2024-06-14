<template>
  <div class="h-full w-full flex flex-col justify-end mt-9">
    <div v-if="item.where" class="text-black text-[25px] font-['Plus Jakarta Sans'] flex flex-col justify-start ml-7">
      <div>
        <span class="font-bold">{{ item.where.split(' ')[0] }}</span>
        <span class="font-normal">{{ item.where.split(' ')[1] }}</span>
      </div>
      <span class="md:flex hidden flex-row justify-center relative md:-left-12">
        <IconSamosaVector />
      </span>
    </div>
    <div class="mb-[61px] ml-7 flex flex-col mt-auto">
      <p class="max-w-[223px] text-3xl font-semibold font-['Plus Jakarta Sans'] tracking-wide text-white">
        {{ item.title }}
      </p>
      <div class="mt-7 flex flex-row ml-3 text-white">
        <button class="mr-[10px]">
          {{ item.price }}
        </button>
        <div v-if="index === 0">
          <IconArrowUpRight />
        </div>
        <div v-else>
          <IconArrowUpRightWhite />
        </div>
      </div>
      <div></div>
    </div>
    <img :src="getImage(item.img.url)" class="absolute top-0 left-0 w-full h-full object-cover z-[-1] rounded-[20px]" />
  </div>
</template>

<script setup lang="ts">
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue';
import IconArrowUpRightWhite from '@/components/icons/IconArrowUpRightWhite.vue';
import IconSamosaVector from '@/components/icons/IconSamosaVector.vue';
import { getImage } from '@/utils/globalHelper';

interface Image {
  url: string;
}

interface FerryItem {
  date: string;
  dateText: string;
  id: number;
  img: Image;
  price: string;
  title: string;
  where?: string | null;
}

const props = defineProps<{
  item: FerryItem;
  index: number;
}>();
</script>

<style scoped>
/* Add any styles specific to SlotContent here */

.splide {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    width: 100%
}

.splide__list {
    display: flex;
    width: 100%;
    flex-direction: row;
}

.splide__track {
    width: 100%;
}

.splide__slide {
    align-items: center;
    flex-shrink: 0;
    border-radius: 20px;
    height: 470px;
    max-width: 320px;
    cursor: pointer;
    margin-right: 10px;
    background-color: #0000003a;
}

/* .splide__slide:first-child {
    background-color: #b8b8b8;
} */

.splide__slide.is-active {
    align-items: center;
    flex-shrink: 0;
    border-radius: 20px;
    height: 470px;
    max-width: 320px;
    cursor: pointer;
    margin-right: 10px;
}

.splide__slide img {
    background: rgba(0, 0, 0, 0.30);
}

/* .splide__slide.is-active img {
    align-items: center;
    flex-shrink: 0;
    border-radius: 20px;
    height: 470px;
    max-width: 320px;
    cursor: pointer;
    margin-right: 10px;
} */

.splide__slide:first-child img {
    display: none;
    background-color: #E4EEF3;
}

.splide__slide:first-child p {
    color: #000;
}

.splide__slide:first-child {
    background-color: #E4E9EC;
}

.splide__slide:first-child button {
    color: black;
}

.splide__arrow {
    transform: none;
    border-radius: unset;
}

.splide__arrow svg {
    fill: #000;
    height: 2em;
    width: 4em;
    display: flex;
    flex-direction: row;
}

.splide.splide__arrow {
    background: white;
}

.splide__arrow.splide__arrow--prev:disabled {
    opacity: 1;
    background: transparent
}

.splide__arrow.splide__arrow--prev {
    height: full;
    top: 150px;
    left: -3rem;
    opacity: 1;
    background: transparent;
    display: none;
}

.splide__arrow.splide__arrow--next {
    height: full;
    top: 200px;
    right: 18rem;
    opacity: 1;
    z-index: 10;
    background: transparent;
    padding: 40px;
    background: #E4E9EC;
    border-radius: 100%;
    width: 88px;
    height: 86px;
}

.splide__arrow.splide__arrow--next:disabled {
    height: full;
    top: 200px;
    right: 18rem;
    opacity: 1;
    z-index: 10;
    background: transparent;
    padding: 40px;
    background: #E4E9EC;
    border-radius: 100%;
    width: 88px;
    height: 86px;
}

@media (max-width: 1024px) {
    .splide__arrow.splide__arrow--next {
        display: none;
    }

    .splide__arrow.splide__arrow--next:disabled {
        display: none;
    }

}
</style>
