<template>
    <div class="flex flex-col ">
        <div class="items-center mb-8" v-for="(person, index) in people" :key="index">
            <div
                class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                <div class="ml-[46px]">
                    <div>
                        <h2 class="mb-1 text-black text-base font-medium font-display">{{ person.title }}</h2>
                        <h2 class="text-zinc-600 text-base font-normal font-display tracking-tight">{{ person.name }}</h2>
                    </div>
                </div>
                <div
                    class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                    <button class="text-center text-black text-base font-bold font-text leading-normal">Düzenle</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    profileData: { title: string; name: string }[];
}>();

const people = ref(props.profileData);
</script>
  
<style></style>