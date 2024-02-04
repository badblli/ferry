<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[145px] bg-slate-200 flex flex-col justify-center items-center">
            <div class="relative w-full lg:px-28 md:px-16 sm:px-8">
                <h1 class="text-black text-4xl font-medium font-display tracking-wide my-auto flex items-center">
                    İletişim
                </h1>
            </div>
        </div>
        <div className="w-full">
            <div class="w-full flex flex-col justify-center items-center">
                <div class="relative w-full lg:px-28 md:px-16 sm:px-8">
                    <div class="my-auto mt-[50px] flex flex-row justify-center flex-wrap">
                        <div
                            class="w-[400px] h-[179px] bg-white rounded-xl border border-neutral-200 flex items-center justify-between mr-5">
                            <div class="pl-7">
                                <div class="w-[77px] h-[77px] bg-slate-200 rounded-full flex justify-center items-center">
                                    <IconPhoneIncoming />
                                </div>
                            </div>
                            <div className="pl-[47px]">
                                <div class="w-[202px] text-black text-2xl font-semibold leading-[31.06px] pb-[22px]">
                                    Telefon ile iletişime geçin.
                                </div>
                                <div>
                                    <div
                                        class="w-[142px] h-[39px] rounded-lg border border-stone-300 flex items-center justify-center cursor-pointer">
                                        <div class="text-center items-center text-black text-base font-medium font-display">
                                            Hemen ara</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="w-[400px] h-[179px] bg-white rounded-xl border border-neutral-200 flex items-center justify-between mr-5">
                            <div class="pl-7">
                                <div class="w-[77px] h-[77px] bg-slate-200 rounded-full flex justify-center items-center">
                                    <IconWhatsapp />
                                </div>
                            </div>
                            <div className="pl-[47px]">
                                <div class="w-[202px] text-black text-2xl font-semibold  leading-[31.06px] pb-[22px]">
                                    Whatsapp ile iletişime geçin.
                                </div>
                                <div>
                                    <div
                                        class="w-[142px] h-[39px] rounded-lg border border-stone-300 flex items-center justify-center">
                                        <div
                                            class="text-center items-center text-black text-base font-medium font-display cursor-pointer">
                                            Tıkla Konuş</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="w-[400px] h-[179px] bg-white rounded-xl border border-neutral-200 flex items-center justify-between mr-5">
                            <div class="pl-7">
                                <div class="w-[77px] h-[77px] bg-slate-200 rounded-full flex justify-center items-center">
                                    <IconHouseSimple />
                                </div>
                            </div>
                            <div className="pl-[47px]">
                                <div class="w-[202px] text-black text-2xl font-semibold  leading-[31.06px] pb-[22px]">
                                    Doğrudan ofise gelerek.
                                </div>
                                <div>
                                    <div
                                        class="w-[142px] h-[39px] rounded-lg border border-stone-300 flex items-center justify-center">
                                        <div
                                            class="text-center items-center text-black text-base font-medium font-display cursor-pointer">
                                            Adres Tarifi Al</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" flex mt-32 md:mt-20 sm:mt-8 lg:px-24 md:px-16 sm:px-8 justify-center mb-24">
                        <div class="flex justify-center">
                            <div class="max-w-[409px] text-black text-2xl font-medium  leading-[37.06px] mr-24">
                                Tüm sorularınız, ve işlemleriniz için bizimle iletişime geçin, en kısa <br />sürede size
                                doğru
                                çözüm için <br /> yardım edelim.
                            </div>
                            <div class="w-96">
                                <form class="w-full max-w-sm">
                                    <div class="flex items-center border-b border-gray-200 mb-5">
                                        <input
                                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                            type="text" placeholder="İsim Soyisim *" aria-label="Full name">
                                        <div class="flex-shrink-0 bg-white text-sm text-white flex justify-center items-center  w-[50px] h-[50px]"
                                            type="button">
                                        </div>
                                    </div>
                                    <div class="flex items-center border-b border-gray-200 mb-5">
                                        <input
                                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:border-white"
                                            type="text" placeholder="E-Posta Adresiniz" aria-label="Full name" />
                                        <div class="flex-shrink-0 bg-white text-sm text-white flex justify-center items-center  w-[50px] h-[50px]"
                                            type="button">
                                        </div>
                                    </div>
                                    <div class="flex items-center border-b border-gray-200 mb-8">
                                        <input
                                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-white"
                                            type="text" placeholder="Konu,sorunu ya da mesajınızı yazın.."
                                            aria-label="Full name" />
                                        <div
                                            class="flex justify-center items-center  w-[72px] h-[60px]  rounded-full text-black text-[10px] font-bold  leading-[10.21px] tracking-wide">
                                            MAX 200
                                        </div>
                                    </div>
                                    <div class="flex flex-row justify-end">
                                        <button
                                            class="px-8 text-center text-black text-base font-medium font-displaytracking-tight">Temizle</button>
                                        <button
                                            class="w-[222px] h-[53px] bg-slate-200 rounded-lg border text-center text-black text-base font-medium font-display tracking-tight">Mesajı
                                            Gönder</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconPhoneIncoming from "../components/icons/IconPhoneIncoming.vue";
import IconWhatsapp from "../components/icons/IconWhatsapp.vue";
import IconHouseSimple from "@/components/icons/IconHouseSimple.vue";
</script>
  
<style scoped></style>