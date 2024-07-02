<template>
  <section class="mb-[120px] centered-w">
        <div class="lg:px-[100px] px-2 md:px-16 sm:px-8">
            <div class="text-black text-[42px] font-medium font-display tracking-wide mb-7">{{ props.item.title }}</div>
            <div class="md:w-1/2 w-full text-zinc-600 text-lg font-medium font-['Plus Jakarta Sans'] leading-7 mb-[103px]">
                {{ props.item.subtitle }}
            </div>
        </div>
        <div>
            <div className="h-full w-full">
                <div className="flex flex-row items-center mb-[22px] lg:pl-28 md:pl-16 sm:pl-8 pl-4">
                    <div id="splide" class="splide" ref="splideRef">
                        <div class="splide__track">
                            <ul class="splide__list">
                                <li v-for="(item, index) in props.item.Tours" :key="index" class="splide__slide">
                                    <div class="h-full w-full flex flex-col justify-end mt-9 ">
                                        <div class="mb-[61px] ml-7 flex flex-col mt-auto">
                                            <p
                                                class="max-w-[223px] text-3xl font-semibold font-['Plus Jakarta Sans'] tracking-wide text-white">
                                                {{ item.duration }}
                                            </p>
                                            <div class="mt-7 flex flex-row ml-3 text-white">
                                                <button class="mr-[10px]">
                                                    {{ item.description }}
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
                                        <img :src="getImage(item.img?.url)"
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

interface tours {
    description: string,
    duration: string,
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
}

const props = defineProps({
    item: {
        type: Object as () => ({
            Tours: tours[],
            btnLink: string,
            btnText: string,
            id: number,
            title: string,
            subtitle: string
        }),
        required: true
    }
});

console.log('Item props:', props.item);

const splideRef = ref<string | HTMLElement>('');
onMounted(() => {
    console.log(splideRef, 'splideRef');
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
    max-width: 397px;
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
     max-width: 397px;
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

/* 
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
} */

.splide__arrow {
    transform: none;
    border-radius: unset;
    display: hidden;
}

.splide__arrow svg {
    fill: #000;
    height: 2em;
    width: 4em;
    display: flex;
    flex-direction: row;
    display: none;
}

.splide.splide__arrow {
    background: white;
    display: none;
}

.splide__arrow.splide__arrow--prev:disabled {
    opacity: 1;
    background: transparent;
    display: none;
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
    display: none;
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
    display: none;
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