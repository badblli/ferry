<template>
    <section class="w-full flex flex-col px-2 md:px-16 sm:px-8 relative centered-w">
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
            <MainTourCardComponent :item="props.item" />
        </div>
    </section>
</template>

<script setup lang="ts">
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue';
import IconShare2 from '@/components/icons/IconShare2.vue';
import MainTourCardComponent from './component/MainTourCardComponent.vue';

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
