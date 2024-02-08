<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[145px] bg-slate-200 flex flex-col justify-center items-center">
            <div class="relative w-full lg:px-28 md:px-16 sm:px-8 px-6">
                <ol class="pb-4 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
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
                        Fırsatlar
                    </li>
                </ol>
                <h1
                    class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide my-auto flex items-center">
                    <span class="font-bold">Samos</span>
                    Fırsatlar
                </h1>
            </div>
        </div>
        <div class="w-full lg:px-28 md:px-16 sm:px-8">
            <div class="w-full flex flex-col">
                <div class=" flex md:mt-[55px] md:mb-24 mb-6 mt-6">
                    <div class="flex justify-center">
                        <div
                            class="w-[508px] text-black text-2xl font-medium font-['Plus Jakarta Sans'] md:leading-[37.06px] leading-7">
                            En güncel fırsatları gezginler için sunuyoruz. Alttaki listeden size en uygun olanı
                            değerlendirebilirsiniz.</div>
                    </div>
                </div>
            </div>
            <div v-for="(item, index) in fakeData" :key="index" class="flex flex-col md:flex-row md:w-3/4 lg:w-3/5">
                <div class="md:w-5/12 md:mb-[20px] mb-5">
                    <img class="h-full rounded-xl"
                        src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div class="md:w-7/12 mb-5">
                    <div class="w-11/12">
                        <div class=" text-black text-[32px] font-semibold font-['Plus Jakarta Sans'] tracking-wide md:ml-6">
                            {{ item.title }}</div>
                        <div
                            class=" text-black text-base font-normal font-['Plus Jakarta Sans'] md:leading-[29.03px] leading-5 md:ml-6 md:mt-3 mt-5">
                            {{ item.description }}</div>
                    </div>
                    <div class="flex flex-row">
                        <div
                            class="h-[66px] w-[183px] rounded-xl border border-zinc-200 md:ml-6 flex flex-col justify-center pl-6 mt-[20px]">
                            <div
                                class="flex text-black text-sm font-light font-display leading-normal justify-start items-start">
                                Firma</div>
                            <div class="text-black text-sm font-medium font-display leading-normal">Last
                                {{ item.companyName }}</div>
                        </div>
                        <div
                            class="h-[66px] w-[183px] rounded-xl border border-zinc-200 ml-6 flex flex-col justify-center pl-6 mt-[20px]">
                            <div
                                class="flex text-black text-sm font-light font-display leading-normal justify-start items-start">
                                Lokasyon</div>
                            <div class="text-black text-sm font-medium font-display leading-normal">Last
                                {{ item.location }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center mt-[83px] cursor-pointer lg:mb-[146px] mb-10">
                <div class="text-black text-lg font-medium font-display mr-[16px]">Daha fazla yazı
                </div>
                <IconArrowTopRight />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconArrowTopRight from "@/components/icons/IconArrowTopRight.vue";
import { ref } from 'vue';

interface FakeDataItem {
    imageUrl: string;
    title: string;
    description: string;
    companyName: string;
    location: string;
}

const fakeData = ref<FakeDataItem[]>([
    {
        imageUrl: 'https://images.unsplash.com/photo-1',
        title: 'Kuşadası - Adnan Menderes Havalimanı Transferi %20 İndirimli.',
        description: 'Cake liquorice chocolate lemon drops chocolate bar macaroon. Wafer icing bonbon gingerbread.',
        companyName: 'Last Minute Tours',
        location: 'Haritada Göster'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1',
        title: 'Antalya - Antalya Havalimanı Transferi %10 İndirimli.',
        description: 'Cake liquorice chocolate lemon drops chocolate bar macaroon. Wafer icing bonbon gingerbread.',
        companyName: 'Yiannis Ouzeris',
        location: 'Haritada Göster'
    },
]);
</script>
  
<style scoped></style>