<template>
    <div id="hs-vertically-centered-modal-InputBirth"
        class="hs-overlay w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden pointer-events-none items-center justify-center flex">
        <div
            class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[558px] w-[567px] flex items-center">
            <div class="w-full h-full flex flex-col bg-white border shadow-sm rounded-xl justify-between mx-auto">
                <div class="flex flex-row justify-center mt-20">
                    <div class="w-[95px] h-[95px] bg-slate-200 rounded-full flex items-center justify-center">
                        <IconPersonSimple />
                    </div>
                    <div class="w-[95px] h-[95px] bg-slate-200 rounded-full flex items-center justify-center">
                        <IconPersonSimpleRun />
                    </div>
                </div>
                <div class="text-center text-black text-lg font-normal font-['Plus Jakarta Sans']">Seçtiğiniz tarihler
                    doğrultusunda<br />yetişkin yolcu, çocuk olarak<br />değişecek ve fiyatlandırmayı<br />güncelleyecektir.
                </div>
                <div
                    class=" cursor-pointer text-center text-black text-base font-medium font-display mb-10 px-11 py-4 bg-slate-100 w-[222px] rounded-lg mx-auto">
                    Değişikliği Onayla
                </div>
                <div class=" cursor-pointer text-center text-black text-base font-medium font-display mb-10">Kaydetme, geri
                    al.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconPersonSimpleRun from '../icons/IconPersonSimpleRun.vue';
import IconPersonSimple from '../icons/IconPersonSimple.vue'
</script>