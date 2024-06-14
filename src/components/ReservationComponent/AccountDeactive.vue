<template>
    <div className="flex flex-col">
        <div className="items-center">
            <div
                className="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                <div className="ml-[46px]">
                    <div className="flex justify-center items-center">
                        <div>
                            <h2 className="mb-1 text-black text-base font-medium font-display">
                                Hesabımı Sil
                            </h2>
                            <div class="text-zinc-600 text-base font-normal font-display tracking-tight">
                                You can deactive your account permanantly.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        class="text-center text-base text-red-500 font-bold font-text leading-normal bg-red-100 hover:bg-red-200 transition ease-in-out delay-100 w-[211px] h-14 px-8 py-4 mr-5 rounded-md justify-center items-center gap-2.5 inline-flex cursor-pointer"
                        type="button" data-hs-overlay="#hs-medium-modal-deactive">
                        Şimdi Hesabımı Sil</button>
                    <div id="hs-medium-modal-deactive"
                        class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                        <div
                            class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                            <div
                                class="  h-[82-79px] flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                                <div class="text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                                    <h2 class="block text-2xl font-bold text-gray-800 text-center mt-10 mb-[83px]">Hesap
                                        Silme</h2>
                                </div>
                                <div>
                                    <!-- Form -->
                                    <form class="flex justify-center items-center">
                                        <div class="grid gap-y-4 my-auto justify-between">
                                            <!-- Form Group -->
                                            <p
                                                class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] ml-[50px] mb-[30px]">
                                                Hesabını Silme Durumunda ;</p>
                                            <p v-for="(item, index) in messages" :key="index"
                                                class="text-black text-base font-normal font-['Plus Jakarta Sans'] mb-[70px] ml-[50px] [&>*:nth-last-child(1)]:m-0">
                                                {{ item }}
                                            </p>
                                            <button type="submit"
                                                class="m-auto w-[398px] h-[62px] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                                                <div
                                                    class="text-center text-white text-base font-bold font-text leading-normal">
                                                    Hesabımı kalıcı olarak sil
                                                </div>
                                            </button>
                                        </div>
                                    </form>
                                    <div
                                        class="text-center text-black text-xl font-semibold font-['Plus Jakarta Sans'] mt-[23px] mb-[23px] cursor-pointer">
                                        Vazgeç, silme.
                                    </div>
                                    <!-- End Form -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div id="hs-custom-backdrop-modal"
            class="hs-overlay hs-overlay-backdrop-open:bg-red-200/50 hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
            <div
                class="hs-overlay-open:mt-7 w-[600px] hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div class="  h-[629px] flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                    <div class="text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                        <h2 class="text-center text-black text-xl font-semibold font-['Plus Jakarta Sans'] mt-10 mb-[83px]">
                            Delete Account Component will be here!</h2>
                    </div>
                    <div>
                        <!-- Form -->
                        <form class="flex justify-center items-center">
                            <div class="grid gap-y-4 my-auto justify-between items-center w-[398px]">
                                <div>
                                    <div class="relative">
                                        <div
                                            class="flex items-center border-b border-gray-200 text-black text-2xl font-semibold font-['Plus Jakarta Sans']">
                                            Content will be here!
                                        </div>
                                    </div>
                                </div>
                                <button type="submit"
                                    class="m-auto w-[398px] h-[62px] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                    <div class="text-center text-white text-base font-bold font-text leading-normal">
                                        Giriş Yap
                                    </div>
                                </button>
                            </div>
                        </form>
                        <!-- End Form -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const messages = ref([
    "Yunan adalarına indirimli fiyata feribot bileti alma",
    "Samosa özel paket turlardan yararlanma",
    "Eşssiz yunan koylarına seyahat etme",
    "gibi fırsatlardan yararlanamayacaksınız. Yine de silmek isterseniz altta yer alan buton ile hesabınızı kalıcı olarak silebileceksiniz."
]);

</script>

<style></style>