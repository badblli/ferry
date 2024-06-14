<template>
    <section class="mb-[120px] centered-w">
        <div class="lg:px-[100px] px-2 md:px-16 sm:px-8">
            <div class="text-black text-[42px] font-medium font-display tracking-wide mb-7">{{ item.title }}</div>
            <div
                class="md:w-1/2 w-full text-zinc-600 text-lg font-medium font-['Plus Jakarta Sans'] leading-7 mb-[103px]">
                {{ item.description }}</div>
        </div>
        <div>
            <div className="h-full w-full">
                <div className="flex flex-row items-center mb-[22px] lg:pl-28 md:pl-16 sm:pl-8 pl-4">
                    <div id="splide" class="splide" ref="splideRef">
                        <div class="splide__track">
                            <ul class="splide__list">
                                <li v-for="(item, index) in props.item.Ferry" :key="index" class="splide__slide">
                                    <div class="h-full w-full flex flex-col justify-end mt-9 ">
                                        <div v-if="item.where"
                                            class="text-black text-[25px] font-['Plus Jakarta Sans'] flex flex-col justify-start ml-7">
                                            <div>
                                                <span class="font-bold">{{ item.where.split(' ')[0] }}</span>
                                                <span class="font-normal">{{ item.where.split(' ')[1] }}</span>
                                            </div>
                                            <span class="md:flex hidden flex-row justify-center relative md:-left-12">
                                                <IconSamosaVector />
                                            </span>
                                        </div>
                                        <div class="mb-[61px] ml-7 flex flex-col mt-auto ">
                                            <p
                                                class="max-w-[223px] text-3xl font-semibold font-['Plus Jakarta Sans'] tracking-wide text-white">
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
                                        <img :src="getImage(item.img.url)"
                                            class="absolute top-0 left-0 w-full h-full object-cover z-[-1] rounded-[20px]" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="splide__arrows">
                            <button class="splide__arrow splide__arrow--prev" type="button"
                                aria-controls="mobile-testim-carousel-track" aria-label="Go to last slide">
                                <IconChevronRight />
                            </button>
                            <button class="splide__arrow splide__arrow--next" type="button"
                                aria-controls="mobile-testim-carousel-track" aria-label="Next slide">
                                <div>
                                    <IconChevronRight />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// @ts-ignore
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue';
import IconArrowUpRightWhite from '@/components/icons/IconArrowUpRightWhite.vue';
import IconSamosaVector from '@/components/icons/IconSamosaVector.vue';
import IconChevronRight from '@/components/icons/IconChevronRight.vue';
import { onMounted, ref } from 'vue';
import { getImage } from '@/utils/globalHelper'

interface ferry {
    date: string,
    dateText: string,
    id: number,
    img: {
        id: Number,
        name: string,
        alternativeText: string | null,
        caption: string | null,
        width: Number,
        height: Number,
        formats: any,
        hash: string,
        ext: string,
        mime: string,
        size: Number,
        url: string,
        previewUrl: string | null,
        provider: string,
        provider_metadata: any | null,
        createdAt: string,
        updatedAt: string
    },
    price: string,
    title: string,
    where?: string | null,
}

const props = defineProps({
    item: {
        type: Object as () => ({
            Ferry: ferry[],
            description: string,
            id: number,
            title: string,
        }),
        required: true
    }
});

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
// const logSelectedData = (item: any) => {
//     console.log("Tıklanan Butondaki Veriler:");
//     console.log(item);
// };

// interface fakeSlidertems {
//     id: number;
//     date: string;
//     price: string;
//     title: string;
//     where?: string
//     url?: string;
// }

// const items: fakeSlidertems[] = [
//     { id: 7, date: "20 Kasım Cumartesi", price: "En Uygun €39", title: "Ekim Ayında yunan adalarına git.", where: "Samosa Bilet", url: 'https://images.unsplash.com/photo-1583062482795-d2bef78e9bc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { id: 2, date: "16 Kasım Cuma", price: "En Uygun €49", title: "Sakız Adasına Feribot", url: 'https://images.unsplash.com/photo-1583062482795-d2bef78e9bc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { id: 3, date: "17 Kasım Cumartesi", price: "En Uygun €59", title: "Rodos Adasına Feribot", url: 'https://images.unsplash.com/photo-1696613496496-1c7b2a55e7d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { id: 4, date: "18 Kasım Cumartesi", price: "En Uygun €69", title: "Santoriniye Feribot", url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { id: 5, date: "19 Kasım Cumartesi", price: "En Uygun €79", title: "Bodruma Feribot", url: 'https://images.unsplash.com/photo-1598114694861-ee40abbdf824?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     { id: 6, date: "20 Kasım Cumartesi", price: "En Uygun €89", title: "Güllüğe Feribot", url: 'https://images.unsplash.com/photo-1591078314996-ba61623c7284?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
// ];

const splideRef = ref<string | HTMLElement>('');
onMounted(() => {
    const splide = new Splide(splideRef.value, {
        type: 'slide',
        perPage: 3,
        perMove: 1,
        arrows: true,
        pagination: false,
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
        // const activeSlideIndex = splide.index;
        // const activeSlideContent = items[activeSlideIndex];
        // console.log(activeSlideContent);
        // console.log(activeSlideIndex);
    });
});
</script>


<style scoped>
.flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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