<template>
    <section class="mb-[120px] lg:px-28 md:px-16 sm:px-8">
        <div>
            <div class="text-black text-[42px] font-medium font-display tracking-wide mb-7">Her gün
                farklı<br />Yunan adaları</div>
            <div class="w-[641px] text-zinc-600 text-lg font-medium font-['Plus Jakarta Sans'] leading-7 mb-[103px]">
                Tatilinizi güzel
                bir Yunan adasında geçirmeye, küçük bir kaçamak yapmaya ne dersiniz? Yunan adalarına feribot sayfamızı
                ziyaret
                edin en ekonomik tatil paketlerimizden faydalanın.</div>
        </div>
        <div class="flex flex-row gap-5 w-full">
            <div class="w-80 h-[470px] bg-slate-200 rounded-[20px] pl-10 pb-12 pt-[35px]">
                <div class="flex flex-col h-full justify-between">
                    <div class="w-40">
                        <div class="text-black text-[25px] font-['Plus Jakarta Sans']">
                            <span class="font-bold">
                                Samosa
                            </span> Bilet
                        </div>
                        <div class="flex flex-row items-center justify-center translate-x-5">
                            <IconSamosaVector />
                        </div>
                    </div>
                    <div>
                        <div
                            class="text-black text-3xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mb-[27px]">
                            Ekim
                            ayında<br />yunan adalarına<br />indirimli git.</div>
                        <div class="text-black text-base font-medium font-['Plus Jakarta Sans'] tracking-tight">€30’dan
                            başlayan
                            turlar</div>
                    </div>
                </div>
            </div>
            <div class="relative w-80 h-[470px] bg-slate-200 rounded-[20px] overflow-hidden">
                <!-- pl-10 pb-12 pt-[35px] -->
                <div class="absolute bottom-0 z-10 w-full p-7 md:ml-4 md:mb-4 rounded-xl">
                    <div class="flex flex-col justify-between h-full w-full">
                        <div class="text-white text-3xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mb-5">
                            Sakız
                            Adasına<br />Feribot</div>
                        <div class="text-white text-base font-medium font-['Plus Jakarta Sans'] tracking-tight">€30’dan
                            başlayan
                            turlar</div>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1583061386694-e364c84ba31d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="asd" class="object-fill w-full h-full rounded-xl flip-horizontal" />
                <div class="absolute inset-0 bg-black opacity-30 rounded-[20px]"></div>
            </div>
        </div>
    </section>
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