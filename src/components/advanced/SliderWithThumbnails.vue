<template>
    <div>
        <div class="flex flex-col">
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
            <div id="thumbnail-slider" class="splide ">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide" v-for="(image, index) in images" :key="index">
                            <img :src="image.thumbnail" alt="Thumbnail" @click="goToSlide(index)" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <form class="md:relative md:max-w-[798px] mx-auto -translate-y-72">
            <div class="flex flex-row">
                <div :class="{ 'bg-slate-200': showTrue, 'bg-white': !showTrue }"
                    class="bg-slate-200 mr-[5px] py-3 px-8 rounded-t-xl cursor-pointer">
                    <span @click="showTrue = false"
                        class="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">
                        Feribot Bileti
                    </span>
                </div>
                <div :class="{ 'bg-slate-200': !showTrue, 'bg-white': showTrue }"
                    class="mr-4 bg-slate-200 py-3 px-8 rounded-t-xl text-white cursor-pointer">
                    <span @click="showTrue = true"
                        class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">
                        Rezervasyon Ara
                    </span>
                </div>
            </div>
            <div
                class="bg-white rounded-b-xl rounded-tr-xl flex justify-between items-center w-full text-black text-base font-medium font-display tracking-tight">
                <div class="flex flex-row items-center justify-between w-full" v-if="!showTrue">
                    <div class="flex flex-row items-center w-full ml-7">
                        <div>
                            <div>Nereden?</div>
                            <div class="font-light">Kuşadası</div>
                        </div>
                        <div
                            class=" bg-gray-200 rounded-full flex flex-row justify-center items-center p-[7px] ml-[26px] mr-[21px]">
                            <IconArrowsLeftRight />
                        </div>
                        <div>
                            <div>Nereye?</div>
                            <div class="font-light">Samos</div>
                        </div>
                        <div class="w-14 h-[1px] rotate-90 border border-zinc-300 mx-3"></div>
                        <div>
                            <div>Bilet Tipi</div>
                            <div class="font-light">Gidiş - Dönüş</div>
                        </div>
                        <div class="w-14 h-[1px] rotate-90 border border-zinc-300"></div>
                        <div>
                            <div>Gidiş-Dönüş</div>
                            <div class="font-light">Tarih Seçin</div>
                        </div>
                        <div class="w-14 h-[1px] rotate-90 border border-zinc-300"></div>
                        <div>
                            <div>Kişi Sayısı</div>
                            <div class="font-light">Kişi Seçin</div>
                        </div>
                    </div>
                    <div class=" bg-slate-200 rounded-full flex flex-row justify-center items-center cursor-pointer p-[17px] m-[11px]
                    ">
                        <IconSearchNormal />
                    </div>
                </div>
                <div v-if="showTrue">
                    <div class="h-20 flex flex-col justify-center items-center">
                        <div class="m-7 flex flex-row">
                            <p>Rezervasyon Kodunu Giriniz</p>
                            <p class="ml-3">Yolcunun Adı Soyadı</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import IconSearchNormal from '../icons/IconSearchNormal.vue';
import IconArrowsLeftRight from '../icons/IconArrowsLeftRight.vue';

interface Image {
    url: string;
    thumbnail: string;
    title: string;
}
const showTrue = ref(false); // Teşekkürler div'i göstermek için
const images = ref<Image[]>([
    { url: 'https://images.unsplash.com/photo-1583062482795-d2bef78e9bc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumbnail: 'https://images.unsplash.com/photo-1583062482795-d2bef78e9bc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '' },
    { url: 'https://images.unsplash.com/photo-1696613496496-1c7b2a55e7d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumbnail: 'https://images.unsplash.com/photo-1696613496496-1c7b2a55e7d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '' },
    { url: 'https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumbnail: 'https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '' },
    { url: 'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', thumbnail: 'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: '' },
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
            1140: {
                fixedWidth: 136,
                fixedHeight: 78,
            },
            840: {
                fixedWidth: 126,
                fixedHeight: 58,
            },
            640: {
                fixedWidth: 96,
                fixedHeight: 58,
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
}

.splide__list {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
}

#thumbnail-slider .splide__list {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    justify-content: center;
}

#thumbnail-slider .splide__slide {
    width: 211px;
    height: 106px;
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

.margin-center {
    display: flex;
    flex-direction: row;
    justify-self: center;
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
    top: 40px;
    left: -3rem;
    opacity: 1;
    background: transparent;
}

.splide__arrow.splide__arrow--next {
    height: full;
    top: 40px;
    right: -3rem;
    opacity: 1;
    background: transparent;
}

.splide__arrow.splide__arrow--next:disabled {
    opacity: 1;
    background: transparent
}

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

.splide__slide div {
    opacity: .6;
}

.splide__slide.is-active div {
    opacity: 1;
}

.splide__slide.is-active {
    transform: scale(1);
    filter: grayscale(40%);
    /* background-color: rgba(0, 0, 0, 0.2); */
    opacity: 1;
}

.splide__arrow {
    transform: none;
    border-radius: unset;
    opacity: .9;
}

.splide__arrow svg {
    fill: #000;
    height: 5em;
    width: 5rem;
}

@media (max-width: 1024px) {
    .splide__arrow.splide__arrow--prev {
        height: full;
        top: 40px;
        left: -2rem;
        opacity: 1;
        background: transparent;
    }

    .splide__arrow.splide__arrow--next {
        height: full;
        top: 40px;
        right: -2rem;
        opacity: 1;
        background: transparent;
    }
}
</style>