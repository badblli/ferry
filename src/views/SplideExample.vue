

<template>
    <div class="p-12">
        <div class="flex flex-row items-center gap-5 lg:mx-12 md:mx-6 mx-3 mb-[22px]">
            <div id="splide" class="splide" ref="splideRef">
                <div class="splide__track w-full">
                    <ul
                        class="splide__list h-[81px] w-full bg-white rounded-xl border flex flex-col justify-center items-center">
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                        <li class="splide__slide">
                            <img src="https://brandontran.com/images/cardboard-castle-10.jpg" alt="Slide {{ index }}">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- <Splide :options="splideOptions">
                                <SplideSlide v-for="item in items" :key="item.id"
                                    class="h-[81px] w-full bg-white rounded-xl border flex flex-col justify-center items-center">
                                    <div class="text-center text-black text-lg font-medium font-display">{{ item.date }}
                                    </div>
                                    <div
                                        class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                        {{ item.price }}s
                                    </div>
                                </SplideSlide>
                            </Splide> -->
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Splide from '@splidejs/splide';

// const splideOptions = {
//     type: 'slide',
//     perPage: 3,
//     perMove: 1,
//     arrows: true,
//     pagination: false,
//     gap: '1rem',
//     watchOverflow: false,
//     focus: 0,
//     omitEnd: true,
//     breakpoints: {
//         1380: {
//             perPage: 4,
//         },
//         1140: {
//             perPage: 3,
//         },
//         840: {
//             perPage: 2,
//         },
//         580: {
//             perPage: 1,
//         },
//     },
// };

const splideRef = ref<string | HTMLElement>('');

onMounted(() => {
    new Splide(splideRef.value, {
        type: 'slide',
        perPage: 3,
        perMove: 1,
        arrows: true,
        pagination: false,
        focus: 0,
        autoplay: false,
    }).mount();
});

const slides = [
    { image: 'https://brandontran.com/images/cardboard-castle-10.jpg' },
    { image: 'https://brandontran.com/images/cardboard-castle-5.jpg' },
    { image: 'https://brandontran.com/images/cardboard-castle-4.jpg' },
    { image: 'https://brandontran.com/images/cardboard-castle-3.jpg' }
];
</script>

<style scoped>
.splide {
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    width: full;
}

.splide__list {
    display: flex;
    flex-direction: row;
}

.splide__slide img {
    display: block;
    width: 100%;
    border-radius: 8px;
    transition: transform 400ms;
    transform: scale(.9);
    transform-origin: center center;
}

.splide__slide.is-active img {
    transform: scale(1);
    filter: grayscale(100%);
}

.splide__arrow {
    top: 0;
    bottom: 0;
    height: 100%;
    transform: none;
    border-radius: unset;
    width: 50px;
    opacity: .9;
}

.splide__arrow svg {
    filter: invert(1);
    width: 24px;
    height: 24px;
}

.splide__arrow.splide__arrow--prev {
    left: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, .7) 0%, rgba(0, 0, 0, 0) 100%);
}

.splide__arrow.splide__arrow--next {
    right: 0;
    background: linear-gradient(270deg, rgba(0, 0, 0, .7) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>
