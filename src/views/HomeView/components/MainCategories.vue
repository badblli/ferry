<template>
    <section>
        <div class="w-full bg-slate-200 flex flex-col items-center mb-[120px]">
            <div class=" text-black text-[42px] font-medium font-display tracking-wide mt-[100px] mb-7">Samos
                Adasında<br />neler yapabilirim?</div>
            <div
                class="w-full] text-center text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                Marzipan sweet roll gingerbread oat cake cheesecake pie. Pie macaroon sweet liquorice topping.</div>
            <div class="mt-[107px] flex flex-col lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
                <div class="flex flex-row flex-wrap justify-center ">
                    <div v-for="(category, index) in fakeData1" :key="index" class="category-item">
                        <CategorieSlider :title="category.title" />
                    </div>
                </div>
            </div>
            <div class="mt-[89px] mb-[119px] flex flex-row">
                <div
                    class="w-full text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                    Ve daha fazlası için blog yazılarımızı okuyun.</div>
                <div class="flex md:flex-row flex-col">
                    <div class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mr-3">
                        Samos’u
                        Keşfet
                    </div>
                    <div
                        class="flex items-center justify-center w-7 h-7 p-1 flex-shrink-0 rounded-full bg-gray-800 cursor-pointer">
                        <IconFooter />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import CategorieSlider from '@/components/advanced/CategorieSlider.vue';

const fakeData1 = [
  { id: 1, title: 'Kategori 1' },
  { id: 2, title: 'Kategori 2' },
  { id: 3, title: 'Kategori 3' },
  { id: 4, title: 'Kategori 4' },
  { id: 5, title: 'Kategori 5' },
  { id: 6, title: 'Kategori 6' },
  { id: 7, title: 'Kategori 7' },
  { id: 8, title: 'Kategori 8' },
  { id: 9, title: 'Kategori 9' },
];

</script>

<style></style>