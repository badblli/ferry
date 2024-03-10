<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[145px] bg-slate-200 flex flex-col justify-center items-center">
            <div class="relative w-full lg:px-28 md:px-16 sm:px-8">
                <ol class="pb-4 flex items-center whitespace-nowrap pl-10 md:pl-0" aria-label="Breadcrumb">
                    <li class="inline-flex items-center">
                        <a class="mr-[6px] opacity-60 text-black text-base font-normal font-['Plus Jakarta Sans'] tracking-tight"
                            href="#">
                            Anasayfa
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g id="Chevron - Down" opacity="0.6">
                                <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303Z"
                                    fill="black" />
                            </g>
                        </svg>
                    </li>
                    <li class="ml-[6px] text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight"
                        aria-current="page">
                        Blog
                    </li>
                </ol>
                <h1
                    class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide my-auto flex items-center pl-10 md:pl-0">
                    Samos'a Blog
                </h1>
            </div>
        </div>
        <!-- CONTENT SWİPER SECTİON -->
        <section class="w-full px-10 md:pl-0">
            <div class="w-full h-[147px] justify-between relative items-center pt-6 lg:pl-28 md:pl-16 sm:pl-8">
                <Splide :options="splideOptions">
                    <SplideSlide v-for="(item, index) in images" :key="index"
                        class="flex flex-row -w-[270px] h-[90px] rounded-[128px] border border-neutral-200 items-center cursor-pointer">
                        <img class="w-[66px] h-[66px] rounded-full ml-[17px]" :src="item.src" alt="Slide Image">
                        <div class="text-gray-800 text-lg font-medium font-['Plus Jakarta Display'] ml-[26px]">{{
                    item.name }}</div>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
        <div class="w-full lg:px-28 md:px-16 sm:px-8 px-4">
            <div class="mb-16 md:mb-[204px]">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    <div v-for="(blog, index) in blogs" :key="index" class="cursor-pointer mb-[50px]">
                        <img class="w-full h-[295px] object-cover rounded-xl"
                            src="https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image Description">
                        <div
                            class="text-blue-700 text-xs font-bold font-['Plus Jakarta Sans'] leading-3 tracking-wide mt-[31px]">
                            KEŞFET - 15 MİN</div>
                        <div
                            class="text-black text-[21px] font-semibold font-['Plus Jakarta Sans'] tracking-wide mt-[13px]">
                            {{ blog.title }}</div>
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center mt-[83px] cursor-pointer">
                    <div class="text-black text-lg font-medium font-display mr-[16px]">Daha fazla yazı
                    </div>
                    <IconArrowTopRight />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import IconArrowTopRight from "../components/icons/IconArrowTopRight.vue";
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/vue-splide/css';

const splideOptions = {
    type: 'loop',
    perPage: 4,
    arrows: false,
    focus: 0,
    pagination: false,
    gap: '1rem',
    watchOverflow: false,
    breakpoints: {
        1380: {
            perPage: 4,
        },
        1140: {
            perPage: 3,
        },
        840: {
            perPage: 2,
        },
        580: {
            perPage: 1,
        },
    },
};

const images = ref([
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Macera Turu' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Yiyecek İçecek' },
    { src: 'https://images.unsplash.com/photo-1585338475469-b02ff0ec409c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Deniz Doğa' },
    { src: 'https://images.unsplash.com/photo-1651778278530-4a017ba98f46?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Sokak Turları' },
    { src: 'https://images.unsplash.com/photo-1543591783-4bb30f471a72?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Tarihi Geziler' },
]);

const blogs = [
    {
        image: "https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image Description",
        title: "Samos Non Stop ile adayı tanıyalım"
    },
    {
        image: "https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image Description",
        title: "Samos Non Stop ile adayı tanıyalım"
    }, {
        image: "https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image Description",
        title: "Samos Non Stop ile adayı tanıyalım"
    }, {
        image: "https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image Description",
        title: "Samos Non Stop ile adayı tanıyalım"
    }, {
        image: "https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image Description",
        title: "Samos Non Stop ile adayı tanıyalım"
    }, {
        image: "https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image Description",
        title: "Samos Non Stop ile adayı tanıyalım"
    }, {
        image: "https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image Description",
        title: "Samos Non Stop ile adayı tanıyalım"
    }, {
        image: "https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image Description",
        title: "Samos Non Stop ile adayı tanıyalım"
    }, {
        image: "https://images.unsplash.com/photo-1517202058079-41d919c02222?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image Description",
        title: "Samos Non Stop ile adayı tanıyalım"
    },
];

</script>

<style scoped></style>
