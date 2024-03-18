<template>
    <section>
        <div class="w-full bg-slate-200 flex flex-col items-center mb-[120px]">
            <div class=" text-black text-[42px] font-medium font-display tracking-wide mt-[100px] mb-7">{{
                item.categoryTitle }}</div>
            <div
                class="w-full text-center text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                {{ item.categoryTitleDesc }}</div>
            <div class="mt-[107px] flex flex-col lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
                <div class="flex flex-row flex-wrap justify-center ">
                    <div v-for="(category, index) in props.item.categoryObjects" :key="index" class="category-item">
                        <CategorieSlider :title="category.title" />
                    </div>
                </div>
            </div>
            <div class="mt-[89px] mb-[119px] flex flex-row">
                <div
                    class="w-full text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                    {{ item.moreDesc }}</div>
                <div class="flex md:flex-row flex-col">
                    <div class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mr-3">
                        {{ item.moreSubDesc }}</div>
                    <div
                        class="flex items-center justify-center w-7 h-7 p-1 flex-shrink-0 rounded-full bg-gray-800 cursor-pointer">
                        <IconFooter />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import CategorieSlider from '../../../components/advanced/CategorieSlider.vue';
import IconFooter from '@/components/icons/IconFooter.vue';

const props = defineProps({
    item: {
        type: Object as () => ({
            categoryTitle: string;
            categoryTitleDesc: string;
            moreDesc: string;
            moreSubDesc: string;
            categoryObjects: fakeInterface[];
        }),
        required: true
    }
});

interface fakeInterface {
    id: number;
    title: string;
}
</script>