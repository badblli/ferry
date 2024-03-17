<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[223px] bg-slate-200" />
        <div class="relative top-[-11rem] w-full lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
            <div class="flex lg:flex-row flex-col justify-between">
                <div class="flex flex-row">
                    <div class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide lg:mb-14 mb-5">
                        Kuşadası
                    </div>
                    <div
                        class="w-[52px] h-[52px] md:mb-0 mb-5 opacity-75 bg-white rounded-full flex justify-center items-center mx-[33px]">
                        <IconsArrowsLeftRight />
                    </div>
                    <div class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide md:mb-14 mb-5">
                        Samosa
                    </div>
                </div>
                <div class="flex flex-row md:mb-0 mb-2">
                    <div class="h-[37px] bg-white rounded-lg border flex justify-center items-center p-1">
                        <div class="text-black text-lg font-medium font-display ml-1">Feribot Bileti Ara</div>
                        <IconArrowDownBlack />
                    </div>
                    <div class="h-[37px] bg-white rounded-lg border flex justify-center items-center p-1 ml-[10px]">
                        <div class="text-black text-lg font-medium font-display ml-1">Sırala</div>
                        <IconArrowDownBlack />
                    </div>
                </div>
            </div>
            <div>
                <div className=" bg-neutral-100 rounded-[20px] p-4 ">
                    <div className="pt-1">
                        <div className="flex flex-row items-center gap-5 lg:mx-12 md:mx-6 mx-3 mb-[22px]">
                            <div id="splide" class="splide" ref="splideRef">
                                <div class="splide__track">
                                    <ul class="splide__list">
                                        <li v-for="(item, index) in items" :key="index" class="splide__slide">
                                            <div class="text-center text-black text-lg font-medium font-display">{{
                                            item.date }}
                                            </div>
                                            <div
                                                class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                                {{ item.price }}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="splide__arrows">
                                    <button class="splide__arrow splide__arrow--prev" type="button"
                                        aria-controls="mobile-testim-carousel-track" aria-label="Go to last slide">
                                        <IconArrowRight />
                                    </button>
                                    <button class="splide__arrow splide__arrow--next" type="button"
                                        aria-controls="mobile-testim-carousel-track" aria-label="Next slide">
                                        <IconArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-for="(item, index) in fakeData" :key="index"
                        class="flex flex-col md:flex-row md:justify-between bg-white mb-[15px] p-3 rounded-2xl lg:mx-12 md:mx-6 mx-3">
                        <div class="flex sm:flex-row flex-col justify-between">
                            <img class="w-[100px] h-[100px] rounded-xl mr-6" :src="item.image" />
                            <div class="mt-3 mr-5 lg:mr-[75px]">
                                <p class="text-black text-base font-medium font-display mb-2">Firma adı</p>
                                <p
                                    class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                    {{ item.company }}</p>
                            </div>
                            <div class="mt-3 mr-5 lg:mr-[75px]">
                                <p class="text-black text-base font-medium font-display">Kalkış</p>
                                <p
                                    class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                    {{ item.departure }}</p>
                                <p
                                    class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                    {{ item.departureLocation }}</p>
                            </div>
                            <div class="mt-3 mr-5 lg:mr-[75px]">
                                <p class="text-black text-base font-medium font-display">Varış</p>
                                <p
                                    class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                    {{ item.arrival }}</p>
                                <p
                                    class="text-neutral-700 text-sm font-normal font-['Plus Jakarta Sans'] tracking-tight">
                                    {{ item.arrivalLocation }}</p>
                            </div>
                        </div>
                        <div class="flex flex-row justify-center items-center mr-2 md:my-0 my-5">
                            <div class="text-right text-black text-[28px] font-medium font-['Plus Jakarta Sans']">{{
                                            item.price }}</div>
                            <button @click="logSelectedData(item)"
                                class="bg-slate-200 rounded-lg border py-2 px-7 ml-8 text-center text-black text-base font-medium font-display hover:bg-neutral-200">Seç</button>
                        </div>
                    </div>
                    <div
                        class="md:mt-14 mt-7 md:mb-20 mb-10 flex flex-row justify-center items-center text-black text-base font-medium font-display bg-white p-3 w-48 rounded-full m-auto">
                        Daha fazla
                        <div class="ml-2">
                            <IconArrowDownBlack />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import IconsArrowsLeftRight from '@/components/icons/IconsArrowsLeftRight.vue';
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue';
import IconArrowRight from "@/components/icons/IconArrowRight.vue";

