<template>
    <section class="lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
        <h1 class="text-black text-[42px] font-medium font-display tracking-wide mt-[76px]">{{ item && item.title }}
        </h1>
        <div class="w-full flex md:flex-row flex-col justify-between md:items-center items-start mt-[37px]">
            <p
                class="text-black text-lg font-normal font-display tracking-tight flex flex-row justify-center items-center">
                {{ item && item.subtitle }}</p>
            <div class="flex flex-row  items-center justify-centerh-8 bg-slate-200 rounded-lg border pr-[9px]">
                <p
                    class="text-black text-[15px] font-medium font-display flex justify-center items-center mt-1 mr-1 pl-3 py-[6px] cursor-pointer">
                    {{ item && item.btnText }}
                </p>
                <IconArrowUpRight />
            </div>
        </div>
        <div>
            <!-- sections -->
            <router-link :to="{ path: item.btnLink }" class="flex flex-col md:flex-row gap-5 md:mb-[120px] mb-20">
                <div v-for="(item, index) in props.item.Tours" :key="index"
                    class="w-[400px] h-[510px] rounded-xl border border-gray-200 mt-12 hover:bg-slate-100 transition delay-[10ms] cursor-pointer">
                    <div class="rounded-xl m-5  bg-blue-400 ">
                        <img src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="asd" class="object-fill w-full flip-horizontal rounded-xl" />
                    </div>
                    <div class="px-5 pt-2">
                        <div>
                            <div
                                class="text-black text-[23px] font-semibold font-['Plus Jakarta Sans'] tracking-wide pb-[38px]">
                                {{ item && item.duration }}
                            </div>
                            <div class=" text-black text-base font-normal font-display leading-snug tracking-tight">
                                {{ item && item.description }}</div>
                            <div
                                class="flex flex-row w-full items-center justify-between text-right text-black text-lg font-medium font-display leading-[18px] tracking-tight mt-7">
                                <span>
                                    {{ item && item.price }}
                                </span>
                                <span>
                                    <div class="flex flex-row items-center justify-center p-5 bg-white rounded-full">
                                        <IconShare2 />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script setup lang="ts">
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue';
import IconShare2 from '@/components/icons/IconShare2.vue';
import { defineProps } from 'vue';

interface toursImg {
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
}

interface tours {
    id: string,
    duration: string,
    description: string,
    img: toursImg[],
    price: string,
}

const props = defineProps({
    item: {
        type: Object as () => ({
            title: string,
            subtitle: string,
            btnText: string,
            Tours: tours[],
            btnLink: string,
        }),
        required: true
    }
});

</script>

<style scoped></style>
