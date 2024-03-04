<template>
    <div>
        <div id="main-slider" class="splide">
            <div class="splide__track ">
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
        <form class="md:relative md:max-w-[798px] mx-auto fixed bottom-0">
            <div class="flex flex-row">
                <div class="bg-white mr-4 py-3 px-8 rounded-t-md cursor-pointer">
                    Feribot Bileti
                </div>
                <div class="mr-4 bg-gray-800 py-3 px-8 rounded-t-md text-white cursor-pointer">
                    Rezervasyon Ara
                </div>
            </div>
            <div class="bg-white h-20 rounded-b-md rounded-tr-md flex items-center pl-4 w-full justify-between p-12">
                <div class="p-2">
                    <div>Nereden?</div>
                    <div>Kuşadası</div>
                </div>
                <div class="p-2">
                    icons
                </div>
                <div class="p-2">
                    <div>Nereye?</div>
                    <div>Samos</div>
                </div>
                <div class="p-2">
                    <div>Bilet Tipi</div>
                    <div>Gidiş - Dönüş</div>
                </div>
                <div class="p-2">
                    <div>Gidiş-Dönüş</div>
                    <div>Tarih Seçin</div>
                </div>
                <div class="p-2">
                    <div>Kişi Sayısı</div>
                    <div>Kişi Seçin</div>
                </div>
                <div
                    class="w-[59px] h-[59px] bg-slate-200 rounded-full flex flex-row justify-center items-center cursor-pointer">
                    İkon
                </div>
            </div>
        </form>
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
]);

let main: Splide;
let thumbnails: Splide;

const goToSlide = (index: number) => {
    main.go(index);
    console.log(index, 'index')
};

onMounted(() => {
    main = new Splide('#main-slider', {
        type: 'slide',
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
    }).mount();

    thumbnails = new Splide('#thumbnail-slider', {
        rewind: true,
        fixedWidth: 211,
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
        goToSlide(slide.index); // Bu satırı değiştirdim.
    });

    main.on('moved', (newIndex: number) => {
        thumbnails.go(newIndex);
    });
});
</script>



<style scoped>

.splide {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto
}

.splide__list {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
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

.h-75 {
    height: 75% !important;
}

.h-25 {
    height: 25% !important;
}

</style>