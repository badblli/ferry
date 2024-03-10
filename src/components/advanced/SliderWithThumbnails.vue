<template>
    <div>
        <div
            class="lg:absolute block lg:flex flex-row lg:w-[502px] w-full lg:p-0 p-1 lg:mt-0 mt-1 z-20 lg:bg-white bg-slate-200 top-9 left-36 rounded-2xl">
            <div class="flex flex-col justify-center lg:ml-[35px] ml-5 lg:mt-[32px] mt-3 lg:mb-[31px] mb-3">
                <p
                    class="text-black lg:text-base text-sm font-semibold font-['Plus Jakarta Sans'] leading-[18.46px] tracking-[2.96px] lg:mb-[17px] mb-2">
                    SAMOS TURLARI
                </p>
                <div class="flex flex-row justify-between">
                    <p
                        class="text-black lg:text-[32px] text-sm lg:font-bold font-sans font-['Plus Jakarta Sans'] lg:leading-[36.93px] leading-4 tracking-wide">
                        Eşsiz Yunan koyları ile Samos’a feribot<br />
                        bileti alın.
                        <span class="lg:hidden flex flex-row justify-start items-start font-bold mt-1">
                            €30
                        </span>
                    </p>
                    <div class="items-end flex">
                        <button
                            class="flex flex-row justify-evenly items-center mx-2 w-[125px] h-[32px] lg:bg-slate-200 bg-white rounded-lg mr-[33px] text-black text-[15px] font-medium font-display">
                            Tüm Turlar
                            <IconArrowUpRight />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    class="bg-white w-[86px] h-[86px] lg:flex hidden flex-row justify-center items-center rounded-full z-50 lg:absolute lg:right-0 lg:translate-x-10 lg:translate-y-5">
                    <div
                        class="text-center text-stone-800 text-2xl font-bold font-['Plus Jakarta Sans'] bg-slate-200 w-[73px] h-[73px] rounded-full flex flex-row justify-center items-center">
                        €30
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
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
        <form class="md:relative md:max-w-[798px] mx-auto -translate-y-72 z-50">
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
                <div class="flex flex-row items-center justify-between w-full" v-show="!showTrue">
                    <div class="hs-dropdown flex flex-row items-center w-full ml-7">
                        <button id="hs-dropdown-with-dividers" type="button"
                            class="bg-slate-200 cursor-pointer flex flex-col justify-start">
                            <div>Nereden?</div>
                            <div class="font-light">{{ _fromWhere?.name }}</div>
                        </button>
                        <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                            aria-labelledby="hs-dropdown-with-dividers">
                            <div class="flex flex-col w-[277px] p-5">
                                <div class="flex flex-col">
                                    <div @click="updateFromWhere(i)" v-for="(i, index) in fromWhere" :key="index"
                                        :class="{ 'bg-slate-200': _fromWhere !== null && typeof _fromWhere === 'object' && isEqual(i, _fromWhere) }"
                                        class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                        <a class="text-black text-base font-medium font-display tracking-tight">{{
                            i.name }}</a>
                                        <a class="text-black text-sm font-light font-display tracking-tight">{{ i.port
                                            }}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="pl-7 py-6 flex flex-row cursor-pointer">
                                <div
                                    class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mr-[17px]">
                                    Samos Turlarını Keşfet
                                </div>
                                <div
                                    class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex">
                                    <IconFooter />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-gray-200 rounded-full flex flex-row justify-center items-center p-[7px] ml-[26px] mr-[21px] cursor-pointer">
                        <IconArrowsLeftRight />
                    </div>
                    <div class="hs-dropdown flex flex-row items-center w-full ml-7">
                        <button id="hs-dropdown-with-dividers-2" type="button"
                            class="bg-slate-200 cursor-pointer flex flex-col justify-start">
                            <div>Nereye?</div>
                            <div class="font-light">{{ _toWhere?.name }}</div>
                        </button>
                        <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                            aria-labelledby="hs-dropdown-with-dividers-2">
                            <div class="flex flex-col w-[277px] p-5">
                                <div @click="updateToWhere(i)" v-for="(i, index) in toWhere" :key="index"
                                    :class="{ 'bg-slate-200': _toWhere !== null && typeof _toWhere === 'object' && isEqual(i, _toWhere) }"
                                    class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                    <a class="text-black text-base font-medium font-display tracking-tight">{{ i.name
                                        }}</a>
                                    <a class="text-black text-sm font-light font-display tracking-tight">{{ i.port
                                        }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-14 h-[1px] rotate-90 border border-zinc-300 mx-3"></div>
                    <div class="hs-dropdown flex flex-row items-center w-full ml-7">
                        <button id="hs-dropdown-with-dividers-3" type="button" class="bg-slate-200 cursor-pointer">
                            <div>Bilet Tipi</div>
                            <div class="font-light">{{ _roundTrip?.name }}</div>
                        </button>
                        <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                            aria-labelledby="hs-dropdown-with-dividers-3">
                            <div class="flex flex-col w-[277px] p-5">
                                <div @click="updateToTrip(i)" v-for="(i, index) in roundTrip" :key="index"
                                    :class="{ 'bg-slate-200': _roundTrip !== null && typeof _roundTrip === 'object' && isEqualTrip(i, _roundTrip) }"
                                    class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                    <a class="text-black text-base font-medium font-display tracking-tight">{{ i.name
                                        }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-14 h-[1px] rotate-90 border border-zinc-300"></div>
                    <div class="hs-dropdown flex flex-row items-center w-full ml-7">
                        <button id="hs-dropdown-with-dividers-4" type="button" class="bg-slate-200 cursor-pointer">
                            <div>Gidiş - Dönüş</div>
                            <div class="font-light">Tarih Seçin</div>
                        </button>
                        <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                            aria-labelledby="hs-dropdown-with-dividers-4">
                            <div class="flex flex-col w-[277px] p-3">
                                <div v-for="(i, index) in toWhere" :key="index"
                                    class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                    TARİH
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-14 h-[1px] rotate-90 border border-zinc-300"></div>
                    <div class="hs-dropdown flex flex-row items-center w-full ml-7 [--auto-close:false]">
                        <button @click.prevent id="hs-dropdown-auto-close-false" type="button" class="bg-slate-200 cursor-pointer">
                            <div>Kişi Sayısı</div>
                            <div class="font-light">Kişi Seçin</div>
                        </button>
                        <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                            aria-labelledby="hs-dropdown-with-dividers-5">
                            <div class="flex flex-col w-[389px] mt-[37px] ml-6">
                                <div v-for="(i, index) in passenger" :key="index"
                                    class="flex flex-row w-full mb-[46px] justify-between">
                                    <div class="flex flex-row">
                                        <div class="text-black text-base font-medium font-display tracking-tight mr-3">
                                            {{ i.age }}
                                        </div>
                                        <div
                                            class="text-black text-sm font-light font-display tracking-tight mr-4 flex flex-row justify-center items-center">
                                            {{ i.price }}/{{ passenger[index].count }} bilet
                                        </div>
                                    </div>
                                    <div class="mr-4 flex flex-row justify-center">
                                        <span @click="decreaseCount(index)" class="mx-2">
                                            <IconMinus />
                                        </span>
                                        <div class="text-black text-[22px] font-normal font-display tracking-wide">
                                            {{ passenger[index].count }}</div>
                                        <span @click="increaseCount(index)" class="mx-2">
                                            <IconPlus />
                                        </span>
                                    </div>
                                </div>
                                <button
                                    class="w-[353px] h-[53px] bg-blue-700 rounded-lg border flex flex-row justify-center items-center mb-5">
                                    <div class="text-white text-base font-medium font-display">Uygula</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-slate-200 rounded-full flex flex-row justify-center items-center cursor-pointer p-[17px] m-[11px]">
                        <IconSearchNormal />
                    </div>
                </div>
                <div v-show="showTrue">
                    <div >
                        <div class="flex flex-row justify-center items-center my-auto">
                            <InputBasic placeholder="Rezervasyon Sorgula" ariaLabel="Rezervasyon Sorgula" type="text"
                                class="mr-3 flex flex-row justify-center items-center" />
                            <InputBasic placeholder="Rezervasyon Sorgula" ariaLabel="Rezervasyon Sorgula" type="text"
                                class="mr-3 flex flex-row justify-center items-center" />
                            <div class="bg-slate-200 rounded-full flex flex-row justify-center items-center p-5">
                                <IconSearchNormal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import IconSearchNormal from '../icons/IconSearchNormal.vue'
import IconArrowsLeftRight from '../icons/IconArrowsLeftRight.vue'
import IconArrowUpRight from '../icons/IconArrowUpRight.vue'
import IconFooter from '../icons/IconFooter.vue'
import InputBasic from '@/views/PassengerPaymentViews/components/InputBasic.vue'
import IconPlus from '../icons/IconPlus.vue'
import IconMinus from '../icons/IconMinus.vue'

interface Image {
    url: string
    thumbnail: string
    title: string
}

const showTrue = ref(false)
const images = ref<Image[]>([
    {
        url: 'https://images.unsplash.com/photo-1583062482795-d2bef78e9bc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        thumbnail:
            'https://images.unsplash.com/photo-1583062482795-d2bef78e9bc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: ''
    },
    {
        url: 'https://images.unsplash.com/photo-1696613496496-1c7b2a55e7d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        thumbnail:
            'https://images.unsplash.com/photo-1696613496496-1c7b2a55e7d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: ''
    },
    {
        url: 'https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        thumbnail:
            'https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: ''
    },
    {
        url: 'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        thumbnail:
            'https://images.unsplash.com/photo-1518557984649-7b161c230cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: ''
    }
])
// FAKE OBJECTS
const fromWhere = [
    { name: 'Kuşadası', port: 'Kuşadası Limanı' },
    { name: 'Kuşadası2', port: 'Kuşadası Limanı2' }
]

const toWhere = [
    { name: 'Samos', port: 'Vathy Limanı' },
    { name: 'Samos', port: 'Paythagorion Limanı' }
];

const roundTrip = [{ name: 'Tek Yön Bilet' }, { name: 'Gidiş - Dönüş Bilet' }]

interface Person {
    age: string;
    price: string;
    count: number;
}

const passenger = ref<Person[]>([
    { age: 'Yetişkin', price: '€41', count: 0 },
    { age: 'Çocuk (6 - 12 yaş)', price: '€31', count: 0 },
    { age: 'Bebek (0 - 5 yaş)', price: '€0', count: 0 },
]);

// FAKE OBJECTS
const _fromWhere = ref<{ name: string; port: string } | null>(null)
const _toWhere = ref<{ name: string; port: string } | null>(null)
const _roundTrip = ref<{ name: string; } | null>(null)

function updateToWhere(value: { name: string; port: string }) {
    _toWhere.value = value
}

function updateFromWhere(value: { name: string; port: string }) {
    _fromWhere.value = value
}

function updateToTrip(value: { name: string }) {
    _roundTrip.value = value;
}

function isEqual(obj1: { name: string; port: string }, obj2: { name: string; port: string }) {
    return obj1 !== null && obj2 !== null && obj1.name === obj2.name && obj1.port === obj2.port;
}

function isEqualTrip(obj1: { name: string }, obj2: { name: string }) {
    return obj1 !== null && obj2 !== null && obj1.name === obj2.name;
}

const increaseCount = (index: number) => {
    if (passenger.value[index]) {
        passenger.value[index].count++;
        console.log(`Passenger count increased for index ${index}. New count: ${passenger.value[index].count}`);
    }
}

const decreaseCount = (index: number) => {
    if (passenger.value[index] && passenger.value[index].count > 0) {
        passenger.value[index].count--;
        console.log(`Passenger count decreased for index ${index}. New count: ${passenger.value[index].count}`);
    }
}

let main: Splide
let thumbnails: Splide

const goToSlide = (index: number) => {
    main.go(index)
    console.log(index, 'index')
}

onMounted(() => {
    main = new Splide('#main-slider', {
        type: 'slide',
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true
    }).mount()

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
            touch: 10
        },
        breakpoints: {
            1140: {
                fixedWidth: 136,
                fixedHeight: 78
            },
            840: {
                fixedWidth: 126,
                fixedHeight: 58
            },
            640: {
                fixedWidth: 96,
                fixedHeight: 58
            }
        }
    }).mount()

    thumbnails.on('click', (slide: any) => {
        goToSlide(slide.index) // Bu satırı değiştirdim.
    })

    main.on('moved', (newIndex: number) => {
        thumbnails.go(newIndex)
    })
})
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
    opacity: 0.9;
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
    background: transparent;
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
    background: transparent;
}

.splide {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    width: 100%;
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
    opacity: 0.6;
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
    opacity: 0.9;
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
