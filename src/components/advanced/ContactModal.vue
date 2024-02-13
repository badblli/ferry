<template>
    <div id="hs-vertically-centered-modal"
        class="hs-overlay w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none items-center justify-center flex">
        <div
            class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[558px] w-[567px] flex items-center">
            <div class="w-full h-full flex flex-col bg-white border shadow-sm rounded-xl justify-between">
                <div class="p-4 overflow-y-aufto">
                    <div class="flex flex-row justify-center mt-[50px]">
                        <div class="w-[95px] h-[95px] bg-slate-200 rounded-full flex justify-center items-center mr-10">
                            <IconEnvelope />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                                Mail ile İletişim
                            </p>
                            <p class="w-[293px] text-black text-base font-normal font-['Plus Jakarta Sans'] mt-4">
                                Bizimle mail üzerinden iletişime geçin, <br />
                                dakikalar çerisinde cevap verelim.
                            </p>
                            <button
                                class="w-[166px] h-[53px] bg-slate-200 rounded-lg border mt-7 text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                E-mail Gönder
                            </button>
                        </div>
                    </div>
                </div>
                <hr class="border">
                <div class="p-4 overflow-y-auto mb-8">
                    <div class="flex flex-row justify-center">
                        <div class="w-[95px] h-[95px] bg-red-100 rounded-full flex justify-center items-center mr-10">
                            <IconWhatsapp />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                                Whatsapp ile İletişim
                            </p>
                            <p class="w-[293px] text-black text-base font-normal font-['Plus Jakarta Sans'] mt-4">
                                Bizimle whatsapp üzerinden iletişime geçin, <br />
                                dakikalar çerisinde cevap verelim.
                            </p>
                            <button
                                class="w-[166px] h-[53px] bg-slate-200 rounded-lg border mt-7 text-center text-black text-base font-semibold font-['Plus Jakarta Sans']">
                                Mesaj At
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconWhatsapp from '../icons/IconWhatsapp.vue';
import IconEnvelope from '../icons/IconEnvelope.vue'
</script>