import { onMounted, ref } from 'vue';
// import { useTemporaryStore } from '../../stores/temporaryTicket.ts';
// do not clean
// const store = useTemporaryStore();
// const selectedItem = ref(null);
// do not clean
// const selectItem = (item: any) => {
//     selectedItem.value = item;
//     store.setSelectedItem(item);
//     localStorage.setItem('selectedItem', JSON.stringify(item));
// };
// do not clean
const logSelectedData = (item: any) => {
    console.log("Tıklanan Butondaki Veriler:");
    console.log(item);
};

const fakeData = [
    {
        image: 'https://via.placeholder.com/100x100',
        company: 'Meander Travel',
        departure: '5 Kasım 2023 Pazar 17.00',
        departureLocation: 'Kuşadası Limanı',
        arrival: '5 Kasım 2023 Pazar 18:15',
        arrivalLocation: 'Vathy Limanı',
        price: '€39'
    },
    {
        image: 'https://via.placeholder.com/100x100',
        company: 'Meander Travel',
        departure: '6 Kasım 2023 Pazar 17.00',
        departureLocation: 'Kuşadası Limanı',
        arrival: '6 Kasım 2023 Pazar 18:15',
        arrivalLocation: 'Vathy Limanı',
        price: '€39'
    },
    {
        image: 'https://via.placeholder.com/100x100',
        company: 'Meander Travel',
        departure: '7 Kasım 2023 Pazar 17.00',
        departureLocation: 'Kuşadası Limanı',
        arrival: '7 Kasım 2023 Pazar 18:15',
        arrivalLocation: 'Vathy Limanı',
        price: '€39'
    },
];

interface fakeSlidertems {
    id: number;
    date: string;
    price: string;
}

const items: fakeSlidertems[] = [
    { id: 1, date: "15 Kasım Perşembe", price: "En Uygun €39" },
    { id: 2, date: "16 Kasım Cuma", price: "En Uygun €49" },
    { id: 3, date: "17 Kasım Cumartesi", price: "En Uygun €59" },
    { id: 4, date: "18 Kasım Cumartesi", price: "En Uygun €69" },
    { id: 5, date: "19 Kasım Cumartesi", price: "En Uygun €79" },
    { id: 6, date: "20 Kasım Cumartesi", price: "En Uygun €89" },
    { id: 7, date: "21 Kasım Cumartesi", price: "En Uygun €19" },
    { id: 8, date: "22 Kasım Cumartesi", price: "En Uygun €29" },
    { id: 9, date: "23 Kasım Cumartesi", price: "En Uygun €39" },
    { id: 10, date: "24 Kasım Cumartesi", price: "En Uygun €49" },
    { id: 11, date: "25 Kasım Cumartesi", price: "En Uygun €59" },
    { id: 12, date: "26 Kasım Cumartesi", price: "En Uygun €69" },
];

const splideRef = ref<string | HTMLElement>('');
onMounted(() => {
    const splide = new Splide(splideRef.value, {
        type: 'slide',
        perPage: 3,
        perMove: 1,
        arrows: true,
        pagination: false,
        gap: '1rem',
        focus: 0,
        interval: 3000,
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
    }).mount();
    splide.on('moved', () => {
        const activeSlideIndex = splide.index;
        const activeSlideContent = items[activeSlideIndex];
        console.log(activeSlideContent);
        console.log(activeSlideIndex);
    });
});
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
    filter: grayscale(100%);
    background-color: white;
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