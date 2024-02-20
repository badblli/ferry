<template>
    <div class="splide">
        <div class="splide__track">
            <ul class="splide__list">
                <li class="splide__slide" v-for="(image, index) in images" :key="index">
                    <img :src="image.url" alt="Slide Image" />
                    <div>{{ image.title }}</div>
                </li>
            </ul>
        </div>
        <!-- <div class="splide__thumbnails">
            <ul class="splide__thumbnails__list">
                <li class="splide__thumbnails__item" v-for="(image, index) in images" :key="index">
                    <img :src="image.thumbnail" alt="Thumbnail" @click="goToSlide(index)" />
                </li>
            </ul>
        </div> -->
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

interface Image {
    url: string;
    thumbnail: string;
    title: string;
}

const images = ref<Image[]>([
    { url: 'https://via.placeholder.com/1240x630', thumbnail: 'https://via.placeholder.com/124x63', title: 'Slide 1' },
    { url: 'https://via.placeholder.com/1240x630', thumbnail: 'https://via.placeholder.com/124x63', title: 'Slide 2' },
    { url: 'https://via.placeholder.com/1240x630', thumbnail: 'https://via.placeholder.com/124x63', title: 'Slide 3' },
    // Add more images as needed
]);

let splide: Splide;

onMounted(() => {
    splide = new Splide('.splide', {
        type: 'loop',
        heightRatio: 0.4,
        pagination: true,
        arrows: false,
        focus: 'center',
        gap: '1rem',
        cover: true,
    });

    splide.mount();
});

const goToSlide = (index: number) => {
    splide.go(index);
};
</script>
  
<style scoped>
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
    height: 81px;
    display: block;
    width: 100%;
    background-color: rgb(248 250 252);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 361px;
    height: 81px;
    flex-shrink: 0;
    border-radius: 20px;
}

.splide__slide.is-active {
    transform: scale(1);
    filter: grayscale(100%);
    background-color: white
}

.splide__arrow {
    transform: none;
    border-radius: unset;
    opacity: .9;
}

.splide__arrow svg {
    fill: #000;
    height: 2em;
    width: 4em;
}
</style>