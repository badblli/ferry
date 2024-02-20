<template>
    <div>
        <div id="main-slider" class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide" v-for="(image, index) in images" :key="index">
                        <img :src="image.url" alt="Slide Image" />
                        <div>{{ image.title }}</div>
                    </li>
                </ul>
            </div>
        </div>

        <div id="thumbnail-slider" class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide" v-for="(image, index) in images" :key="index">
                        <img :src="image.thumbnail" alt="Thumbnail" @click="goToSlide(index)" />
                    </li>
                </ul>
            </div>
        </div>
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

let main: Splide;
let thumbnails: Splide;

const goToSlide = (index: number) => {
    main.go(index);
};

onMounted(() => {
    main = new Splide('#main-slider', {
        type: 'loop',
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
    }).mount();

    thumbnails = new Splide('#thumbnail-slider', {
        rewind: true,
        fixedWidth: 211,
        fixedHeight: 106,
        isNavigation: true,
        gap: 10,
        pagination: false,
        cover: true,
        arrows: false,
        dragMinThreshold: {
            mouse: 4,
            touch: 10,
        },
        breakpoints: {
            640: {
                fixedWidth: 66,
                fixedHeight: 38,
            },
        },
    }).mount();

    thumbnails.on('click', (slide: any) => {
        main.go(slide.index);
    });

    main.on('moved', (newIndex: number) => {
        thumbnails.go(newIndex);
    });
});
</script>
  
  
<style scoped>
.thumbnails {
    display: flex;
    margin: 1rem auto 0;
    padding: 0;
    justify-content: center;
}

.thumbnail {
    width: 70px;
    height: 70px;
    overflow: hidden;
    list-style: none;
    margin: 0 0.2rem;
    cursor: pointer;
}

.thumbnail img {
    width: 100%;
    height: auto;
}

.splide {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    width: 100%
}

.splide__list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: row;
}

.splide__track {
    width: 100%;
}



.splide__slide img {
    width: 100%;
    height: auto;
}

.splide__slide {
    opacity: 0.3;
}

.splide__slide.is-active {
    opacity: 1;
}

.splide__track--nav>.splide__list>.splide__slide.is-active {
    border: none !important;
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